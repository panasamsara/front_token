<template>
    <Collapse value="photo">
        <Panel name="photo"
               :hide-arrow="true">
            <strong>
                现场照片
            </strong>
            <div slot="content">
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        小区正门
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('15')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy15 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        小区内景
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('16')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy16 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        建筑外观
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('17')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy17 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        进入楼门
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('18')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy18 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        开门进屋
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('19')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy19 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        室内照片
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('20')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy20 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        客户合影
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('21')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy21 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        客厅自拍
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('22')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy22 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
                <br>
                <Card dis-hover="">
                    <label slot="title"
                           class="grey-light-color font12">
                        中介头像合影
                    </label>
                    <div class="files inline-block mr10 mt10"
                         v-for="item in getFiles('23')">
                        <a v-if="item.suffix==='.pdf'"
                           :href="item.path"
                           target="_blank"
                           class="upload default pdf"></a>
                        <a v-else-if="item.suffix==='.mp4'"
                           :href="item.path"
                           target="_blank"
                           class="upload default mp4"></a>
                        <a class="pfancy23 upload default"
                           v-else
                           :href="item.path"
                           data-fancybox-group="gallery"
                           :style="{backgroundImage: 'url('+item.path+')'}"></a>
                    </div>
                </Card>
            </div>
        </Panel>
    </Collapse>
</template>

<script src="../../components/tabs/photo.js"></script>