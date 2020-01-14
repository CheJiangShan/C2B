<template>
  <div class="call">
    <header>
      <img
        style="padding:5px"
        @click="fanhui()"
        src="../../assets/xiangqing.png"
        alt
      />
      <p>修改称呼</p>
    </header>
    <div style="height:80px"></div>
    <div class="middle">
      <input type="text" placeholder="请输入你的昵称" v-model="username" />
    </div>
    <div class="bottom" @click="changename()">
      <img src="../../assets/next.png" alt="" />
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { changemessage } from "./../api/apisum";
export default {
  name: "set",
  components: {},
  data() {
    return {
      hid: false,
      value: false,
      username: ""
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    async changename() {
      if (this.username) {
        let token = localStorage.getItem("token");
        let type = 2;
        let content = this.username;
        const res = await changemessage(token, type, content);
        console.log(res);
        this.$router.push({
          name: "sex"
        });
      }
      if (this.username == "") {
        let instance = Toast("请填写您的用户名");
        setTimeout(() => {
          instance.close();
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
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
  padding-left: 33%;
}
.middle {
  width: 80%;
  height: 43px;
  background: rgba(246, 246, 246, 1);
  border-radius: 7px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 29px;
  display: flex;
  align-items: center;
}
.middle input {
  border: 0;
  background: rgba(246, 246, 246, 1);
  margin-left: 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.bottom {
  width: 206px;
  height: 39px;
  background: linear-gradient(
    90deg,
    rgba(115, 157, 255, 1) 0%,
    rgba(25, 94, 216, 1) 100%
  );
  border-radius: 3px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom img {
  width: 48px;
  height: 22px;
}
</style>
