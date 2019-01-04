<template>
    <div>
        <FormItem>
            <label slot="label"
                   class="grey-light-color">
                工作量状况
            </label>
            <Table :data="mortgagesDataList"
                   :columns="mortgagesColumns"></Table>
        </FormItem>
        <Row>
            <Col span="8">
                <FormItem prop='pawnCommissionerId'>
                    <label slot="label"
                           class="grey-light-color">
                        分配给
                    </label>
                    <Select placeholder="选择分配人 | 必填"
                            v-model="hmLoanApplyParam.pawnCommissionerId"
                            transfer
                            clearabel>
                        <Option v-for="item in userList"
                                :value="item.userId"
                                :key="item.userId">
                            {{item.userName}}
                        </Option>         
                    </Select>
                </FormItem>
            </Col>
        </Row>
        <Modal
            v-model="showModal"
            title="查看里程"
            :width="720"
             @on-cancel="closeModal()"
            >
            <div>
                 <div id="mortgagesCharts" style="width: 680px; height: 400px"></div>
            </div>
            <div slot="footer">
                <Button size="large" @click="closeModal()">取消</Button>
                <Button type="primary" size="large" @click="closeModal()">确定</Button>
            </div>   
        </Modal>

    </div>
</template>

<script src="../../components/tabs/mortgages.js"></script>