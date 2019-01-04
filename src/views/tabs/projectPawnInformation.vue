<template>
    <div>
        <Collapse value="information">
            <Panel name="information"
                   :hide-arrow="true">
                <strong>
                    房产基本信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房产编号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.id ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            产权人
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.propertyHolder ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            共有类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.commonTypeText||'-'}} 
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.certificateTypeText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件号码
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.certificateCode ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            发证日期
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.timeOfIssuing||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地证编号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.landCardCode ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            地址
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.province}}{{pawnInfo.city}}{{pawnInfo.area}}{{pawnInfo.detailedAddress||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            小区名
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.communityName||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            楼栋号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.buildingNumber||'-'}}
                        </Col>
                    </Row>
                     <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            总楼层
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.totalFloor||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            所在楼层
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.onFloor ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房间号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.roomNumber ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            朝向
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.orientationText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            户型
                        </Col>
                        <Col span="5"
                             class="pl10">
                             {{(pawnInfo.room || '-')+'室'+(pawnInfo.hall ||
                            '-')+'厅'+(pawnInfo.toilet || '-')+'卫'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房屋面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.houseAcreage ||'-'}} 平米
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.houseTypeText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋性质
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.houseNatureText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房屋获得方式
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.getTpyeText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.landTypeText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地性质
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.landSourceText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            建成年代
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.ageOfCompletion ||'-'}} 年
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋现状
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{pawnInfo.propertyStaticText||'-'}}
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            内部结构
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.structureTypeText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            朝向
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.orientationText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            户型结构
                        </Col>
                        <Col span="5"
                             class="pl10">
                             {{(modelStructureArray[0] || '-')+'室'+(modelStructureArray[1] ||
                            '-')+'厅'+(modelStructureArray[2] || '-')+'卫'}}
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
                             {{(primitiveTypeArray[0] || '-')+'室'+(primitiveTypeArray[1] ||
                            '-')+'厅'+(primitiveTypeArray[2] || '-')+'卫'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            几梯几户
                        </Col>
                        <Col span="5"
                             class="pl10">
                             {{(ladderHouseholdsArray[0] || '-')+'梯'+(ladderHouseholdsArray[1] ||
                            '-')+'户'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            装修情况
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.decorateFlagText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有遮盖
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.coverFlagText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            采光
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.lightFlagText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            是否双拼房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.doubleHouseText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有异形
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.abnormityFlagText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            异形部位
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.abnormityPlace ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有打通
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.knockFlagText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            打通类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.knockTypeText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有赠送
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.giveText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            赠送部位
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.giveParts ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            赠送面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.giveArea }} 平米
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有花园
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.gardenText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            花园面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.gardenArea ||'-'}} 平米
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有露台
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.terraceText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            露台面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.terraceArea ||'-'}} 平米
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否景观房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.viewRoomText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            对应景观
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.landscape ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="7"
                             class="text-right grey-light-color">
                            是否海砂房、辐射屋、危楼等不易处置的抵押物
                        </Col>
                        <Col span="3"
                             class="pl10">
                            {{interviewInfo.unsuitableDisposalText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Divider />
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有垃圾站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.garbageStationText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有变电站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.substationText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否临街
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.streetFlagText ||'-'}}
                        </Col>
                    </Row>
                     <br>
                     <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有违章建筑
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.illegalFlagText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            违建位置
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.illegalPlace ||'-'}}
                        </Col>
                    </Row>
                     <br>
                     <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有标志性建筑
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.landmarkFlagText ||'-'}}
                        </Col>

                         <Col span="3"
                             class="text-right grey-light-color">
                            标志性建筑
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.landmarkBuilding ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            公交路线/公交站
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.busStation ||'-'}}
                        </Col>

                         <Col span="3"
                             class="text-right grey-light-color">
                            距离公交车站距离
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.busDistance ||'-'}} 米
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
                            {{interviewInfo.metroStation ||'-'}}
                        </Col>

                         <Col span="3"
                             class="text-right grey-light-color">
                            距离地铁站距离
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.metroDistance ||'-'}} 米
                        </Col>
                    </Row>
                    <br>
                    <Divider />
                     <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否学区房
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.schoolHouseText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            重点学区
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.school ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            是否有车位
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.parkingText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            车位面积
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.parkingArea ||'-'}} 平米
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            空置率
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.vacancyRate ||'-'}}%
                        </Col>
                    </Row>
                    <br>
                    <Divider />
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            商铺面宽
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.shopBreadth ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            年租金
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.yearlyRental ||'-'}} 元
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            周边年租金
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.aroundYearlyRental ||'-'}} 元
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
                            {{interviewInfo.aroundSellingPrice ||'-'}} 元
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            品牌商家
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.brandBusiness ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            所属商圈
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.businessCircle ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            税率类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.taxTypeText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            税率合计数
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.taxTotal ||'-'}}
                        </Col>
                    </Row>
                     <Divider />
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            借款人向居住人介绍调查员身份
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.introInterviewer ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                         <Col span="6"
                             class="text-right grey-light-color">
                            借款人向居住人介绍上门的目的
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.goalInterviewer ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                         <Col span="6"
                             class="text-right grey-light-color">
                            借款人在现场如何做居住人的思想工作
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.loanerIntro ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                         <Col span="6"
                             class="text-right grey-light-color">
                            居住者签署资料的配合度及其他情况
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{interviewInfo.cooperate ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                         <Col span="6"
                             class="text-right grey-light-color">
                            家中是否有80以上老人居住
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.hasOldText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            是否有病人、残疾人等居住
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.hasDisabledText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            是否发现黄赌毒等迹象
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.illegalityText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6"
                             class="text-right grey-light-color">
                            特殊备注
                        </Col>
                        <Col span="6"
                             class="pl10">
                            {{interviewInfo.specialNotes ||'-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="photo">
            <Panel name="photo"
                   :hide-arrow="true">
                <strong>
                    现场照片
                </strong>
                <div slot="content">
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        小区正门
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('15')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy1 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        小区内景
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('16')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy2 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        建筑外观
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('17')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy3 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        进入楼门
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('18')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy4 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        开门进屋
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('19')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy5 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        室内照片
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('20')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy6 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        客户合影
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('21')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy7 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        客厅自拍
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('22')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy8 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                    <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        中介头像合影
                    </label>
                    <div class="files inline-block mr16 mt16"
                         v-for="item in getFiles('23')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy9 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    </Card>
                    <br>
                </div>
                <br>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="standbyHoseInfo" v-if="standbyHoseInfo">
            <Panel name="standbyHoseInfo"
                   :hide-arrow="true">
                <strong>
                    备用房产基本信息
                </strong>
                <div slot="content">
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房产编号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.certificateCode||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            产权人
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.propertyHolder ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            共有类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.commonTypeText||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.certificatesTypeText ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            证件编号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.certificateCode||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            发证日期
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.timeOfIssuing||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房产证登记地址
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.certificateAddr ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地证编号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.landCardCode ||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            坐落
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.detailedAddress||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            小区名
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.communityName||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            楼栋号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.buildingNumber||'-'}}
                        </Col>
                    </Row>
                     <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            总楼层
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.totalFloor||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            所在楼层
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.onFloor ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房间号
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.roomNumber ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            朝向
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.orientation||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            户型
                        </Col>
                        <Col span="5"
                             class="pl10">
                             {{(standbyHoseInfo.room || '-')+'室'+(standbyHoseInfo.hall ||
                            '-')+'厅'+(standbyHoseInfo.toilet || '-')+'卫'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房屋面积(平米)
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.houseAcreage ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            环线位置(无)
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.orientation||'-'}}
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋类型
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.houseTypeText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋性质
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.houseNatureText ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            房屋获得方式
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.getTpyeText ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地来源
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.landSourceText||'-'}}
                        </Col>
                        <Col span="3"
                             class="text-right grey-light-color">
                            土地用途(无)
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.ladderHouseholds ||'-'}}
                        </Col>
                         <Col span="3"
                             class="text-right grey-light-color">
                            建成年代
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.ageOfCompletion ||'-'}}
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="3"
                             class="text-right grey-light-color">
                            房屋现状
                        </Col>
                        <Col span="5"
                             class="pl10">
                            {{standbyHoseInfo.propertyStatic||'-'}}
                        </Col>
                    </Row>
                    <br>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/projectPawnInformation.js"></script>