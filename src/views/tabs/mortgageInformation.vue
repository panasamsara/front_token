<template>
    <Collapse value="mortgages">
        <Panel name="mortgages"
               :hide-arrow="true">
            <strong>
                抵押物信息
            </strong>
            <div slot="content">
                <Row>
                    <Col span="3"
                         class="text-right grey-light-color">
                        竣工日期
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{mortgage.completionDate || '-'}}
                    </Col>
                    <Col span="3"
                         class="text-right grey-light-color">
                        建成日期
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{mortgage.dateCompletion || '-'}}
                    </Col>
                    <Col span="3"
                         class="text-right grey-light-color">
                        测绘日期
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{mortgage.mappingDate || '-'}}
                    </Col>
                </Row>
                <br>
                <Row>
                    <Col span="3"
                         class="text-right grey-light-color">
                        土地取得日期
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{mortgage.landGetDate || '-'}}
                    </Col>
                    <Col span="3"
                         class="text-right grey-light-color">
                        建筑面积
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{(mortgage.buidingAcreage || '-')+'平米'}}
                    </Col>
                    <Col span="3"
                         class="text-right grey-light-color">
                        房屋类型
                    </Col>
                    <Col span="5"
                         class="pl10">
                        {{mortgage.houseTypeText || '-'}}
                    </Col>
                </Row>
                <br>
                <Row>
                    <Col span="3"
                         class="text-right grey-light-color">
                        地址
                    </Col>
                    <Col span="21"
                         class="pl10">
                        {{(mortgage.province || '-')+(mortgage.city || '-')+(mortgage.area ||
                        '-')+(mortgage.detailedAddress || '-')}}
                    </Col>
                </Row>
                <evaluation :model="model"
                            :step="step"></evaluation>
            </div>
        </Panel>
    </Collapse>
</template>

<script src="../../components/tabs/mortgageInformation.js"></script>