import Vue from "vue";
import Router from "vue-router";
import { MessageBox } from "mint-ui";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "pay",
      meta: {
        needlogin: false
      },
      component: resolve => require(["@/components/pay/pay"], resolve)
    }, //买车首页
    {
      path: "/new",
      name: "new",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/pay/new"], resolve)
    },
    {
      path: "/second",
      name: "second",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/pay/second"], resolve)
    },
    {
      path: "/xunjiajilu",
      name: "xunjiajilu",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/xunjiajilu/xunjiajilu"], resolve)
    }, //买车-询价记录
    {
      path: "/login",
      name: "login",
      component: resolve => require(["@/components/wode/login"], resolve)
    }, //登录注册
    {
      path: "/wode",
      name: "wode",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/wode"], resolve)
    }, //我的
    {
      path: "/aboutus",
      name: "aboutus",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/aboutus"], resolve)
    }, //关于我们
    {
      path: "/registerphone",
      name: "registerphone",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/wode/registerphone"], resolve)
    }, //修改注册手机号
    {
      path: "/changephone",
      name: "changephone",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/changephone"], resolve)
    }, //更换新手机号
    {
      path: "/upgrade",
      name: "upgrade",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/upgrade"], resolve)
    }, //版本
    {
      path: "/xiangqing",
      name: "xiangqing",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/xunjiajilu/xiangqing"], resolve)
    }, //询价详情
    {
      path: "/xiangqing1",
      name: "xiangqing1",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/xiangqing/xiangqing1"], resolve)
    }, //详情
    {
      path: "/sell1",
      name: "sell1",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/sell/sell1"], resolve)
    }, //卖车
    {
      path: "/type",
      name: "type",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/sell/type"], resolve)
    }, //车型
    {
      path: "/assess",
      name: "assess",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/sell/assess"], resolve)
    }, //评估报告
    {
      path: "/pinggujilu",
      name: "pinggujilu",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/sell/pinggujilu"], resolve)
    },
    {
      path: "/shouye",
      name: "shouye",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/shouye"], resolve)
    }, //卖车首页
    {
      path: "/carstore",
      name: "carstore",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/carstore"], resolve)
    }, //店铺列表
    {
      path: "/cheku",
      name: "cheku",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/cheku"], resolve)
    }, //车库
    {
      path: "/aiche",
      name: "aiche",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/aiche"], resolve)
    }, //爱车详情
    {
      path: "/jingxi",
      name: "jingxi",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/jingxi"], resolve)
    }, //用车精洗
    {
      path: "/quickorder",
      name: "quickorder",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/yongche/quickorder"], resolve)
    }, //快速预约
    {
      path: "/noorder",
      name: "noorder",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/noorder"], resolve)
    }, //快速预约
    {
      path: "/nopayment",
      name: "nopayment",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/nopayment"], resolve)
    }, //用车保养的未交付

    {
      path: "/completed",
      name: "completed",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/completed"], resolve)
    }, //用车保养的已完成
    {
      path: "/closed",
      name: "closed",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/closed"], resolve)
    }, //用车保养的已关闭
    {
      path: "/dingdan",
      name: "dingdan",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/yongche/dingdan"], resolve)
    }, //用车订单
    {
      path: "/technician",
      name: "technician",
      meta: {
        needlogin: true
      },
      component: resolve =>
        require(["@/components/yongche/technician"], resolve)
    },
    {
      path: "/set",
      name: "set",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/set"], resolve)
    }, //我的设置
    {
      path: "/call",
      name: "call",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/call"], resolve)
    }, //我的设置
    {
      path: "/sex",
      name: "sex",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/wode/sex"], resolve)
    }, //我的设置
    {
      path: "/shop",
      name: "shop",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/shop/shop"], resolve)
    }, //商城
    {
      path: "/canshu",
      name: "canshu",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/xunjiajilu/canshu"], resolve)
    }, //询价记录 报价详情 参数配置
    {
      path: "/many",
      name: "many",
      meta: {
        needlogin: true
      },
      component: resolve => require(["@/components/pay/many"], resolve)
    }, //搜索新车或者二手车的结果
    {
      path: "/completed",
      name: "completed",
      component: resolve => require(["@/components/yongche/completed"], resolve)
    }, //用车保养的已完成
    {
      path: "/closed",
      name: "closed",
      component: resolve => require(["@/components/yongche/closed"], resolve)
    }, //用车保养的已关闭
    {
      path: "/dingdan",
      name: "dingdan",
      component: resolve => require(["@/components/yongche/dingdan"], resolve)
    }, //用车订单
    {
      path: "/set",
      name: "set",
      component: resolve => require(["@/components/wode/set"], resolve)
    }, //设置
    {
      path: "/call",
      name: "call",
      component: resolve => require(["@/components/wode/call"], resolve)
    }, //称呼
    {
      path: "/shop",
      name: "shop",
      component: resolve => require(["@/components/shop/shop"], resolve)
    }, //商城
    {
      path: "/canshu",
      name: "canshu",
      component: resolve => require(["@/components/xunjiajilu/canshu"], resolve)
    }, //询价记录 报价详情 参数配置
    {
      path: "/many",
      name: "many",
      component: resolve => require(["@/components/pay/many"], resolve)
    }, //搜索新车或者二手车的结果
    {
      path: "/news",
      name: "news",
      component: resolve => require(["@/components/News/news"], resolve)
    }, //消息
    {
      path: "/inform",
      name: "inform",
      component: resolve => require(["@/components/News/inform"], resolve)
    }, //订单通知
    {
      path: "/system",
      name: "system",
      component: resolve => require(["@/components/News/system"], resolve)
    }, //系统消息
    {
      path: "/newsDetail",
      name: "newsDetail",
      component: resolve => require(["@/components/News/newsDetail"], resolve)
    }, //系统消息详情
    {
      path: "/activity",
      name: "activity",
      component: resolve => require(["@/components/News/activity"], resolve)
    } //优惠活动详情
  ]
});
// 路由守卫进行拦截
router.beforeEach((to, from, next) => {
  if (to.meta.needlogin) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({
        path: "/"
      });
      MessageBox.confirm("", {
        message: "主人,您还没有登录呦???",
        title: "提示",
        confirmButtonText: "前去登录",
        cancelButtonText: "就是不去"
      })
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            console.log(1);
            next({
              path: "/login"
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            console.log(2);
          }
        });
    }
  } else {
    next();
  }
});

export default router;
