<template>
    <div v-if="have" class="activity">
        <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p style="font-size:18px;color:#333;padding:0px 109px 0px 106px">优惠活动</p>
      <p>全部已读</p>
    </header>
    <div class="date">
      <p>12月22日</p>
    </div>
    <div class="indent">
      <div class="left">
        <p>充值享好礼</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容容内容内容容内容内容</p>
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
      <p style="font-size:18px;color:#333;padding:0px 109px 0px 106px">优惠活动</p>
      <p>全部已读</p>
    </header>
    <div class="kong">
      <img src="../../assets/youhui.png" alt />
      <p>面包会有的，牛奶也会有的…</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  components: {},
  data() {
    return {
      have: false
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
    // toDetail(){
    //     this.$router.push({path:'newsDetail'})
    // }
  }
};
</script>

<style scoped>
.activity {
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
.kong {
  margin-top: 80px;
}
.kong img {
  width: 177px;
  height: 178px;
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
  width: 273px;
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
  display: inline-block;
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  text-overflow:ellipsis;
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