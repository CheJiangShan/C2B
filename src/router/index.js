import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"pay",
      component:resolve => require(['@/components/pay/pay'],resolve)
    },//买车首页
    {
      path: '/new',
      name:"new",
      component:resolve => require(['@/components/pay/new'],resolve)
    },
    {
      path: '/second',
      name:"second",
      component:resolve => require(['@/components/pay/second'],resolve)
    },
    {
      path: '/xunjiajilu',
      name:"xunjiajilu",
      component:resolve => require(['@/components/xunjiajilu/xunjiajilu'],resolve)
    },//买车-询价记录
    // {
    //   path: '/xunjiajilu1',
    //   name:"xunjiajilu",
    //   component:resolve => require(['@/components/xunjiajilu/xunjiajilu1'],resolve)
    // },//买车-询价记录
    {
      path: '/wode',
      name:"wode",
      component:resolve => require(['@/components/wode/wode'],resolve)
    },//我的
    {
      path: '/xiangqing',
      name:"xiangqing",
      component:resolve => require(['@/components/xunjiajilu/xiangqing'],resolve)
    },//询价详情
    {
      path: '/xiangqing1',
      name:"xiangqing1",
      component:resolve => require(['@/components/xiangqing/xiangqing1'],resolve)
    },//详情
    {
      path: '/sell1',
      name:"sell1",
      component:resolve => require(['@/components/sell/sell1'],resolve)
    },//卖车
    {
      path: '/type',
      name:"type",
      component:resolve => require(['@/components/sell/type'],resolve)
    },//车型
    {
      path: '/assess',
      name:"assess",
      component:resolve => require(['@/components/sell/assess'],resolve)
    },//评估报告
    {
      path: '/pinggujilu',
      name:"pinggujilu",
      component:resolve => require(['@/components/sell/pinggujilu'],resolve)
    },
    {
      path:'/shouye',
      name:'shouye',
      component:resolve => require(['@/components/yongche/shouye'],resolve)
    },//卖车首页
    {
      path:'/cheku',
      name:'cheku',
      component:resolve => require(['@/components/yongche/cheku'],resolve)
    },//车库
    {
      path:'/aiche',
      name:'aiche',
      component:resolve => require(['@/components/yongche/aiche'],resolve)
    },//爱车详情
    {
      path:'/jingxi',
      name:'jingxi',
      component:resolve => require(['@/components/yongche/jingxi'],resolve)
    },//用车精洗
    {
      path:'/dingdan',
      name:'dingdan',
      component:resolve => require(['@/components/yongche/dingdan'],resolve)
    },//用车订单
    {
      path: '/shop',
      name:"shop",
      component:resolve => require(['@/components/shop/shop'],resolve)
    },//商城
    {
      path: '/canshu',
      name:"canshu",
      component:resolve => require(['@/components/xunjiajilu/canshu'],resolve)
    },//询价记录 报价详情 参数配置
    {
      path: '/many',
      name:"many",
      component:resolve => require(['@/components/pay/many'],resolve)
    }//搜索新车或者二手车的结果
  ]
})
