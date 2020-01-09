<template>
  <div class="shouye">
    <!-- 导航栏 -->
    <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <router-link :to="'/'">
              <span>买车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link :to="'sell1'">
              <span>卖车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="3"><span>用车</span></mt-tab-item>
          <mt-tab-item id="4"><router-link :to="'shop'">
              <span>商城</span>
            </router-link></mt-tab-item>
        </mt-navbar>
      </nav>
      <img src="../../assets/1.png" alt />
    </div>
    <!-- header -->
    <div class="header">
      <div class="tianqi">
        <div class="tianqi-1">
          <img src="../../assets/7.png" alt />
          <p>未来三天多云</p>
          <span>适宜洗车</span>
        </div>
        <img class="saoyosao" src="../../assets/6.png" alt />
      </div>
      <!-- 车主称呼 -->
      <h1>您好，万先生</h1>
      <div class="cheliang">
        <div class="cheliang-1">
          <span>别克 英朗</span>
          <p>2019款 1.5T 双离合互联精英型 国VI</p>
        </div>
        <div class="cheliang-3" @click="cheku()">
          <img src="../../assets/8.png" alt />
          <span>2</span>
        </div>
      </div>
      <!-- 记录 -->
      <div class="jilu">
        <div class="baoyangjilu">
          <img src="../../assets/9.png" alt />
          <span>保养记录</span>
        </div>
        <div class="weizhangjilu">
          <img src="../../assets/10.png" alt />
          <span>违章记录</span>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="gongnengzu">
        <div class="mokuai" @click="toSort(0)">
          <img src="../../assets/11.png" alt />
          <span>精洗</span>
        </div>
        <div class="mokuai" @click="toSort(2)">
          <img src="../../assets/12.png" alt />
          <span>保养</span>
        </div>
        <div class="mokuai" @click="toSort(4)">
          <img src="../../assets/13.png" alt />
          <span>钣金</span>
        </div>
        <div class="mokuai" @click="toSort(6)">
          <img src="../../assets/14.png" alt />
          <span>改装</span>
        </div>
        <div class="mokuai">
          <img src="../../assets/15.png" alt />
          <span>事故上报</span>
        </div>
        <div class="mokuai" @click="toSort(1)">
          <img src="../../assets/17.png" alt />
          <span>美容</span>
        </div>
        <div class="mokuai" @click="toSort(3)">
          <img src="../../assets/18.png" alt />
          <span>维修</span>
        </div>
        <div class="mokuai" @click="toSort(5)">
          <img src="../../assets/21.png" alt />
          <span>喷漆</span>
        </div>
        <div class="mokuai" @click="toSort(7)">
          <img src="../../assets/19.png" alt />
          <span>翻新</span>
        </div>
        <div class="mokuai">
          <img src="../../assets/20.png" alt />
          <span>查看更多</span>
        </div>
      </div>

      <!-- 地点班组 -->
      <div class="didianbanzu">
        <div class="didian">
          <img src="../../assets/24.png" alt />
          <div class="dianshangxia">
            <div class="didian-1">
              <h3>陇海路店</h3>
              <img src="../../assets/22.png" alt />
            </div>
            <div class="didian-2">
              <img src="../../assets/23.png" alt />
              <span>郑州市陇海路与货站街</span>
            </div>
          </div>
        </div>
        <div class="banzu">
          <img src="../../assets/30.gif" alt />
          <div class="dianshangxia">
            <div class="banzuming">
              <img src="../../assets/25.png" alt />
              <span>王小五班组</span>
            </div>
            <p>服务次数：666次</p>
          </div>
        </div>
      </div>
      <img class="yaoqing" src="../../assets/26.png" alt />
    </div>
    <!-- 邀请好友 -->

    <!-- footer导航栏 -->
    <footeree></footeree>
  </div>
</template>

