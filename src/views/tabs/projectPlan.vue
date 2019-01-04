<template>
    <div>
        <h3 style="font-style:italic">以下展示最近一次价值评估信息。</h3>
        <Card dis-hover>
            <label
                    class="grey-light-color font12"
                    slot="title"
            >
                初评信息
            </label>
            <Row class="mb16 font12"
                 v-if="item.agencyText"
                 v-for="(item,index) in iOrgValue"
                 :key="index">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}:
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        v-if="item.preEvalFile"
                >
                    <a
                            :href="item.preEvalFilePath"
                            target="_blank"
                    >预估单</a>
                </Col>
                <Col
                        span="3"
                        v-if="item.reportFile"
                >
                    <a
                            :href="item.reportFilePath"
                            target="_blank"
                    >评估报告</a>
                </Col>
            </Row>
            <Row class="font12 mb16"
                 v-if="item.agencyText"
                 v-for="(item,index) in iAgencyValue"
                 :key="index">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        v-if="item.url"
                >
                    <a :href="/^http(s)?:\/\//.test(item.url) ? item.url : 'http://'+item.url"
                       target="_blank"
                    >
                        {{item.url}}
                    </a>
                </Col>
            </Row>
            <Row class="font12 mb16"
                 v-for="(item,index) in iNetValue"
                 :key="index"
                 v-if="item.agencyText">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        v-if="item.url"
                >
                    <a :href="/^http(s)?:\/\//.test(item.url) ? item.url : 'http://'+item.url"
                       target="_blank"
                    >
                        {{item.url}}
                    </a>
                </Col>
            </Row>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    初评结论
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{projectInfo.firstEvalue | NumFormat}}元
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    初评意见
                </Col>
                <Col
                        span="21"
                        class="pl10"
                >
                    {{projectInfo.firstEvalDesc||'-'}}
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    初评人
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{projectInfo.firstEvalUserName||'-'}}
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    初评提交时间
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{projectInfo.firstEvalDate}}
                </Col>
            </Row>
        </Card>
        <br>
        <Card dis-hover>
            <label
                    class="grey-light-color font12"
                    slot="title"
            >
                终评信息
            </label>
            <Row class="font12 mb16"
                 v-if="item.agencyText"
                 v-for="(item,index) in fAgencyValue"
                 :key="index">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}:
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                        v-if="item.tel"
                >
                    中介电话
                </Col>
                <Col
                        span="5"
                        class="pl10"
                        v-if="item.tel"
                >
                    {{item.tel}}
                </Col>
            </Row>
            <Row class="font12 mb16"
                 v-if="item.agencyText"
                 v-for="(item,index) in fNetValue"
                 :key="index">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}:
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        v-if="item.url"
                        class="text-right grey-light-color"
                >
                    <a :href="/^http(s)?:\/\//.test(item.url) ? item.url : 'http://'+item.url"
                       target="_blank"
                    >
                        {{item.url}}
                    </a>
                </Col>
            </Row>
            <Row v-if="item.agencyText"
                 class="font12 mb16"
                 v-for="(item,index) in fOrgValue"
                 :key="index">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    {{(item.agencyText || '-')+'估价'}}
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{item.evalVal | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                        v-if="item.preEvalFile"
                >
                    <a
                            :href="item.preEvalFilePath"
                            target="_blank"
                    >预估单</a>
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                        v-if="item.reportFile"
                >
                    <a
                            :href="item.reportFilePath"
                            target="_blank"
                    >评估报告</a>
                </Col>
            </Row>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    终评结论
                </Col>
                <Col
                        span="5"
                        class="pl10"
                >
                    {{projectInfo.evalResult | NumFormat}}元
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    终评意见
                </Col>
                <Col
                        span="21"
                        class="pl10"
                >
                    {{projectInfo.finalEvalDesc || '-'}}
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    终评人
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{projectInfo.finalEvalUserName ||'-'}}
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    终评提交时间
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{projectInfo.finalEvalDate}}
                </Col>
            </Row>
        </Card>
        <br>
        <Card dis-hover>
            <label
                    class="grey-light-color font12"
                    slot="title"
            >
                决议
            </label>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    借款主体
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.mainLoanClient ||'-'}}
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    共同借款人
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.shareLoanHolderText ||'-'}}
                </Col>

            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    贷款额度
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.loanAmount | NumFormat}}元
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    贷款期限
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.loanPeriod ||'-'}}个月
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    还款方式
                </Col>
                <Col
                        span="21"
                        class="pl10"
                >
                    {{model.repaymentMethodText ||'-'}}
                </Col>

            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    其他还款方式说明
                </Col>
                <Col
                        span="21"
                        class="pl10"
                >
                    {{model.repaymentRemark ||'-'}}
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    上报利息(按月)
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.reportRate ||'-'}}%
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    上报费率(按月)
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.reportFee ||'-'}}%
                </Col>
            </Row>
            <br>
            <Row class="font12">
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    批复利息(按月)
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.allowRate ||'-'}}%
                </Col>
                <Col
                        span="3"
                        class="text-right grey-light-color"
                >
                    批复费率(按月)
                </Col>
                <Col
                        span="9"
                        class="pl10"
                >
                    {{model.allowFee ||'-'}}%
                </Col>
            </Row>
        </Card>
    </div>
</template>

<script src="../../components/tabs/projectPlan.js"></script>