<template>
  <div class="main">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>快速预约</p>
    </header>
    <div style=" height: 79px;"></div>
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
    </div>
    <div class="bar"></div>
    <div class="workaddress">
      <img src="../../assets/diangwei1.png" alt="" />
      <div class="address">
        <p>
          陇海路店
        </p>
        <p>
          郑州市陇海路与城东路交叉口南500米路东
        </p>
      </div>
      <span class="workname">技师王小五</span>
    </div>
    <div class="bar"></div>
    <div class="repair">
      <div class="repaircar">
        <img src="../../assets/yuyue.png" alt="" />
      </div>
      <p>综合维修服务</p>
      <span>X 1</span>
    </div>
    <div class="bar"></div>
    <div class="bottom">
      <div class="sign">
        <span>备注：</span>
        <textarea
          style="font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 17px;"
          id="signtxt"
          placeholder="请输入服务需求"
        ></textarea>
      </div>
      <div class="uploadpic">
        <p>车况图片：</p>
        <div class="pic">
          <img src="../../assets/upload.png" alt="" v-for="item in 0" :key="item.id"/>
          <img src="../../assets/upload.png" alt="" />
        </div>
        <div class="submit">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {quickOrder} from "../api/apisum"
export default {
  data() {
    return {
      // list: []
    };
  },
  async created(){
    let token="pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT";
    const res=await  quickOrder(token,menu_id,car_id);
    console.log(res)
     this.list = res.data.data;
  },
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.go(-1)
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
.car-owner {
  height: 83px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
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
.bar {
  width: 375px;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.workaddress {
  width: 375px;
  height: 73px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
  justify-content: space-around;
}
.workaddress img {
  width: 18px;
  height: 23px;
  margin-top: 4px;
  margin-right: 5px;
}
.address {
  width: 260px;
}
.address p:first-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.address p:last-child {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.workname {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-top: 7px;
}
.repair {
  width: 375px;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 19px 15px 0 15px;
}
.repair .repaircar {
  width: 47px;
  height: 47px;
  margin-right: 15px;
}
.repair .repaircar img {
  width: 45px;
  height: 45px;
}
.repair p {
  width: 260px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-top: 14px;
}
.repair span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-top: 15px;
}
.bottom {
}
.bottom .sign {
  height: 125px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
}
.bottom .sign span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.bottom .sign #signtxt {
  width: 301px;
  max-height: 90px;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  border: 1px solid rgba(246, 247, 251, 1);
}
textarea::-webkit-input-placeholder {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 17px;
}
.uploadpic {
  height: 192px;
}
.uploadpic p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.uploadpic .pic {
  box-sizing: border-box;
  padding: 0 0 0 15px;
  min-height: 132px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap

}
.uploadpic .pic img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
  margin-right: 9px;
}
.submit {
  width: 375px;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit span {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
</style>
