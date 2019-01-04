<template>
    <Collapse value="attachment">
        <Panel name="attachment"
               :hide-arrow="true">
            <strong>
                附件
            </strong>
            <div slot="content">
                <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        房产证/不动产登记证
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('0')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy0 upload default"
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
                        土地证
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('1')">
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
                        身份证
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('2')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy2 upload default"
                           data-fancybox-group="gallery"
                           v-else
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover>
                    <label class="grey-light-color font12"
                           slot="title">
                        配偶身份证
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('3')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="fancy3 upload default"
                           data-fancybox-group="gallery"
                           v-else
                           :href="item.path"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
            </div>
        </Panel>
    </Collapse>
</template>

<script src="../../components/tabs/files.js"></script>