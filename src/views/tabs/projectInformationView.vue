<template>
    <div>
        <Collapse value="borrower">
            <Panel name="borrower"
                   :hide-arrow="true">
                <strong>
                    借款人基本资料
                </strong>
                <div slot="content">
                    <div class="files inline-block mr10 mt10 text-center"
                         v-for="item in defaults.borrower">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="mfancy1 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    <Divider></Divider>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            备注
                        </Col>
                        <Col span="22"
                             class="pl10">
                            {{model.hmProjectClob.clientFileRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="occupation">
            <Panel name="occupation"
                   :hide-arrow="true">
                <strong>
                    借款人及配偶婚姻材料
                </strong>
                <div slot="content">
                    <div class="files inline-block mr10 mt10 text-center"
                         v-for="item in defaults.occupation">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="mfancy2 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    <Divider></Divider>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            备注
                        </Col>
                        <Col span="22"
                             class="pl10">
                            {{model.hmProjectClob.marriageFileRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="credit">
            <Panel name="credit"
                   :hide-arrow="true">
                <strong>
                    借款人信用资料
                </strong>
                <div slot="content">
                    <div class="files inline-block mr10 mt10 text-center"
                         v-for="item in defaults.credit">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="mfancy3 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    <Divider></Divider>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            备注
                        </Col>
                        <Col span="22"
                             class="pl10">
                            {{model.hmProjectClob.creditFileRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="common">
            <Panel name="common"
                   :hide-arrow="true">
                <strong>
                    共借人或担保人资料
                </strong>
                <div slot="content">
                    <div class="files inline-block mr10 mt10 text-center"
                         v-for="item in defaults.common">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="mfancy4 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                    <Divider></Divider>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            备注
                        </Col>
                        <Col span="22"
                             class="pl10">
                            {{model.hmProjectClob.warrantorFileRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <br>
        <Collapse value="mortgages">
            <Panel name="mortgages"
                   :hide-arrow="true">
                <strong>
                    抵押物资料
                </strong>
                <div slot="content">
                    <div class="files inline-block mr10 mt10 text-center"
                         v-for="item in defaults.mortgages">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="mfancy5 upload default"
                           v-else
                           data-fancybox-group="gallery"
                           :href="item.path"
                           :style="{backgroundImage: 'url('+ item.path+')'}"></a>
                    </div>
                    <Divider></Divider>
                    <Row>
                        <Col span="2"
                             class="grey-light-color text-right">
                            备注
                        </Col>
                        <Col span="22"
                             class="pl10">
                            {{model.hmProjectClob.pawnFileRemark || '-'}}
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/projectInformationView.js"></script>