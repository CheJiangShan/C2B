<template>
  <div class="que">
    <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1"> <router-link :to="'/'">
              <span>买车</span>
            </router-link></mt-tab-item>
          <mt-tab-item id="2">
            <router-link :to="'sell1'">
              <span>卖车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="3">
            <router-link :to="'shouye'">
              <span>用车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="4">
              <span>商城</span>
          </mt-tab-item>
        </mt-navbar>
      </nav>
      <img src="../../assets/1.png" alt />
    </div>
    <div class="kong">
      <img src="../../assets/shop.png" alt />
      <p>开发中......</p>
    </div>
    <foote></foote>
  </div>
</template>
<script>
import foote from "../other/foote";
export default {
  components: {
    foote
  },
  data() {
    return { selected: "4" };
  },
  methods: {}
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.roof {
   padding-top: 15px;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
}
.roof img {
  width: 19px;
  height: 19px;
}
nav {
  color: #aaaaaa;
  width: 80%;
  height: 50px;
}
nav .sell {
  text-decoration: none;
  color: #aaaaaa;
  font-size: 12px;
  line-height: 13px;
}
.mint-navbar {
  height: 42px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid rgba(63, 100, 253, 1);
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  color: #333333;
  margin-bottom: -6px
}
.mint-navbar .mint-tab-item.is-selected span{
  font-size: 18px;
}
.mint-tab-item-label a span{
  font-size: 16px
}
.que {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
header {
  width: 100%;
  padding-top: 15px;
  height: 64px;
  padding-left: 15px;
  background: #ffffff;
  border-bottom: 1px solid #f6f7fb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
header p {
  font-size: 18px;
  color: #333333;
  text-align: center;
}
.kong {
  margin-top: 80px;
}
.kong img {
  width: 153px;
  height: 190px;
  margin: 144px 103px 0 109px;
}
.kong p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 120px;
  text-align: center;
}
</style>