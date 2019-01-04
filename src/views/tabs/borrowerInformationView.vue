<template>
    <div id="content">
        <Collapse value="borrower">
            <Panel name="borrower"
                   :hide-arrow="true">
                <strong>
                    借款人信息
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            个人信息
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    客户编号
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.innerId || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    姓名
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.clientName || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    曾用名
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.oldName || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    性别
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.sexText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    出生日期
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.birthday || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    年龄
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{(model.client.age || model.client.age===0 ? model.client.age : '-')+'岁'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    证件类型
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.certificatesTypeText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    证件号
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.certificatesNumber || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    婚姻状况
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.maritalStatusText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    子女情况
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.childrenText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    最高学历
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.educationText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    客户来源
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.channalName+'('+model.recommendTypeText+')'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    个人年收入
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.personalIncomeText+'元'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    家庭年收入
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.householdIncomeText+'元'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            职业
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    工作情况
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.workSituationText || '-'}}
                                </Col>
                                <Col span="2"
                                     v-if="model.client.workSituation!=='3'"
                                     class="grey-light-color text-right">
                                    企业性质
                                </Col>
                                <Col span="6"
                                     v-if="model.client.workSituation!=='3'"
                                     class="pl10">
                                    {{model.client.businessNatureText || '-'}}
                                </Col>
                                <Col span="2"
                                     v-if="model.client.workSituation!=='3'"
                                     class="grey-light-color text-right">
                                    单位名称
                                </Col>
                                <Col span="6"
                                     v-if="model.client.workSituation!=='3'"
                                     class="pl10">
                                    {{model.client.companyName || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.client.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    职业
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.occupationText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    企业规模
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.enterpriseScaleText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    行业类别
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.industryTypeText || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.client.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    职务
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.jobText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    单位地址
                                </Col>
                                <Col span="14"
                                     class="pl10">
                                    {{model.client.companyAddress || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.client.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    单位电话
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.companyPhone || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            地理&联系
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    手机
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.phoneNumber || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    邮政编码
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.postalCode || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    居住情况
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.liveAddressText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    现居住地址
                                </Col>
                                <Col span="14"
                                     class="pl10">
                                    {{model.client.nowLiveAddress || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    与抵押物相同
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.sameAddressText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    通信地址
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.mailAddress || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    证件地址
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.certificatesAddress || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    户籍地址
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.permanentAddress || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <Collapse class="mt16"
                  value="spouse"
                  v-if="model.client.maritalStatus==='0' || model.client.maritalStatus==='4' || model.client.maritalStatus==='5'">
            <Panel name="spouse"
                   :hide-arrow="true">
                <strong>
                    配偶信息
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            个人信息
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    姓名
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.clientName || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    曾用名
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.oldName || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    性别
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.sexText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    出生日期
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.birthday || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    年龄
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{(model.spouse.age || model.spouse.age===0 ? model.spouse.age : '-')+'岁'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    证件类型
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.certificatesTypeText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    证件号
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.certificatesNumber || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    最高学历
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.educationText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    个人年收入
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.personalIncomeText+'元'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    现居住地址
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.spouse.nowLiveAddress || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    户籍地址
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.spouse.permanentAddress || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            职业
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    工作情况
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.workSituationText || '-'}}
                                </Col>
                                <Col span="2"
                                     v-if="model.spouse.workSituation!=='3'"
                                     class="grey-light-color text-right">
                                    企业性质
                                </Col>
                                <Col span="6"
                                     v-if="model.spouse.workSituation!=='3'"
                                     class="pl10">
                                    {{model.spouse.businessNatureText || '-'}}
                                </Col>
                                <Col span="2"
                                     v-if="model.spouse.workSituation!=='3'"
                                     class="grey-light-color text-right">
                                    单位名称
                                </Col>
                                <Col span="6"
                                     v-if="model.spouse.workSituation!=='3'"
                                     class="pl10">
                                    {{model.spouse.companyName || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.spouse.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    职业
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.occupationText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    企业规模
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.enterpriseScaleText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    行业类别
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.industryTypeText || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.spouse.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    职务
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.jobText || '-'}}
                                </Col>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    单位地址
                                </Col>
                                <Col span="14"
                                     class="pl10">
                                    {{model.spouse.companyAddress || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.spouse.workSituation!=='3'">
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    单位电话
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.spouse.companyPhone || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            地理&联系
                        </label>
                        <Row class="font12">
                            <Col span="2"
                                 class="grey-light-color text-right">
                                手机
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.spouse.phoneNumber || '-'}}
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <Collapse class="mt16"
                  value="liabilities">
            <Panel name="liabilities"
                   :hide-arrow="true">
                <strong>
                    家庭负债情况
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            资产
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    房产
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareHouse || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    车辆
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareCar || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    储蓄存款
                                </Col>
                                <Col span="6"
                                     class="pl10">
                                    {{model.client.shareSavingText+'元'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    投资类
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareInvest || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    其他资产
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareOtherAsset || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            负债
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    征信内负债
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareDebt || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="2"
                                     class="grey-light-color text-right">
                                    其他负债
                                </Col>
                                <Col span="22"
                                     class="pl10">
                                    {{model.client.shareOtherDebt || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            备注
                        </label>
                        <Row class="font12">
                            <Col span="2"
                                 class="grey-light-color text-right">
                                备注
                            </Col>
                            <Col span="22"
                                 class="pl10">
                                {{model.client.shareMemo || '-'}}
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="family">
            <Panel name="family"
                   :hide-arrow="true">
                <strong>
                    家庭成员
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            成员列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="familyColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '0';
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="guarantee">
            <Panel name="guarantee"
                   :hide-arrow="true">
                <strong>
                    担保方
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            担保方(自然人)列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="commonColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '1' && item.naturalFlag==='1';
                            })"></Table>
                    <br>
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            担保方(法人)列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="legalColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '1' && item.naturalFlag==='0';
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="common">
            <Panel name="common"
                   :hide-arrow="true">
                <strong>
                    共借方
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共借方(自然人)列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="commonColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '2' && item.naturalFlag==='1';
                            })"></Table>
                    <br>
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共借方(法人)列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="legalColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '2' && item.naturalFlag==='0';
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="actual">
            <Panel name="actual"
                   :hide-arrow="true">
                <strong>
                    实际用款人
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            实际用款人列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="familyColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '3'
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="urgent">
            <Panel name="urgent"
                   :hide-arrow="true">
                <strong>
                    紧急联系人
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            紧急联系人列表
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="emergencyColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '4'
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="credit">
            <Panel name="credit"
                   :hide-arrow="true">
                <Row>
                    <Col span="20">
                        <strong>
                            征信信息
                        </strong>
                    </Col>
                </Row>
                <div slot="content">
                    <strong>客户：{{(model.client.clientName || '-')+' '+(model.client.certificatesNumber ||
                        '-')}}</strong>
                    <Card dis-hover
                          class="mt5">
                        <label class="grey-light-color font12"
                               slot="title">
                            个人征信查询信息
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    征信报告查询日期
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    {{model.creditInvestList[0].queryDate || '-'}}
                                </Col>

                            </Row>
                            <br>
                            <Row>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    征信情况
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    {{model.creditInvestList[0].creditTypeText || '-'}}
                                </Col>
                                <Col span="4"
                                     v-if="model.creditInvestList[0].creditTypeText && model.creditInvestList[0].creditTypeText.indexOf('其他')>=0"
                                     class="grey-light-color text-right">
                                    其他
                                </Col>
                                <Col span="8"
                                     v-if="model.creditInvestList[0].creditTypeText && model.creditInvestList[0].creditTypeText.indexOf('其他')>=0"
                                     class="pl10">
                                    {{model.creditInvestList[0].creditOtherDesc || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    逾期情况(信用卡+贷款)
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    {{'连'+(model.creditInvestList[0].continuousOverdue ||
                                    '-')+'累'+(model.creditInvestList[0].accumulativeOverdue || '-')}}
                                </Col>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    近半年查询次数(有效查询)
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    {{model.creditInvestList[0].latestQueryNum || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    征信贷款总计
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    {{model.creditInvestList[0].totalLoanNumText+'元'}}
                                </Col>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    征信报告
                                </Col>
                                <Col span="8"
                                     class="pl10">
                                    <label v-if="files[0].length>0"
                                           v-for="item in files[0]">
                                        <a v-if="item.suffix==='.pdf'"
                                           target="_blank"
                                           :href="item.path">
                                            {{item.name}}
                                        </a>
                                        <a v-else-if="item.suffix==='.mp4'"
                                           target="_blank"
                                           :href="files[0].path">
                                            {{item.name}}
                                        </a>
                                        <a v-else
                                           :href="item.path"
                                           class="prefancy0"
                                           data-fancybox-group="gallery">
                                            {{item.name}}
                                        </a>
                                    </label>
                                    <label v-else>-</label>
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="4"
                                     class="grey-light-color text-right">
                                    征信评价
                                </Col>
                                <Col span="20"
                                     class="pl10">
                                    {{model.creditInvestList[0].creditDesc || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <div v-if="model.spouse.clientName && model.spouse.certificatesNumber && model.creditInvestList[1]">
                        <strong>配偶：{{(model.spouse.clientName || '-')+' '+(model.spouse.certificatesNumber
                            ||
                            '-')}}</strong>
                        <Card dis-hover
                              class="mt5">
                            <label class="grey-light-color font12"
                                   slot="title">
                                个人征信查询信息
                            </label>
                            <div class="font12">
                                <Row>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        征信报告查询日期
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        {{model.creditInvestList[1].queryDate || '-'}}
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        征信情况
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        {{model.creditInvestList[1].creditTypeText || '-'}}
                                    </Col>
                                    <Col span="4"
                                         v-if="model.creditInvestList[1].creditType && model.creditInvestList[1].creditTypeText.indexOf('其他')>=0"
                                         class="grey-light-color text-right">
                                        其他
                                    </Col>
                                    <Col span="8"
                                         v-if="model.creditInvestList[1].creditType && model.creditInvestList[1].creditTypeText.indexOf('其他')>=0"
                                         class="pl10">
                                        {{model.creditInvestList[1].creditOtherDesc}}
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        逾期情况(信用卡+贷款)
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        {{'连'+(model.creditInvestList[1].continuousOverdue ||
                                        '-')+'累'+(model.creditInvestList[1].accumulativeOverdue || '-')}}
                                    </Col>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        近半年查询次数(有效查询)
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        {{model.creditInvestList[1].latestQueryNum || '-'}}
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        征信贷款总计
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        {{model.creditInvestList[1].totalLoanNumText+'元'}}
                                    </Col>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        征信报告
                                    </Col>
                                    <Col span="8"
                                         class="pl10">
                                        <label v-if="files[1].length>0"
                                               v-for="item in files[1]">
                                            <a v-if="item.suffix==='.pdf'"
                                               target="_blank"
                                               :href="item.path">
                                                {{item.name}}
                                            </a>
                                            <a v-else-if="item.suffix==='.mp4'"
                                               target="_blank"
                                               :href="item.path">
                                                {{item.name}}
                                            </a>
                                            <a v-else
                                               :href="item.path"
                                               class="prefancy1"
                                               data-fancybox-group="gallery">
                                                {{item.name}}
                                            </a>
                                        </label>
                                    </Col>
                                </Row>
                                <br>
                                <Row>
                                    <Col span="4"
                                         class="grey-light-color text-right">
                                        征信评价
                                    </Col>
                                    <Col span="20"
                                         class="pl10">
                                        {{model.creditInvestList[1].creditDesc || '-'}}
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <br>
                    </div>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            社会信息查询
                        </label>
                        <Row class="font12">
                            <Col span="4"
                                 class="grey-light-color text-right">
                                社会信息查询日期
                            </Col>
                            <Col span="20"
                                 class="pl10">
                                {{model.socialSearchDate || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Table disabled-hover
                               :columns="sociologyColumns"
                               :data="model.socialInfoList"></Table>
                        <br>
                        <Row class="font12">
                            <Col span="4"
                                 class="grey-light-color text-right">
                                社会信息汇总
                            </Col>
                            <Col span="20"
                                 class="pl10">
                                {{model.hmProjectClob.socialInfoRemark || '-'}}
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="interview">
            <Panel name="interview"
                   :hide-arrow="true">
                <strong>
                    面谈情况
                </strong>
                <div slot="content">
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            现场面谈人员情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    中介人员及人数
                                </Col>
                                <Col span="9"
                                     class="pl10">
                                    {{model.hmProjFacetalk.agencyNum || '-'}}
                                </Col>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    客户人数
                                </Col>
                                <Col span="9"
                                     class="pl10">
                                    {{model.hmProjFacetalk.clientNum || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    我司人员构成
                                </Col>
                                <Col span="9"
                                     class="pl10">
                                    {{model.hmProjFacetalk.staffCompositionText || '-'}}
                                </Col>
                                <Col span="3"
                                     v-if="model.hmProjFacetalk.staffComposition && model.hmProjFacetalk.staffCompositionText.indexOf('其他')>=0"
                                     class="grey-light-color text-right">
                                    其他
                                </Col>
                                <Col span="9"
                                     v-if="model.hmProjFacetalk.staffComposition && model.hmProjFacetalk.staffCompositionText.indexOf('其他')>=0"
                                     class="pl10">
                                    {{model.hmProjFacetalk.otherStaff || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    特殊人群情况
                                </Col>
                                <Col span="9"
                                     class="pl10">
                                    {{model.hmProjFacetalk.specialMan || '-'}}
                                </Col>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    实际面谈地点
                                </Col>
                                <Col span="9"
                                     class="pl10">
                                    {{model.hmProjFacetalk.talkPlace || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            面谈时各方人员的表现情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="7"
                                     class="grey-light-color text-right">
                                    客户本人对面谈的配合度及回答问题的流利程度
                                </Col>
                                <Col span="5"
                                     class="pl10">
                                    {{model.hmProjFacetalk.fluencyText || '-'}}
                                </Col>
                                <Col span="7"
                                     class="grey-light-color text-right">
                                    客户对金额及费用的纠结情况
                                </Col>
                                <Col span="5"
                                     class="pl10">
                                    {{model.hmProjFacetalk.feeEntangledText || '-'}}
                                </Col>
                            </Row>
                            <br>
                            <Row>
                                <Col span="7"
                                     class="grey-light-color text-right">
                                    客户情绪如何
                                </Col>
                                <Col span="5"
                                     class="pl10">
                                    {{model.hmProjFacetalk.emotion || '-'}}
                                </Col>
                                <Col span="7"
                                     class="grey-light-color text-right">
                                    其他人员抢答情况，干预后继续抢答吗
                                </Col>
                                <Col span="5"
                                     class="pl10">
                                    {{model.hmProjFacetalk.raceDesc || '-'}}
                                </Col>
                            </Row>
                        </div>

                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            四证情况
                        </label>
                        <div class="font12">
                            <Row>
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    面谈是否见四证原件
                                </Col>
                                <Col span="5"
                                     class="pl10">
                                    {{model.hmProjFacetalk.certFlagText || '-'}}
                                </Col>
                                <Col span="3"
                                     v-if="model.hmProjFacetalk.certFlag==='1'"
                                     class="grey-light-color text-right">
                                    四证是谁拿出来的
                                </Col>
                                <Col span="5"
                                     v-if="model.hmProjFacetalk.certFlag==='1'"
                                     class="pl10">
                                    {{model.hmProjFacetalk.certOwner || '-'}}
                                </Col>
                            </Row>
                            <Row class="mt16"
                                 v-if="model.hmProjFacetalk.certFlag==='0'">
                                <Col span="3"
                                     class="grey-light-color text-right">
                                    未见四证的解释
                                </Col>
                                <Col span="21"
                                     class="pl10">
                                    {{model.hmProjFacetalk.reason || '-'}}
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/borrowerInformationView.js"></script>