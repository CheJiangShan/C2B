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
          <span>{{ msglist.model }}</span>
        </div>
        <p>{{ msglist.plate_num }}</p>
      </div>
      <p class="type">2019款 1.5T 双离合互联精英型 国VI</p>
      <div class="heading">
        <p>车辆识别代码：{{ msglist.vin }}</p>
        <div class="code">
          <p>发动机号码：{{ msglist.engine_num }}</p>
          <span>
            车辆详细配置
            <img src="../../assets/xiaojiantou.png" alt />
          </span>
        </div>
      </div>
    </div>
    <div class="record">
      <div id="searchBar">
        <mt-navbar
          :class="searchBarFixed == true ? 'isFixed' : ''"
          v-model="selected"
        >
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
        <!-- 保养记录 -->
        <mt-tab-container-item id="1">
          <li v-for="item in upkeeplist" :key="item.id">
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span v-if="item.status == 1">待预约</span>
              <span v-if="item.status == 2">待交付/维保中</span>
              <span v-if="item.status == 3">已完工</span>
              <span v-if="item.status == 0">已交付</span>
            </div>
            <div class="curing">
              <span>{{ item.title }}等</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
          <div class="noupdata" v-if="upkeeplist.length == 0">
            <img
              style="width:174px;
height:201px;"
              src="../../assets/que.png"
              alt=""
            />
            <p>还没有保养过爱车</p>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
          <li v-for="value in ruleslist" :key="value">
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

          <div class="rules" v-if="ruleslist.length == 0">
            <img
              style="width:174px;
height:201px;"
              src="../../assets/que.png"
              alt=""
            />
            <p>行驶状况良好，没有违章记录哦</p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <p class="next" v-show="upkeeplist.length > 0">以下为4S店养护记录</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
      searchBarFixed: false,
      upkeeplist: [],
      state: "",
      msg: [],
      // datashow: false, //4S店养护记录
      ruleslist: [],
      msglist: []
    };
  },
  created() {
    // console.log(this.$route.query.id);
    let id = this.$route.query.id;
    if (this.selected == 1) {
      this.axios
        .post("https://api.chejiangshan.com/usecar-carmsg", {
          token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
          car_id: id
        })
        .then(res => {
          console.log(res);

          if (res.data.data.order == "无记录") {
            this.upkeeplist = [];
          } else {
            this.upkeeplist = res.data.data.order;
          }
          this.msglist = res.data.data.car;
          console.log(this.msglist);
          // this.datashow = true;
        });
    }
  },
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
      // console.log(scrollTop);
      // let offsetTop = document.querySelector("#location").offsetTop;
      if (scrollTop > 140) {
        this.searchBarFixed = true;
        // alert("1")
      } else {
        this.searchBarFixed = false;
      }
    }
  },
  watch: {},
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
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
  margin-top: 80px;
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
/* 空空如也 */
.noupdata {
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.noupdata p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 22px;
  margin-top: 40px;
}

.rules {
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rules p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 22px;
  margin-top: 40px;
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
