<template>
  <div class="detail">
     <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>消息详情</p>
    </header>
    <div class="content">
      <p>容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    toDetail() {
      this.$router.push({ path: "newsDetail" });
    }
  }
};
</script>

<style scoped>
.detail {
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
  padding-left: 34%;
}
.content {
  width: 345px;
  margin: 100px auto 0 auto;
}
.content p {
  text-indent: 14px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
</style>