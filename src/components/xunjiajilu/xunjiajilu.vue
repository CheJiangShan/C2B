<template>
  <div v-if="have"  class="price">
    <nav>
      <p>询价记录</p>
    </nav>
    <div class="record">
      <li class="first" v-for="value in 5" :key="value">
        <div class="all">
          <div class="kind">
            <p>别克 英朗</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款 1.5T 双离合互联精英型 国VI</p>
          </div>
          <div class="detail" @click="switchTo('/xiangqing')">
            <p>报价详情</p>
            <div class="xiaojiantou">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
    </div>
    <div class="slotbottom"></div>
    <footered></footered>  
  </div>
  <div v-else class="que">
      <header>
        <p>询价记录</p>
      </header>
      <div class="kong">
        <img src="../../assets/que.png" alt />
        <p>还没有询价记录哦</p>
      </div>
      <footered></footered>
    </div>

</template>
<script>
import footered from "../footer/footer";
export default {
  name: "price",
  components: {
    footered
  },
  data() {
    return {
      have:true
    };
  },
  // created () {
  //    this.axios
  //     .post("https://api.chejiangshan.com/deal-jilu", {
  //       token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
  //       // pub_id: id1
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //     });

  // },
  methods: {
    switchTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style scoped>
.price {
  width: 100%;
  height: 100%;
  overflow: auto
}
li {
  list-style-type: none;
}
nav {
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
   background: #ffffff;
  position: fixed;
  top:0;
  left: 0;
}
.record {
  margin-top: 70px;
  width: 100%;
  flex: 1
}
.first {
  width: 345px;
  height: 68px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.all {
  width: 345px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kind {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-left: 10px;
}
.cost {
  width: 131px;
  height: 22px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 17px;
  margin-right: -6px;
}
.cost span {
  font-size: 14px;
}
.down {
  width: 345px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.genre {
  width: 218px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
  margin-left: 10px;
}
.detail {
  width: 75px;
  height: 16px;
  display: flex;
  align-items: center;
}
.detail p {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.detail img {
  width: 7px;
  height: 12px;
  margin: auto 0;
  margin-left: 5px;
}
.que {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
header {
  width: 100%;
  padding-top: 15px;
  height: 64px;
  padding-left: 15px;
  background: #ffffff;
  border-bottom: 1px solid #f6f7fb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
header p {
  font-size: 18px;
  color: #333333;
  text-align: center;
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
.slotbottom {
  width: 100%;
  height: 100px;
}
</style>