<template>
  <div class="assess">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <span>评估报告</span>
      <van-popup v-model="show1" closeable position="bottom" :style="{ height: '18%' }">
        <div class="lu">
          <van-icon name="chat-o" size="30" color="#1989fa" />
          <van-icon name="star-o"  size="30" color="gold"/>
          <van-icon name="friends-o" size="30" color="#07c160" />
        </div>
        <div class="titl">
          <p>微信</p>
          <p>空间</p>
          <p>朋友圈</p>
        </div>
      </van-popup>
      <img @click="toShare()" src="../../assets/fenxiang.png" alt />
    </header>
    <div class="total">
      <img src="../../assets/pinggu.png" alt />
      <div class="contain">
        <p class="Ctype">{{ name }}</p>
        <div class="check">
          <span>查看该车型出厂配置</span>
          <img class="pic" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="list">
      <div class="first">
        <img src="../../assets/city.png" alt />
        <span>所在城市</span>
        <p>{{ list }}</p>
      </div>
      <div class="first">
        <img src="../../assets/riqi.png" alt />
        <span>上牌日期</span>
        <p>{{ timer }}</p>
      </div>
      <div class="first">
        <img src="../../assets/meter.png" alt />
        <span>行驶里程</span>
        <p>{{ miles }}万公里</p>
      </div>
      <div class="first">
        <img src="../../assets/pailiang.png" alt />
        <span>额定排量</span>
        <p>1.5L</p>
      </div>
    </div>
    <div class="complex">
      <span>综合估值</span>
      <p>18.01</p>
      <p class="price">车价（万）</p>
      <div class="actually">
        <img src="../../assets/zhuyi.png" alt />
        <span>该估值仅供参考，以二手车评估师实际评估为准。</span>
      </div>
      <div class="state">
        <p @click="showPopup()">
          车况:
          <span style="font-size:12px">{{ ddays }}</span>
          <img src="../../assets/xiaojiantou.png" alt />
        </p>
        <p>
          车身颜色:
          <span style="font-size:12px" @click="showPopup1()" :v-model="carcolorparam">
            {{
            carcolorparam
            }}
          </span>
          <img src="../../assets/xiaojiantou.png" alt />
        </p>

        <!-- 车况弹出层 -->
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '38%' }">
          <div class="select">
            <span>选择车况</span>
          </div>
          <div class="anniu">
            <button
              v-for="(item, i) in but"
              :key="i"
              :pay-money="item.name"
              :class="activeClass == item.id ? 'active' : ''"
              @click="ddd($event, item.id)"
            >{{ item.name }}</button>
          </div>
          <div class="sure" @click="toSure()">确定</div>
        </van-popup>

        <!-- 车身颜色弹窗 -->
        <van-popup v-model="CarColorShow" closeable position="bottom" :style="{ height: '38%' }">
          <div class="select">
            <span>选择颜色</span>
          </div>
          <div class="colorDiv">
            <button
              v-for="item in carcolor"
              :key="item.id"
              :class="activeClassColor == item.id ? 'active' : ''"
              @click="colorsurebtn(item.id, item.name)"
            >{{ item.name }}</button>
          </div>
          <div class="sure" @click="toSure1()">确定</div>
        </van-popup>
      </div>
    </div>
    <div class="recent">
      <span>近期近款新车价格</span>
      <div class="new">
        <span>新车指导价：29.08万</span>
        <span>新车裸车价：28.28万</span>
      </div>
      <div class="content">
        <h2>当前价格车况参考标准</h2>
        <div class="guan">
          <h1>外观：原厂漆，漆面轻微瑕疵；车窗玻璃光洁。</h1>
          <h1>内饰：方向盘及按键无磨损；座椅及内饰崭新；车内无异味。</h1>
          <h1>工况：发动机及变速箱运行良好且无维修；底盘及电气系统运营良好；暗示保养且记录完整。</h1>
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="scrap">
      <span>残值分析（万）</span>
      <div id="main" style="width:345px;height:200px;"></div>
    </div>
    <div class="middle"></div>
    <div class="need">
      <p>卖车所需材料</p>
      <div class="xiao">
        <figure>
          <img src="../../assets/shenfenzheng11.png" alt />
          <figcaption>车主身份证</figcaption>
        </figure>
        <figure>
          <img src="../../assets/xingshizheng.png" alt />
          <figcaption>行驶证</figcaption>
        </figure>
        <figure>
          <img src="../../assets/fapiao.png" alt />
          <figcaption>购车发票</figcaption>
        </figure>
        <figure>
          <img src="../../assets/shui.png" alt />
          <figcaption>购置税本</figcaption>
        </figure>
        <figure>
          <img src="../../assets/yaoshi.png" alt />
          <figcaption>全部车钥匙</figcaption>
        </figure>
        <figure>
          <img src="../../assets/huanbao.png" alt />
          <figcaption>环保标贴</figcaption>
        </figure>
        <figure>
          <img src="../../assets/chejian.png" alt />
          <figcaption>年检标贴</figcaption>
        </figure>
        <figure>
          <img src="../../assets/baoxian.png" alt />
          <figcaption>保险保单</figcaption>
        </figure>
        <figure>
          <img src="../../assets/dengji.png" alt />
          <figcaption>车辆登记证</figcaption>
        </figure>
      </div>
    </div>
    <footer>
      <a href="tel:400-111-3777">咨询车小二</a>
    </footer>
  </div>
