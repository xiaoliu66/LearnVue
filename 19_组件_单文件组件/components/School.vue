/* 配置模板结构 */
<template>
    <div>
        <h2 class="title">学校名：{{ name }}</h2>
        <h2 class="info" @click="showAddress">学校地址：{{ address }}</h2>
    </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
// 此处只是暴露了一个组件的配置，并没有去创建组件。没有调用Vue.extend()
export default {
    data() {
        return {
            name: "光明小学",
            address: "xxxx",
        };
    },
    methods: {
        showAddress() {
            console.log(this);
        }
    },
};
</script>

/* 配置组件样式*/
<style lang="css">
    .title{
        background-color: aqua;
    }

    .info{
        background-color: orangered;
    }
</style>
