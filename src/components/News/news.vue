<template>
  <div class="news">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>消息</p>
    </header>
    <div class="inform">
      <div class="all" @click="indent()">
        <div class="left">
          <img src="../../assets/news.png" alt />
          <span style="margin-left:10px">订单通知</span>
        </div>
        <div class="right">
          <p>3</p>
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="all" @click="privilege()">
        <div class="left">
          <img src="../../assets/discount.png" alt />
          <span>优惠活动</span>
        </div>
        <div class="right">
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="all" @click="toSystem()">
        <div class="left">
          <img src="../../assets/system.png" alt />
          <span style="margin-left:10px">系统消息</span>
        </div>
        <div class="right">
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
    </div>
    <div class="slotBottom"></div>
  </div>
</template>

<script>
export default {
  name: "set",
  components: {},
  data() {
    return {};
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    indent() {
      this.$router.push({ path: "/inform" });
    },
    toSystem() {
      this.$router.push({ path: "/system" });
    },
    privilege() {
      this.$router.push({ path: "/activity" });
    }
  }
};
</script>

<style scoped>
.news {
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
header p {
  font-size: 18px;
  color: #333333;
  padding-left: 38%;
}
.inform {
  margin-top: 80px;
  padding-left: 15px;
}
.all {
  width: 345px;
  display: flex;
  height: 67px;
  justify-content: space-between;
  border-bottom: 1px solid #f6f7fb;
}
.left {
  display: flex;
  align-items: center;
}
.left img {
  width: 40px;
  height: 40px;
}
.left span {
  margin-left: 10px;
  font-size: 16px;
  color: #333333;
}
.right {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.right img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}
.right p {
  width: 15px;
  height: 15px;
  background: rgba(255, 82, 79, 1);
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 15px;
  border-radius: 50%;
  text-align: center;
}
.slotBottom{
  width:100%;
  height: 500px;
}
</style>