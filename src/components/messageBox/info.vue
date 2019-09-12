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
        width: 200px;
        padding: 20px;
        font-size: 28px;
        margin-top: -40px;
        margin-left: -100px;
    }
</style>
