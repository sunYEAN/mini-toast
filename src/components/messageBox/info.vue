<template>
    <transition name="wrap">
        <div v-show="visible" class="messageBox info" v-html="message"></div>
    </transition>
</template>

<script>
    import mixin from './mixin';
    export default {
        name: "info",
        mixins: [mixin],
    }
</script>

<style scoped>
    @import "./index.css";
    .info{
        width: 100px;
        padding: 10px;
        font-size: 14px;
        margin-top: -20px;
        margin-left: -50px;
    }
</style>
