<template>
  <div class="details">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <span>报价详情</span>
      <img src="../../assets/fenxiang.png" alt />
    </header>
    <div class="big">
      <div class="first">
        <div class="small">
          <img src="../../assets/xiaoche.png" alt />
        </div>
        <p>别克 英朗</p>
      </div>
      <div class="second">
        <p>2019款 1.5T 双离合互联精英型 国VI</p>
      </div>
      <div class="third">
        <div>
          <img src="../../assets/qian.png" alt />
        </div>
        <p>
          厂商指导价:
          <span>22.49万</span>
        </p>
        <div class="find" @click="toCanshu()">
          <p>查看该车型详细参数</p>
          <div class="number">
            <img src="../../assets/xiaojiantou.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="offer">
      <div class="contain">
        <div>
          <img src="../../assets/xiaoren.png" alt />
        </div>
        <p>已有23家车商参与报价</p>
      </div>
    </div>
    <div class="list">
      <div class="the" v-for="value in 10" :key="value">
        <div>李*帅</div>
        <div>22.9万</div>
        <div>16：30</div>
      </div>
    </div>
    <div class="talk">
      <a href="tel:400-111-3777">沟通顾问</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiangqing",
  components: {},
  data() {
    return {};
  },
  // created() {
  //   // let token = "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT";
  //   let id1 = localStorage.getItem("id1");
  //   console.log(id1)
  //   this.axios
  //     .post("https://api.chejiangshan.com/deal-xunjia", {
  //       token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
  //       pub_id: id1
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //     });
  // },
  methods: {
    fanhui() {
      this.$router.push({ path: "/xunjiajilu" });
    },
    toCanshu() {
      this.$router.push({ path: "/canshu" });
    }
  }
};
</script>
<style scoped>
.details {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
li {
  list-style-type: none;
}
header {
  width: 100%;
  padding-top: 15px;
  height: 64px;
  margin-left: 15px;
  background: #ffffff;
  border-bottom: 1px solid #f6f7fb;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
header img:first-child {
  width: 9px;
  height: 17px;
  margin-right: 120px;
}
header img:last-child {
  width: 15px;
  height: 15px;
  margin-left: 113px;
}
header span {
  font-size: 18px;
  color: #333333;
}
.big {
  margin-top: 80px;
  width: 100%;
  height: 80px;
}
.first img {
  width: 14px;
  height: 14px;
  margin-left: 15px;
  margin-right: 5px;
  line-height: 14px;
}
.first {
  display: flex;
  width: 100%;
  height: 25px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}
.second {
  width: 100%;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  margin-left: 15px;
}
.third {
  width: 100%;
  height: 20px;
  margin-left: 15px;
  display: flex;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.third span {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 20px;
}
.third img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.find {
  width: 158px;
  height: 20px;
  display: flex;
  margin-left: 73px;
}
.find p {
  width: 108px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
}
.number {
  width: 10px;
  height: 20px;
  line-height: 20px;
}
.number img {
  width: 8px;
  height: 14px;
  margin-left: 5px;
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.offer {
  width: 100%;
  height: 42px;
}
.contain {
  width: 100%;
  height: 42px;
  display: flex;
  line-height: 42px;
  margin-left: 15px;
}
.contain p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.contain img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.list {
  width: 100%;
  flex: 1;
}
.the {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
.the {
  height: 40px;
}
.talk {
  width: 100%;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: center;
}
.talk a {
  text-decoration: none;
}
</style>