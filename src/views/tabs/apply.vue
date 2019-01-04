<template>
    <div>
        <Collapse value="apply">
            <Panel name="apply"
                   :hide-arrow="true">
                <strong>
                    申请基本信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            申请人
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.applyUserName || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            申请时间
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.applyDate || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            申请部门
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.applyDeptName || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            申请产品
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.product_name.productName || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            推荐渠道
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.channalName+'('+model.recommendTypeText+')'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            客户姓名
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.client.clientName || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.client.certificatesTypeText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.client.certificatesNumber || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            借款金额
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(model.initLoanAmountText || '-') +'元'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            借款日期
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.initLoanDate || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            借款期限
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(model.initLoanPeriod || model.initLoanPeriod===0 ? model.initLoanPeriod : '-')+'个月'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            借款用途
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.loanUsage || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            还款方式
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.initRepayMethodText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            其他还款说明
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{model.initRepayRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <mortgage :step="step"
                  :model="model"></mortgage>
    </div>
</template>

<script src="../../components/tabs/apply.js"></script>