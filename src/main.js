import Vue from 'vue'
import iView from 'iview'
import App from './app.vue'
import '../theme/index.less'
import router from "./router/index.js"
import config from './config/config.js'
import VueLocalStorage from 'vue-localstorage'
import axios from './libs/api.request.js'
import echarts from 'echarts'
import './libs/filter.js'
import 'babel-polyfill'
import 'fancybox/dist/js/jquery.fancybox.pack'
import 'fancybox/dist/helpers/js/jquery.fancybox-buttons'

Vue.use(VueLocalStorage);
Vue.use(iView);

Vue.config.productionTip = false;
Vue.prototype.$config = config;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    data: {
        eventHub: new Vue()
    }
});
