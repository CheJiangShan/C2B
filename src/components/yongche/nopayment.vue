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
        >车小二预计最快可在2019-10-15 10:00由技师王小五班组为您进行服务</span
      >
    </div>
    <div class="technician-pic"></div>
    <div class="technician-name"><span>技师 王小五</span></div>
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
    <div class="car-owner"></div>
    <div class="bar"></div>
    <div class="repair-service"></div>
    <div class="bar"></div>
    <div class="order">

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
  background: yellow;
}
.repair-service{
  height: 85px;
  width: 100%;
  background: yellowgreen
}
.order{
  width: 100%;
  height: 200px;
  background: palegreen
}
</style>
