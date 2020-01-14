<template>
  <div class="phonelogin">
    <!-- <img class="lujing" @click="fanhui()" src="../assets/lujing.png" alt /> -->
    <div class="banner">
      <!-- <p>手机号注册/登录</p> -->
      <img src="../../assets/loginbg.png" alt />
    </div>
    <div class="cont">
      <p>登录</p>
      <!--  -->
      <form>
        <div class="phonbe1">
          <input class="dalu" type="number" v-model="dalu" placeholder="+86" />
          <input
            class="ipt1"
            type="number"
            v-model="userphone"
            placeholder="请输入手机号"
          />
          <!-- 获取手机验证码按钮 -->
          <div class="ipt2" @click="getcode(userphone)">
            <span @click="getcode(userphone)" v-show="xianshi1">{{
              message
            }}</span>
            <span v-show="xianshi2">{{ message }}</span>
          </div>
        </div>
        <div class="yanzheng1">
          <span>验证码</span>
          <input
            class="ipt3"
            v-model="passworld"
            type="text"
            placeholder="请输入验证码"
          />
        </div>
        <div class="btn4" @click="login(userphone, passworld)">登录</div>
        <!-- <div id="bj" @click="benjiyijiandenglu()">本机一键登录</div> -->
      </form>
      <!--  -->
    </div>
    <div class="liuyan">
      <img src="../../assets/16.png" alt />
      <p>
        登录即视为同意《网络服务协议》和《隐私政策》，并使用本手机号码注册和登录
      </p>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      dalu: "",
      userphone: "",
      passworld: "",
      message: "获取验证码",
      token: "",
      totalTime: 60, //记录具体倒计时时间
      timer: "cloak", // 定时器名称
      canClick: true, //添加canClick  判断按钮能否点击
      // baseUrl: domain.testUrl,
      xianshi1: true,
      xianshi2: false
    };
  },
  methods: {
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
    },
    // 登录
    login(userphone, passworld) {
      this.axios
        .post("https://api.chejiangshan.com/Login", {
          mobile: this.userphone,
          smscode: this.passworld
        })
        .then(res => {
          if (res.data.code == 1) {
            console.log(res, "成功");
            localStorage.setItem("token", res.data.data.auth_key);
            localStorage.setItem("username", res.data.data.username);
            localStorage.setItem("usermoney", res.data.data.user_money);
            localStorage.setItem("touxiang", res.data.data.head_portrait);
            localStorage.setItem("shoujihao", res.data.data.mobile);
            let denglushuju = res.data;
            let instance = Toast(denglushuju.msg);
            setTimeout(() => {
              instance.close();
            }, 2000);
            this.$router.push({ path: "/" });
          } else if (res.data.code == -1) {
            console.log(res, "失败");
            let denglushuju = res.data;
            let instance = Toast(denglushuju.msg);
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

.dalu {
  width: 40px;
  height: 18px;
  border: 0;
  border-right: 1px solid gray;
  outline: none;
}
.lujing {
  position: fixed;
  top: 32px;
  left: 15px;
  cursor: pointer;
}
.banner {
  width: 100%;
  height: 260px;
}
.banner img {
  width: 100%;
}
.cont {
  width: 315px;
  height: 258px;
  background: #ffffff;
  margin: 0 auto;
  margin-top: -129px;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 2px 2px #6ba5ff;
}
.cont p {
  display: block;
  font-size: 20px;
  color: #ffffff;
  position: absolute;
  top: -60px;
  left: 20px;
}
form {
  padding: 0 20px;
}
.phonbe1 {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  padding-top: 50px;
}
.phonbe1 span {
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.ipt1 {
  width: 50%;
  height: 18px;
  border: 0;
  padding-left: 15px;
  outline: none;
}
.ipt2 {
  width: 0.9rem;
  height: 0.16rem;
  border: 0;
  font-size: 0.11rem;
  color: #a4a3a3;
  background: 0;
}
.ipt2 span {
  font-size: 11px;
  color: #a4a3a3;
}
.ipt2 {
  width: 90px;
  height: 16px;
  border: 0;
  font-size: 11px;
  color: #a4a3a3;
  background: 0;
}
/*  */
.liuyan {
  padding: 0 32px;
  display: flex;
  margin-top: 240px;
}
.liuyan img {
  width: 9px;
  height: 9px;
  padding-top: 5px;
  padding-right: 1px;
}
.liuyan p {
  font-size: 11px;
  color: #a4a3a3;
}
.yanzheng1 {
  display: flex;
  margin-top: 30px;
  border-bottom: 1px solid #eeeeee;
}
.yanzheng1 span {
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.ipt3 {
  border: 0;
  width: 50%;
  padding-left: 15px;
  outline: none;
}
.btn4 {
  width: 275px;
  height: 40px;
  background: #0352db;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  border: 0;
  margin: 0 auto;
  line-height: 40px;
  cursor: pointer;
  border-radius: 50px;
  margin-top: 40px;
}
form #bj {
  font-size: 11px;
  color: #0352db;
  text-align: center;
  margin-top: 16px;
  cursor: pointer;
}
</style>
