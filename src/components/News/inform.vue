<template>
  <div v-if="have" class="inform">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p style="font-size:18px;color:#333;padding:0px 109px 0px 106px">订单通知</p>
      <p>全部已读</p>
    </header>
    <div class="date">
      <p>12月22日</p>
    </div>
    <div class="indent">
      <div class="left">
        <p>新订单</p>
        <p>您有一条新订单</p>
      </div>
      <div class="right">
        <p></p>
        <img src="../../assets/xiaojiantou.png" alt />
      </div>
    </div>
  </div>
  <div v-else class="que">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p style="font-size:18px;color:#333;padding:0px 109px 0px 106px">订单通知</p>
      <p>全部已读</p>
    </header>
    <div class="kong">
      <img src="../../assets/que.png" alt />
      <p>还没有订单通知哦</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  components: {},
  data() {
    return {
      have: true
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
    }
  }
};
</script>

<style scoped>
.inform {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
.que {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
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
header p:last-child {
  font-size: 12px;
  color: #333333;
}
.kong {
  margin-top: 80px;
}
.kong img {
  width: 153px;
  height: 190px;
  margin: 144px 103px 0 109px;
}
.kong p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 120px;
  text-align: center;
}
.date {
  width: 54px;
  height: 21px;
  background: rgba(207, 207, 207, 1);
  border-radius: 2px;
  margin: 100px auto 12px auto;
}
.date p {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
  text-align: center;
}
.indent {
  width: 345px;
  height: 77px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  margin-left: 15px;
  height: 77px;
}
.left p:first-child {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 45px;
}
.left p:last-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
}
.right {
  display: flex;
  padding-top: 10px;
  padding-right: 15px;
  align-items: center;
}
.right p {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff524f;
}
.right img {
  width: 8px;
  height: 14px;
  margin-left: 8px;
}
</style>