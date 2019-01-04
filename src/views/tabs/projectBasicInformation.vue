<template>
    <div>
        <br>   
        <div >
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    项目负责人:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.applyUserName ||'-'}}
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    项目来源:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.channalName ||'-'}}
                </Col>
                
            </Row>
            <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    申请部门:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.applyDeptName ||'-'}}
                </Col>
                
            </Row>
            <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    申请时间:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.applyDate ||'-'}}
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    修改时间:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.updateTime ||'-'}}
                </Col>
                
            </Row>
            <Divider></Divider>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    客户名称:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.client? model.client.clientName :'-'}}
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    客户证件号码:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.client? model.client.certificatesNumber :'-'}}
                </Col>
                
            </Row>
            <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    申请金额:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.initLoanAmount | NumFormat }}元
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    贷款期限:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.initLoanPeriod ||'-'}}<span v-if="model.initLoanPeriod">个月</span>
                </Col>
                
            </Row>
                <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    下户费:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.interviewFee || NumFormat}}元
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    还款方式:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.initRepayMethodText ||'-'}}
                </Col>
                
            </Row>
             <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    房产地址:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.pawnList!== undefined && model.pawnList!== null && model.pawnList.length>0 
                    ? model.pawnList[0].province + model.pawnList[0].city + model.pawnList[0].area + model.pawnList[0].detailedAddress 
                    :'-'}}
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    建筑面积:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.pawnList!== undefined 
                    && model.pawnList!== null 
                    && model.pawnList.length>0 
                    && model.pawnList[0].buidingAcreage ? model.pawnList[0].buidingAcreage :'-'}}平米
                </Col>
                
            </Row>
             <br>
            <Row>
                <Col span="3"
                        class="text-right grey-light-color">
                    初评总价:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.firstEvalue | NumFormat}}元
                </Col>
                <Col span="3"
                        class="text-right grey-light-color">
                    终评总价:
                </Col>
                <Col span="9"
                        class="pl10">
                    {{model.evalResult | NumFormat}}元
                </Col>
            </Row>
        </div>
    </div>
</template>

<script src="../../components/tabs/projectBasicInformation.js"></script>