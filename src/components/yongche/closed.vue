<template>
  <div class="main">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>订单详情</p>
    </header>
    <div style=" height: 64px;"></div>
    <div class="pay-title">
      <span>已关闭</span>
    </div>
    <div class="time-detail">
      <span>车小二已于2019-10-15 11:00为您关闭该订单！</span>
    </div>
    <div class="technician-pic"></div>
    <div class="technician-name"><span>技师 王小五</span></div>
    <div class="tips">
      <div class="line-left"></div>
      <div class="tips-txt"><span>温馨提示</span></div>
      <div class="line-right"></div>
    </div>
    <div class="tips-detailA">
      <p class="tips-detailA-txt">
        若您未享受到我们的服务或服务没有达到您的满意，请点击下方“投诉”按钮与我们取得联系，我们将为您提供1V1售后跟踪服务。祝您用车生活愉快！
      </p>
    </div>
    <div class="bar"></div>
    <div class="car-owner">
      <div class="owner">
        <div class="owner-left">
          <span>
            张先生
          </span>
          <span>
            136****1927
          </span>
        </div>
        <div class="owner-right">
          <span>豫A 88888</span>
        </div>
      </div>
      <div class="ownerCar">
        <span>广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白</span>
      </div>
      <div class="owneraddress">
        <img src="../../assets/diangwei1.png" alt="" />
        <div class="owneraddressTxt">
          <p>陇海路店</p>
          <p>郑州市陇海路与城东路交叉口南500米路东</p>
        </div>
      </div>
    </div>
    <div class="bar"></div>
    <div class="repair-service">
      <div class="repair-left">
        <img src="../../assets/xiaoche.png" alt="" />
      </div>
      <div class="repair-txt">
        <p>综合维修服务</p>
        <p><span>¥线下报价及支付</span><span>X 1</span></p>
      </div>
    </div>
    <div class="bar"></div>
    <div class="order">
      <div class="order-detail">
        <p>
          <span>订单编号:</span>
          <span>2019100715324510017</span>
        </p>
        <p><span>下单时间:</span><span>2019-10-07 12:34</span></p>
        <p class="payway"><span>支付方式:</span><span>线下支付</span></p>
        <p><span>预约确认时间:</span><span>2019-10-07 12:42</span></p>
        <p><span>接待顾问：张小浩</span></p>
        <p style="margin-bottom:20px"><span>订单关闭时间：</span><span>2019-10-08 12:42</span></p>
      </div>
      <div class="complain">
        <p>投诉</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  margin-bottom: 10px;
}
.time-detail {
  width: 345px;
  height: 17px;
  margin: 0 0 20px 15px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
  display: flex;
  justify-content: center;
}
.technician-pic {
  width: 60px;
  height: 60px;
  margin-left: 158px;
  border-radius: 50%;
  background: #666;
  margin-bottom: 10px;
}
.technician-name {
  margin-left: 154px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-bottom: 12px;
}
.tips {
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding-left: 14px;
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
  height: 82px;
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
}
.tips-detailA .tips-detailA-txt {
  width: 336px;
  -webkit-text-size-adjust: none;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
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
  /* height: 160px; */
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
.order-detail .technicist {
  margin-top: 10px;
  margin-bottom: 5px;
}
.order-detail .servicetime {
  margin-bottom: 10px;
}
.order-detail .paymoney {
  margin-bottom: 20px;
}
.order .complain {
  width: 375px;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  display: flex;
  justify-content: center;
  align-items: center
}

.order .complain p {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
</style>
