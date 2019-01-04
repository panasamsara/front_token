<template>
    <div>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                评估报告
            </Col>
            <Col span="2"
                 class="pl10">
                <template v-if="model.needEvalReport==='1'">
                    是
                </template>
                <template v-else>
                    否
                </template>
            </Col>
            <Col span="18"
                 class="pl10">
                <ul style="list-style-type: none; padding: 0; margin: 0">
                    <li v-for="item in files">
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
                           class="prefancy"
                           data-fancybox-group="gallery">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                抵押物信息描述
            </Col>
            <Col span="20"
                 class="pl10">
                {{interview.pawnInfoDesc || '-'}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                下户人员
            </Col>
            <Col span="8"
                 class="pl10">
                {{interview.interviewerName || '-'}}
            </Col>
            <Col span="4"
                 class="grey-light-color text-right">
                下户时间
            </Col>
            <Col span="8"
                 class="pl10">
                {{interview.interviewTime || '-'}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                借款人及担保人信息描述
            </Col>
            <Col span="20"
                 class="pl10">
                {{model.hmProjectClob.clientDesc || '-'}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                经营情况描述
            </Col>
            <Col span="20"
                 class="pl10">
                {{model.hmProjectClob.managementDesc || '-'}}
            </Col>
        </Row>
        <br>
        <Row>
            <Col span="4"
                 class="grey-light-color text-right">
                内审建议
            </Col>
            <Col span="20"
                 class="pl10">
                {{model.hmProjectClob.internalAuditAdvice || '-'}}
            </Col>
        </Row>
    </div>
</template>

<script src="../../components/tabs/internalAuditFormView.js"></script>