<template>
  <div class="dingdan">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>我的订单</p>
      </header>
      <div class="record">
      <div id="searchBar">
        <mt-navbar  v-model="selected">
          <mt-tab-item id="1">
            <div>
              <span>全部</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="2">
            <div>
              <span>待预约</span>
            </div>
          </mt-tab-item>
           <mt-tab-item id="3">
            <div>
              <span>违章记录</span>
            </div>
          </mt-tab-item>
        </mt-navbar>
      </div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <li v-for="value in 4" :key="value">
            <div class="finish">
              <span>陇海路店</span>
              <span>已完成</span>
            </div>
            <div class="curing">
              <span>保准洗车服务等</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：20191014123456123</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <li v-for="value in 4" :key="value">
            <div class="finish">
              <span>陇海路店</span>
              <span>已完成</span>
            </div>
            <div class="curing">
              <span>违章记录</span>
              <span class="serve">共2次违章</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：20191014123456123</p>
          </li>
        </mt-tab-container-item>
      </mt-tab-container>
      <p class="next">以下为4S店养护记录</p>
    </div>
    
    <footeree></footeree>
  </div>
</template>

<script>
import footeree from "../other/footer.vue";
export default {
  name: "dingdan",
  components: {
    footeree
  },
  data() {
    return {
        selected: "1",
    };
  },
  created() {},
  mounted() {},
  methods: {
      fanhui() {
      this.$router.push({ path: "/shouye" });
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dingdan {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
li {
  list-style: none;
}
header {
  padding-top: 15px;
  padding-left: 15px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #f6f7fb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
header img {
  width: 9px;
  height: 17px;
}
header p {
  font-size: 18px;
  color: #333333;
  padding-left: 32%;
}
.record {
  width: 100%;
  margin-top: 80px
  /* flex: 1; */
}
.record .mint-tab-item {
  color: #a4a3a3;
}
.record .mint-navbar .mint-tab-item.is-selected {
  color: #3f64fd;
  border-bottom: 4px solid #3f64fd;
}
.record li {
  width: 345px;
  height: 109px;
  background: #f0f5ff;
  margin-left: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.record li:first-child {
  margin-top: 5px;
}
.finish {
  width: 320px;
  height: 32px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5e3ff;
}
.curing {
  /* width: 320px; */
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.serve {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  padding: 0 60px 0 55px;
}
.serial {
  width: 320px;
  margin: 0 auto;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
.next {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 30px;
  text-align: center;
}
</style>
