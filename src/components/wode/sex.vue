<template>
  <div class="call">
    <header>
      <img
        style="padding:5px"
        @click="fanhui()"
        src="../../assets/xiangqing.png"
        alt
      />
      <p>选择性别</p>
    </header>
    <div style="height:80px;margin-bottom: 29px"></div>
    <div class="middle">
      <div class="men" @click="selmen()">
        <img v-if="men" src="../../assets/women.png" alt="" />
        <img v-else src="../../assets/men.png" alt="" />
        <span>男生</span>
      </div>
      <div class="women" @click="selwomen()">
        <img v-if="women" src="../../assets/women.png" alt="" />
        <img v-else src="../../assets/men.png" alt="" />
        <span>女生</span>
      </div>
    </div>
    <div class="bottom" @click="changesex()">
      <img src="../../assets/sure.png" alt="" />
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { changemessage } from "./../api/apisum";
export default {
  name: "sex",
  data() {
    return {
      men: true,
      women: false,
      sel: ""
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    selmen() {
      this.men = true;
      this.women = false;
      this.sel = 1;
    },
    selwomen() {
      this.men = false;
      this.women = true;
      this.sel = 0;
    },
    async changesex() {
      if (this.sel != "") {
        let token = localStorage.getItem("token");
        let type = 3;
        let content = this.sel;
        const sexres = await changemessage(token, type, content);
        console.log(sexres);
      } else {
        let instance = Toast("请选择您的性别");
        setTimeout(() => {
          instance.close();
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
img {
  display: block;
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
  padding-left: 33%;
}
.middle {
  width: 54%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(191, 191, 191, 1);
  line-height: 22px;
  margin-bottom: 50px;
}
.middle .men {
  width: 68px;
  height: 110px;
  text-align: center;
  border: 1px solid rgba(191, 191, 191, 1);
}
.middle .women {
  width: 68px;
  height: 110px;
  text-align: center;
}
.middle img {
  width: 68px;
  height: 68px;
  margin-bottom: 18px;
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
  width: 33px;
  height: 20px;
}
</style>
