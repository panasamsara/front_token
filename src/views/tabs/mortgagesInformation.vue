<template>
    <div id="content">
        <Collapse value="house">
            <Panel name="house"
                   :hide-arrow="true">
                <strong>
                    房产基本信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="8">
                            <FormItem>
                                <label slot="label"
                                       class="grey-light-color">
                                    房产编号
                                </label>
                                {{model.pawnList[0].id || '-'}}
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem>
                                <label slot="label"
                                       class="grey-light-color">
                                    产权人
                                </label>
                                {{model.client.clientName}}
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem>
                                <label slot="label"
                                       class="grey-light-color">
                                    共有类型
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].commonType"
                                        placeholder="选择共有类型">
                                    <Option v-for="item in dicts.COMMONTYPE"
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
                            <FormItem prop="pawnList[0].certificateType">
                                <label slot="label"
                                       class="grey-light-color">
                                    证件类型
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].certificateType"
                                        placeholder="选择证件类型 | 必填">
                                    <Option v-for="item in dicts.CERTIFICATETYPE"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].certificateCode">
                                <label slot="label"
                                       class="grey-light-color">
                                    证件编号
                                </label>
                                <Input type="text"
                                       placeholder="证件编号 | 必填"
                                       v-model="model.pawnList[0].certificateCode"
                                       :maxlength="30"></Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].timeOfIssuing">
                                <label slot="label"
                                       class="grey-light-color">
                                    发证日期
                                </label>
                                <DatePicker type="date"
                                            v-model="model.pawnList[0].timeOfIssuing"
                                            placeholder="选择发证日期 | 必填"
                                            clearable></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem prop="pawnList[0].landCardCode">
                                <label slot="label"
                                       class="grey-light-color">
                                    土地证编号
                                </label>
                                <Input type="text"
                                       v-model="model.pawnList[0].landCardCode"
                                       placeholder="土地证编号"
                                       :maxlength="30"></Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].dateOfIssuing">
                                <label slot="label"
                                       class="grey-light-color">
                                    发证日期
                                </label>
                                <DatePicker type="date"
                                            v-model="model.pawnList[0].dateOfIssuing"
                                            placeholder="选择发证日期"
                                            clearable></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="16">
                            <Row>
                                <Col span="10">
                                    <FormItem prop="local">
                                        <label class="grey-light-color"
                                               slot="label">
                                            地址
                                        </label>
                                        <Cascader clearable
                                                  v-model="model.local"
                                                  :load-data="loadData"
                                                  :data="areas"
                                                  placeholder="选择省/市/区县"></Cascader>
                                    </FormItem>
                                </Col>
                                <Col span="14">
                                    <FormItem :label-width="10"
                                              prop="pawnList[0].detailedAddress">
                                        <Input type="text"
                                               :maxlength="100"
                                               v-model="model.pawnList[0].detailedAddress"
                                               clearable
                                               placeholder="具体地址（到门牌号）"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].communityName">
                                <label slot="label"
                                       class="grey-light-color">
                                    小区名称
                                </label>
                                <Input type="text"
                                       :maxlength="50"
                                       v-model="model.pawnList[0].communityName"
                                       clearable
                                       placeholder="小区名称 | 必填"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem prop="pawnList[0].buildingNumber">
                                <label slot="label"
                                       class="grey-light-color">
                                    楼栋号
                                </label>
                                <Input type="text"
                                       :maxlength="50"
                                       v-model="model.pawnList[0].buildingNumber"
                                       clearable
                                       placeholder="楼栋号 | 必填"></Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].totalFloor">
                                <label slot="label"
                                       class="grey-light-color">
                                    总楼层
                                </label>
                                <InputNumber :min="0"
                                             :precision="0"
                                             v-model="model.pawnList[0].totalFloor"
                                             style="width: 100%"
                                             clearable
                                             placeholder="总楼层 | 必填"></InputNumber>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].onFloor">
                                <label slot="label"
                                       class="grey-light-color">
                                    所在楼层
                                </label>
                                <InputNumber :min="0"
                                             :precision="0"
                                             style="width: 100%"
                                             v-model="model.pawnList[0].onFloor"
                                             clearable
                                             placeholder="所在楼层 | 必填"></InputNumber>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem prop="pawnList[0].roomNumber">
                                <label slot="label"
                                       class="grey-light-color">
                                    房间号
                                </label>
                                <Input type="text"
                                       :maxlength="50"
                                       v-model="model.pawnList[0].roomNumber"
                                       clearable
                                       placeholder="房间号 | 必填"></Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].orientation">
                                <label slot="label"
                                       class="grey-light-color">
                                    朝向
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].orientation"
                                        placeholder="选择朝向 | 必填">
                                    <Option v-for="item in dicts.ORIENTATION"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <Row>
                                <Col span="12">
                                    <FormItem prop="pawnList[0].room">
                                        <label slot="label"
                                               class="grey-light-color">
                                            户型
                                        </label>
                                        <InputNumber :min="0"
                                                     style="width: 100%"
                                                     :precision="0"
                                                     v-model="model.pawnList[0].room"
                                                     clearable
                                                     placeholder="室"></InputNumber>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem :label-width="1"
                                              prop="pawnList[0].hall">
                                        <InputNumber :min="0"
                                                     style="width: 100%"
                                                     :precision="0"
                                                     v-model="model.pawnList[0].hall"
                                                     clearable
                                                     placeholder="厅"></InputNumber>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem :label-width="1"
                                              prop="pawnList[0].toilet">
                                        <InputNumber :min="0"
                                                     style="width: 100%"
                                                     :precision="0"
                                                     v-model="model.pawnList[0].toilet"
                                                     clearable
                                                     placeholder="卫"></InputNumber>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem prop="pawnList[0].houseAcreage">
                                <label slot="label"
                                       class="grey-light-color">
                                    房屋面积
                                </label>
                                <Input type="text"
                                       :maxlength="10"
                                       v-model="model.pawnList[0].houseAcreage"
                                       clearable
                                       placeholder="房屋面积 | 必填">
                                    <span slot="prepend">平米</span>
                                </Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].houseType">
                                <label slot="label"
                                       class="grey-light-color">
                                    房屋类型
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].houseType"
                                        placeholder="选择房屋类型 | 必填">
                                    <Option v-for="item in dicts.HOUSETYPE"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].houseNature">
                                <label slot="label"
                                       class="grey-light-color">
                                    房屋性质
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].houseNature"
                                        placeholder="选择房屋性质 | 必填">
                                    <Option v-for="item in dicts.HOUSENATURE"
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
                            <FormItem prop="pawnList[0].getTpye">
                                <label slot="label"
                                       class="grey-light-color">
                                    房产获得方式
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].getTpye"
                                        placeholder="选择房产获得方式 | 必填">
                                    <Option v-for="item in dicts.GETTPYE"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem prop="pawnList[0].landSource">
                                <label slot="label"
                                       class="grey-light-color">
                                    土地来源
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].landSource"
                                        placeholder="选择土地来源 | 必填">
                                    <Option v-for="item in dicts.LANDSOURCE"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <!--<Col span="8">-->
                        <!--<FormItem prop="pawnList[0].landType">-->
                        <!--<label slot="label"-->
                        <!--class="grey-light-color">-->
                        <!--土地性质-->
                        <!--</label>-->
                        <!--<Select clearable-->
                        <!--v-model="model.pawnList[0].landType"-->
                        <!--placeholder="选择土地性质 | 必填">-->
                        <!--<Option v-for="item in dicts.LANDTYPE"-->
                        <!--:value="item.id"-->
                        <!--:key="item.id">-->
                        <!--{{item.text}}-->
                        <!--</Option>-->
                        <!--</Select>-->
                        <!--</FormItem>-->
                        <!--</Col>-->
                        <Col span="8">
                            <FormItem prop="pawnList[0].ageOfCompletion">
                                <label slot="label"
                                       class="grey-light-color">
                                    建成年代
                                </label>
                                <DatePicker type="year"
                                            format="yyyy"
                                            @on-change="model.pawnList[0].ageOfCompletion=$event"
                                            v-model="model.pawnList[0].ageOfCompletion"
                                            placeholder="选择建成年代 | 必填"
                                            clearable></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <FormItem prop="pawnList[0].propertyStatic">
                                <label slot="label"
                                       class="grey-light-color">
                                    房产现状
                                </label>
                                <Select clearable
                                        v-model="model.pawnList[0].propertyStatic"
                                        placeholder="选择房产现状 | 必填">
                                    <Option v-for="item in dicts.PROPERTYSTATIC"
                                            :value="item.id"
                                            :key="item.id">
                                        {{item.text}}
                                    </Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="share"
                  class="mb16"
                  v-if="model.pawnList[0].commonType==='0' || model.pawnList[0].commonType==='1'">
            <Panel name="share"
                   :hide-arrow="true">
                <strong>
                    共有人<span class="red-color">(至少填写1个)</span>
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="20"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共有人列表
                        </Col>
                        <Col span="4"
                             class="text-right">
                            <Button size="small"
                                    icon="md-add"
                                    type="primary"
                                    @click="plus">
                                添加
                            </Button>
                        </Col>
                    </Row>
                    <Table class="mt5"
                           :columns="shareColumns"
                           :data="model.stakeholderList.filter((item) => {
                                return item.busiType === '5';
                            })"></Table>
                </div>
            </Panel>
        </Collapse>
        <Collapse value="cost">
            <Panel name="cost"
                   :hide-arrow="true">
                <strong>
                    价值评估
                </strong>
                <Card slot="content"
                      dis-hover>
                    <label slot="title"
                           class="font12">
                        初评信息
                    </label>
                    <div class="font12">
                        <Row v-if="item.agencyText && item.evalValText"
                             v-for="item in evaluationList.filter((value)=>{
                                   return value.evalType==='2'
                             })"
                             :key="item.id"
                             class="mb16">
                            <Col span="4"
                                 class="text-right grey-light-color">
                                {{(item.agencyText || '-')+'估价'}}
                            </Col>
                            <Col span="4"
                                 class="pl10">
                                {{(item.evalValText || '-')+'元'}}
                            </Col>
                            <Col span="2"
                                 v-if="item.preEvalFile">
                                <a v-if="item.preEvalFile.indexOf('.pdf')>=0"
                                   target="_blank"
                                   :href="item.preEvalFilePath">
                                    预估单
                                </a>
                                <a v-else-if="item.preEvalFile.indexOf('.mp4')>=0"
                                   target="_blank"
                                   :href="item.preEvalFilePath">
                                    预估单
                                </a>
                                <a v-else
                                   :href="item.preEvalFilePath"
                                   class="prefancy"
                                   data-fancybox-group="gallery">
                                    预估单
                                </a>
                            </Col>
                            <Col span="2"
                                 v-if="item.reportFile">
                                <a v-if="item.reportFile.indexOf('.pdf')>=0"
                                   target="_blank"
                                   :href="item.reportFilePath">
                                    评估报告
                                </a>
                                <a v-else-if="item.reportFile.indexOf('.mp4')>=0"
                                   target="_blank"
                                   :href="item.reportFilePath">
                                    评估报告
                                </a>
                                <a v-else
                                   :href="item.reportFilePath"
                                   class="rptfancy"
                                   data-fancybox-group="gallery">
                                    评估报告
                                </a>
                            </Col>
                        </Row>
                        <Row v-if="item.agencyText && item.evalValText"
                             v-for="item in evaluationList.filter((value)=>{
                                   return value.evalType==='0'
                              })"
                             :key="item.id"
                             class="mb16">
                            <Col span="4"
                                 class="text-right grey-light-color">
                                {{(item.agencyText || '-')+'估价'}}
                            </Col>
                            <Col span="4"
                                 class="pl10">
                                {{(item.evalValText || '-')+'元'}}
                            </Col>
                            <Col span="4"
                                 v-if="item.url">
                                <a :href="/^http(s)?:\/\//.test(item.url) ? item.url : 'http://'+item.url"
                                   target="_blank">
                                    {{item.url}}
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="4"
                                 class="text-right grey-light-color">
                                初评结论
                            </Col>
                            <Col span="4"
                                 class="pl10">
                                {{(model.firstEvalueText || '-')+'元'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="4"
                                 class="text-right grey-light-color">
                                初评意见
                            </Col>
                            <Col span="20"
                                 class="pl10">
                                {{model.hmProjectClob.firstEvalDesc || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="4"
                                 class="text-right grey-light-color">
                                初评人
                            </Col>
                            <Col span="8"
                                 class="pl10">
                                {{model.firstEvalUserName || '-'}}
                            </Col>
                            <Col span="4"
                                 class="text-right grey-light-color">
                                初评提交时间
                            </Col>
                            <Col span="8"
                                 class="pl10">
                                {{model.firstEvalDate || '-'}}
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="spare">
            <Panel name="spare"
                   :hide-arrow="true">
                <strong>
                    备用资产信息
                </strong>
                <div slot="content">
                    <div class="text-right">
                        <Button size="small"
                                :disabled="model.pawnList.length>1"
                                icon="md-add"
                                type="primary"
                                @click="add">
                            添加
                        </Button>
                    </div>
                    <div v-if="model.pawnList.length>1">
                        <Divider></Divider>
                        <Row>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        房产编号
                                    </label>
                                    {{model.pawnList[1].id || '-'}}
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem>
                                    <label slot="label"
                                           class="grey-light-color">
                                        共有类型
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].commonType"
                                            placeholder="选择共有类型">
                                        <Option v-for="item in dicts.COMMONTYPE"
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
                                <FormItem prop="pawnList[1].certificateType">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件类型
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].certificateType"
                                            placeholder="选择证件类型 | 必填">
                                        <Option v-for="item in dicts.CERTIFICATETYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].certificateCode">
                                    <label slot="label"
                                           class="grey-light-color">
                                        证件编号
                                    </label>
                                    <Input type="text"
                                           placeholder="证件编号 | 必填"
                                           v-model="model.pawnList[1].certificateCode"
                                           :maxlength="30"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].timeOfIssuing">
                                    <label slot="label"
                                           class="grey-light-color">
                                        发证日期
                                    </label>
                                    <DatePicker type="date"
                                                v-model="model.pawnList[1].timeOfIssuing"
                                                placeholder="选择发证日期 | 必填"
                                                clearable></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="pawnList[1].landCardCode">
                                    <label slot="label"
                                           class="grey-light-color">
                                        土地证编号
                                    </label>
                                    <Input type="text"
                                           v-model="model.pawnList[1].landCardCode"
                                           placeholder="土地证编号 | 必填"
                                           :maxlength="20"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].dateOfIssuing">
                                    <label slot="label"
                                           class="grey-light-color">
                                        发证日期
                                    </label>
                                    <DatePicker type="date"
                                                v-model="model.pawnList[1].dateOfIssuing"
                                                placeholder="选择发证日期 | 必填"
                                                clearable></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="16">
                                <Row>
                                    <Col span="10">
                                        <FormItem prop="local1">
                                            <label class="grey-light-color"
                                                   slot="label">
                                                地址
                                            </label>
                                            <Cascader clearable
                                                      v-model="model.local1"
                                                      :data="areas"
                                                      :load-data="loadData"
                                                      placeholder="选择省/市/区县"></Cascader>
                                        </FormItem>
                                    </Col>
                                    <Col span="14">
                                        <FormItem :label-width="10"
                                                  prop="pawnList[1].detailedAddress">
                                            <Input type="text"
                                                   :maxlength="100"
                                                   v-model="model.pawnList[1].detailedAddress"
                                                   clearable
                                                   placeholder="具体地址（到门牌号）"></Input>
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].communityName">
                                    <label slot="label"
                                           class="grey-light-color">
                                        小区名称
                                    </label>
                                    <Input type="text"
                                           :maxlength="50"
                                           v-model="model.pawnList[1].communityName"
                                           clearable
                                           placeholder="小区名称 | 必填"></Input>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="pawnList[1].buildingNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        楼栋号
                                    </label>
                                    <Input type="text"
                                           :maxlength="50"
                                           v-model="model.pawnList[1].buildingNumber"
                                           clearable
                                           placeholder="楼栋号 | 必填"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].totalFloor">
                                    <label slot="label"
                                           class="grey-light-color">
                                        总楼层
                                    </label>
                                    <InputNumber :min="0"
                                                 :precision="0"
                                                 v-model="model.pawnList[1].totalFloor"
                                                 style="width: 100%"
                                                 clearable
                                                 placeholder="总楼层 | 必填"></InputNumber>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].onFloor">
                                    <label slot="label"
                                           class="grey-light-color">
                                        所在楼层
                                    </label>
                                    <InputNumber :min="0"
                                                 :precision="0"
                                                 style="width: 100%"
                                                 v-model="model.pawnList[1].onFloor"
                                                 clearable
                                                 placeholder="所在楼层 | 必填"></InputNumber>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="pawnList[1].roomNumber">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房间号
                                    </label>
                                    <Input type="text"
                                           :maxlength="50"
                                           v-model="model.pawnList[1].roomNumber"
                                           clearable
                                           placeholder="房间号 | 必填"></Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].orientation">
                                    <label slot="label"
                                           class="grey-light-color">
                                        朝向
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].orientation"
                                            placeholder="选择朝向 | 必填">
                                        <Option v-for="item in dicts.ORIENTATION"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <Row>
                                    <Col span="12">
                                        <FormItem prop="pawnList[1].room">
                                            <label slot="label"
                                                   class="grey-light-color">
                                                户型
                                            </label>
                                            <InputNumber :min="0"
                                                         style="width: 100%"
                                                         :precision="0"
                                                         v-model="model.pawnList[1].room"
                                                         clearable
                                                         placeholder="室"></InputNumber>
                                        </FormItem>
                                    </Col>
                                    <Col span="6">
                                        <FormItem :label-width="1"
                                                  prop="pawnList[1].hall">
                                            <InputNumber :min="0"
                                                         style="width: 100%"
                                                         :precision="0"
                                                         v-model="model.pawnList[1].hall"
                                                         clearable
                                                         placeholder="厅"></InputNumber>
                                        </FormItem>
                                    </Col>
                                    <Col span="6">
                                        <FormItem :label-width="1"
                                                  prop="pawnList[1].toilet">
                                            <InputNumber :min="0"
                                                         style="width: 100%"
                                                         :precision="0"
                                                         v-model="model.pawnList[1].toilet"
                                                         clearable
                                                         placeholder="卫"></InputNumber>
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="pawnList[1].houseAcreage">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房屋面积
                                    </label>
                                    <Input type="text"
                                           :maxlength="10"
                                           v-model="model.pawnList[1].houseAcreage"
                                           clearable
                                           placeholder="房屋面积 | 必填">
                                        <span slot="prepend">平米</span>
                                    </Input>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].houseType">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房屋类型
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].houseType"
                                            placeholder="选择房屋类型 | 必填">
                                        <Option v-for="item in dicts.HOUSETYPE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].houseNature">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房屋性质
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].houseNature"
                                            placeholder="选择房屋性质 | 必填">
                                        <Option v-for="item in dicts.HOUSENATURE"
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
                                <FormItem prop="pawnList[1].getTpye">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房产获得方式
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].getTpye"
                                            placeholder="选择房产获得方式 | 必填">
                                        <Option v-for="item in dicts.GETTPYE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="8">
                                <FormItem prop="pawnList[1].landSource">
                                    <label slot="label"
                                           class="grey-light-color">
                                        土地来源
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].landSource"
                                            placeholder="选择土地来源 | 必填">
                                        <Option v-for="item in dicts.LANDSOURCE"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <!--<Col span="8">-->
                            <!--<FormItem prop="pawnList[1].landType">-->
                            <!--<label slot="label"-->
                            <!--class="grey-light-color">-->
                            <!--土地性质-->
                            <!--</label>-->
                            <!--<Select clearable-->
                            <!--v-model="model.pawnList[1].landType"-->
                            <!--placeholder="选择土地性质 | 必填">-->
                            <!--<Option v-for="item in dicts.LANDTYPE"-->
                            <!--:value="item.id"-->
                            <!--:key="item.id">-->
                            <!--{{item.text}}-->
                            <!--</Option>-->
                            <!--</Select>-->
                            <!--</FormItem>-->
                            <!--</Col>-->
                            <Col span="8">
                                <FormItem prop="pawnList[1].ageOfCompletion">
                                    <label slot="label"
                                           class="grey-light-color">
                                        建成年代
                                    </label>
                                    <DatePicker type="year"
                                                format="yyyy"
                                                @on-change="model.pawnList[1].ageOfCompletion=$event"
                                                v-model="model.pawnList[1].ageOfCompletion"
                                                placeholder="选择建成年代 | 必填"
                                                clearable></DatePicker>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                                <FormItem prop="pawnList[1].propertyStatic">
                                    <label slot="label"
                                           class="grey-light-color">
                                        房产现状
                                    </label>
                                    <Select clearable
                                            v-model="model.pawnList[1].propertyStatic"
                                            placeholder="选择房产现状 | 必填">
                                        <Option v-for="item in dicts.PROPERTYSTATIC"
                                                :value="item.id"
                                                :key="item.id">
                                            {{item.text}}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="16"
                                 class="text-right">
                                <FormItem>
                                    <Tooltip content="删除"
                                             placement="top">
                                        <a @click="del">
                                            <Icon type="md-close"
                                                  :size="20"
                                                  color="#ed4014"></Icon>
                                        </a>
                                    </Tooltip>
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Panel>
        </Collapse>
        <br>
        <photo :model="model"></photo>
    </div>
</template>

<script src="../../components/tabs/mortgagesInformation.js"></script>