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
    data() {
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
    0% {
      background-color: rgba(255, 255, 255, 1);
    }
    100% {
      background-color: rgba(255, 255, 255, .2);
    }
  }

  .load {
    width: 110px;
    min-height: 110px;
    padding: 8px;
    font-size: 14px;
    margin-top: -55px;
    margin-left: -55px;
  }

  .load > span {
    color: rgba(255, 255, 255, .8);
    display: block;
    margin-top: 4px;
  }

  .load > .loading {
    width: 65px;
    height: 65px;
    margin: 0 auto;
    flex-shrink: 0;
    position: relative;
  }

  .load > .loading > .bar {
    top: 50%;
    left: 50%;
    width: 2px;
    height: 15px;
    display: block;
    position: absolute;
    margin-top: -7px;
    margin-left: -1px;
    border-radius: 4px;
  }

  .load > .loading > .bar:nth-of-type(1) {
    transform: translate3d(0, -20px, 0) rotate(0deg);
    animation: load 0.8s 0s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(2) {
    transform: translate3d(14px, -14px, 0) rotate(45deg);
    animation: load 0.8s 0.1s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(3) {
    transform: translate3d(20px, 0px, 0) rotate(90deg);
    animation: load 0.8s 0.2s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(4) {
    transform: translate3d(14px, 14px, 0) rotate(135deg);
    animation: load 0.8s 0.3s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(5) {
    transform: translate3d(0px, 20px, 0) rotate(180deg);
    animation: load 0.8s 0.4s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(6) {
    transform: translate3d(-14px, 14px, 0) rotate(225deg);
    animation: load 0.8s 0.5s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(7) {
    transform: translate3d(-20px, 0px, 0) rotate(270deg);
    animation: load 0.8s 0.6s linear infinite;
  }

  .load > .loading > .bar:nth-of-type(8) {
    transform: translate3d(-14px, -14px, 0) rotate(315deg);
    animation: load 0.8s 0.7s linear infinite;
  }
</style>
