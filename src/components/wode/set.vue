<template>
  <div class="set">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>账号设置</p>
    </header>
    <div class="big">
      <div class="edit" @click="toChange()">
        <span>头像</span>
        <div class="right">
          <img src="../../assets/one.png" alt />
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit" @click="toCall()">
        <span>称呼</span>
        <div class="right">
          <span style="font-size:14px">马先生</span>
          <img style="margin:-2px auto" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit" @click="toFixed()">
        <span>绑定微信</span>
        <div class="right">
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit">
        <span>注册手机号</span>
        <div class="right">
          <span style="font-size:14px">13000000000</span>
          <img style="margin:-2px auto" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="exit">
      <p>退出登录</p>
    </div>
    <van-action-sheet v-model="show">
      <ul>
        <li class="paizhao">拍照</li>
        <li class="paizhao">从相册选择</li>
        <li class="paizhao" @click="toCancle()">取消</li>
      </ul>
    </van-action-sheet>
    <van-action-sheet v-model="show1">
      <div class="bottom">
        <p>点击使用微信登录</p>
        <img @click="Success()" src="../../assets/weixin.png" alt />
        <p @click="Cancle()">取消</p>
      </div>
    </van-action-sheet>
    <mt-popup v-model="popupVisible">绑定成功</mt-popup>
  </div>
</template>
<script>
export default {
  name: "set",
  components: {},
  data() {
    return {
      show: false,
      show1: false,
      popupVisible: false
    };
  },
  created() {},
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#F6F7FB");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    toCall() {
      this.$router.push({ path: "/call" });
    },
    toFixed() {
      this.show1 = true;
    },
    Cancle() {
      this.show1 = !this.show1;
    },
    toChange() {
      this.show = true;
    },
    toCancle() {
      this.show = !this.show;
    },
    Success() {
      this.popupVisible = true;
      this.show1 = !this.show1;
    }
  }
};
</script>
<style scoped>
.set {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
  background: #ffffff
}
li {
  list-style: none;
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
.big {
  margin-top: 80px;
  width: 100%;
}
.edit {
  height: 50px;
  width: 345px;
  margin: 0 auto;
  border-bottom: 1px solid #f6f7fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right img:first-child {
  width: 40px;
  height: 40px;
}
.right img:last-child {
  width: 9px;
  height: 16px;
  margin: 8px auto;
}
.edit span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.exit {
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 50px;
  text-align: center;
}
.paizhao {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #f6f7fb;
}
.bottom {
  width: 100%;
  height: 193px;
  font-size: 16px;
  color: #333333;
}
.bottom p:first-child {
  margin: 30px 124px 20px 123px;
}
.bottom img {
  width: 50px;
  height: 42px;
  margin: 0 162px;
}
.bottom p:last-child {
  margin: 24px 172px 0 171px;
}
.mint-popup {
  width: 130px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
}
</style>