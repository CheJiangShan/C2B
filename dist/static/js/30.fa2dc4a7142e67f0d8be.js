webpackJsonp([30],{oBVN:function(t,s){},ysFh:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{selected:"1",searchBarFixed:!1,upkeeplist:[],state:"",msg:[],ruleslist:[],msglist:[]}},created:function(){var t=this,s=this.$route.query.id;1==this.selected&&this.axios.post("https://api.chejiangshan.com/usecar-carmsg",{token:"pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",car_id:s}).then(function(s){console.log(s),"无记录"==s.data.data.order?t.upkeeplist=[]:t.upkeeplist=s.data.data.order,t.msglist=s.data.data.car,console.log(t.msglist)})},mounted:function(){window.addEventListener("scroll",this.handleScroll)},computed:{},methods:{fanhui:function(){this.$router.go(-1)},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.searchBarFixed=t>140}},watch:{},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mine"},[a("header",[a("img",{attrs:{src:e("VQC2"),alt:""},on:{click:function(s){return t.fanhui()}}}),t._v(" "),a("p",[t._v("爱车详情")])]),t._v(" "),a("div",{staticClass:"bieke"},[a("div",{staticClass:"text"},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:e("w9sq"),alt:""}}),t._v(" "),a("span",[t._v(t._s(t.msglist.model))])]),t._v(" "),a("p",[t._v(t._s(t.msglist.plate_num))])]),t._v(" "),a("p",{staticClass:"type"},[t._v("2019款 1.5T 双离合互联精英型 国VI")]),t._v(" "),a("div",{staticClass:"heading"},[a("p",[t._v("车辆识别代码："+t._s(t.msglist.vin))]),t._v(" "),a("div",{staticClass:"code"},[a("p",[t._v("发动机号码："+t._s(t.msglist.engine_num))]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"record"},[a("div",{attrs:{id:"searchBar"}},[a("mt-navbar",{class:1==t.searchBarFixed?"isFixed":"",model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[a("div",[a("span",[t._v("保养记录")])])]),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[a("div",[a("span",[t._v("违章记录")])])])],1)],1),t._v(" "),a("mt-tab-container",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[t._l(t.upkeeplist,function(s){return a("li",{key:s.id},[a("div",{staticClass:"finish"},[a("span",[t._v(t._s(s.storm_name))]),t._v(" "),1==s.status?a("span",[t._v("待预约")]):t._e(),t._v(" "),2==s.status?a("span",[t._v("待交付/维保中")]):t._e(),t._v(" "),3==s.status?a("span",[t._v("已完工")]):t._e(),t._v(" "),0==s.status?a("span",[t._v("已交付")]):t._e()]),t._v(" "),a("div",{staticClass:"curing"},[a("span",[t._v(t._s(s.title)+"等")]),t._v(" "),a("span",{staticClass:"serve"},[t._v("共2次服务")]),t._v(" "),a("span",[t._v("¥65.00")])]),t._v(" "),a("p",{staticClass:"serial"},[t._v("订单编号："+t._s(s.order_num))])])}),t._v(" "),0==t.upkeeplist.length?a("div",{staticClass:"noupdata"},[a("img",{staticStyle:{width:"174px",height:"201px"},attrs:{src:e("7bJh"),alt:""}}),t._v(" "),a("p",[t._v("还没有保养过爱车")])]):t._e()],2),t._v(" "),a("mt-tab-container-item",{attrs:{id:"2"}},[t._l(t.ruleslist,function(s){return a("li",{key:s},[a("div",{staticClass:"finish"},[a("span",[t._v("陇海路店")]),t._v(" "),a("span",[t._v("已完成")])]),t._v(" "),a("div",{staticClass:"curing"},[a("span",[t._v("违章记录")]),t._v(" "),a("span",{staticClass:"serve"},[t._v("共2次违章")]),t._v(" "),a("span",[t._v("¥65.00")])]),t._v(" "),a("p",{staticClass:"serial"},[t._v("订单编号：20191014123456123")])])}),t._v(" "),0==t.ruleslist.length?a("div",{staticClass:"rules"},[a("img",{staticStyle:{width:"174px",height:"201px"},attrs:{src:e("7bJh"),alt:""}}),t._v(" "),a("p",[t._v("行驶状况良好，没有违章记录哦")])]):t._e()],2)],1),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.upkeeplist.length>0,expression:"upkeeplist.length > 0"}],staticClass:"next"},[t._v("以下为4S店养护记录")])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[this._v("\n            车辆详细配置\n            "),s("img",{attrs:{src:e("5fEP"),alt:""}})])}]};var n=e("VU/8")(a,i,!1,function(t){e("oBVN")},"data-v-5c80b03e",null);s.default=n.exports}});
//# sourceMappingURL=30.fa2dc4a7142e67f0d8be.js.map