</template>
<script>
const echarts = require("echarts");
import { assess } from "../api/apisum";
import { option } from "../sell/option";
export default {
  data() {
    return {
      but: [
        {
          id: 1,
          name: "优秀"
        },
        {
          id: 2,
          name: "良好"
        },
        {
          id: 3,
          name: "一般"
        }
      ],
      carcolor: [
        {
          id: 1,
          name: "不选择"
        },
        {
          id: 2,
          name: "北极白"
        },
        {
          id: 3,
          name: "宝石蓝"
        },
        {
          id: 4,
          name: "宝石棕"
        },
        {
          id: 5,
          name: "宝石棕告示蓝"
        }
      ],
      ddays: "优秀",
      radio: "1",
      show: false,
      show1: false,
      CarColorShow: false, //车身颜色选择弹窗
      carcolorparam: "未选择",
      activeClass: 1,
      activeClassColor: 1,
      name: localStorage.getItem("name"),
      list: localStorage.getItem("list"),
      timer: localStorage.getItem("timer"),
      miles: localStorage.getItem("miles")
      // suozaidi: localStorage.getItem("suozaidi"),
    };
  },
  async created() {
    let token = "xt3Oxc4Se6vzMgdH2KE832axJYimIa6o";
    localStorage.setItem("token", token);
    let suozaidi = localStorage.getItem("suozaidi");
    let id = localStorage.getItem("id");
    console.log(id);
    // let list=localStorage.getItem("list");
    let timer = localStorage.getItem("timer");
    let miles = localStorage.getItem("miles");

    const assessres = await assess(token, suozaidi, id, timer, miles);
    console.log(assessres);
    // this.axios
    //   .post("https://api.chejiangshan.com/assess", {
    //     token: token,
    //     city: suozaidi,
    //     veh_id: id,
    //     car_license: timer,
    //     mileage: miles
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //   });
  },
  mounted() {
    //  let list = localStorage.getItem(list);
    let myCharts = echarts.init(document.getElementById("main"));
    myCharts.setOption(option);
  },
  methods: {
    fanhui() {
      this.$router.push({ path: "/sell1" });
    },
    showPopup() {
      this.show = true;
    },
    // 选择车身颜色
    showPopup1() {
      this.CarColorShow = true;
    },
    toShare() {
      this.show1 = !this.show1;
    },
    toSure() {
      this.show = !this.show;
    },
    toSure1() {
      this.CarColorShow = !this.CarColorShow;
    },
    ddd: function(event, id, i) {
      this.days = "";
      this.ddays = event.currentTarget.getAttribute("pay-money");
      this.aaaa = id;
      this.yx = false;
      this.yx1 = true;
      // this.$refs.change.style.background="red"
      // console.log(event)
      // console.log( this.$refs.change)
      this.activeClass = id;
      // console.log(id);
    },
    colorsurebtn(id, name) {
      this.activeClassColor = id;
      this.carcolorparam = name;
      if (id == 1) {
        this.carcolorparam = "未选择";
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.assess {
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
header img:first-child {
  width: 9px;
  height: 17px;
  margin-right: 120px;
}
header img:last-child {
  width: 15px;
  height: 15px;
  margin-left: 113px;
}
header span {
  font-size: 18px;
  color: #333333;
}
.lu {
  margin-top: 47px;
  display: flex;
  justify-content: space-around;
}
.titl {
  display: flex;
  height: 25px;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}
.titl p:nth-child(2) {
  margin-left: 12px;
}
.total {
  margin-top: 80px;
  width: 100%;
  height: 88px;
  display: flex;
  padding-left: 15px;
}
.total img {
  width: 80px;
  height: 71px;
  margin-left: 20px
}
.total img:last-child {
  width: 7px;
  height: 12px;
  margin: -1px 3px
}
.total span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.contain {
  margin-left: 8px;
  height: 88px;
}
.Ctype {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-left: 100px;
  word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
}
.check {
  margin-left: 100px;
}
.check span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 66px;
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.list {
  width: 100%;
  height: 97px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f6f7fb;
}
.first {
  width: 64px;
}
.first img {
  width: 11px;
  height: 11px;
}
.first span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 16px;
}
.first p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
  text-align: center;
}
.complex {
  margin-top: 15px;
  width: 100%;
  height: 214px;
  background: url(../../assets/zonghe.png) no-repeat;
  background-size: 84px 23px;
  border-bottom: 1px solid #f6f7fb;
}
.complex span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
  margin-left: 13px;
}
.complex p {
  text-align: center;
  font-size: 30px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(63, 100, 253, 1);
  line-height: 42px;
}
.complex .price {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
}
.actually {
  display: flex;
  align-items: center;
}
.actually img {
  width: 14px;
  height: 14px;
  margin-left: 50px;
  margin-right: -10px;
}
.actually span {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 32px;
  text-align: center;
}
.state {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 15px 0 15px;
}
.state .select span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 30px;
  margin: 10px 10px 10px 10px;
}
.select {
  width: 100px;
  height: 30px;
  text-align: center;
  margin: 13px 0 0 132px;
}
.anniu {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}

.anniu button {
  width: 107px;
  height: 30px;
  background: rgba(240, 245, 255, 1);
  border-radius: 2px;
  border: 0;
}
.anniu button:nth-child(2) {
  margin: 0 12px;
}
.anniu button:first-child {
  margin-left: 15px;
}
.anniu .active {
  background: rgba(91, 151, 255, 1);
  color: #ffffff;
}
.colorDiv {
  box-sizing: border-box;
  padding: 0 3px;
  margin-top: 15px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}
.colorDiv button {
  margin-left: 12px;
  margin-bottom: 10px;
  width: 107px;
  height: 30px;
  background: rgba(240, 245, 255, 1);
  border-radius: 2px;
  border: 0;
}
.colorDiv .select span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 30px;
  margin: 10px 10px 10px 10px;
}

