<template>
  <div class="mine">
    <!-- 顶部 -->
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>爱车详情</p>
    </header>
    <div class="bieke">
      <div class="text">
        <div class="pic">
          <img src="../../assets/17.png" alt />
          <span>别克 英朗</span>
        </div>
        <p>豫A66666</p>
      </div>
      <p class="type">2019款 1.5T 双离合互联精英型 国VI</p>
      <div class="heading">
        <p>车辆识别代码：SAJAA22H6CFV34381</p>
        <div class="code">
          <p>发动机号码：605911334FG</p>
          <span>
            车辆详细配置
            <img src="../../assets/xiaojiantou.png" alt />
          </span>
        </div>
      </div>
    </div>
    <div class="record">
      <div id="searchBar">
        <mt-navbar :class="searchBarFixed == true ? 'isFixed' :''" v-model="selected">
          <mt-tab-item id="1">
            <div>
              <span>保养记录</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="2">
            <div>
              <span>违章记录</span>
            </div>
          </mt-tab-item>
        </mt-navbar>
      </div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <li v-for="value in 6" :key="value">
            <div class="finish">
              <span>陇海路店</span>
              <span>已完成</span>
            </div>
            <div class="curing">
              <span>小养护等</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：20191014123456123</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <li v-for="value in 6" :key="value">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
      searchBarFixed: false
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/cheku" });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      // let offsetTop = document.querySelector("#location").offsetTop;
      if (scrollTop > 140) {
        this.searchBarFixed = true;
        // alert("1")
      } else {
        this.searchBarFixed = false;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mine {
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
.bieke {
  width: 100%;
  height: 149px;
  border-bottom: 1px solid #f6f7fb;
  padding-left: 15px;
}
.text {
  margin-top: 64px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text img {
  width: 30px;
  height: 30px;
}
.text p {
  padding-right: 30px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.text span {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 21px;
  margin-left: 10px;
}
.pic {
  display: flex;
  align-items: center;
}
.type {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-bottom: 10px;
}
.heading p {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 25px;
}
.code {
  display: flex;
  justify-content: space-between;
}
.code span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 25px;
  padding-right: 30px;
}
.code img {
  width: 7px;
  height: 11px;
  padding-left: 5px;
}
.record {
  width: 100%;
  flex: 1;
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
.isFixed {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 64px;
  z-index: 999;
}
</style>