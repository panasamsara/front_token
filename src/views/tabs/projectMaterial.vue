<template>
  <div>
    <div>
      <Collapse value="borrowerInfo">
        <Panel
          name="borrowerInfo"
          :hide-arrow="true"
        >
          <strong>
            借款人基本资料
          </strong>
          <div slot="content">
              <div
                class="files inline-block mr16 mt16"
                v-for="item in getFiles('4')"
              >
                <a
                  v-if="item.suffix==='.pdf'"
                  :href="item.path"
                  target="_blank"
                  class="upload default pdf"
                ></a>
                <a
                  v-else-if="item.suffix==='.mp4'"
                  :href="item.path"
                  target="_blank"
                  class="upload default mp4"
                ></a>
                <a
                  class="fancy1 upload default"
                  v-else
                  data-fancybox-group="gallery"
                  :href="item.path"
                  :style="{backgroundImage: 'url('+item.path+')'}"
                ></a>
              </div>
            <Divider></Divider>
            <p>备注: {{comments.clientFileRemark||'-'}}</p>
          </div>
        </Panel>
      </Collapse>
    </div>
    <br>
    <div>
      <Collapse value="mateInfo">
        <Panel
          name="mateInfo"
          :hide-arrow="true"
        >
          <strong>
            借款人及配偶婚姻材料
          </strong>
          <div slot="content">
              <div
                class="files inline-block mr16 mt16"
                v-for="item in getFiles('5')"
              >
                <a
                  v-if="item.suffix==='.pdf'"
                  :href="item.path"
                  target="_blank"
                  class="upload default pdf"
                ></a>
                <a
                  v-else-if="item.suffix==='.mp4'"
                  :href="item.path"
                  target="_blank"
                  class="upload default mp4"
                ></a>
                <a
                  class="fancy2 upload default"
                  v-else
                  data-fancybox-group="gallery"
                  :href="item.path"
                  :style="{backgroundImage: 'url('+item.path+')'}"
                ></a>
              </div>
            <Divider></Divider>
            <p>备注: {{comments.clientReplenishRemark||'-'}}</p>
          </div>
        </Panel>
      </Collapse>
    </div>
    <br>
    <div>
      <Collapse value="creditInfo">
        <Panel
          name="creditInfo"
          :hide-arrow="true"
        >
          <strong>
            借款人信用资料
          </strong>
          <div slot="content">
              <div
                class="files inline-block mr16 mt16"
                v-for="item in getFiles('6')"
              >
                <a
                  v-if="item.suffix==='.pdf'"
                  :href="item.path"
                  target="_blank"
                  class="upload default pdf"
                ></a>
                <a
                  v-else-if="item.suffix==='.mp4'"
                  :href="item.path"
                  target="_blank"
                  class="upload default mp4"
                ></a>
                <a
                  class="fancy3 upload default"
                  v-else
                  data-fancybox-group="gallery"
                  :href="item.path"
                  :style="{backgroundImage: 'url('+item.path+')'}"
                ></a>
              </div>
            <Divider></Divider>
            <p>备注: {{comments.creditFileRemark||'-'}}</p>
          </div>
        </Panel>
      </Collapse>
    </div>
    <br>
    <div>
      <Collapse value="guarantorInfo">
        <Panel
          name="guarantorInfo"
          :hide-arrow="true"
        >
          <strong>
            共借人或担保人资料
          </strong>
          <div slot="content">
              <div
                class="files inline-block mr16 mt16"
                v-for="item in getFiles('7')"
              >
                <a
                  v-if="item.suffix==='.pdf'"
                  :href="item.path"
                  target="_blank"
                  class="upload default pdf"
                ></a>
                <a
                  v-else-if="item.suffix==='.mp4'"
                  :href="item.path"
                  target="_blank"
                  class="upload default mp4"
                ></a>
                <a
                  class="fancy4 upload default"
                  v-else
                  data-fancybox-group="gallery"
                  :href="item.path"
                  :style="{backgroundImage: 'url('+item.path+')'}"
                ></a>
              </div>
            <Divider></Divider>
            <p>备注: {{comments.warrantorFileRemark||'-'}}</p>
          </div>
        </Panel>
      </Collapse>
    </div>
    <br>
    <div>
      <Collapse value="collateralInfo">
        <Panel
          name="collateralInfo"
          :hide-arrow="true"
        >
          <strong>
            抵押物资料
          </strong>
          <div slot="content">
              <div
                class="files inline-block mr16 mt16"
                v-for="item in getFiles('8')"
              >
                <a
                  v-if="item.suffix==='.pdf'"
                  :href="item.path"
                  target="_blank"
                  class="upload default pdf"
                ></a>
                <a
                  v-else-if="item.suffix==='.mp4'"
                  :href="item.path"
                  target="_blank"
                  class="upload default mp4"
                ></a>
                <a
                  class="fancy5 upload default"
                  v-else
                  data-fancybox-group="gallery"
                  :href="item.path"
                  :style="{backgroundImage: 'url('+item.path+')'}"
                ></a>
              </div>
            <Divider></Divider>
            <p>备注: {{comments.pawnFileRemark||'-'}}</p>
          </div>
        </Panel>
      </Collapse>
    </div>
    <br>
  </div>
</template>

<script src="../../components/tabs/projectMaterial.js"></script>