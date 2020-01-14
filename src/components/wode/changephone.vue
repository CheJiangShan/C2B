<template>
  <div class="main">
    <header>
      <div class="header">
        <img @click="back()" src="../../assets/xiangqing.png" alt />
        <p>输入新手机号</p>
      </div>
    </header>
    <div style=" height: 79px;"></div>
    <div class="phone">
      <van-field
        v-model="userphone"
        label="手机号"
        :placeholder="userphone"
        type="tel"
      />
      <van-cell-group>
        <van-field
          center
          clearable
          label="验证码"
          placeholder="请输入短信验证码"
        >
          >
        </van-field>
      </van-cell-group>
      <div class="getcode" @click="getcode(userphone)">
        <span @click="getcode(userphone)" v-show="xianshi1">{{ message }}</span>
        <span v-show="xianshi2">{{ message }}</span>
      </div>
    </div>
    <div class="next" @click="tonext()">
      <div class="nextbtn">
        <span>下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userphone: localStorage.getItem("shoujihao"),
      xianshi1: true,
      xianshi2: false,
      message: "获取验证码",
      token: "",
      totalTime: 60, //记录具体倒计时时间
      timer: "cloak", // 定时器名称
      canClick: true //添加canClick  判断按钮能否点击
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    tonext() {
      this.$router.push({ path: "/set" });
    },
    // 获取验证码
    getcode(userphone) {
      let types = 4;
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.userphone == "") {
        let instance = Toast("请输入手机号码");
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else if (!reg.test(this.userphone)) {
        let instance = Toast("手机格式不正确");
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
      this.axios
        .post("https://api.chejiangshan.com/send", {
          tel: this.userphone,
          type: types
        })
        .then(res => {
          let shuju = res.data;
          if (shuju.code == 1) {
            this.xianshi1 = false;
            this.xianshi2 = true;
            let instance = Toast(shuju.msg);
            setTimeout(() => {
              instance.close();
            }, 2000);
            //手机号验证码倒计时
            if (!this.canClick) return; //改动的是这两行代码,限制点击
            let that = this;
            this.canClick = false;
            that.message = that.totalTime + "s后重新发送"; //这里解决60秒不见了的问题
            that.cloak = setInterval(function() {
              that.totalTime--;
              if (that.totalTime > 0) {
                that.message = that.totalTime + "s后重新发送";
                that.xianshi1 = false;
                that.xianshi2 = true;
              }
              if (that.totalTime <= 0) {
                //当倒计时小于等于0时清除定时器
                window.clearInterval(that.cloak);
                that.message = "获取验证码";
                that.totalTime = 60;
                that.xianshi2 = false;
                that.xianshi1 = true;
              }
            }, 1000);
            //
          } else if (shuju.code == -1) {
            let shuju = res.data;
            let instance = Toast(shuju.msg);
            setTimeout(() => {
              instance.close();
            }, 2000);
          }
        });
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
  top: 50px;
  right: 15px;
  height: 50px;
  line-height: 50px;
  width: 80px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(91, 151, 255, 1);
  /* font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(91, 151, 255, 1);
  line-height: 20px; */
}

.getcode span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(91, 151, 255, 1);
}
</style>
