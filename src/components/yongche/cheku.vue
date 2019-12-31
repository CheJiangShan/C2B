<template>
  <div class="mine">
    <!-- 顶部 -->
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>我的车库</p>
    </header>
    <div class="second">
      <p>当前共有2辆爱车</p>
    </div>
    <div class="list">
      <li v-for="value in 2" :key="value" @click="next()">
        <div class="up">
          <div>
            <img src="../../assets/17.png" alt />
            <span>别克 英朗</span>
          </div>
          <p>默认</p>
        </div>
        <div class="bottom">2019款 1.5T 双离合互联精英型 国VI</div>
      </li>
    </div>
    <footer>
      <img src="../../assets/sao.png" alt />
      <span>扫描行驶证添加爱车</span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/shouye" });
    },
    next(){
      this.$router.push({path:"/aiche"})
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mine {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
li {
  list-style: none;
}
header {
  padding-top: 15px;
  padding-left: 16px;
  height: 64px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #f6f7fb;
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
.second {
  padding-left: 16px;
  width: 100%;
  height: 52px;
}
.second p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 52px;
}
.list {
  width: 100%;
  height: 500px;
  padding-left: 16px;
}
.list li {
  width: 345px;
  height: 106px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin-bottom: 10px;
}
.list img {
  width: 30px;
  height: 30px;
  padding: 20px 10px 0 15px
}
.up {
  height: 53px;
  display: flex;
  align-items: center;
}
.up span{
font-size:15px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
line-height:53px;
}
.up p {
  border: 1px solid #cacaca;
  border-radius: 10px;
  background: #cacaca;
  width: 48px;
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  text-align: center;
  margin-left: 150px
}
.bottom {
  height: 53px;
  line-height: 53px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 15px
}
footer {
  width: 100%;
  height: 40px;
  background: #5b97ff;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
}
footer img {
  width: 20px;
  height: 17px;
  padding: 0 5px 0 100px;
}
</style>