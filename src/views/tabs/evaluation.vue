<template>
    <div>
        <Row v-if="step>0 && item.agencyText"
             v-for="item in evaluationList.filter((value)=>{
                return value.evalType==='2'
             })"
             :key="item.id"
             class="mt16">
            <Col span="3"
                 class="text-right grey-light-color">
                机构评估
            </Col>
            <Col span="4"
                 class="pl10">
                {{item.agencyText || '-'}}
            </Col>
            <Col span="4"
                 class="pl10">
                {{(item.evalVal || '-')+'元'}}
            </Col>
            <Col span="13"
                 v-if="item.preEvalFile"
                 class="pl10">
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
        </Row>
        <Row v-if="step>1 && item.agencyText"
             v-for="item in evaluationList.filter((value)=>{
                return value.evalType==='0'
             })"
             :key="item.id"
             class="mt16">
            <Col span="3"
                 class="text-right grey-light-color">
                中介评估
            </Col>
            <Col span="4"
                 class="pl10">
                {{item.agencyText || '-'}}
            </Col>
            <Col span="4"
                 class="pl10">
                {{(item.evalVal || '-')+'元'}}
            </Col>
            <Col span="13"
                 class="pl10"
                 v-if="item.url">
                <a :href="/^http(s)?:\/\//.test(item.url) ? item.url : 'http://'+item.url"
                   target="_blank">
                    {{item.url}}
                </a>
            </Col>
        </Row>
        <Row v-if="step>0"
             class="mt16">
            <Col span="3"
                 class="text-right grey-light-color">
                初评价值
            </Col>
            <Col span="21"
                 class="pl10">
                {{(model.firstEvalueText || '-')+'元'}}
            </Col>
        </Row>
    </div>
</template>

<script src="../../components/tabs/evaluation.js"></script>