<script>
import footeree from "../other/footer.vue";
export default {
  name: "shouye",
  components: {
    footeree
  },
  data() {
    return {
      selected: "3"
    };
  },
  created() {},
  mounted() {},
  methods: {
    cheku() {
      this.$router.push({ path: "/cheku" });
    },
     toSort(num) {
      this.$router.push({
        name: 'jingxi',
        query: {
          num
        }
      })
    },
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow: auto; */
}
.shouye {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.roof {
   padding-top: 15px;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
}
.roof img {
  width: 19px;
  height: 19px;
}
nav {
  color: #aaaaaa;
  width: 80%;
  height: 50px;
}
nav .sell {
  text-decoration: none;
  color: #aaaaaa;
  font-size: 12px;
  line-height: 13px;
}

.mint-navbar {
  height: 42px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid rgba(63, 100, 253, 1);
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  color: #333333;
  margin-bottom: -6px
}
.mint-navbar .mint-tab-item.is-selected span{
  font-size: 18px;
}
.mint-tab-item-label a span{
  font-size: 16px
}
.header {
  width: 100%;
  height: 221px;
  margin-top: 50px;
  background: url(../../assets/5.png) no-repeat;
  background-size: 100% 100%;
}
.tianqi {
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding-top: 29px;
  align-items: center;
}
.tianqi .tianqi-1 {
  display: flex;
  align-items: center;
}
.tianqi .tianqi-1 img {
  width: 25px;
  height: 14px;
}
.tianqi .tianqi-1 p {
  font-size: 14px;
  color: #ffffff;
  padding-left: 5px;
  text-align: center;
}
.tianqi .tianqi-1 span {
  font-size: 11px;
  color: #ffffff;
  padding-left: 5px;
  text-align: center;
}
.saoyosao {
  width: 20px;
  height: 17px;
}
h1 {
  font-size: 18px;
  color: #ffffff;
  margin-top: 28px;
  font-weight: 500;
  padding-left: 20px;
}
.cheliang {
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.cheliang-1 {
  display: flex;
  flex-direction: column;
}
.cheliang-1 span {
  font-size: 16px;
  color: #ffffff;
  padding-top: 15px;
}
.cheliang-1 p {
  font-size: 14px;
  color: #ffffff;
  padding-top: 10px;
}
.cheliang-3 {
  display: flex;
  align-items: center;
}
.cheliang-3 img {
  width: 17px;
  height: 13px;
}
.cheliang-3 span {
  font-size: 11px;
  color: #ffffff;
  padding-left: 5px;
}
.jilu {
  height: 20px;
  display: flex;
  justify-content: space-around;
  padding: 21px 20px;
}
.baoyangjilu {
  display: flex;
}
.baoyangjilu img {
  width: 18px;
  height: 20px;
}
.baoyangjilu span {
  font-size: 13px;
  color: #ffffff;
  padding-left: 7px;
}
.weizhangjilu {
  display: flex;
}
.weizhangjilu img {
  width: 22px;
  height: 18px;
}
.weizhangjilu span {
  font-size: 13px;
  color: #ffffff;
  padding-left: 5px;
}
/* content */
.content {
  height: 379px;
  background: #f6f7fb;
  padding: 20px;
}
.gongnengzu {
  height: 160px;
  background: #ffffff;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.mokuai {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 17px;
}
.mokuai img {
  width: 26px;
  height: 26px;
}
.mokuai span {
  font-size: 13px;
  color: #333333;
  padding-top: 8px;
}
.didianbanzu {
  height: 73px;
  background: #ffffff;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.dianshangxia {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  /* align-items: center; */
}
.didian {
  display: flex;
}
.didian img {
  width: 47px;
  height: 43px;
}
.didian-1 {
  display: flex;
  align-items: center;
}
.didian-1 h3 {
  font-size: 14px;
  color: #333333;
}
.didian-1 img {
  width: 25px;
  height: 21px;
}
.didian-2 {
  width: 100px;
  display: flex;
  align-items: center;
}
.didian-2 img {
  width: 11px;
  height: 13px;
}
.didian-2 span {
  font-size: 11px;
  color: #a4a3a3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banzu {
  display: flex;
}
.banzu img {
  width: 44px;
  height: 44px;
}
.banzuming {
  display: flex;
}
.banzuming img {
  width: 15px;
  height: 15px;
}
.banzuming span {
  font-size: 12px;
  color: #333333;
}
.dianshangxia p {
  font-size: 11px;
  color: #777777;
  padding-top: 6px;
}
.yaoqing {
  height: 66px;
  margin: 0 auto;
}
</style>
