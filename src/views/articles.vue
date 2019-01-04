<template>
    <div>
        <div @keyup.enter="changePage(1)">
            <Form inline @keydown.native.enter.prevent="changePage(1)">
                <!-- <FormItem>
                    <Tooltip placement="top" transfer
                             content="更多筛选">
                        <Icon type="md-funnel"
                              size="22"
                              @click="more=!more"></Icon>
                    </Tooltip>

                </FormItem> -->
                <FormItem>
                    <Input type="text"
                           style="width: 300px"
                           clearable
                           v-model="search.keyword"
                           placeholder="关键字"/>
                </FormItem>
                <FormItem>
                    <Button @click="changePage(1)"
                            icon="ios-search">
                        搜索
                    </Button>
                </FormItem>
                <Button 
                    type="primary" 
                    icon="md-add" 
                    class="fr"
                    @click="openModal('create', null)">创建</Button>
            </Form>
            <!-- <Form v-if="more"
                  :label-width="60"
                  inline>
                <FormItem label="状态">
                    <Select v-model="search.status"
                            style="width: 180px">
                        <Option v-for="item in status"
                                :key="item.id"
                                :value="item.id">
                            {{item.text}}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="处理人">
                    <Select v-model="search.handler"
                            style="width: 180px">
                        <Option v-for="item in handler"
                                :key="item.id"
                                :value="item.id">
                            {{item.text}}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="申请人">
                    <Select v-model="search.applicant"
                            style="width: 180px">
                        <Option v-for="item in applicant"
                                :key="item.id"
                                :value="item.id">
                            {{item.text}}
                        </Option>
                    </Select>
                </FormItem>
                <br>
                <FormItem label="申请时间">
                    <Row>
                        <Col span="11">
                            <DatePicker type="datetime"
                                        placeholder="开始时间"
                                        :options="start"
                                        v-model="search.createTimeStart"></DatePicker>
                        </Col>
                        <Col span="2"
                             class="text-center">
                            -
                        </Col>
                        <Col span="11">
                            <DatePicker type="datetime"
                                        placeholder="结束时间"
                                        :options="end"
                                        v-model="search.createTimeEnd"></DatePicker>

                        </Col>
                    </Row>
                </FormItem>
            </Form> -->
        </div>
        <Table :loading="loading"
               :columns="columns"
               :data="listData"></Table>
        <br>
        <Page :total="search.total"
              :current="search.pageNum"
              :page-size="search.pageSize"
              show-elevator
              :show-total='true'
              @on-change="changePage"
              class="fr"/>
        <div class="clear"></div>
        <Modal
            v-model="showModal"
            title="添加渠道"
            :width="840"
             @on-cancel="closeModal"
            >
            <div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :width="400" :label-width="130" >
                    <Row>
                        <Col span="20">
                            <FormItem label="文章标题" prop="title">
                                <Input v-model="formValidate.title" placeholder="请输入标题"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="20">
                            <FormItem label="文章内容" prop="content">
                                <Input v-model="formValidate.content" 
                                type="textarea" :autosize="{minRows: 3,maxRows: 7}"
                                placeholder="请填写文章内容"/>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div slot="footer">
                <Button @click="closeModal()">取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
            </div>   
        </Modal>
    </div>
</template>
<script src="../components/articles.js"></script>