<template>
  <div class="carstore">
    <header>
      <img  style="padding:5px"  @click="back()" src="../../assets/xiangqing.png" alt />
      <p class="ty">{{ gender }}</p>
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
        :style="{ height: '45.5%' }"
      >
        <div class="select">
          <span>更换服务车辆</span>
        </div>
        <div class="dan" v-for="(item, i) in carlist" :key="item">
          <label>
            <span>{{ item.model }}&nbsp;&nbsp;&nbsp;</span>
            <span>{{ item.plate_num }}</span>
          </label>
          <input
            class="ipted"
            type="radio"
            name="radios"
            :value="i"
            v-model="radio"
            @click="radiobtn(item.id)"
          />
        </div>
        <router-link :to="'cheku'">去车库添加车辆</router-link>
        <div id="bott">
          <span class="las" @click="over()">选好了</span>
        </div>
      </van-popup>
    </header>
    <div style="height:80px"></div>
    <ul class="standard">
      <li v-for="item1 in storelist" :key="item1.id">
        <div class="xiche">
          <img src="../../assets/xiche.png" alt />
        </div>
        <div class="clear">
          <p>{{ item1.storm_name }}</p>
          <div class="yuyue">
            <p>{{ item1.address }}</p>
            <p @click="toindex(item1.id)">选择</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { information, allstore } from "../api/apisum";
export default {
  name: "carstore",
  data() {
    return {
      show: false,
      carlist: [],
      // model:'',
      gender: "",
      radio: "0",
      rightlist: [],
      items: [],
      itemslist: [],
      car_id: "", //车辆id
      storelist: []
    };
  },
  async created() {
    let token = localStorage.getItem("token");
    const res1 = await information(token);
    this.carlist = res1.data.data;
    let morenindex = this.carlist.findIndex(v => {
      return v.status == 1;
    });
    console.log(morenindex);
    this.gender =
      this.carlist[morenindex].model + this.carlist[morenindex].plate_num;
    // 所有门店信息
    const res2 = await allstore();
    this.storelist = res2.data.data;
    console.log(this.storelist);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showPopup() {
      console.log(1);
      this.show = true;
    },
    over() {
      this.show = !this.show;
    },
    radiobtn(a) {
      console.log(a);
      let findindex = this.carlist.findIndex(v => {
        return v.id == a;
      });
      let gerres =
        this.carlist[findindex].model + this.carlist[findindex].plate_num;
      this.car_id = this.carlist[findindex].id;
      this.gender = gerres;
    },
    toindex(a) {
      console.log(a);
      this.$router.push({
        name: "shouye"
      });
      localStorage.setItem("storm_id", a);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.ipted {
  width: 20px;
  height: 20px;
  background-color: #3f64fd;
}
input[type="radio"]:after {
  position: absolute;
  width: 10px;
  height: 15px;
  top: -38;
  content: " ";
  /* background-color:cornflowerblue; */
  color: #5b97ff;
  display: inline-block;
  visibility: visible;
  padding: 0px 3px;
  border-radius: 50%;
}
input[type="checkbox"]::after {
  position: absolute;
  top: 0;
  background-color: red;
  color: #000;
  width: 15px;
  height: 15px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
  border-radius: 3px;
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
  margin-bottom: 20px;
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
/* 下拉样式 */
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 345px;
  height: 80px;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
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

.standard {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.standard li {
  width: 100%;
  height: 75px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 15px;
}
.standard li img {
  width: 56px;
  height: 56px;
  margin-right: 10px;
 
}
.clear {
  flex: 1;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.yuyue {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 15px;
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
</style>
