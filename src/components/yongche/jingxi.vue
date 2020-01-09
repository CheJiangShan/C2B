<template>
  <div class="sort">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p class="ty">广州本田-新</p>
      <img
        class="first"
        @click="showPopup()"
        src="../../assets/sanjiao.png"
        alt
      />
      <!-- 更换服务车辆弹窗 -->
      <van-popup
        v-model="show"
        closeable
        position="bottom"
        :style="{ height: '57%' }"
      >
        <div class="select">
          <span>更换服务车辆</span>
        </div>
        <van-radio-group v-model="radio" checked-color="#5B97FF">
          <div class="dan">
            <span
              >广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白 豫A
              88888</span
            >
            <van-radio name="1"></van-radio>
          </div>

          <div class="dan">
            <span
              >广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白 豫A
              88888</span
            >
            <van-radio name="2"></van-radio>
          </div>
          <div class="dan">
            <span
              >广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白 豫A
              88888</span
            >
            <van-radio name="3"></van-radio>
          </div>
        </van-radio-group>
        <router-link :to="'cheku'">去车库添加车辆</router-link>
        <div id="bott">
          <span class="las">选好了</span>
        </div>
      </van-popup>
      <div class="right">
        <div>
          <img src="../../assets/city.png" alt />
        </div>
        <div class="dingwei">
          <p>陇海路店</p>
          <p>距您800m</p>
        </div>
      </div>
    </header>
    <div class="sort-main">
      <van-tree-select
        :items="items"
        :main-active-index.sync="activeIndex"
        @click-nav="onNavClick"
      >
        <template slot="content">
          <van-grid>
            <div class="top">
              <img src="../../assets/list.png" alt />
            </div>
            <div class="middle">
              <img src="../../assets/fuwu.png" alt />
              <span>未消费，随时退</span>
              <img class="second" src="../../assets/fuwu.png" alt />
              <span>过期退</span>
            </div>
            <div class="standard">
              <li v-for="value in rightlist" :key="value.id">
                <div class="xiche">
                  <img src="../../assets/xiche.png" alt />
                </div>
                <div class="clear">
                  <p>{{ value.title }}</p>
                  <div class="yuyue">
                    <p>¥{{ value.price }}</p>
                    <p @click="toorder(value.id)">预约</p>
                  </div>
                </div>
              </li>
            </div>
          </van-grid>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "jingxi",
  components: {},
  data() {
    return {
      show: false,
      activeKey: 0,
      radio: "1",
      activeIndex: 0,
      index: this.$route.query.num ? this.$route.query.num : 0,
      rightlist: [],
      items: [],
      itemslist: [],
      menu_id: ""//车辆id
    };
  },
  created() {
    this.activeIndex = this.$route.query.num;
    console.log(this.activeIndex);
    this.axios.post("https://api.chejiangshan.com/usecar-top").then(res => {
      res.data.data.forEach(v => {
        this.items.push({
          id: v.id,
          text: v.title
        });
        this.itemslist.push({
          id: v.id,
          text: v.title
        });
      });
      let id = this.$route.query.num;
      let idd = this.items[id].id;
      this.axios
        .post("https://api.chejiangshan.com/usecar-2nd", {
          menu_id: idd
        })
        .then(res => {
          console.log(res);
          this.rightlist = res.data.data;
          console.log(this.rightlist);
        });
    });
  },
  mounted() {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/shouye" });
    },
    // 跳转到快速预约
    toOrder() {
      this.$router.push({ path: "/quickorder" });
    },
    showPopup() {
      console.log(1);
      this.show = true;
    },
    onNavClick(index) {
      console.log(index);
      let id = this.itemslist[index].id;
      this.activeIndex = index;
      this.axios
        .post("https://api.chejiangshan.com/usecar-2nd", {
          menu_id: id
        })
        .then(res => {
          console.log(res.data.data);
          console.log(this.rightlist);
          this.rightlist = res.data.data;
        });
    },
    toorder(b) {
      this.menu_id = this.itemslist[this.activeIndex].id;
      console.log(b);
      this.$router.push({
        name: "quickorder",
        query: {
          // menu_id: this.menu_id,
          car_id: b
        }
      });
    }
  }
};
</script>
<style scoped>
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
header .first {
  width: 13px;
  height: 7px;
}
.ty {
  width: 68px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  padding-left: 32%;
}
#bott {
  width: 100%;
  height: 40px;
  background: #5b97ff;
}
.las {
  display: block;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: center;
}
.right {
  display: flex;
  width: 100px;
  padding-left: 13%;
  align-items: center;
}
.right img {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dingwei p:first-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.dingwei p:last-child {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.sort-main {
  margin-top: 80px;
}
.van-sidebar-item {
  width: 90px;
  height: 45px;
  border-bottom: 1px solid #eeeeee;
  padding: 0;
  border-left: none;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
}
.top img {
  width: 100%;
  height: 90px;
}
.middle {
  width: 100%;
  height: 36px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 36px;
}
.middle img {
  width: 11px;
  height: 11px;
  margin-left: 15px;
  margin-right: 3px;
}
.middle .second {
  margin-left: 52px;
}
.sort .van-sidebar {
  max-width: 90px;
  height: 586px;
  background: #ffffff;
}
.van-tree-select {
  height: 100%;
}
.sort .van-grid {
  /* height: 1930px; */
  background: #f9f9f9;
  display: block;
}
.van-sidebar-item {
  background: #f6f7fb;
  color: #777777;
}
.sort .van-tree-select__content {
  height: 586px;
}
.sort .van-sidebar-item__text {
  display: flex;
  justify-content: center;
}
.van-sidebar-item--select {
  background: #fff;
  color: #333333;
}
.van-tree-select__nav {
  width: 90px;
}
.standard {
  flex-direction: column;
  width: 265px;
  margin: 0 auto;
}
.standard li {
  width: 265px;
  height: 75px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.xiche img {
  width: 45px;
  height: 45px;
  padding: 0 15px 0 15px;
}
.clear p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}
.yuyue {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  box-sizing: border-box;
  padding-right: 15px;
}
.select {
  width: 100px;
  height: 30px;
  text-align: center;
  margin: 13px 0 0 132px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}
.dan {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 345px;
  height: 80px;
  border-bottom: 1px solid #eeeeee;
}
.dan span {
  padding-left: 15px;
  width: 282px;
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
header a {
  display: block;
  color: #3f64fd;
  font-size: 11px;
  text-decoration: underline;
  height: 56px;
  line-height: 56px;
  text-align: center;
}
.clear p:last-child {
  width: 50px;
  height: 17px;
  background: #5b97ff;
  border-radius: 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  text-align: center;
  /* margin-left: 84px; */
}
.keep {
  width: 265px;
  height: 240px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.dabaoyang {
  display: flex;
  align-items: center;
}
.dabaoyang p:last-child {
  margin-left: 20px;
}
.big {
  display: flex;
  align-items: center;
  width: 245px;
  height: 70px;
  border-bottom: 1px solid #d5e3ff;
  margin: 0 auto;
}
.big img {
  padding: 0 15px 0 10px;
}
.keep h1 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
  text-align: center;
}
.state {
  width: 245px;
  height: 73px;
  border-bottom: 1px solid #d5e3ff;
  margin: 0 auto;
}
.state span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.flow {
  width: 245px;
  margin: 0 auto;
}
.flow h1 {
  line-height: 30px;
}
.flow span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.xiao {
  display: flex;
  align-items: center;
  width: 265px;
  border-radius: 5px;
  height: 75px;
  background: #f0f5ff;
  margin: 0 auto;
}
.xiao img {
  width: 45px;
  height: 45px;
}
.small {
  display: flex;
  align-items: center;
}
</style>
