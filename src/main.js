
import Vue from 'vue'
import App from './App'
import router from './router'
import '../rem'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'  
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from "echarts";



Vue.prototype.axios = axios 
Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(Vant);
Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
