<template>
  <div class="sell">
    <!-- 导航 -->
    <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <router-link :to="'pay'">
              <span>买车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="2">卖车
          </mt-tab-item>
          <mt-tab-item id="3">
            <router-link :to="'shouye'">
              <span>用车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="4"> <router-link :to="'shop'">
              <span>商城</span>
            </router-link></mt-tab-item>
        </mt-navbar>
      </nav>
      <img src="../../assets/1.png" alt />
    </div>
    <div class="pic">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="kind">
      <div class="middle">
        <div class="big">
          <li @click="xiayiji()">
            <span class="car">车辆型号:</span>
            <div class="urban">
              <span class="chi">{{name}}</span>
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </li>
          <li @click="xuanze()">
            <span class="car">所在城市:</span>
            <div class="urban">
              <span class="city">{{userregion}}</span>
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </li>
          <li @click="first()">
            <span class="car">首次上牌:</span>
            <div class="urban">
              <span class="time">{{timeValue}}</span>
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </li>
          <van-action-sheet v-model="time" title>
            <div class="timer" v-show="time">
              <van-datetime-picker
                v-model="currentDate"
                type="year-month"
                @change="changeFn()"
                @confirm="confirmFn()"
                @cancel="cancelFn()"
                :formatter="formatter"
              />
            </div>
          </van-action-sheet>
          <li @click="licheng()">
            <span class="car">行驶里程:</span>
            <div class="urban">
              <span class="meter"></span>
              <input class="shuru" type="text" placeholder="请输入" v-model="value1" dir="rtl" />
              <span class="in">万公里</span>
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </li>
          <van-action-sheet v-model="chey" title>
            <div v-show="chey">
              <van-area
                :columns-num="2"
                :area-list="areaList"
                value="110101"
                @confirm="onConfirm"
                @cancel="onCancel"
              />
            </div>
          </van-action-sheet>
        </div>
        <div class="last">
          <p>提交代表同意《个人信息保护声明》,并接受车小二来电服务。</p>
          <div class="assess" @click="goto()">我要卖车评估</div>
        </div>
      </div>
    </div>
    <div class="small"></div>
    <div class="question">
      <div class="answer">
        <P>卖车问答</P>
        <div class="how">
          <span>车江山如何帮我卖车</span>
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
        <div class="help">
          <span>车江山如何帮我卖车</span>
          <img src="../../assets/sanjiao.png" alt />
        </div>
        <div
          class="content"
        >车小二与您取得联系后，会安排二手车评估技师对您的车辆信息做最全面的评估收集，与您取得满意的卖出价格后，车辆可以选择上架车江山二手车频道，等待第三方用户购买，也可以由车江山平台直接收购，与您直接签署二手车收购协议。多种选择由您确认。</div>
        <div class="later">
          <span>卖车需要准备哪些材料</span>
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footere></footere>
  </div>
</template>
<script>
import footere from "../sellfooter/sellfooter";
import AreaList from "./area.js";
export default {
  name: "sell1",
  components: {
    footere,
  },
  data() {
    return {
      selected: "2",
      chey: false,
      areaList: AreaList,
      userregion: "河南省郑州市",
      time: false,
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(),
      timeValue: "2019-1",
      value1: "",
      name: "",
      suozaidi: ""
      // id:''
    };
  },
  created() {
    let id = this.$route.query.id;
    this.name = this.$route.query.name;
    // console.log(id)
    // console.log(name)
  },
  methods: {
    xiayiji() {
      this.$router.push({ path: "/type" });
    },
    xuanze() {
      this.chey = true;
    },
    first() {
      this.time = true;
    },
    licheng() {
      this.meters = true;
    },
    goto() {
      this.$router.push(
        { path: "/assess" },
        localStorage.setItem("list", this.userregion),
        localStorage.setItem("timer", this.timeValue),
        localStorage.setItem("miles", this.value1),
        localStorage.setItem("name", this.name),
        localStorage.setItem("suozaidi", this.suozaidi),
        // localStorage.setItem('id',this.id),
        // console.log(id),
        console.log(name)
      );
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    changeFn() {
      this.changeDate = this.currentDate; //值变化的时候触发
    },
    confirmFn() {
      this.time = false; //确认选择
      this.timeValue = this.timeFormat(this.currentDate);
    },
    cancelFn() {
      this.time = false;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month;
    },
    onConfirm(e) {
      this.showflag = true;
      this.chey = !this.chey;
      this.regiondata = e;
      this.userregion = this.regiondata[0].name + this.regiondata[1].name;
      this.suozaidi = this.regiondata[1].code;
    },
    onCancel() {
      this.chey = !this.chey;
    }
  }
};
</script>
<style scoped>
.sell {
  width: 100%;
  height: 100%;
  overflow: auto;
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
  color: #333333;
}
.pic {
  width: 100%;
  height: 180px;
  margin-top: 47px;
  margin-bottom: 20px;
}
.pic img {
  width: 100%;
  height: 180px;
}
.kind {
  width: 100%;
  height: 301px;
  margin-bottom: 20px;
}
.middle {
  width: 345px;
  height: 301px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
}
.big {
  width: 311px;
  height: 195px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
}
li {
  list-style: none;
  height: 40px;
  border-bottom: 1px solid #d5e3ff;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.car {
  width: 70px;
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.chi {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a4a3a3;
  line-height: 40px;
}
li img {
  width: 8px;
  height: 13px;
}
.select {
  width: 8px;
  height: 13px;
}
.city {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a4a3a3;
  line-height: 17px;
}
.time {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a4a3a3;
  line-height: 17px;
}
.meter {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.last p {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 70px;
  text-align: center;
}
.assess {
  width: 345px;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  border-radius: 0px 0px 5px 5px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: center;
}
.urban {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.urban img {
  margin-left: 3px;
}
.urban .shuru {
  background: #f0f5ff;
  text-align: center;
  width: 50px;
  border: 0;
  /* padding: 7px 16px; */
  font-size: 12px;
  color: #a4a3a3;
}
.in {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 40px;
}
.timer {
  width: 375px;
  height: 260px;
  background: #fff;
  position: fixed;
  bottom: 0;
}
.small {
  width: 100%;
  height: 15px;
  background: #f6f7fb;
}
.question {
  width: 100%;
  height: 340px;
}
.answer {
  margin-left: 15px;
}
.answer p {
  height: 42px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 42px;
  border-bottom: 24px;
}
.how {
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f7fb;
}
.how span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
}
.how img {
  width: 8px;
  height: 14px;
}
.help {
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f7fb;
}
.help span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
}
.help img {
  width: 14px;
  height: 8px;
}
.content {
  width: 345px;
  height: 94px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.later {
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
}
.later img {
  width: 8px;
  height: 13px;
}
</style>