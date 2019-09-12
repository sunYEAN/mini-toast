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
        width: 220px;
        height: 220px;
        display: flex;
        padding: 25px 20px 30px 20px;
        font-size: 28px;
        margin-top: -110px;
        margin-left: -110px;
        flex-direction: column;
        justify-content: space-between;
    }
    .warn > span{
        color: rgba(255, 255, 255, .8);
        display: block;
    }
    .warn > .icon-warn {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border: 1px solid #fff;
        display: block;
        background: url("./images/warn.png")no-repeat center center;
        border-radius: 50%;
        background-size: 80%;
    }
</style>
