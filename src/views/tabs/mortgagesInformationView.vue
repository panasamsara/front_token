<template>
    <div>
        <Collapse value="house">
            <Panel name="house"
                   :hide-arrow="true">
                <strong>
                    房产基本信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房产编号
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].id || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            产权人
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.client.clientName}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            共有类型
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].commonTypeText || '-'}}
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
                            {{model.pawnList[0].certificateTypeText || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            证件编号
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].certificateCode || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            发证日期
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].timeOfIssuing || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            土地证编号
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].landCardCode || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            发证日期
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].dateOfIssuing || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            地址
                        </Col>
                        <Col span="14"
                             class="pl10">
                            {{(model.pawnList[0].province || '-')+(model.pawnList[0].city ||
                            '-')+(model.pawnList[0].area ||
                            '-')+(model.pawnList[0].detailedAddress || '-')}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            小区名称
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].communityName || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            楼栋号
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].buildingNumber || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            总楼层
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].totalFloor || model.pawnList[0].totalFloor===0 ? model.pawnList[0].totalFloor : '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            所在楼层
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].onFloor || model.pawnList[0].onFloor===0 ? model.pawnList[0].onFloor : '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房间号
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].roomNumber || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            朝向
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].orientationText || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            户型
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{(model.pawnList[0].room || model.pawnList[0].room===0 ? model.pawnList[0].room : '-')+'室'+(model.pawnList[0].hall || model.pawnList[0].hall===0 ?
                            model.pawnList[0].hall : '-')+'厅'+(model.pawnList[0].toilet || model.pawnList[0].toilet===0 ? model.pawnList[0].toilet : '-')+'卫'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房屋面积
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{(model.pawnList[0].houseAcreage || model.pawnList[0].houseAcreage===0 ? model.pawnList[0].houseAcreage : '-')+'平米'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房屋类型
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].houseTypeText || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房屋性质
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].houseNatureText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房产获得方式
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].getTpyeText || '-'}}
                        </Col>
                        <Col span="2"
                             class="grey-light-color text-right">
                            土地来源
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].landSourceText || '-'}}
                        </Col>
                        <!--<Col span="2"-->
                        <!--class="grey-light-color text-right">-->
                        <!--土地性质-->
                        <!--</Col>-->
                        <!--<Col span="6"-->
                        <!--class="pl10">-->
                        <!--{{model.pawnList[0].landTypeText || '-'}}-->
                        <!--</Col>-->
                        <Col span="2"
                             class="grey-light-color text-right">
                            建成年代
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].ageOfCompletion || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            房产现状
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{model.pawnList[0].propertyStaticText || '-'}}
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
                    共有人(至少填写1个)
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="24"
                             class="grey-light-color font12">
                            <Icon type="md-list"
                                  size="16"/>
                            共有人列表
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
        <photo :model="model"></photo>
        <br>
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
                                <a :href="item.preEvalFilePath"
                                   target="_blank">
                                    预估单
                                </a>
                            </Col>
                            <Col span="2"
                                 v-if="item.reportFile">
                                <a :href="item.reportFilePath"
                                   target="_blank">
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
        <Collapse class="mt16"
                  value="spare"
                  v-if="model.pawnList.length>1">
            <Panel name="spare"
                   :hide-arrow="true">
                <strong>
                    备用资产信息
                </strong>
                <div slot="content">
                    <div>
                        <Divider></Divider>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房产编号
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].id || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                共有类型
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].commonTypeText || '-'}}
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
                                {{model.pawnList[1].certificateTypeText || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                证件编号
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].certificateCode || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                发证日期
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].timeOfIssuing || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                土地证编号
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].landCardCode || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                发证日期
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].dateOfIssuing || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                地址
                            </Col>
                            <Col span="14"
                                 class="pl10">
                                {{(model.pawnList[1].province || '-')+(model.pawnList[1].city ||
                                '-')+(model.pawnList[1].area ||
                                '-')+(model.pawnList[1].detailedAddress || '-')}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                小区名称
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].communityName || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                楼栋号
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].buildingNumber || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                总楼层
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].totalFloor || model.pawnList[1].totalFloor===0 ? model.pawnList[1].totalFloor : '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                所在楼层
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].onFloor || model.pawnList[1].onFloor===0 ? model.pawnList[1].onFloor : '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房间号
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].roomNumber || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                朝向
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].orientationText || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                户型
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{(model.pawnList[1].room || model.pawnList[1].room===0 ? model.pawnList[1].room : '-')+'室'+(model.pawnList[1].hall || model.pawnList[1].hall===0 ?
                                model.pawnList[1].hall : '-')+'厅'+(model.pawnList[1].toilet || model.pawnList[1].toilet===0 ? model.pawnList[1].toilet : '-')+'卫'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房屋面积
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{(model.pawnList[1].houseAcreage || model.pawnList[1].houseAcreage===0 ? model.pawnList[1].houseAcreage : '-')+'平米'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房屋类型
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].houseTypeText || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房屋性质
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].houseNatureText || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房产获得方式
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].getTpyeText || '-'}}
                            </Col>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                土地来源
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].landSourceText || '-'}}
                            </Col>
                            <!--<Col span="2"-->
                            <!--class="grey-light-color text-right">-->
                            <!--土地性质-->
                            <!--</Col>-->
                            <!--<Col span="6"-->
                            <!--class="pl10">-->
                            <!--{{model.pawnList[1].landTypeText || '-'}}-->
                            <!--</Col>-->
                            <Col span="2"
                                 class="grey-light-color text-right">
                                建成年代
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].ageOfCompletion || '-'}}
                            </Col>
                        </Row>
                        <br>
                        <Row>
                            <Col span="2"
                                 class="grey-light-color text-right">
                                房产现状
                            </Col>
                            <Col span="6"
                                 class="pl10">
                                {{model.pawnList[1].propertyStaticText || '-'}}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/mortgagesInformationView.js"></script>