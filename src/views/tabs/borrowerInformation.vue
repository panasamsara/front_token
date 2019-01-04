<template>
    <div id="content">
        <Alert type="warning">
            点击&nbsp;
            <Button icon="md-clipboard"
                    size="small"
                    type="success"
                    :loading="saving"
                    @click="save">
                保存
            </Button>
            &nbsp;按钮可将当前标签信息存档。
        </Alert>
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
                        <Row>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户编号
                                    </label>
                                    {{model.client.innerId || '-'}}
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.clientName">
                                    <label slot="label"
                                           class="grey-light-color">
                                        姓名
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.clientName"
                                           clearable
                                           :maxlength="20"
                                           placeholder="客户姓名 | 必填"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        曾用名
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.oldName"
                                           clearable
                                           :maxlength="20"
                                           placeholder="曾用名"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.sex">
                                    <label slot="label"
                                           class="grey-light-color">
                                        性别
                                    </label>
                                    <Select clearable
                                            v-model="model.client.sex"
                                            :placeholder="'选择性别'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.SEX"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.birthday">
                                    <label slot="label"
                                           class="grey-light-color">
                                        出生日期
                                    </label>
                                    <DatePicker type="date"
                                                :options="maxDate"
                                                @on-change="setAgeClient"
                                                v-model="model.client.birthday"
                                                :placeholder="'选择日期'+(step===2 ? ' | 必填' : '')"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        年龄
                                    </label>
                                    {{(model.client.age || '-')+'岁'}}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.certificatesType">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件类型
                                    </label>
                                    <Select clearable
                                            v-model="model.client.certificatesType"
                                            placeholder="选择证件 | 必填">
                                        <Option v-for="item in dicts.CERTIFICATESTYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.certificatesNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件号
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.certificatesNumber"
                                           clearable
                                           :maxlength="20"
                                           placeholder="证件号 | 必填"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.maritalStatus">
                                    <label slot="label"
                                           class="grey-light-color">
                                        婚姻状况
                                    </label>
                                    <Select clearable
                                            v-model="model.client.maritalStatus"
                                            @on-change="change"
                                            :placeholder="'选择婚姻状况'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.MARITALSTATUS"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.children">
                                    <label slot="label"
                                           class="grey-light-color">
                                        子女情况
                                    </label>
                                    <Select clearable
                                            v-model="model.client.children"
                                            :placeholder="'选择子女情况'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.CHILDREN"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        最高学历
                                    </label>
                                    <Select clearable
                                            v-model="model.client.education"
                                            placeholder="选择最高学历">
                                        <Option v-for="item in dicts.EDUCATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户来源
                                    </label>
                                    {{model.channalName+'('+model.recommendTypeText+')'}}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.personalIncome">
                                    <label slot="label"
                                           class="grey-light-color">
                                        个人年收入
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.personalIncome"
                                           clearable
                                           :maxlength="10"
                                           placeholder="个人年收入">
                                        <span slot="prepend">元</span>
                                    </Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.householdIncome">
                                    <label slot="label"
                                           class="grey-light-color">
                                        家庭年收入
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.householdIncome"
                                           clearable
                                           :maxlength="10"
                                           placeholder="个人收入">
                                        <span slot="prepend">元</span>
                                    </Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            职业
                        </label>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.workSituation">
                                    <label slot="label"
                                           class="grey-light-color">
                                        工作情况
                                    </label>
                                    <Select clearable
                                            @on-change="setClientWorkInfo"
                                            v-model="model.client.workSituation"
                                            :placeholder="'选择工作情况'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.WORKSITUATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8"
                                 v-if="model.client.workSituation!=='3'">
                                <FormItem prop="client.businessNature">
                                    <label slot="label"
                                           class="grey-light-color">
                                        企业性质
                                    </label>
                                    <Select clearable
                                            v-model="model.client.businessNature"
                                            :placeholder="'选择企业性质'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.BUSINESSNATURE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8"
                                 v-if="model.client.workSituation!=='3'">
                                <FormItem prop="client.companyName">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位名称
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.companyName"
                                           clearable
                                           :maxlength="50"
                                           :placeholder="'单位名称'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.client.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="client.occupation">
                                    <label slot="label"
                                           class="grey-light-color">
                                        职业
                                    </label>
                                    <Select clearable
                                            v-model="model.client.occupation"
                                            :placeholder="'选择职业'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.OCCUPATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.enterpriseScale">
                                    <label slot="label"
                                           class="grey-light-color">
                                        企业规模
                                    </label>
                                    <Select clearable
                                            v-model="model.client.enterpriseScale"
                                            :placeholder="'选择企业规模'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.ENTERPRISESCALE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        行业类别
                                    </label>
                                    <Select clearable
                                            v-model="model.client.industryType"
                                            placeholder="选择行业类别">
                                        <Option v-for="item in dicts.INDUSTRYTYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.client.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="client.job">
                                    <label slot="label"
                                           class="grey-light-color">
                                        职务
                                    </label>
                                    <Select clearable
                                            v-model="model.client.job"
                                            :placeholder="'选择职务'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.JOB"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <FormItem prop="client.companyAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.companyAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'单位地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.client.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="client.companyPhone">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位电话
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.companyPhone"
                                           clearable
                                           :maxlength="20"
                                           placeholder="单位电话"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            地理&联系
                        </label>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.phoneNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        手机
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.phoneNumber"
                                           :maxlength="11"
                                           clearable
                                           :placeholder="'手机'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        邮政编码
                                    </label>
                                    <Input type="text"
                                           clearable
                                           v-model="model.client.postalCode"
                                           :maxlength="6"
                                           placeholder="邮政编码"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.liveAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        居住情况
                                    </label>
                                    <Select clearable
                                            v-model="model.client.liveAddress"
                                            :placeholder="'选择居住情况'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.LIVEADDRESS"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="client.nowLiveAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        现居住地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.nowLiveAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'现居住地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="client.sameAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        与抵押物相同
                                    </label>
                                    <RadioGroup v-model="model.client.sameAddress">
                                        <Radio :label="item.id"
                                               :key="item.id"
                                               v-for="item in dicts.SAMEADDRESS">
                                            {{item.text}}
                                        </Radio>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="client.mailAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        通信地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.mailAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'通信地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="client.certificatesAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.certificatesAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'证件地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="client.permanentAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        户籍地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.client.permanentAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'户籍地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
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
                        <Row>
                            <Col span="8">
                                <FormItem prop="spouse.clientName">
                                    <label slot="label"
                                           class="grey-light-color">
                                        姓名
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.clientName"
                                           clearable
                                           :maxlength="20"
                                           :placeholder="'姓名'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        曾用名
                                    </label>
                                    <Input type="text"
                                           :maxlength="20"
                                           v-model="model.spouse.oldName"
                                           clearable
                                           placeholder="曾用名"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="spouse.sex">
                                    <label slot="label"
                                           class="grey-light-color">
                                        性别
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.sex"
                                            :placeholder="'选择性别'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.SEX"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="spouse.birthday">
                                    <label slot="label"
                                           class="grey-light-color">
                                        出生日期
                                    </label>
                                    <DatePicker type="date"
                                                :options="maxDate"
                                                @on-change="setAgeSpouse"
                                                v-model="model.spouse.birthday"
                                                :placeholder="'选择日期'+(step===2 ? ' | 必填' : '')"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        年龄
                                    </label>
                                    {{(model.spouse.age || '-')+'岁'}}
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="spouse.certificatesType">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件类型
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.certificatesType"
                                            :placeholder="'选择证件'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.CERTIFICATESTYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="spouse.certificatesNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件号
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.certificatesNumber"
                                           clearable
                                           :maxlength="20"
                                           :placeholder="'证件号'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        最高学历
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.education"
                                            placeholder="选择最高学历">
                                        <Option v-for="item in dicts.EDUCATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="spouse.personalIncome">
                                    <label slot="label"
                                           class="grey-light-color">
                                        个人年收入
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.personalIncome"
                                           clearable
                                           :maxlength="10"
                                           placeholder="个人年收入">
                                        <span slot="prepend">元</span>
                                    </Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="spouse.nowLiveAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        现居住地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.nowLiveAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'现居住地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <FormItem prop="spouse.permanentAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        户籍地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.permanentAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'户籍地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            职业
                        </label>
                        <Row>
                            <Col span="8">
                                <FormItem prop="spouse.workSituation">
                                    <label slot="label"
                                           class="grey-light-color">
                                        工作情况
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.workSituation"
                                            @on-change="setSpouseWorkInfo"
                                            :placeholder="'选择工作情况'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.WORKSITUATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8"
                                 v-if="model.spouse.workSituation!=='3'">
                                <FormItem prop="spouse.businessNature">
                                    <label slot="label"
                                           class="grey-light-color">
                                        企业性质
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.businessNature"
                                            :placeholder="'选择企业性质'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.BUSINESSNATURE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8"
                                 v-if="model.spouse.workSituation!=='3'">
                                <FormItem prop="spouse.companyName">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位名称
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.companyName"
                                           clearable
                                           :maxlength="50"
                                           :placeholder="'单位名称'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.spouse.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="spouse.occupation">
                                    <label slot="label"
                                           class="grey-light-color">
                                        职业
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.occupation"
                                            :placeholder="'选择职业'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.OCCUPATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="spouse.enterpriseScale">
                                    <label slot="label"
                                           class="grey-light-color">
                                        企业规模
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.enterpriseScale"
                                            :placeholder="'选择企业规模'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.ENTERPRISESCALE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        行业类别
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.industryType"
                                            placeholder="选择行业类别">
                                        <Option v-for="item in dicts.INDUSTRYTYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.spouse.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="spouse.job">
                                    <label slot="label"
                                           class="grey-light-color">
                                        职务
                                    </label>
                                    <Select clearable
                                            v-model="model.spouse.job"
                                            :placeholder="'选择职务'+(step===2 ? ' | 必填' : '')">
                                        <Option v-for="item in dicts.JOB"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <FormItem prop="spouse.companyAddress">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位地址
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.companyAddress"
                                           clearable
                                           :maxlength="100"
                                           :placeholder="'单位地址'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row v-if="model.spouse.workSituation!=='3'">
                            <Col span="8">
                                <FormItem prop="spouse.companyPhone">
                                    <label slot="label"
                                           class="grey-light-color">
                                        单位电话
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.companyPhone"
                                           clearable
                                           :maxlength="20"
                                           placeholder="单位电话"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            地理&联系
                        </label>
                        <Row>
                            <Col span="8">
                                <FormItem prop="spouse.phoneNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        手机
                                    </label>
                                    <Input type="text"
                                           v-model="model.spouse.phoneNumber"
                                           :maxlength="11"
                                           clearable
                                           :placeholder="'手机'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
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
                        <FormItem>
                            <label slot="label"
                                   class="grey-light-color">
                                房产
                            </label>
                            <Input type="textarea"
                                   placeholder="除抵押物外的其他房产，房产数量、类型、城市、面积、价值等信息"
                                   clearable
                                   v-model="model.client.shareHouse"
                                   :maxlength="500"></Input>
                        </FormItem>
                        <FormItem>
                            <label slot="label"
                                   class="grey-light-color">
                                车辆
                            </label>
                            <Input type="textarea"
                                   placeholder="数量、品牌、价值等信息"
                                   clearable
                                   v-model="model.client.shareCar"
                                   :maxlength="500"></Input>
                        </FormItem>
                        <Row>
                            <Col span="8">
                                <FormItem prop="client.shareSaving">
                                    <label slot="label"
                                           class="grey-light-color">
                                        储蓄存款
                                    </label>
                                    <Input type="text"
                                           placeholder="存款金额"
                                           clearable
                                           v-model="model.client.shareSaving"
                                           :maxlength="10">
                                        <span slot="prepend">元</span>
                                    </Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <FormItem>
                            <label slot="label"
                                   class="grey-light-color">
                                投资类
                            </label>
                            <Input type="textarea"
                                   placeholder="投资类型、金额"
                                   v-model="model.client.shareInvest"
                                   clearable
                                   :maxlength="500"></Input>
                        </FormItem>
                        <FormItem>
                            <label slot="label"
                                   class="grey-light-color">
                                其他资产
                            </label>
                            <Input type="textarea"
                                   placeholder="其他资产"
                                   v-model="model.client.shareOtherAsset"
                                   clearable
                                   :maxlength="500"></Input>
                        </FormItem>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            负债
                        </label>
                        <FormItem prop="client.shareDebt">
                            <label slot="label"
                                   class="grey-light-color">
                                征信内负债
                            </label>
                            <Input type="textarea"
                                   placeholder="贷款机构/个人名称、贷款类型、贷款金额及余额 | 必填"
                                   clearable
                                   v-model="model.client.shareDebt"
                                   :maxlength="500"></Input>
                        </FormItem>
                        <FormItem prop="client.shareOtherDebt">
                            <label slot="label"
                                   class="grey-light-color">
                                其他负债
                            </label>
                            <Input type="textarea"
                                   placeholder="其他负债 | 必填"
                                   clearable
                                   v-model="model.client.shareOtherDebt"
                                   :maxlength="500"></Input>
                        </FormItem>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            备注
                        </label>
                        <FormItem>
                            <label slot="label"
                                   class="grey-light-color">
                                备注
                            </label>
                            <Input type="textarea"
                                   placeholder="备注"
                                   clearable
                                   v-model="model.client.shareMemo"
                                   :maxlength="500"></Input>
                        </FormItem>
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
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            成员列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('0')">
                                添加
                            </Button>
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
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            担保方(自然人)列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('1','1')">
                                添加
                            </Button>
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="commonColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '1' && item.naturalFlag==='1';
                            })"></Table>
                    <br>
                    <Row>
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            担保方(法人)列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('1','0')">
                                添加
                            </Button>
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
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共借方(自然人)列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('2','1')">
                                添加
                            </Button>
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="commonColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '2' && item.naturalFlag==='1';
                            })"></Table>
                    <br>
                    <Row>
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共借方(法人)列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('2','0')">
                                添加
                            </Button>
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
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            实际用款人列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('3')">
                                添加
                            </Button>
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
                    紧急联系人<span :class="step===2 ? 'red-color' : ''"
                               v-if="step===2">(至少填写2个)</span>
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            紧急联系人列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="add('4')">
                                添加
                            </Button>
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
                    <div class="text-right"
                         v-if="model.spouse.clientName && model.spouse.certificatesNumber">
                        <Button slot="extra"
                                :disabled="model.creditInvestList.length>1"
                                type="primary"
                                @click="addSpouse"
                                size="small">
                            添加配偶证信信息
                        </Button>
                    </div>
                    <strong>客户：{{(model.client.clientName || '-')+' '+(model.client.certificatesNumber ||
                        '-')}}</strong>
                    <Card dis-hover
                          class="mt5">
                        <label class="grey-light-color font12"
                               slot="title">
                            个人征信查询信息
                        </label>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="170"
                                          prop="creditInvestList[0].queryDate">
                                    <label slot="label"
                                           class="grey-light-color">
                                        征信报告查询日期
                                    </label>
                                    <DatePicker type="date"
                                                v-model="model.creditInvestList[0].queryDate"
                                                placeholder="选择日期 | 必填"></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                                <Row>
                                    <Col span="12">
                                        <FormItem :label-width="170"
                                                  prop="creditInvestList[0].creditTypeList">
                                            <label slot="label"
                                                   class="grey-light-color">
                                                征信情况
                                            </label>
                                            <CheckboxGroup v-model="model.creditInvestList[0].creditTypeList">
                                                <Checkbox v-for="it in dicts.CREDITTYPE"
                                                          :label="it.id"
                                                          :key="it.id">
                                                    {{it.text}}
                                                </Checkbox>
                                            </CheckboxGroup>
                                        </FormItem>
                                    </Col>
                                    <Col span="12"
                                         v-if="model.creditInvestList[0].creditTypeList && model.creditInvestList[0].creditTypeList.some((item)=>{
                                            return item==='6'
                                        })">
                                        <FormItem :label-width="70"
                                                  prop="creditInvestList[0].creditOtherDesc">
                                            <label slot="label"
                                                   class="grey-light-color">
                                                其他
                                            </label>
                                            <Input type="text"
                                                   clearable
                                                   :maxlength="50"
                                                   placeholder="其他 | 必填"
                                                   v-model="model.creditInvestList[0].creditOtherDesc"></Input>
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <Row>
                                    <Col span="14">
                                        <FormItem :label-width="170"
                                                  prop="creditInvestList[0].continuousOverdue">
                                            <label slot="label"
                                                   class="grey-light-color">
                                                逾期情况(信用卡+贷款)
                                            </label>
                                            连
                                            <InputNumber clearable
                                                         placeholder="连续 | 必填"
                                                         :min="0"
                                                         :precision="0"
                                                         :maxLength="8"
                                                         v-model="model.creditInvestList[0].continuousOverdue"></InputNumber>
                                        </FormItem>
                                    </Col>
                                    <Col span="10">
                                        <FormItem :label-width="1"
                                                  prop="creditInvestList[0].accumulativeOverdue">
                                            累
                                            <InputNumber clearable
                                                         placeholder="累计 | 必填"
                                                         :min="0"
                                                         :precision="0"
                                                         :maxLength="8"
                                                         v-model="model.creditInvestList[0].accumulativeOverdue"></InputNumber>
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="170"
                                          prop="creditInvestList[0].latestQueryNum">
                                    <label slot="label"
                                           class="grey-light-color">
                                        近半年查询次数(有效查询)
                                    </label>
                                    <InputNumber clearable
                                                 :min="0"
                                                 :precision="0"
                                                 v-model="model.creditInvestList[0].latestQueryNum"
                                                 style="width: 100%"
                                                 :maxLength="8"
                                                 placeholder="查询次数 | 必填"></InputNumber>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="170"
                                          prop="creditInvestList[0].totalLoanNum">
                                    <label slot="label"
                                           class="grey-light-color">
                                        征信贷款总计
                                    </label>
                                    <Input clearable
                                           :maxlength="10"
                                           v-model="model.creditInvestList[0].totalLoanNum"
                                           style="width: 100%"
                                           :placeholder="'征信贷款总计'+(step===2 ? ' | 必填' : '')">
                                        <span slot="prepend">元</span>
                                    </Input>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="170">
                                    <label slot="label"
                                           class="grey-light-color">
                                        <span class="required">*</span>
                                        征信报告
                                    </label>
                                    <Upload ref="upload0"
                                            :before-upload="beforeUpload"
                                            :on-success="uploadSuccess0"
                                            :on-error="uploadError"
                                            :action="$config.uploadUrl"
                                            :format="['gif','jpg','jpeg','png','pdf']"
                                            :max-size="10240"
                                            :default-file-list="files[0]"
                                            :show-upload-list="false"
                                            :on-format-error="formatError"
                                            :on-exceeded-size="handleMaxSize">
                                        <Button icon="md-cloud-upload">
                                            上传征信报告
                                        </Button>
                                    </Upload>
                                    <ul class="ivu-upload-list">
                                        <li v-for="item in upload0List"
                                            class="ivu-upload-list-file">
                                            <template v-if="item.status === 'finished'">
                                                    <span>
                                                        <i class="ivu-icon ivu-icon-ios-image"></i>
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
                                                           class="prefancy0"
                                                           data-fancybox-group="gallery">
                                                            {{item.name}}
                                                        </a>
                                                    </span>
                                                <i @click="remove0(item)"
                                                   class="ivu-icon ivu-icon-ios-close ivu-upload-list-remove"></i>
                                            </template>
                                            <template v-else>
                                                <Progress v-if="item.showProgress"
                                                          :percent="item.percentage"
                                                          :stroke-width="3"
                                                          hide-info></Progress>
                                            </template>
                                        </li>
                                    </ul>
                                </FormItem>
                            </Col>
                        </Row>
                        <FormItem :label-width="170"
                                  prop="creditInvestList[0].creditDesc">
                            <label slot="label"
                                   class="grey-light-color">
                                征信评价
                            </label>
                            <Input clearable
                                   v-model="model.creditInvestList[0].creditDesc"
                                   type="textarea"
                                   :maxlength="500"
                                   :placeholder="'征信评价'+(step===2 ? ' | 必填' : '')"></Input>
                        </FormItem>
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
                            <Row>
                                <Col span="12">
                                    <FormItem :label-width="170"
                                              prop="creditInvestList[1].queryDate">
                                        <label slot="label"
                                               class="grey-light-color">
                                            征信报告查询日期
                                        </label>
                                        <DatePicker type="date"
                                                    v-model="model.creditInvestList[1].queryDate"
                                                    placeholder="选择日期 | 必填"></DatePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="24">
                                    <Row>
                                        <Col span="12">
                                            <FormItem :label-width="170"
                                                      prop="creditInvestList[1].creditTypeList">
                                                <label slot="label"
                                                       class="grey-light-color">
                                                    征信情况
                                                </label>
                                                <CheckboxGroup v-model="model.creditInvestList[1].creditTypeList">
                                                    <Checkbox v-for="it in dicts.CREDITTYPE"
                                                              :label="it.id"
                                                              :key="it.id">
                                                        {{it.text}}
                                                    </Checkbox>
                                                </CheckboxGroup>
                                            </FormItem>
                                        </Col>
                                        <Col span="12"
                                             v-if="model.creditInvestList[1].creditTypeList && model.creditInvestList[1].creditTypeList.some((item)=>{
                                            return item==='6'
                                        })">
                                            <FormItem :label-width="70"
                                                      prop="creditInvestList[1].creditOtherDesc">
                                                <label slot="label"
                                                       class="grey-light-color">
                                                    其他
                                                </label>
                                                <Input type="text"
                                                       clearable
                                                       :maxlength="50"
                                                       placeholder="其他 | 必填"
                                                       v-model="model.creditInvestList[1].creditOtherDesc"></Input>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    <Row>
                                        <Col span="14">
                                            <FormItem :label-width="170"
                                                      prop="creditInvestList[1].continuousOverdue">
                                                <label slot="label"
                                                       class="grey-light-color">
                                                    逾期情况(信用卡+贷款)
                                                </label>
                                                连
                                                <InputNumber clearable
                                                             placeholder="连续 | 必填"
                                                             :min="0"
                                                             :precision="0"
                                                             :maxLength="8"
                                                             v-model="model.creditInvestList[1].continuousOverdue"></InputNumber>
                                            </FormItem>
                                        </Col>
                                        <Col span="10">
                                            <FormItem :label-width="1"
                                                      prop="creditInvestList[1].accumulativeOverdue">
                                                累
                                                <InputNumber clearable
                                                             placeholder="累计 | 必填"
                                                             :min="0"
                                                             :precision="0"
                                                             :maxLength="8"
                                                             v-model="model.creditInvestList[1].accumulativeOverdue"></InputNumber>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span="12">
                                    <FormItem :label-width="170"
                                              prop="creditInvestList[1].latestQueryNum">
                                        <label slot="label"
                                               class="grey-light-color">
                                            近半年查询次数(有效查询)
                                        </label>
                                        <InputNumber clearable
                                                     :min="0"
                                                     :precision="0"
                                                     v-model="model.creditInvestList[1].latestQueryNum"
                                                     style="width: 100%"
                                                     :maxLength="8"
                                                     placeholder="查询次数 | 必填"></InputNumber>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="12">
                                    <FormItem :label-width="170"
                                              prop="creditInvestList[1].totalLoanNum">
                                        <label slot="label"
                                               class="grey-light-color">
                                            征信贷款总计
                                        </label>
                                        <Input clearable
                                               :maxlength="10"
                                               v-model="model.creditInvestList[1].totalLoanNum"
                                               style="width: 100%"
                                               :placeholder="'征信贷款总计'+(step===2 ? ' | 必填' : '')">
                                            <span slot="prepend">元</span>
                                        </Input>
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem :label-width="170">
                                        <label slot="label"
                                               class="grey-light-color">
                                            <span class="required">*</span>
                                            征信报告
                                        </label>
                                        <Upload ref="upload1"
                                                :before-upload="beforeUpload"
                                                :on-success="uploadSuccess1"
                                                :on-error="uploadError"
                                                :action="$config.uploadUrl"
                                                :format="['gif','jpg','jpeg','png','pdf']"
                                                :default-file-list="files[1]"
                                                :show-upload-list="false"
                                                :max-size="10240"
                                                :on-format-error="formatError"
                                                :on-exceeded-size="handleMaxSize">
                                            <Button icon="md-cloud-upload">
                                                上传征信报告
                                            </Button>
                                        </Upload>
                                        <ul class="ivu-upload-list">
                                            <li v-for="item in upload1List"
                                                class="ivu-upload-list-file">
                                                <template v-if="item.status === 'finished'">
                                                    <span>
                                                        <i class="ivu-icon ivu-icon-ios-image"></i>
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
                                                    </span>
                                                    <i @click="remove1(item)"
                                                       class="ivu-icon ivu-icon-ios-close ivu-upload-list-remove"></i>
                                                </template>
                                                <template v-else>
                                                    <Progress v-if="item.showProgress"
                                                              :percent="item.percentage"
                                                              :stroke-width="3"
                                                              hide-info></Progress>
                                                </template>
                                            </li>
                                        </ul>
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem :label-width="170"
                                      prop="creditInvestList[1].creditDesc">
                                <label slot="label"
                                       class="grey-light-color">
                                    征信评价
                                </label>
                                <Input clearable
                                       v-model="model.creditInvestList[1].creditDesc"
                                       type="textarea"
                                       :maxlength="500"
                                       :placeholder="'征信评价'+(step===2 ? ' | 必填' : '')"></Input>
                            </FormItem>
                        </Card>
                        <br>
                    </div>
                    <Card dis-hover>
                        <label class="grey-light-color font12"
                               slot="title">
                            社会信息查询
                        </label>
                        <Row>
                            <Col span="20">
                                <FormItem :label-width="130"
                                          prop="socialSearchDate">
                                    <label slot="label"
                                           class="grey-light-color">
                                        社会信息查询日期
                                    </label>
                                    <DatePicker type="date"
                                                v-model="model.socialSearchDate"
                                                clearable
                                                :placeholder="'选择日期'+(step===1 ? ' | 必填' : '')"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="4"
                                 class="text-right">
                                <Button icon="md-add"
                                        type="primary"
                                        size="small"
                                        @click="plus">
                                    添加
                                </Button>
                            </Col>
                        </Row>
                        <Table disabled-hover
                               :columns="sociologyColumns"
                               :data="model.socialInfoList"></Table>
                        <br>
                        <FormItem :label-width="130"
                                  prop="hmProjectClob.socialInfoRemark">
                            <label slot="label"
                                   class="grey-light-color">
                                社会信息汇总
                            </label>
                            <Input type="textarea"
                                   clearable
                                   v-model="model.hmProjectClob.socialInfoRemark"
                                   :maxlength="500"
                                   :placeholder="'社会信息汇总'+(step===1 ? ' | 必填' : '')"></Input>
                        </FormItem>
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
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.agencyNum">
                                    <label slot="label"
                                           class="grey-light-color">
                                        中介人员及人数
                                    </label>
                                    <InputNumber :placeholder="'中介人员及人数'+(step===2 ? ' | 必填' : '')"
                                                 style="width: 100%"
                                                 :min="0"
                                                 clearable
                                                 :precision="0"
                                                 v-model="model.hmProjFacetalk.agencyNum"
                                                 :maxlength="8"></InputNumber>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.clientNum">
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户人数
                                    </label>
                                    <InputNumber type="text"
                                                 :min="0"
                                                 style="width: 100%"
                                                 :precision="0"
                                                 :placeholder="'客户人数'+(step===2 ? ' | 必填' : '')"
                                                 v-model="model.hmProjFacetalk.clientNum"
                                                 clearable
                                                 :maxlength="8"></InputNumber>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.staffCompositionList">
                                    <label slot="label"
                                           class="grey-light-color">
                                        我司人员构成
                                    </label>
                                    <CheckboxGroup v-model="model.hmProjFacetalk.staffCompositionList">
                                        <Checkbox v-for="item in dicts.STAFFCOMPOSITION"
                                                  :label="item.id"
                                                  :key="item.id">
                                            {{item.text}}
                                        </Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                            <Col span="12"
                                 v-if="model.hmProjFacetalk.staffCompositionList && model.hmProjFacetalk.staffCompositionList.some((item)=>{
                                    return item==='0'
                                 })">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.otherStaff">
                                    <label slot="label"
                                           class="grey-light-color">
                                        其他
                                    </label>
                                    <Input type="text"
                                           :maxlenght="50"
                                           v-model="model.hmProjFacetalk.otherStaff"
                                           :placeholder="'其他'+(step===2 ? ' | 必填' : '')"
                                           clearable></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.specialMan">
                                    <label slot="label"
                                           class="grey-light-color">
                                        特殊人群情况
                                    </label>
                                    <Input type="text"
                                           :placeholder="'特殊人群情况'+(step===2 ? ' | 必填' : '')"
                                           v-model="model.hmProjFacetalk.specialMan"
                                           :maxlength="100"
                                           clearable></Input>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="110"
                                          prop="hmProjFacetalk.talkPlace">
                                    <label slot="label"
                                           class="grey-light-color">
                                        实际面谈地点
                                    </label>
                                    <Input type="text"
                                           :placeholder="'实际面谈地点'+(step===2 ? ' | 必填' : '')"
                                           v-model="model.hmProjFacetalk.talkPlace"
                                           :maxlength="200"
                                           clearable></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            面谈时各方人员的表现情况
                        </label>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="280"
                                          prop="hmProjFacetalk.fluency">
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户本人对面谈的配合度及回答问题的流利程度
                                    </label>
                                    <Select :placeholder="'选择流利程度'+(step===2 ? ' | 必填' : '')"
                                            v-model="model.hmProjFacetalk.fluency"
                                            clearable>
                                        <Option v-for="item in dicts.FLUENCY"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="280"
                                          prop="hmProjFacetalk.feeEntangled">
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户对金额及费用的纠结情况
                                    </label>
                                    <Select :placeholder="'选择纠结情况'+(step===2 ? ' | 必填' : '')"
                                            v-model="model.hmProjFacetalk.feeEntangled"
                                            clearable>
                                        <Option v-for="item in dicts.FEEENTANGLED"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem :label-width="280"
                                          prop="hmProjFacetalk.emotion">
                                    <label slot="label"
                                           class="grey-light-color">
                                        客户情绪如何
                                    </label>
                                    <Input type="text"
                                           :placeholder="'客户情绪如何'+(step===2 ? ' | 必填' : '')"
                                           v-model="model.hmProjFacetalk.emotion"
                                           :maxlength="100"
                                           clearable></Input>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem :label-width="280"
                                          prop="hmProjFacetalk.raceDesc">
                                    <label slot="label"
                                           class="grey-light-color">
                                        其他人员抢答情况，干预后继续抢答吗
                                    </label>
                                    <Input type="text"
                                           :maxlength="50"
                                           :placeholder="'其他人员抢答情况，干预后继续抢答吗'+(step===2 ? ' | 必填' : '')"
                                           v-model="model.hmProjFacetalk.raceDesc"
                                           clearable></Input>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                    <br>
                    <Card dis-hover>
                        <label slot="title"
                               class="grey-light-color font12">
                            四证情况
                        </label>
                        <Row>
                            <Col span="8">
                                <FormItem :label-width="140"
                                          prop="hmProjFacetalk.certFlag">
                                    <label slot="label"
                                           class="grey-light-color">
                                        面谈是否见四证原件
                                    </label>
                                    <RadioGroup v-model="model.hmProjFacetalk.certFlag">
                                        <Radio v-for="item in dicts.CERTFLAG"
                                               :key="item.id"
                                               :label="item.id">
                                            {{item.text}}
                                        </Radio>
                                    </RadioGroup>
                                </FormItem>
                            </Col>
                            <Col span="8"
                                 v-if="model.hmProjFacetalk.certFlag==='1'">
                                <FormItem :label-width="140"
                                          prop="hmProjFacetalk.certOwner">
                                    <label slot="label"
                                           class="grey-light-color">
                                        四证是谁拿出来的
                                    </label>
                                    <Input type="text"
                                           :maxlength="50"
                                           v-model="model.hmProjFacetalk.certOwner"
                                           clearable
                                           :placeholder="'四证是谁拿出来的'+(step===2 ? ' | 必填' : '')"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <FormItem v-if="model.hmProjFacetalk.certFlag==='0'"
                                  :label-width="140"
                                  prop="hmProjFacetalk.reason">
                            <label slot="label"
                                   class="grey-light-color">
                                未见四证的解释
                            </label>
                            <Input type="textarea"
                                   clearable
                                   v-model="model.hmProjFacetalk.reason"
                                   :placeholder="'未见四证的解释'+(step===2 ? ' | 必填' : '')"
                                   :maxlength="500"></Input>
                        </FormItem>
                    </Card>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/borrowerInformation.js"></script>