.colorDiv .active {
  background: rgba(91, 151, 255, 1);
  color: #ffffff;
}
.select {
  width: 100px;
  height: 30px;
  text-align: center;
  margin: 13px 0 0 132px;
}
/* 车身颜色选中的按钮样式 */
.activeClassColor {
  background: rgba(91, 151, 255, 1);
  color: rgba(255, 255, 255, 1);
}

.sure {
  width: 100%;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: center;
}
.state p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.state span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
/* .state p:first-child {
  margin-left: 15px;
} */
/* .state p:last-child {
  margin-right: 40px;
} */
.state img {
  width: 8px;
  height: 14px;
  margin: -3px auto;
}
.recent {
  margin-top: 20px;
  width: 100%;
  height: 248px;
  background: url(../../assets/tupian.png) no-repeat;
  background-size: 148px 23px;
  border-bottom: 1px solid #f6f7fb;
}
.recent span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
  margin-left: 13px;
}
.new {
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recent .new span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
.new span:last-child {
  margin-right: 15px;
}
.content {
  width: 345px;
  height: 128px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
}
.content h2 {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding: 15px 0 8px 0;
  text-align: center;
}
.content h1 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 19px;
}
.guan {
  margin-left: 10px;
}
.scrap {
  margin-top: 20px;
  width: 100%;
  height: 242px;
  background: url(../../assets/canzhi.png) no-repeat;
  background-size: 130px 23px;
}
.scrap span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
  margin-left: 13px;
}
.need {
  margin-top: 20px;
  width: 100%;
  height: 282px;
  background: url(../../assets/maiche.png) no-repeat;
  background-size: 115px 23px;
}
.need p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 23px;
  margin-left: 13px;
  margin-bottom: 20px;
}
.xiao {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  color: #333333;
  line-height: 20px;
}
.xiao img {
  width: 30px;
  height: 30px;
}
.xiao figure {
  width: 32%;
  height: 82px;
  text-align: center;
}
footer {
  width: 100%;
  height: 40px;
  background: #3f64fd;
  text-align: center;
}
footer a {
  text-decoration: none;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
</style>
