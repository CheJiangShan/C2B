webpackJsonp([12],{qvhe:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{list:[]}},created:function(){var t=this;this.axios.post("https://api.chejiangshan.com/deal-usedmore",{pid:0}).then(function(s){console.log(s.data),t.list=s.data.data})},mounted:function(){},computed:{},methods:{fanhui:function(){this.$router.push({path:"/pay"})}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"second"},[i("header",[i("img",{attrs:{src:a("VQC2"),alt:""},on:{click:function(s){return t.fanhui()}}}),t._v(" "),i("p",[t._v("二手优价")])]),t._v(" "),i("div",{staticClass:"hot"},t._l(t.list,function(s,a){return i("li",{key:a,staticClass:"first"},[i("div",{staticClass:"all"},[i("div",{staticClass:"kind"},[i("p",[t._v(t._s(s.brand))])]),t._v(" "),i("div",{staticClass:"cost"},[i("p",[t._v("\n          厂商指导价:\n          "),i("span",[t._v(t._s(s.price)+"万")])])])]),t._v(" "),i("div",{staticClass:"down"},[i("div",{staticClass:"genre"},[i("p",[t._v(t._s(s.fullname))])]),t._v(" "),t._m(0,!0)])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"detail"},[s("a",{attrs:{href:"tel:400-111-3777"}},[this._v("沟通顾问")]),this._v(" "),s("div",{staticClass:"xiaojiantou"},[s("img",{attrs:{src:a("5fEP"),alt:""}})])])}]};var e=a("VU/8")(i,n,!1,function(t){a("swX7")},"data-v-cb22b222",null);s.default=e.exports},swX7:function(t,s){}});
//# sourceMappingURL=12.5b7c58505e7235649d3e.js.map