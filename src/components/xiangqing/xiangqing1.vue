<template>
  <div class="xiangqing">
    <nav>
      <div class="left" @click="toReturn()">
        <img src="../../assets/xiangqing.png" alt />
      </div>
      <p>宝马</p>
    </nav>
    <div class="tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">新车(16)</mt-tab-item>
        <mt-tab-item id="2">二手车(8)</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="hot">
      <li class="first" v-for="value in 16" :key="value">
        <div class="all">
          <div class="kind">
            <p>宝马  1系</p>
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
            <p>2019款  1.5T  双离合互联精英型  国VI</p>
          </div>
          <div class="detail" >
            <a href="tel:400-111-3777">沟通顾问</a>
            <div class="xiaojiantou">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
    </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="hot">
      <li class="first" v-for="value in 8" :key="value">
        <div class="all">
          <div class="kind">
            <p>宝马</p>
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
            <p>2019款  1.5T  双离合互联精英型  国VI</p>
          </div>
          <div class="detail" >
            <a href="tel:400-111-3777">沟通顾问</a>
            <div class="xiaojiantou">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
    </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiangqing",
  components: {},
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    toReturn(){
       this.$router.push({ path: "/pay" });
    }
    }
};
</script>
<style scoped>
.xiangqing {
  width: 100%;
  height: 100%;
}
li {
  list-style-type: none;
}
nav {
  width: 100%;
  height: 64px;
  padding-top: 15px;
  display: flex;
  border-bottom: 1px solid #f6f7fb;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
nav p {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 70px;
  margin-left: 137px;
}
.left img {
  width: 9px;
  height: 17px;
  margin-left: 15px;
}
.tab {
  width: 100%;
  height: 50px;
}
.mint-navbar {
  background: #fff;
  width: 100%;
  position:fixed;
  top: 80px;
  left: 0px;
  z-index: 999
}
.tab .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid rgba(63, 100, 253, 1);
  color: #333333;
}
.tab .mint-tab-item-icon img {
  width: 19px;
  height: 19px;
}
.record {
  width: 100%;
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
}
.detail p {
  width: 56px;
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.xiaojiantou {
  width: 10px;
  height: 16px;
  line-height: 19px;
}
.xiaojiantou img {
  width: 7px;
  height: 12px;
}
.hot {
  margin-top: 135px;
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
.detail a {
  text-decoration: none;
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
</style>