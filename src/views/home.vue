<template>
    <div>
        <div v-for="item in dataList"
             :class="'default bg inline-block pd10 '+item.background">
            <p class="white-color font28">
                {{item.number}}
            </p>
            <label class="white-color">
                {{item.title}}
            </label>
        </div>
        <Divider></Divider>
        <div id="charts" style="width: 100%; height: 400px"></div>
    </div>
</template>
<script src="../components/home.js"></script>