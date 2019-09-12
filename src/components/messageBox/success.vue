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
        width: 220px;
        height: 220px;
        display: flex;
        padding: 20px;
        font-size: 28px;
        margin-top: -110px;
        margin-left: -110px;
        flex-direction: column;
        justify-content: space-between;
    }
    .success > span{
        color: rgba(255, 255, 255, .8);
        display: block;
        margin-bottom: 5px;
    }
    .success > .icon-success {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border: 1px solid #fff;
        display: block;
        background: url("./images/success.png")no-repeat center center;
        border-radius: 50%;
        background-size: 60%;
    }
</style>
