<template>
    <transition name="wrap">
        <div class="messageBox load" v-show="visible">
            <div class="loading animate">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <span>{{message || '正在加载中'}}</span>
        </div>
    </transition>
</template>

<script>
    import mixin from './mixin';
    export default {
        name: "load",
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
    @keyframes load {
        0%{
            background-color: rgba(255, 255, 255, 1);
        }
        100%{
            background-color: rgba(255, 255, 255, .2);
        }
    }
    .load{
        width: 220px;
        height: 220px;
        padding: 20px;
        font-size: 28px;
        margin-top: -110px;
        margin-left: -110px;
    }
    .load > span{
        color: rgba(255, 255, 255, .8);
        display: block;
        margin-top: 10px;
    }
    .load > .loading {
        width: 130px;
        height: 130px;
        margin: 0 auto;
        position: relative;
    }
    .load > .loading > .bar {
        top: 50%;
        left: 50%;
        width: 4px;
        height: 30px;
        display: block;
        position: absolute;
        margin-top: -15px;
        margin-left: -2px;
        border-radius: 8px;
    }
    .load > .loading > .bar:nth-of-type(1){
        transform: translate3d(0, -40px, 0) rotate(0deg);
        animation: load 0.8s 0s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(2){
        transform: translate3d(28px, -28px, 0) rotate(45deg);
        animation: load 0.8s 0.1s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(3){
        transform: translate3d(40px, 0px, 0) rotate(90deg);
        animation: load 0.8s 0.2s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(4){
        transform: translate3d(28px, 28px, 0) rotate(135deg);
        animation: load 0.8s 0.3s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(5){
        transform: translate3d(0px, 40px, 0) rotate(180deg);
        animation: load 0.8s 0.4s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(6){
        transform: translate3d(-28px, 28px, 0) rotate(225deg);
        animation: load 0.8s 0.5s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(7){
        transform: translate3d(-40px, 0px, 0) rotate(270deg);
        animation: load 0.8s 0.6s linear infinite;
    }
    .load > .loading > .bar:nth-of-type(8){
        transform: translate3d(-28px, -28px, 0) rotate(315deg);
        animation: load 0.8s 0.7s linear infinite;
    }
</style>
