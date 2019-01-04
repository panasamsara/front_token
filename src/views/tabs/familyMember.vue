<template>
    <div>
        <Collapse value="model" class="mb16"
                  v-if="maritalStatus=='0' || maritalStatus=='4' || maritalStatus=='5'">
            <Panel name="model"
                   :hide-arrow="true">
                <strong>
                    配偶基本信息
                </strong>
                <div slot="content" v-if="!model">
                    暂无配偶信息
                </div>
                <div slot="content" v-if="model">
                   <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            姓名
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.clientName ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            性别
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.sexText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件类型
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.certificatesTypeText ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            证件号码
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.certificatesNumber ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            年龄
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.age ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            婚姻状况
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.maritalStatusText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件地址
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.certificatesAddress ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            最高学历
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.education ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            手机号码
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.phoneNumber ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            固定电话
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.companyPhone ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            居住地址
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.nowLiveAddress ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            工作单位
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.companyName ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            单位地址
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{model.companyAddress ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            现单位工作年限
                        </Col>
                        <Col span="6"
                             class="pl10">
                            <!-- {{model.workYear ||'-'}} -->
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            单位性质/劳动关系
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.workSituation ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            部门
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.companyName ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            技术职称
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.jobText ||'-'}}
                        </Col>
                        <Col span="2"
                             class="text-right grey-light-color">
                            职务
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.jobText ||'-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <Collapse value="familyInfo">
            <Panel name="familyInfo"
                   :hide-arrow="true">
                <strong>
                    家庭基本信息
                </strong>
                <div slot="content">
                    <div v-if="!haveFamilies">暂无家庭成员信息</div>
                   <Table  v-if="haveFamilies" border ref="selection" :columns="columns" :data="familyMember"></Table>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/familyMember.js"></script>