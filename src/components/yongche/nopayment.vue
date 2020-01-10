<template>
  <div class="main">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>订单详情</p>
    </header>
    <div style=" height: 64px;"></div>
    <div class="pay-title">
      <span>待交付</span>
    </div>
    <div class="time-detail">
      <span
        >车小二预计最快可在2019-10-15 10:00由{{realname}}班组为您进行服务</span
      >
    </div>
    <div class="technician-pic">
       <img src="../../assets/attention1.png" alt="" />
    </div>
    <div class="technician-name"><span>{{realname}}</span></div>
    <div class="tips">
      <div class="line-left"></div>
      <div class="tips-txt"><span>温馨提示</span></div>
      <div class="line-right"></div>
    </div>
    <div class="tips-detailA">
      <div class="tips-detailA-txt">
        <img src="../../assets/ellipse.png" alt="" />
        <span
          >若您当天到达店面，前车服务未结束，您将是之后的第一顺位，因此造成的等待，我们也将为您提供小礼品表达歉意！</span
        >
      </div>
    </div>
    <div class="tips-detailB">
      <div class="tips-detailB-txt">
        <img src="../../assets/ellipse.png" alt="" />
        <span
          >若您当天到达店面，前车服务未结束，您将是之后的第一顺位，因此造成的等待，我们也将为您提供小礼品表达歉意！</span
        >
      </div>
    </div>
    <div class="bar"></div>
    <div class="car-owner">
      <div class="owner">
        <div class="owner-left">
          <span>
            {{username}}
          </span>
          <span>
            {{mobile}}
          </span>
        </div>
        <div class="owner-right">
          <span>{{plate_num}}</span>
        </div>
      </div>
      <div class="ownerCar">
        <span>{{model}}</span>
      </div>
      <div class="owneraddress">
        <img src="../../assets/diangwei1.png" alt="" />
        <div class="owneraddressTxt">
          <p>{{storm_name}}</p>
          <p>{{address}}</p>
        </div>
      </div>
    </div>
    <div class="bar"></div>
    <div class="repair-service">
      <div class="repair-left">
        <img src="../../assets/xiaoche.png" alt="" />
      </div>
      <div class="repair-txt">
        <p>{{title}}</p>
        <p><span>¥线下报价及支付</span><span>X 1</span></p>
      </div>
    </div>
    <div class="bar"></div>
    <div class="order">
      <div class="order-detail">
        <p>
          <span>订单编号:</span>
          <span>{{order_num}}</span>
        </p>
        <p><span>下单时间:</span><span>{{create_time}}</span></p>
        <p class="payway"><span>支付方式:</span><span>线下支付</span></p>
        <p><span>预约确认时间:</span><span>{{yuyue_time}}</span></p>
        <p><span>接待顾问：张小浩</span></p>
      </div>
      <div class="receiver">
        <p>接待顾问：张小浩</p>
      </div>
    </div>
  </div>
</template>
<script>
import { orderDeta } from "../api/apisum";
export default {
  data() {
    return {
      username: "",
      order_num: "",
      plate_num: "",
      model: "",
      mobile: "",
      storm_name: "",
      address: "",
      title: "",
      realname: "",
      create_time: "",
      yuyue_time: "",
      end_time: ""
    };
  },
  async created() {
    let id = this.$route.query.order_id;
    console.log(id);
    let token = "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT";
    const res = await orderDeta(token, id);
    console.log(res.data.data);
    this.username = res.data.data.username;
    this.realname = res.data.data.realname;
    this.mobile = res.data.data.mobile;
    this.order_num = res.data.data.order_num;
    this.model = res.data.data.model;
    this.plate_num=res.data.data.plate_num;
    this.storm_name=res.data.data.storm_name;
    this.address=res.data.data.address;
    this.title=res.data.data.title;
    this.create_time=res.data.data.create_time;
    this.yuyue_time=res.data.data.yuyue_time;
    this.end_time=res.data.data.end_time
  },
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 375px;
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

/* font */

.pay-title {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 20px;
  color: rgba(51, 51, 51, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 25px;
}
.time-detail {
  width: 345px;
  height: 34px;
  margin: 0 0 10px 15px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
}
.technician-pic img {
  width: 60px;
  height: 60px;
  margin-left: 158px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.technician-name {
  /* margin-left: 154px; */
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-bottom: 12px;
  text-align: center;
}
.tips {
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding-left: 15px;
  margin-bottom: 10px;
}
.tips .line-left,
.line-right {
  width: 141px;
  height: 1px;
  background: rgba(238, 238, 238, 1);
}
.tips .tips-txt {
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 16px;
}
.tips-detailA {
  width: 345px;
  height: 32px;
  margin-left: 14px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  position: relative;
}
.tips-detailA .tips-detailA-txt {
  width: 336px;
  height: 32px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.tips-detailA img {
  position: absolute;
  width: 4px;
  height: 4px;
  top: 4px;
  left: 0;
}
.tips-detailB {
  width: 345px;
  height: 32px;
  margin-left: 14px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  position: relative;
}
.tips-detailB .tips-detailB-txt {
  width: 336px;
  height: 32px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.tips-detailB img {
  position: absolute;
  width: 4px;
  height: 4px;
  top: 4px;
  left: 0;
}
.bar {
  width: 375px;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.car-owner {
  height: 135px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  margin-bottom: 15px;
}

.owner {
  height: 20px;
  width: 345px;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.owner-left {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.owner-right {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.ownerCar {
  width: 334px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-left: 16px;
  margin-bottom: 15px;
}
.owneraddress {
  width: 334px;
  height: 34px;
  margin-left: 13px;
  display: flex;
  justify-content: flex-start;
}
.owneraddress img {
  width: 17px;
  height: 22px;
  margin-right: 5px;
  margin-top: 2px;
}
.owneraddressTxt p:first-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.owneraddressTxt p:last-child {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.repair-service {
  height: 85px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px 20px 16px;
  display: flex;
}
.repair-left {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  margin-right: 10px;
}
.repair-left img {
  margin-top: 4px;
  width: 45px;
  height: 35px;
}
.repair-txt {
  flex: 1;
  height: 48px;
}
.repair-txt p:first-child {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-bottom: 5px;
}
.repair-txt p:last-child {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
.repair-txt p:last-child span:last-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}

.order {
  width: 100%;
  height: 200px;
}
.order .order-detail {
  height: 160px;
  width: 375px;
  box-sizing: border-box;
  padding: 20px 0 0 15px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 18px;
}

.order-detail p {
  margin-bottom: 5px;
}
.order-detail p span:first-child {
  margin-right: 7px;
}
.order-detail .payway {
  height: 23px;
  display: flex;
  align-items: center;
}
.order .receiver {
  height: 40px;
  background: rgba(207, 207, 207, 1);
  width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order .receiver p {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
</style>
