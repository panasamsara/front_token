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
                         v-for="item in uploads.borrower">
                        <template v-if="item.status === 'finished'">
                            <Tooltip placement="left-end"
                                     content="删除"
                                     style="position: absolute; margin: 96px 0 0 36px;">
                                <Icon type="md-close-circle"
                                      size="24"
                                      color="#ed4014"
                                      @click="remove('borrower',item)"></Icon>
                            </Tooltip>
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
                        </template>
                        <template v-else>
                            <div style="line-height: 120px; width: 100%">
                                <Progress v-if="item.showProgress"
                                          :percent="item.percentage"
                                          hide-info></Progress>
                            </div>
                        </template>
                    </div>
                    <Upload ref="borrower"
                            :before-upload="beforeUpload"
                            :show-upload-list="false"
                            :on-success="uploadSuccess"
                            :on-error="uploadError"
                            :default-file-list="defaults.borrower"
                            :format="['gif','jpg','jpeg','png','pdf','mp4']"
                            :max-size="10240"
                            :on-format-error="formatError"
                            :on-exceeded-size="handleMaxSize"
                            :data="{projectFileGroup:'4'}"
                            type="drag"
                            multiple
                            :action="$config.uploadUrl"
                            class="inline-block">
                        <div class="upload">
                            <div class="child mask text-center">
                                <Icon type="md-cloud-upload"
                                      color="#0071b9"
                                      size="40"></Icon>
                                <p>上传文件</p>
                            </div>
                        </div>
                    </Upload>
                    <Divider></Divider>
                    <FormItem :label-width="40">
                        <label slot="label"
                               class="grey-light-color">备注</label>
                        <Input type="textarea"
                               v-model="model.hmProjectClob.clientFileRemark"
                               clearable
                               :maxlength="500"
                               placeholder="备注"></Input>
                    </FormItem>
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
                         v-for="item in uploads.occupation">
                        <template v-if="item.status === 'finished'">
                            <Tooltip placement="left-end"
                                     content="删除"
                                     style="position: absolute; margin: 96px 0 0 36px;">
                                <Icon type="md-close-circle"
                                      size="24"
                                      color="#ed4014"
                                      @click="remove('occupation',item)"></Icon>
                            </Tooltip>
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
                        </template>
                        <template v-else>
                            <div style="line-height: 120px; width: 100%">
                                <Progress v-if="item.showProgress"
                                          :percent="item.percentage"
                                          hide-info></Progress>
                            </div>
                        </template>
                    </div>
                    <Upload ref="occupation"
                            :before-upload="beforeUpload"
                            :show-upload-list="false"
                            :on-success="uploadSuccess"
                            :on-error="uploadError"
                            :default-file-list="defaults.occupation"
                            :data="{projectFileGroup:'5'}"
                            :format="['gif','jpg','jpeg','png','pdf','mp4']"
                            :max-size="10240"
                            :on-format-error="formatError"
                            :on-exceeded-size="handleMaxSize"
                            type="drag"
                            multiple
                            :action="$config.uploadUrl"
                            class="inline-block">
                        <div class="upload">
                            <div class="child mask text-center">
                                <Icon type="md-cloud-upload"
                                      color="#0071b9"
                                      size="40"></Icon>
                                <p>上传文件</p>
                            </div>
                        </div>
                    </Upload>
                    <Divider></Divider>
                    <FormItem :label-width="40">
                        <label slot="label"
                               class="grey-light-color">备注</label>
                        <Input type="textarea"
                               clearable
                               v-model="model.hmProjectClob.marriageFileRemark"
                               :maxlength="500"
                               placeholder="备注"></Input>
                    </FormItem>
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
                         v-for="item in uploads.credit">
                        <template v-if="item.status === 'finished'">
                            <Tooltip placement="left-end"
                                     content="删除"
                                     style="position: absolute; margin: 96px 0 0 36px;">
                                <Icon type="md-close-circle"
                                      size="24"
                                      color="#ed4014"
                                      @click="remove('credit',item)"></Icon>
                            </Tooltip>
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
                        </template>
                        <template v-else>
                            <div style="line-height: 120px; width: 100%">
                                <Progress v-if="item.showProgress"
                                          :percent="item.percentage"
                                          hide-info></Progress>
                            </div>
                        </template>
                    </div>
                    <Upload ref="credit"
                            :before-upload="beforeUpload"
                            :show-upload-list="false"
                            :on-success="uploadSuccess"
                            :on-error="uploadError"
                            :default-file-list="defaults.credit"
                            :format="['gif','jpg','jpeg','png','pdf','mp4']"
                            :max-size="10240"
                            :on-format-error="formatError"
                            :on-exceeded-size="handleMaxSize"
                            :data="{projectFileGroup:'6'}"
                            type="drag"
                            multiple
                            :action="$config.uploadUrl"
                            class="inline-block">
                        <div class="upload">
                            <div class="child mask text-center">
                                <Icon type="md-cloud-upload"
                                      color="#0071b9"
                                      size="40"></Icon>
                                <p>上传文件</p>
                            </div>
                        </div>
                    </Upload>
                    <Divider></Divider>
                    <FormItem :label-width="40">
                        <label slot="label"
                               class="grey-light-color">备注</label>
                        <Input type="textarea"
                               clearable
                               v-model="model.hmProjectClob.creditFileRemark"
                               :maxlength="500"
                               placeholder="备注"></Input>
                    </FormItem>
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
                         v-for="item in uploads.common">
                        <template v-if="item.status === 'finished'">
                            <Tooltip placement="left-end"
                                     content="删除"
                                     style="position: absolute; margin: 96px 0 0 36px;">
                                <Icon type="md-close-circle"
                                      size="24"
                                      color="#ed4014"
                                      @click="remove('common',item)"></Icon>
                            </Tooltip>
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
                        </template>
                        <template v-else>
                            <div style="line-height: 120px; width: 100%">
                                <Progress v-if="item.showProgress"
                                          :percent="item.percentage"
                                          hide-info></Progress>
                            </div>
                        </template>
                    </div>
                    <Upload ref="common"
                            :before-upload="beforeUpload"
                            :show-upload-list="false"
                            :on-success="uploadSuccess"
                            :on-error="uploadError"
                            :default-file-list="defaults.common"
                            :format="['gif','jpg','jpeg','png','pdf','mp4']"
                            :max-size="10240"
                            :on-format-error="formatError"
                            :on-exceeded-size="handleMaxSize"
                            :data="{projectFileGroup:'7'}"
                            type="drag"
                            multiple
                            :action="$config.uploadUrl"
                            class="inline-block">
                        <div class="upload">
                            <div class="child mask text-center">
                                <Icon type="md-cloud-upload"
                                      color="#0071b9"
                                      size="40"></Icon>
                                <p>上传文件</p>
                            </div>
                        </div>
                    </Upload>
                    <Divider></Divider>
                    <FormItem :label-width="40">
                        <label slot="label"
                               class="grey-light-color">备注</label>
                        <Input type="textarea"
                               clearable
                               v-model="model.hmProjectClob.warrantorFileRemark"
                               :maxlength="500"
                               placeholder="备注"></Input>
                    </FormItem>
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
                         v-for="item in uploads.mortgages">
                        <template v-if="item.status === 'finished'">
                            <Tooltip placement="left-end"
                                     content="删除"
                                     style="position: absolute; margin: 96px 0 0 36px;">
                                <Icon type="md-close-circle"
                                      size="24"
                                      color="#ed4014"
                                      @click="remove('mortgages',item)"></Icon>
                            </Tooltip>
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
                        </template>
                        <template v-else>
                            <div style="line-height: 120px; width: 100%">
                                <Progress v-if="item.showProgress"
                                          :percent="item.percentage"
                                          hide-info></Progress>
                            </div>
                        </template>
                    </div>
                    <Upload ref="mortgages"
                            :before-upload="beforeUpload"
                            :show-upload-list="false"
                            :on-success="uploadSuccess"
                            :on-error="uploadError"
                            :default-file-list="defaults.mortgages"
                            :format="['gif','jpg','jpeg','png','pdf','mp4']"
                            :max-size="10240"
                            :on-format-error="formatError"
                            :on-exceeded-size="handleMaxSize"
                            :data="{projectFileGroup:'8'}"
                            type="drag"
                            multiple
                            :action="$config.uploadUrl"
                            class="inline-block">
                        <div class="upload">
                            <div class="child mask text-center">
                                <Icon type="md-cloud-upload"
                                      color="#0071b9"
                                      size="40"></Icon>
                                <p>上传文件</p>
                            </div>
                        </div>
                    </Upload>
                    <Divider></Divider>
                    <FormItem :label-width="40">
                        <label slot="label"
                               class="grey-light-color">备注</label>
                        <Input type="textarea"
                               clearable
                               v-model="model.hmProjectClob.pawnFileRemark"
                               :maxlength="500"
                               placeholder="备注"></Input>
                    </FormItem>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>

<script src="../../components/tabs/projectInformation.js"></script>