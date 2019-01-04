<template>
    <div>
        <Row>
            <Col span="2"
                 class="text-right grey-light-color">
                下户人
            </Col>
            <Col span="6"
                 class="pl10">
                {{interview.interviewerName || '-'}}
            </Col>
            <Col span="2"
                 class="text-right grey-light-color">
                其他人员
            </Col>
            <Col span="6"
                 class="pl10">
                {{interview.otherInterviewerName || '-'}}
            </Col>
            <Col span="2"
                 class="text-right grey-light-color">
                下户时间
            </Col>
            <Col span="6"
                 class="pl10">
                {{interview.interviewTime || '-'}}
            </Col>
        </Row>
        <br>
        <Collapse value="house">
            <Panel name="house"
                   :hide-arrow="true">
                <strong>
                    房产信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            内部结构
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.structureTypeText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            朝向
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.orientationText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            户型结构
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.modelStructureArray[0] || interview.modelStructureArray[0]===0 ?
                            interview.modelStructureArray[0] : '-')+'室'+(interview.modelStructureArray[1] ||
                            interview.modelStructureArray[1]===0 ?
                            interview.modelStructureArray[1] : '-')+'厅'+(interview.modelStructureArray[2] ||
                            interview.modelStructureArray[2]===0 ? interview.modelStructureArray[2] : '-')+'卫'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            原始户型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.primitiveTypeArray[0] || interview.primitiveTypeArray[0]===0 ?
                            interview.primitiveTypeArray[0] : '-')+'室'+(interview.primitiveTypeArray[1] ||
                            interview.primitiveTypeArray[1]===0 ?
                            interview.primitiveTypeArray[1] : '-')+'厅'+(interview.primitiveTypeArray[2] ||
                            interview.primitiveTypeArray[2]===0 ? interview.primitiveTypeArray[2] : '-')+'卫'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            几梯几户
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.ladderHouseholdsArray[0] || interview.ladderHouseholdsArray[0]===0 ?
                            interview.ladderHouseholdsArray[0] : '-')+'梯'+(interview.ladderHouseholdsArray[1] ||
                            interview.ladderHouseholdsArray[1]===0 ?
                            interview.ladderHouseholdsArray[1] : '-')+'户'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            装修情况
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.decorateFlagText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有遮盖
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.coverFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            采光
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.lightFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            双拼房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.doubleHouseText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有异形
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.abnormityFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            异形部位
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.abnormityPlace || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有打通
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.knockFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            打通部位
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.knockTypeText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有赠送
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.giveText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            赠送部位
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.giveParts || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            赠送面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.giveArea || interview.giveArea===0 ? interview.giveArea : '-')+'平米'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有花园
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.gardenText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            花园面积
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.gardenArea || interview.gardenArea===0 ? interview.gardenArea : '-')+'平米'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有露台
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.terraceText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            露台面积
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.terraceArea || interview.terraceArea===0 ? interview.terraceArea : '-')+'平米'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            景观房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.viewRoomText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            对应景观
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.landscape || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            是否海砂房、辐射屋、危楼等不易处置的抵押物
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.unsuitableDisposalText || '-'}}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有垃圾站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.garbageStationText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有变电站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.substationText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            临街
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.streetFlagText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有违章建筑
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.illegalFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            违建位置
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.illegalPlace || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有标志性建筑
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.landmarkFlagText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            标志性建筑
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.landmarkBuilding || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            公交线路/公交站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.busStation || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            距离公交车站距离
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.busDistance || '-')+'米'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            地铁站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.metroStation || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            距离地铁站距离
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.metroDistance || interview.metroDistance===0 ? interview.metroDistance :
                            '-')+'米'}}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            学区房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.schoolHouseText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            重点学区
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{interview.school || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            有车位
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.parkingText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            车位面积
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.parkingArea || interview.parkingArea===0 ? interview.parkingArea : '-')+'平米'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            空置率
                        </Col>
                        <Col span="21"
                             class="pl10">
                            {{(interview.vacancyRate || interview.vacancyRate===0 ? interview.vacancyRate : '-')+'%'}}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            商铺面宽
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.shopBreadth || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            年租金
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.yearlyRental || '-')+'元'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            周边年租金
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.aroundYearlyRental || '-')+'元'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            周边售价
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{(interview.aroundSellingPrice || '-')+'元'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            品牌商家
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.brandBusiness || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            所属商圈
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.businessCircle || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            税费类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interview.taxTypeText || '-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            税费合计数
                        </Col>
                        <Col span="13"
                             class="pl10">
                            {{(interview.taxTotal || '-')+'元'}}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            借款人向居住人介绍调查员身份
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.introInterviewer || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            借款人向居住人介绍上门的目的
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.goalInterviewer || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            借款人在现场如何做居住人的思想工作
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.loanerIntro || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            居住者签署资料的配合度及其他情况
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.cooperate || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            家中有80以上老人居住
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.hasOldText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            有病人、残疾人等居住
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.hasDisabledText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            发现黄赌毒等迹象
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.illegalityText || '-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            特殊备注
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.specialNotes || '-'}}
                        </Col>
                    </Row>
                    <Divider></Divider>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            现场拍照时发现的异常(如有)
                        </Col>
                        <Col span="18"
                             class="pl10">
                            {{interview.photoException || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="intermediary">
            <Panel name="intermediary"
                   :hide-arrow="true">
                <strong>
                    中介询价
                </strong>
                <div slot="content">
                    <Row v-for="(item,index) in evaluationList"
                         v-if="item.agencyId && item.evalVal"
                         :key="item.id"
                         :class="index!=evaluationList.length-1 ? 'mb16' :''">
                        <Col span="4"
                             class="text-right">
                            {{item.agencyId || '-'}}
                        </Col>
                        <Col span="4"
                             class="pl10">
                            {{'估价: '+(item.evalVal || '-')+'元'}}
                        </Col>
                        <Col span="16"
                             class="pl10"
                             v-if="item.tel">
                            {{'联系方式: '+(item.tel || '-')}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <photo :model="model"></photo>
    </div>
</template>

<script src="../../components/tabs/householdData.js"></script>