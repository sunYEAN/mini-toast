<template>
    <transition name="wrap">
        <div v-show="visible" class="messageBox success">
            <i class="icon icon-success"></i>
            <span>{{message}}</span>
        </div>
    </transition>
</template>

<script>
    import mixin from './mixin';
    export default {
        name: "error",
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
    .success{
        width: 110px;
        height: 110px;
        display: flex;
        padding: 10px;
        font-size: 14px;
        margin-top: -55px;
        margin-left: -55px;
        flex-direction: column;
        justify-content: space-between;
    }
    .success > span{
        color: rgba(255, 255, 255, .8);
        display: block;
        margin-bottom: 3px;
    }
    .success > .icon-success {
        width: 60px;
        height: 60px;
        margin: 0 auto;
        border: 1px solid #fff;
        display: block;
        background: url("./images/success.png")no-repeat center center;
        border-radius: 50%;
        background-size: 60%;
    }
</style>
