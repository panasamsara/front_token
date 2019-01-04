<template>
    <div class="bg-white pd10">
        <Tabs :animated="false"
              v-model="tabName">
            <TabPane v-for="item in tabs"
                     :name="item.id"
                     :label="item.text"
                     :key="item.id"></TabPane>
            <Button @click="$root.eventHub.$emit('back', {name:'project', params:$router.currentRoute.params})"
                    slot="extra">
                返回
            </Button>
        </Tabs>
        <keep-alive>
            <component v-bind:is="currentTabComponent" :clientId='clientId'></component>
        </keep-alive>
        
    </div>
</template>

<script src="../components/projectInfo.js"></script>