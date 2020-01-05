
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from "echarts";
import router from './router'
import '../rem'
import axios from 'axios'  



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

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})