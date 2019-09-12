import Vue from 'vue'
import App from './App.vue'
import MessageBox from './components/messageBox';

Vue.use(MessageBox);
new Vue({
  el: '#app',
  render: h => h(App)
})
