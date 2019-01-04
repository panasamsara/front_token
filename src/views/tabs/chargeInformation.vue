<template>
    <div>
        <Collapse value="cost">
            <Panel name="cost"
                   :hide-arrow="true">
                <strong>
                    下户费
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            下户费
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(info.cost.feeText || '-')+'元'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            收费时间
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{info.cost.chargeTime || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            确认时间
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{info.cost.createTime || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            收费方式
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{info.cost.chargeType || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            收费账户
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{info.cost.chargeAccountText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            确认人
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{info.cost.createByName || '-'}}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label v-if="info.cost.feeFile">
                                <a v-for="(item, index) in info.cost.feeFilePath.split(',')"
                                   :href="item"
                                   :style="{display:index===0 ? 'inline' : 'none'}"
                                   class="cfancy1"
                                   data-fancybox-group="gallery">
                                    查看凭证
                                </a>
                            </label>
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <div v-if="info.estimate.chargeFlag==='1'">
            <br>
            <Collapse value="estimate">
                <Panel name="estimate"
                       :hide-arrow="true">
                    <strong>
                        预估单费
                    </strong>
                    <div slot="content">
                        <Row>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                预估单费
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{(info.estimate.feeText || '-')+'元'}}
                            </Col>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                收费时间
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.estimate.chargeTime || '-'}}
                            </Col>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                确认时间
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.estimate.createTime || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                收费方式
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.estimate.chargeType || '-'}}
                            </Col>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                收费账户
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.estimate.chargeAccountText || '-'}}
                            </Col>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                评估机构
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.evalAgency || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="3"
                                 class="text-right grey-light-color">
                                确认人
                            </Col>
                            <Col span="5"
                                 class="pl10">
                                {{info.estimate.createByName || '-'}}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label v-if="info.estimate.feeFile">
                                    <a v-for="(item,index) in info.estimate.feeFilePath.split(',')"
                                       :href="item"
                                       :style="{display:index===0 ? 'inline' : 'none'}"
                                       class="cfancy2"
                                       data-fancybox-group="gallery">
                                        查看凭证
                                    </a>
                                </label>
                            </Col>
                        </Row>
                    </div>
                </Panel>
            </Collapse>
        </div>
        <br>
        <Collapse value="policy"
                  v-if="info.cost.chargeFlag==='0'">
            <Panel name="policy"
                   :hide-arrow="true">
                <strong>
                    优惠政策
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            下户费未收取原因
                        </Col>
                        <Col span="21"
                             class="pl10">
                            {{info.cost.favourText || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/chargeInformation.js"></script>