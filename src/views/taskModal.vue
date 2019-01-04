<template>
    <div>
        <Tabs :animated="false"
              v-model="tabName">
            <TabPane v-for="item in tabs"
                     v-if="item.isShow"
                     :name="item.id"
                     :key="item.id"
                     :label="item.text"></TabPane>
        </Tabs>
        <keep-alive>
            <component :is="currentTabComponent"
                       :model="model"
                       :step="2">
            </component>
        </keep-alive>
    </div>
</template>

<script src="../components/taskModal.js"></script>