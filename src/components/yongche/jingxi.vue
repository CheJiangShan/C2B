<template>
  <div class="sort">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p class="ty">{{gender}}</p>
      <img class="first" @click="showPopup()" src="../../assets/sanjiao.png" alt />
      <!-- 更换服务车辆弹窗 -->
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '57%' }">
        <div class="select">
          <span>更换服务车辆</span>
        </div>
        <div class="dan" v-for="(item,i) in list" :key="item">
          <label><span>{{item.model}}&nbsp;&nbsp;&nbsp;</span><span>{{item.plate_num}}</span></label>
          <input class="ipted" type="radio" name="radios" :value="i" v-model="radio"  />
        </div>
        <router-link :to="'cheku'">去车库添加车辆</router-link>
        <div id="bott">
          <span class="las" @click="over()">选好了</span>
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
      <van-tree-select :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <van-grid v-if="activeIndex === 0">
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
              <li v-for="value in 2" :key="value">
                <div class="xiche">
                  <img src="../../assets/xiche.png" alt />
                </div>
                <div class="clear">
                  <p>标准洗车-五座轿车</p>
                  <div class="yuyue" @click="toOrder()">
                    <p>¥25.00</p>
                    <p>预约</p>
                  </div>
                </div>
              </li>
            </div>
          </van-grid>
          <van-grid v-if="activeIndex === 1">
            <div class="keep">
              <div class="big">
                <div class="xiche">
                  <img src="../../assets/xiche.png" alt />
                </div>
                <div class="clear">
                  <p>小保养</p>
                  <div class="dabaoyang">
                    <p>¥160.00-325.00</p>
                    <p>预约</p>
                  </div>
                </div>
              </div>
              <div class="state">
                <h1>服务内容说明</h1>
                <span>
                  我是服务内容归还借款的风格可进行反馈最低价你
                  今年的快感合适的话刚开始干活的干活干活控股吧
                </span>
              </div>
              <div class="flow">
                <h1>服务流程说明</h1>
                <span>
                  我是服务内容归还借款的风格可进行反馈最低价你
                  今年的快感合适的话刚开始干活的干活干活控股吧
                  京东方哈哈购房款VB小
                </span>
              </div>
            </div>
            <div class="xiao">
              <div class="small">
                <div class="xiche">
                  <img src="../../assets/xiche.png" alt />
                </div>
                <div class="clear">
                  <p>小保养</p>
                  <div class="dabaoyang">
                    <p>¥160.00-325.00</p>
                    <p>预约</p>
                  </div>
                </div>
              </div>
            </div>
          </van-grid>
          <van-grid v-if="activeIndex === 2"></van-grid>
          <van-grid v-if="activeIndex === 3"></van-grid>
          <van-grid v-if="activeIndex === 4"></van-grid>
          <van-grid v-if="activeIndex === 5"></van-grid>
          <van-grid v-if="activeIndex === 6"></van-grid>
          <van-grid v-if="activeIndex === 7"></van-grid>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import { information } from "../api/apisum";
export default {
  name: "jingxi",
  components: {},
  data() {
    return {
      show: false,
      activeKey: 0,
      list: [],
      // model:'',
      gender: "广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白 豫A 88888",
      // gender: localStorage.setItem("广州本田-新飞度 1.5L 2019年产 CVT舒适天窗版 冰晶白 豫A 88888"),
      radio:"0",
      activeIndex: this.$route.query.num ? this.$route.query.num : 0,
      index: this.$route.query.num ? this.$route.query.num : 0,
      items: [
        { text: "精洗" },
        { text: "保养" },
        { text: "钣金" },
        { text: "改装" },
        { text: "美容" },
        { text: "维修" },
        { text: "喷漆" },
        { text: "翻新" }
      ]
    };
  },
   async created(){
    let token='pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT'
      const res=await  information(token);
      console.log(res.data.data)
       this.list = res.data.data;
      //  console.log(res.data.data)
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
    select(e) {
      console.log(e.target.innerText);
      //  console.log(id)
    },
    over() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.ipted{
  width: 20px;
  height: 20px;
  background-color: #3f64fd;
}
input[type=radio]:after {
    position: absolute;
    width: 10px;
    height: 15px;
    top: -38;
    content: " ";
    /* background-color:cornflowerblue; */
    color: #5B97FF;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 50%;
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
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
  /* height: 1930px; */
  background: #ffffff;
  overflow: -Scroll;
  overflow-y: hidden;
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
/* .sort .van-tree-select__content {
  height: 1930px;
} */
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
  align-items: center;
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
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
}
.dan label {
  /* display: block; */
  width: 282px;
  height: 40px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
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
  margin-left: 84px;
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