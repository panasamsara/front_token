<template>
    <div>
        <div >
            <Form inline @keydown.native.enter.prevent="changePage(1)">
                <!-- <FormItem>
                    <Tooltip content="更多筛选"
                             placement="top-start">
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
                           placeholder="关键字"></Input>
                </FormItem>
                <FormItem>
                    <Button @click="changePage(1)"
                            icon="ios-search">
                        搜索
                    </Button>
                </FormItem>
            </Form>
            <!-- <Form v-if="more"
                  :label-width="60"
                  inline>
                <FormItem label="状态">
                    <Select v-model="search.status"
                            style="width: 180px">
                        <Option v-for="item in status"
                                :value="item.id">
                            {{item.text}}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="处理人">
                    <Select v-model="search.handler"
                            style="width: 180px">
                        <Option v-for="item in handler"
                                :value="item.id">
                            {{item.text}}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem label="申请人">
                    <Select v-model="search.applicant"
                            style="width: 180px">
                        <Option v-for="item in applicant"
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
               :data="data"></Table>
        <br>
        <Page :total="search.total"
              :current="search.pageNum"
              :page-size="search.pageSize"
              show-elevator
              show-total
              @on-change="changePage"
              class="fr"/>
        <div class="clear"></div>
    </div>
</template>
<script src="../components/users.js"></script>