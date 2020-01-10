<template>
  <div class="main">
    <header>
      <div class="header">
        <img @click="back()" src="../../assets/xiangqing.png" alt />
        <p>修改注册手机号</p>
      </div>
    </header>
    <div style=" height: 79px;"></div>
    <div class="phone">
      <van-field
        v-model="userphone"
        label="手机号"
        placeholder="请输入新手机号"
        type="tel"
      />
      <van-cell-group>
        <van-field
          v-model="sms"
          center
          clearable
          label="验证码"
          placeholder="请输入短信验证码"
        >
          >
        </van-field>
      </van-cell-group>
      <span class="getcode">获取验证码</span>
    </div>
    <div class="next" @click="tonew()">
      <div class="nextbtn">
        <span>下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    tonew() {
      this.$router.push({ path: "/changephone" });
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
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
}
.header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 64px;
}
.header img {
  position: absolute;
  width: 9px;
  height: 17px;
  top: 25px;
  left: 15px;
}
.header p {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}
.van-cell {
  height: 50px;
  width: 345px;
  border-bottom: 1px solid rgba(246, 247, 251, 1);
  margin-left: 15px;
}
.phone {
  position: relative;
}
.phone >>> .van-field__label {
  display: flex;
  align-items: center;
}
.phone >>> .van-field__label span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.phone >>> .van-cell__value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 20px;
}
.next {
  width: 100%;
  height: 488px;
  background: rgba(246, 247, 251, 1);
  display: flex;
  justify-content: center;
}
.next .nextbtn {
  width: 345px;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  border-radius: 2px;
  margin-top: 20px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.getcode {
  position: absolute;
  top: 66px;
  right: 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(91, 151, 255, 1);
  line-height: 20px;
}
</style>
