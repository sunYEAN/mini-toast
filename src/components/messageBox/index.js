import Vue from 'vue';
import info from './info';
import success from './success';
import load from './load';
import warn from './warn';

let components = {
    info,
    warn,
    load,
    success
};

const VueComponents = {};
const message = function (type) {

    if (!VueComponents[type]) {
        const Instance = Vue.extend(components[type]);
        VueComponents[type] = new Instance().$mount();
        document.body.appendChild(VueComponents[type].$el);
    }
    return VueComponents[type];
};

function install(Vue) {

    Vue.prototype.$info = message('info');
    Vue.prototype.$warn = message('warn');
    Vue.prototype.$load = message('load');
    Vue.prototype.$success = message('success');
}

message.install = install;

export default message;





