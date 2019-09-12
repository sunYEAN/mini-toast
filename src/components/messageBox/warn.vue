<template>
    <transition name="wrap">
        <div class="messageBox warn" v-show="visible">
            <i class="icon-warn"></i>
            <span>{{message}}</span>
        </div>
    </transition>
</template>

<script>
    import mixin from './mixin';
    export default {
        name: "warn",
        mixins: [mixin],
        data () {
            return {
                message: 123,
                interval: 3000
            }
        }
    }
</script>

<style scoped>
    @import "./index.css";
    .warn{
        width: 110px;
        height: 110px;
        display: flex;
        padding: 13px 10px 15px 10px;
        font-size: 14px;
        margin-top: -55px;
        margin-left: -55px;
        flex-direction: column;
        justify-content: space-between;
    }
    .warn > span{
        color: rgba(255, 255, 255, .8);
        display: block;
    }
    .warn > .icon-warn {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        border: 1px solid #fff;
        display: block;
        background: url("./images/warn.png")no-repeat center center;
        border-radius: 50%;
        background-size: 80%;
    }
</style>
