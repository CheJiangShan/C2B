webpackJsonp([8],{VJSu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),i=e.n(s),n=e("exGp"),r=e.n(n),_=e("YV+p"),v={data:function(){return{username:"",order_num:"",plate_num:"",model:"",mobile:"",storm_name:"",address:"",title:"",realname:"",create_time:"",yuyue_time:"",end_time:""}},created:function(){var t=this;return r()(i.a.mark(function a(){var e,s,n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.$route.query.order_id,console.log(e),s="pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",a.next=5,Object(_.i)(s,e);case 5:n=a.sent,console.log(n.data.data),t.username=n.data.data.username,t.realname=n.data.data.realname,t.mobile=n.data.data.mobile,t.order_num=n.data.data.order_num,t.model=n.data.data.model,t.plate_num=n.data.data.plate_num,t.storm_name=n.data.data.storm_name,t.address=n.data.data.address,t.title=n.data.data.title,t.create_time=n.data.data.create_time,t.yuyue_time=n.data.data.yuyue_time,t.end_time=n.data.data.end_time;case 19:case"end":return a.stop()}},a,t)}))()},mounted:function(){},computed:{},methods:{fanhui:function(){this.$router.go(-1)}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main"},[s("header",[s("img",{attrs:{src:e("VQC2"),alt:""},on:{click:function(a){return t.fanhui()}}}),t._v(" "),s("p",[t._v("订单详情")])]),t._v(" "),s("div",{staticStyle:{height:"64px"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"technician-name"},[s("span",[t._v(t._s(t.realname))])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"bar"}),t._v(" "),s("div",{staticClass:"car-owner"},[s("div",{staticClass:"owner"},[s("div",{staticClass:"owner-left"},[s("span",[t._v(t._s(t.username))]),t._v(" "),s("span",[t._v(t._s(t.mobile))])]),t._v(" "),s("div",{staticClass:"owner-right"},[s("span",[t._v(t._s(t.plate_num))])])]),t._v(" "),s("div",{staticClass:"ownerCar"},[s("span",[t._v(t._s(t.model))])]),t._v(" "),s("div",{staticClass:"owneraddress"},[s("img",{attrs:{src:e("/c9e"),alt:""}}),t._v(" "),s("div",{staticClass:"owneraddressTxt"},[s("p",[t._v(t._s(t.storm_name))]),t._v(" "),s("p",[t._v(t._s(t.address))])])])]),t._v(" "),s("div",{staticClass:"bar"}),t._v(" "),s("div",{staticClass:"repair-service"},[t._m(5),t._v(" "),s("div",{staticClass:"repair-txt"},[s("p",[t._v(t._s(t.title))]),t._v(" "),t._m(6)])]),t._v(" "),s("div",{staticClass:"bar"}),t._v(" "),s("div",{staticClass:"order"},[s("div",{staticClass:"order-detail"},[s("p",[s("span",[t._v("订单编号:")]),t._v(" "),s("span",[t._v(t._s(t.order_num))])]),t._v(" "),s("p",[s("span",[t._v("下单时间:")]),t._v(" "),s("span",[t._v(t._s(t.create_time))])]),t._v(" "),t._m(7),t._v(" "),s("p",[s("span",[t._v("预约确认时间:")]),t._v(" "),s("span",[t._v(t._s(t.yuyue_time))])]),t._v(" "),t._m(8),t._v(" "),s("p",{staticStyle:{"margin-bottom":"20px"}},[s("span",[t._v("订单关闭时间：")]),t._v(" "),s("span",[t._v(t._s(t.end_time))])])]),t._v(" "),t._m(9)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pay-title"},[a("span",[this._v("已关闭")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"time-detail"},[a("span",[this._v("车小二已于2019-10-15 11:00为您关闭该订单！")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"technician-pic"},[a("img",{attrs:{src:e("UH8H"),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tips"},[a("div",{staticClass:"line-left"}),this._v(" "),a("div",{staticClass:"tips-txt"},[a("span",[this._v("温馨提示")])]),this._v(" "),a("div",{staticClass:"line-right"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tips-detailA"},[a("p",{staticClass:"tips-detailA-txt"},[this._v("若您未享受到我们的服务或服务没有达到您的满意，请点击下方“投诉”按钮与我们取得联系，我们将为您提供1V1售后跟踪服务。祝您用车生活愉快！")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"repair-left"},[a("img",{attrs:{src:e("aziF"),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("¥线下报价及支付")]),this._v(" "),a("span",[this._v("X 1")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"payway"},[a("span",[this._v("支付方式:")]),this._v(" "),a("span",[this._v("线下支付")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("接待顾问：张小浩")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"complain"},[a("p",[this._v("投诉")])])}]};var d=e("VU/8")(v,c,!1,function(t){e("o7p9")},"data-v-2df71326",null);a.default=d.exports},o7p9:function(t,a){}});
//# sourceMappingURL=8.d2d16b70f17126cad0c3.js.map