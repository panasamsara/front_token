<template>
    <div>
        <Collapse value="borrowerInfo">
            <Panel
                    name="borrowerInfo"
                    :hide-arrow="true"
            >
                <strong>
                    借款人信息
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label
                                class="grey-light-color font12"
                                slot="title"
                        >
                            个人信息
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    客户编号
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.innerId||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    客户姓名
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.clientName||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    客户性别
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.sex ? (borrowerInfoModel.sex==0 ?'男':'女') : '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    出生日期
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.birthday||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    年龄
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.age||'-'}}岁
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    曾用名
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.oldName||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    证件类型
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.certificatesType ==0 ? '身份证':'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    证件号码
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.certificatesNumber||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    婚姻状况
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.maritalStatusText||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    子女情况
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.childrenText||'-'}}个
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    最高学历
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.educationText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    客户来源
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{customerSource.channalName+'('+customerSource.recommendTypeText+')'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    个人年收入
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.income||'-'}}元
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    家庭年收入
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.familyIncome||'-'}}元
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                class="grey-light-color font12"
                                slot="title"
                        >
                            职业
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    工作情况
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.workSituationText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    企业性质
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.businessNatureText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    单位名称
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.companyName||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    职业
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.occupationText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    企业规模
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.enterpriseScaleText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    行业类别
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.industryTypeText||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    职务
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.jobText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    单位地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.companyAddress||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                class="grey-light-color font12"
                                slot="title"
                        >
                            地理&联系
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    手机
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.phoneNumber||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    居住情况
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.liveAddressText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    现居住地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.nowLiveAddress||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    邮政编码
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.postalCode||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    通信地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.mailAddress||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    证件地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.certificatesAddress||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    户籍地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.permanentAddress||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse class="mb16"
                  value="mateInfo"
                  v-if="borrowerInfoModel.maritalStatus==='0' || borrowerInfoModel.maritalStatus==='4' || borrowerInfoModel.maritalStatus==='5'">
            <Panel
                    name="mateInfo"
                    :hide-arrow="true"
            >
                <strong>
                    配偶信息
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            个人信息
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    客户姓名
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.clientName||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    性别
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.sex ? (mateInfoModel.sex==0 ?'男':'女') : '-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    曾用名
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.oldName||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    出生日期
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.birthday||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    年龄
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.age||'-'}}岁
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    证件类型
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.certificatesType ==0 ? '身份证':'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    证件号码
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.certificatesNumber||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    现居住地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.nowLiveAddress||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    最高学历
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.educationText||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    年收入
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.income||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    户籍地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.permanentAddress||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            职业
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    工作情况
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.workSituationText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    企业性质
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.businessNatureText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    单位名称
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.companyName||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    职业
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.occupationText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    企业规模
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.enterpriseScaleText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    行业类别
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.industryTypeText||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    职务
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.jobText||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    单位地址
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.companyAddress||'-'}}
                                </Col>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    单位电话
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.companyPhone||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            地理&联系
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="text-right grey-light-color"
                                >
                                    手机
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{mateInfoModel.phoneNumber||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <Collapse value="liabilities">
            <Panel
                    name="liabilities"
                    :hide-arrow="true"
            >
                <strong>
                    家庭负债情况
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            资产
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    房产
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareHouse || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    车辆
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareCar || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    储蓄存款
                                </Col>
                                <Col
                                        span="6"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareSaving | NumFormat}}元
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    投资类
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareInvest || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    其他资产
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareOtherAsset || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            负债
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    征信内负债
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareDebt | NumFormat}}元
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="2"
                                        class="grey-light-color text-right"
                                >
                                    其他负债
                                </Col>
                                <Col
                                        span="22"
                                        class="pl10"
                                >
                                    {{borrowerInfoModel.shareOtherDebt | NumFormat}}元
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            备注
                        </label>
                        <Row class="font12">
                            <Col
                                    span="2"
                                    class="grey-light-color text-right"
                            >
                                备注
                            </Col>
                            <Col
                                    span="22"
                                    class="pl10"
                            >
                                {{borrowerInfoModel.shareMemo || '-'}}
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="familyInfo">
            <Panel
                    name="familyInfo"
                    :hide-arrow="true"
            >
                <strong>
                    家庭成员
                </strong>
                <div slot="content">
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            家庭成员列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="familyColumns"
                            :data="familyItems"
                    ></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="guarantorList">
            <Panel
                    name="guarantorList"
                    :hide-arrow="true"
            >
                <strong>
                    担保人
                </strong>
                <div slot="content">
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            担保方(自然人)列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="guarantorColumns1"
                            :data="guarantorItems1"
                    ></Table>
                    <br>
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            担保方(法人)列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="guarantorColumns0"
                            :data="guarantorItems0"
                    ></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="shareLoanHolderList">
            <Panel
                    name="shareLoanHolderList"
                    :hide-arrow="true"
            >
                <strong>
                    共借人
                </strong>
                <div slot="content">
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            共借方(自然人)列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="shareLoanHolderColumns1"
                            :data="shareLoanHolderItems1"
                    ></Table>
                    <br>
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            共借方(法人)列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="shareLoanHolderColumns0"
                            :data="shareLoanHolderItems0"
                    ></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="practicalList">
            <Panel
                    name="practicalList"
                    :hide-arrow="true"
            >
                <strong>
                    实际用款人
                </strong>
                <div slot="content">
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            实际用款人列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="practicalColumns"
                            :data="practicalItems"
                    ></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="emergencyList">
            <Panel
                    name="emergencyList"
                    :hide-arrow="true"
            >
                <strong>
                    紧急联系人
                </strong>
                <div slot="content">
                    <Row>
                        <Col
                                span="24"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            紧急联系人列表
                        </Col>
                    </Row>
                    <Table
                            border
                            ref="selection"
                            :columns="emergencyColumns"
                            :data="shareLoanHolderItems2"
                    ></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="creditInformation">
            <Panel
                    name="creditInformation"
                    :hide-arrow="true"
            >
                <Row>
                    <Col span="20">
                        <strong>
                            征信信息
                        </strong>
                    </Col>
                </Row>
                <div slot="content">
                    <strong>客户征信信息 ({{borrowerInfoModel.clientName + ' ' +borrowerInfoModel.id}})</strong>
                    <Card
                            dis-hover
                            class="mt5"
                    >
                        <label
                                class="grey-light-color font12"
                                slot="title"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            {{'个人征信查询信息'+'('+(creditInfo.queryDate || '-')+')'}}
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    征信报告查询日期
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    {{creditInfo.queryDate||'-'}}
                                </Col>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    征信情况
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    {{creditInfo.creditTypeText||'-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    逾期情况(信用卡+贷款)
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    连{{creditInfo.continuousOverdue||'-'}}累{{creditInfo.accumulativeOverdue||'-'}}
                                </Col>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    近半年查询次数(有效查询)
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    {{creditInfo.latestQueryNum||'-'}}次
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    征信贷款总计
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    {{creditInfo.totalLoanNum| NumFormat}}元
                                </Col>
                                <Col
                                        span="4"
                                        class="text-right grey-light-color"
                                >
                                    征信评价
                                </Col>
                                <Col
                                        span="8"
                                        class="pl10"
                                >
                                    {{creditInfo.creditDesc||'-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card
                            dis-hover
                            class="mt5"
                    >
                        <label
                                class="grey-light-color font12"
                                slot="title"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            {{'社会信息查询'+'('+(customerSource.socialSearchDate || '-')+')'}}
                        </label>
                            <Table
                                    border
                                    ref="selection"
                                    :columns="creditSocietyColumns"
                                    :data="creditSocietyItems"
                            ></Table>
                            <br>
                        <Row>
                            <Col span="2"
                                 class="font12 grey-light-color text-right">
                                备注
                            </Col>
                            <Col span="22">
                                {{socialInfoRemark||'-'}}
                            </Col>
                        </Row>
                    </Card>
                    <div class="mt16"
                         v-if="borrowerInfoModel.maritalStatus==='0' || borrowerInfoModel.maritalStatus==='4' || borrowerInfoModel.maritalStatus==='5'">
                        <strong>配偶征信信息 ({{mateInfoModel.clientName + ' ' + mateInfoModel.id}})</strong>
                        <Card
                                dis-hover
                                class="mt5"
                        >
                            <label
                                    class="grey-light-color font12"
                                    slot="title"
                            >
                                <Icon
                                        type="md-list"
                                        size="16"
                                />
                                {{'个人征信查询信息'+'('+(mateCreditInfo.queryDate || '-')+')'}}
                            </label>
                            <div class="font12">
                                <Row>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        征信报告查询日期
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.queryDate||'-'}}
                                    </Col>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        征信情况
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.creditTypeText||'-'}}
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        逾期情况(信用卡+贷款)
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.accumulativeOverdue||'-'}}
                                    </Col>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        近半年查询次数(有效查询)
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.latestQueryNum||'-'}}次
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        征信贷款总计
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.totalLoanNum| NumFormat}}元
                                    </Col>
                                    <Col
                                            span="4"
                                            class="text-right grey-light-color"
                                    >
                                        征信评价
                                    </Col>
                                    <Col
                                            span="8"
                                            class="pl10"
                                    >
                                        {{mateCreditInfo.creditDesc||'-'}}
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="interview">
            <Panel
                    name="interview"
                    :hide-arrow="true"
            >
                <strong>
                    面谈情况
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            现场面谈人员情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    中介人员及人数
                                </Col>
                                <Col
                                        span="9"
                                        class="pl10"
                                >
                                    {{FacetalkData.agencyNum || '-'}}
                                </Col>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    客户人数
                                </Col>
                                <Col
                                        span="9"
                                        class="pl10"
                                >
                                    {{FacetalkData.clientNum || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    我司人员构成
                                </Col>
                                <Col
                                        span="9"
                                        class="pl10"
                                >
                                    {{FacetalkData.staffCompositionText || '-'}}
                                </Col>
                                <Col
                                        span="3"
                                        v-if="FacetalkData.staffComposition && FacetalkData.staffCompositionText.indexOf('其他')>=0"
                                        class="grey-light-color text-right"
                                >
                                    其他
                                </Col>
                                <Col
                                        span="9"
                                        v-if="FacetalkData.staffComposition && FacetalkData.staffCompositionText.indexOf('其他')>=0"
                                        class="pl10"
                                >
                                    {{FacetalkData.otherStaff || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    特殊人群情况
                                </Col>
                                <Col
                                        span="9"
                                        class="pl10"
                                >
                                    {{FacetalkData.specialMan || '-'}}
                                </Col>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    实际面谈地点
                                </Col>
                                <Col
                                        span="9"
                                        class="pl10"
                                >
                                    {{FacetalkData.talkPlace || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            面谈时各方人员的表现情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="7"
                                        class="grey-light-color text-right"
                                >
                                    客户本人对面谈的配合度及回答问题的流利程度
                                </Col>
                                <Col
                                        span="5"
                                        class="pl10"
                                >
                                    {{FacetalkData.fluencyText || '-'}}
                                </Col>
                                <Col
                                        span="7"
                                        class="grey-light-color text-right"
                                >
                                    客户对金额及费用的纠结情况
                                </Col>
                                <Col
                                        span="5"
                                        class="pl10"
                                >
                                    {{FacetalkData.feeEntangledText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col
                                        span="7"
                                        class="grey-light-color text-right"
                                >
                                    客户情绪如何
                                </Col>
                                <Col
                                        span="5"
                                        class="pl10"
                                >
                                    {{FacetalkData.emotion || '-'}}
                                </Col>
                                <Col
                                        span="7"
                                        class="grey-light-color text-right"
                                >
                                    其他人员抢答情况，干预后继续抢答吗
                                </Col>
                                <Col
                                        span="5"
                                        class="pl10"
                                >
                                    {{FacetalkData.raceDesc || '-'}}
                                </Col>
                            </Row>
                        </div>

                    </Card>
                    <br>
                    <Card dis-hover>
                        <label
                                slot="title"
                                class="grey-light-color font12"
                        >
                            <Icon
                                    type="md-list"
                                    size="16"
                            />
                            四证情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    面谈是否见四证原件
                                </Col>
                                <Col
                                        span="5"
                                        class="pl10"
                                >
                                    {{FacetalkData.certFlagText || '-'}}
                                </Col>
                                <Col
                                        span="3"
                                        v-if="FacetalkData.certFlag==='1'"
                                        class="grey-light-color text-right"
                                >
                                    四证是谁拿出来的
                                </Col>
                                <Col
                                        span="5"
                                        v-if="FacetalkData.certFlag==='1'"
                                        class="pl10"
                                >
                                    {{FacetalkData.certOwner || '-'}}
                                </Col>
                            </Row>
                            <Row
                                    class="mt16"
                                    v-if="FacetalkData.certFlag==='0'"
                            >
                                <Col
                                        span="3"
                                        class="grey-light-color text-right"
                                >
                                    未见四证的解释
                                </Col>
                                <Col
                                        span="21"
                                        class="pl10"
                                >
                                    {{FacetalkData.reason || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/borrowerInfo.js"></script>