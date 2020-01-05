<template>
  <div class="pay">
    <!-- 导航栏 -->
    <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <span>买车</span>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link :to="'sell1'">
              <span class="sell">卖车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="3">  
            <router-link :to="'shouye'">
              <span>用车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="4">
            <router-link :to="'shop'">
              <span>商城</span>
            </router-link>
          </mt-tab-item>
        </mt-navbar>
      </nav>
      <img src="../../assets/1.png" alt />
    </div>
    <!-- 轮播图 -->
    <div class="pic">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/banner.png" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 小图标 -->
    <div class="ico">
      <figure>
        <img src="../../assets/2.png" alt />
        <img class="ico1" src="../../assets/tuoyuan3.png" alt />
        <!-- <div class="tuoyuan"> 
        </div>-->
        <figcaption>技师上门</figcaption>
      </figure>
      <figure>
        <img src="../../assets/3.png" alt />
        <img class="ico2" src="../../assets/tuoyuan2.png" alt />
        <figcaption>5G车联</figcaption>
      </figure>
      <figure>
        <div class="big">
          <img src="../../assets/4.png" alt />
          <img class="ico3" src="../../assets/tuoyuan1.png" alt />
        </div>
        <figcaption>事故上报</figcaption>
      </figure>
    </div>
    <div class="middle"></div>

    <!-- 智能选车 -->
    <div class="select">
      <div class="contain">
        <div class="shuxian"></div>
        <!-- <div class="zhi">智能选车</div> -->
        <span>极速选车</span>
      </div>
      <div class="first" @click="xianshi()">
        <div class="you">
          <div class="che">车小二</div>
          <div class="sound">
            <img src="../../assets/yuying.png" alt />
          </div>
        </div>
        <div class="voice" v-show="hid" ref="close">
          <div class="close" @click="shut()">
            <img src="../../assets/close.png" alt />
          </div>
          <p>江山小二为您服务</p>
          <span>您可以试着说</span>
          <div class="automate">"我想买2019款速腾,自动挡"</div>
          <div class="chat">
            <img src="../../assets/yuyin2.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="neng">
      <div class="methods">
        <div class="title">
          <span>筛选方式</span>
          <span>品牌</span>
          <span>车型</span>
        </div>

        <mt-picker
          :slots="slots"
          value-key="name"
          ref="picker"
          @change="onValuesChange"
          :item-height="itemHeight"
        ></mt-picker>
      </div>
    </div>
    <div class="move">
      <div class="car">
        <img :style="left1" src="../../assets/che.gif" alt />
        拨动转轮,加速报价
      </div>
    </div>

    <!-- 地址 -->
    <div class="address">
      <div class="third">
        <img src="../../assets/dingwei.png" alt />
        <div class="henan">
          <p>河南江山纳智捷</p>
          <p>郑州市陇海路与城东路交叉口南500米路东</p>
        </div>
      </div>
      <div class="meter">538m</div>
    </div>
    <div class="middle"></div>

    <!-- 搜索新车的 -->
    <div
      style="margin-top:10px;"
      v-show="searchNewShow"
      class="afterslot"
      v-cloak
    >
      <div class="hot">
        <div class="new">
          <div class="shuxian"></div>
          <div class="sell">搜索结果</div>
        </div>
        <div class="find" @click="lookres()">
          <span>查看更多</span>
          <img src="../../assets/jantou.png" alt />
        </div>
      </div>
      <div class="slothot">
        <li class="slotfirst" v-for="item in NewShowList" :key="item.id">
          <div class="all">
            <div class="kind">
              <p>{{ item.fullname }}</p>
            </div>
            <!-- <div class="cost">
                    <p>
                      厂商指导价:
                      <span>{{item.selling_price}}万</span>
                    </p>
            </div>-->
          </div>
          <div class="down">
            <div class="genre">
              <p style="font-size:12px;color:rgba(255,82,79,1);">
                厂商指导价:
                <span style="font-size:13px;"
                  >{{
                    item.selling_price ? item.selling_price : item.price
                  }}万</span
                >
              </p>
            </div>
            <div class="detail">
              <a href="tel:400-111-3777">沟通顾问</a>
              <div class="xiaojiantou">
                <img src="../../assets/xiaojiantou.png" alt />
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>

    <!-- 搜索一网打尽 -->
    <div style="margin-top:10px" v-show="searchWangShow" class="afterslot">
      <div v-show="searchWangShow">
        <div class="hot">
          <div class="new">
            <div class="shuxian"></div>
            <div class="sell">搜索结果</div>
          </div>
          <div class="find" @click="toNew()">
            <span>查看更多</span>
            <img src="../../assets/jantou.png" alt />
          </div>
        </div>
      </div>
      <div class="slothot">
        <li
          class="slotfirst"
          v-for="(item, i) in WangShowList.data"
          :key="i"
          @click="
            wSearchTo(WangShowList.parameter1, WangShowList.parameter2, i)
          "
        >
          <div class="all">
            <div class="kind">
              <p>{{ i }}</p>
            </div>
          </div>
          <div
            class="down"
            style=" box-sizing: border-box;
           padding-right: 10px"
          >
            <div class="genre">
              <span
                style="font-size:12px;color:rgba(119,119,119,1);"
                v-for="(v, ii) in item"
                :key="ii"
              >
                {{ ii }}{{ v }}款
              </span>
            </div>
            <div class="detail">
              <a
                @click="tochexing()"
                style="font-size:11px;color:rgba(164,163,163,1)"
                >共{{ Number(item.新车) + Number(item.二手车) }}款车型</a
              >
              <div class="xiaojiantou">
                <img src="../../assets/xiaojiantou.png" alt />
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>

    <!-- 热卖 -->
    <div class="hot">
      <div class="new">
        <div class="shuxian"></div>
        <div class="sell">新车热卖</div>
      </div>
      <div class="find" @click="toNew()">
        <span>查看更多</span>
        <img src="../../assets/jantou.png" alt />
      </div>
    </div>
    <div class="kind">
      <div class="list">
        <dl
          style="box-shadow:1px 1px 2px 2px rgba(0,0,0,0.04);"
          v-for="(item, i) in list.新车"
          :key="i"
        >
          <dt>
            <img src="../../assets/banner.png" @click="toNew()" alt />
          </dt>
          <p>{{ item.fullname }}</p>
          <dd>
            厂商指导价：
            <span>{{ item.selling_price }}万</span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="middle"></div>

    <!-- 二手优价 -->
    <div class="hot" @click="toSecond()">
      <div class="new">
        <div class="shuxian"></div>
        <div class="sell">二手优价</div>
      </div>
      <div class="find">
        <span>查看更多</span>
        <img src="../../assets/jantou.png" alt />
      </div>
    </div>
    <div class="forth">
      <div class="list1">
        <dl
          style="box-shadow:1px 1px 2px 2px rgba(0,0,0,0.04);"
          v-for="(item, i) in list.二手"
          :key="i"
        >
          <dt>
            <img src="../../assets/banner.png" @click="toSecond()" alt />
          </dt>
          <p>{{ item.fullname }}</p>
          <dd>
            厂商指导价：
            <span>{{ item.price }}万</span>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 底 -->
    <div class="good">~江山小二正在努力优选更多好车~</div>
    <div class="slotbottom"></div>
    <!-- 底部 -->
    <footered></footered>
  </div>
</template>

<script>
import { threeSearch, newCareMessage } from "../api/apisum";
import footered from "../footer/footer";
// import myaddress from "../pay/city.json";
import { Toast } from "mint-ui";
export default {
  name: "pay",
  components: {
    footered
  },
  data() {
    return {
      selected: "1",
      hid: false,
      list: [],
      addressList: [], //滚轮转动的结果
      carClass: "",
      itemHeight: 28,
      searchNewShow: false, //新车搜索结果
      NewShowList: [],
      searchWangShow: false, //一网打尽搜索结果
      WangShowList: [],
      msg: "创建地址",
      // 搜索关键字
      key1: "",
      key2: "",
      key3: "",
      keywords: [],
      keywordLast: [], //要监听的数据
      toNext: "",
      toNext2: "",
      toNext3: "",
      height1: "",
      left1: {},
      slots: [
        {
          flex: 1,
          values: [],
          defaultIndex: 2,
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          defaultIndex: 2,
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          defaultIndex: 2,
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  async created() {
    const newres = await newCareMessage();
    this.list = newres.data.data;
    //获取三级联动信息
    this.getThreeList();
    // this.getSearchRes(this.key1,this.key2,this.key3)
  },
  // mounted() {
  //   console.log(this.key1)
  // },
  methods: {
    tochexing() {
      this.$router.push({ path: "/xiangqing1" });
    },
    // 跳到搜索
    lookres() {
      this.$router.push({ path: "/many" });
    },
    // 一网打尽结果的跳转
    wSearchTo(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
      this.$router.push({ path: "/xiangqing1", query: { a, b, c } });
    },
    switchTo(path) {
      this.$router.replace(path);
    },
    xianshi() {
      this.hid = !this.hid;
    },
    shut() {
      this.$refs.close.style.display = "none";
      let shangbaoshuju = "敬请期待";
      let instance = Toast(shangbaoshuju);
      setTimeout(() => {
        instance.close();
      }, 2000);
    },

    toNew() {
      this.$router.push({ path: "/new" });
    },
    toSecond() {
      this.$router.push({ path: "/second" });
    },
    onValuesChange(picker, values) {
      console.log(values);
      if (values[0].name == "新车") {
        this.key1 = 1;
      } else if (values[0].name == "二手车") {
        this.key1 = 1;
      } else {
        this.key1 = 3;
      }
      this.key2 = values[1].name;
      this.key3 = values[2].name;
      // console.log(this.key1)
      var carClassMap = {
        0: "",
        1: "z-center",
        2: "z-right"
      };
      if (values[2]) {
      }

      var that = this;
      if (!values[0]) {
        this.$nextTick(() => {
          if (that.addressList.length) {
            // 赋默认值
            picker.setValues([
              that.addressList[0],
              that.addressList[0].children[0],
              that.addressList[0].children[0].children[0]
            ]);
          }
        });
      } else {
        picker.setSlotValues(1, values[0].children);
        let town = [];
        if (values[1]) {
          town = values[1].children;
        }
        picker.setSlotValues(2, town);
      }
      this.key1 = values[0].name;
      this.key2 = values[1].name;
      this.key3 = values[2].name;
      console.log(this.key3);
      this.keywords = [this.key1, this.key2, this.key3];
      console.log(this.keywords);
    },

    //获取三级联动信息
    async getThreeList() {
      var that = this;
      const tres = await threeSearch();
      var addressList = [];
      tres.data.data.forEach(item => {
        var obj = {
          name: item[0],
          code: 0,
          children: []
        };
        item.children.forEach((item1, idx1) => {
          var name = item1.brand;
          if (!name) name = item1.ranges;
          var obj1 = {
            name: name,
            code: 1,
            children: []
          };
          item1.son.forEach((item2, idx2) => {
            var obj2 = {
              name: item2,
              code: 2,
              children: []
            };
            obj1.children.push(obj2);
          });
          obj.children.push(obj1);
        });
        addressList.push(obj);
      });
      that.addressList = addressList;
      console.log(that.addressList);
      that.slots[0].values = that.addressList;
      that.slots[2].values = that.addressList[0].children;
      that.slots[4].values = that.addressList[0].children[0].children;
    }
  },

  // 进行keywords的监听，一旦变化就会发送请求
  watch: {
    keywords: function(newVal, oldVal) {
      console.log("旧" + oldVal);
      console.log("新" + newVal);
      if (oldVal[2] != newVal[2]) {
        let param1;
        if (newVal[0] == "新车") {
          param1 = 1;
        } else if (newVal[0] == "二手车") {
          param1 = 2;
        } else {
          param1 = 3;
          this.toNext = newVal[1];
          this.toNext2 = newVal[2];
        }
        console.log(this.toNext);
        console.log(this.toNext2);
        // console.log(param1+ newVal[1]+ newVal[2])
        this.axios
          .post("https://api.chejiangshan.com/deal-result", {
            status: param1,
            parameter1: newVal[1],
            parameter2: newVal[2]
          })
          .then(res => {
            console.log(res.data.code);
            console.log(res.data.data);
            if (res.data.code == 1) {
              var newneeddata = [];
              if (res.data.data.length >= 4) {
                newneeddata = res.data.data.slice(0, 3);
              } else {
                newneeddata = res.data.data;
              }
              this.NewShowList = newneeddata;
              console.log(this.NewShowList);
              this.searchNewShow = true;
              this.searchWangShow = false;
            }
            if (res.data.code == 3) {
              console.log(res.data.data.data);
              this.WangShowList = res.data.data;
              this.searchWangShow = true;
              this.searchNewShow = false;
            }
          });
      }
      // console.log(this.key1)
      // if (newVal[2] != oldVal[2]) {
    },
    height1: function(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      if (newVal != oldVal) {
        this.left1 = {
          left: "290px",
          transition: "2s ease"
        };
      }
    }
    // }
  },
  mounted() {
    setTimeout(() => {
      let el = document.querySelectorAll(".picker-slot-wrapper");
      console.log(el);
      console.log(el[0].style);

      console.log(el[0].style.cssText);

      this.height1 = el[1].style.cssText;
    });
  }
};
</script>
<style scoped>
.list img,
.list1 img {
  display: block;
}
.pay {
  width: 100%;
  height: 100%;
  overflow: auto;
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
  margin-bottom: -6px;
}
.mint-navbar .mint-tab-item.is-selected span {
  font-size: 18px;
}
.mint-tab-item-label a span {
  font-size: 16px;
}
.pic {
  width: 100%;
  height: 180px;
  margin-top: 47px;
}
.pic img {
  width: 100%;
  height: 180px;
}
.ico {
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  text-align: center;
  position: relative;
}
.ico1 {
  position: absolute;
  left: 48px;
  top: 20px;
}
.ico2 {
  position: absolute;
  left: 172px;
  top: 20px;
}
.ico3 {
  position: absolute;
  right: 48px;
  top: 20px;
}
.ico img {
  width: 30px;
  height: 30px;
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.select {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shuxian {
  width: 4px;
  height: 22px;
  background: rgba(63, 100, 253, 1);
  border-radius: 1px;
  margin-left: 15px;
  margin-right: 10px;
}

.contain {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
}
.contain span {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.first {
  width: 70px;
  height: 40px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(170, 170, 170, 1);
  line-height: 22px;
  color: #aaaaaa;
}
.you {
  display: flex;
  height: 40px;
  align-items: center;
}

.close {
  width: 293px;
  height: 40px;
}
.sound {
  width: 20px;
  height: 20px;
  float: left;
}
.sound img {
  width: 14px;
  height: 18px;
  margin-left: 8px;
}
.voice {
  width: 293px;
  height: 381px;
  background: linear-gradient(
    135deg,
    rgba(73, 1, 241, 1) 0%,
    rgba(4, 1, 139, 1) 100%
  );
  border-radius: 5px;
  opacity: 0.95;
  position: fixed;
  top: 126px;
  left: 40px;
  z-index: 9999;
}
.voice img {
  width: 13px;
  height: 13px;
  float: right;
  margin: 15px 15px 0 0;
}
.voice p {
  width: 128px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 76px 82px 35px 82px;
}
.voice span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  margin-left: 102px;
}
.chat img {
  width: 96px;
  height: 96px;
  margin-top: -85px;
  margin-right: 96px;
}
.automate {
  width: 242px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  margin: 16px 39px 120px 35px;
}
.neng {
  width: 100%;
  height: 108px;
  margin-bottom: 20px;
  overflow: hidden;
}
.methods {
  width: 345px;
  height: 108px;
  background: url(../../assets/san.png) no-repeat;
  background-size: 345px 108px;
  margin: 0 auto;
}
.title {
  width: 345px;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
  display: flex;
  justify-content: space-around;
}
.move {
  width: 100%;
  height: 30px;
  position: relative;
}
.car {
  width: 345px;
  height: 16px;
  background: linear-gradient(
    134deg,
    rgba(2, 152, 254, 1) 0%,
    rgba(107, 59, 254, 1) 100%
  );
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  margin-bottom: 10px;
  margin: 0 auto;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  text-align: center;
  margin-bottom: 15px;
}
.move img {
  width: 70px;
  height: 30px;
  position: absolute;
  top: -12px;
  left: 15px;
}
.address {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.third {
  height: 50px;
  display: flex;
  align-items: center;
}

.third img {
  width: 15px;
  height: 20px;
  margin-left: 15px;
}
.henan {
  height: 40px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.henan p:first-child {
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 18px;
}
.henan p:last-child {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.meter {
  width: 35px;
  height: 50px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 50px;
  margin-right: 15px;
}
.hot {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.new {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
}
.sell {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
}
.find {
  width: 70px;
  height: 50px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(170, 170, 170, 1);
  line-height: 50px;
  color: #aaaaaa;
  display: flex;
  align-items: center;
}
.find img {
  width: 7px;
  height: 12px;
  padding-left: 3px;
}
.kind {
  width: 100%;
}
.list {
  width: 100%;
  /* border: 1px solid #f6f7fb; */
  display: flex;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 15px;
}
.list::-webkit-scrollbar {
  display: none;
}
.list dl {
  margin-left: 15px;
  width: 45%;
  /* margin-bottom: 15px; */
}
.list img {
  width: 165px;
  height: 103px;
}
.list p {
  width: 152px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.list dd:last-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 32px;
}
.list dd span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 32px;
}
.forth {
  width: 100%;
  height: 382px;
}
.list1 {
  width: 100%;
  /* border: 1px solid #f6f7fb; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 15px;
}
.list1 dl {
  /* margin-left: 15px; */
  margin-bottom: 11px;
  width: 167px;
}
.list1 img {
  /* width: 165px; */
  width: 100%;
  height: 103px;
}
.list1 p {
  width: 152px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.list1 dd:last-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 32px;
}
.list1 dd span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 32px;
}
.good {
  width: 100%;
  height: 36px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 36px;
  text-align: center;
}
.slotbottom {
  width: 100%;
  height: 50px;
}
</style>
<style>
.picker {
  height: 85px;
}
.picker-items {
  transform: translateY(-28px) !important;
}
.picker-item {
  height: 28px !important;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px !important;
}
.picker-item.picker-selected {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
.picker-center-highlight:before {
  content: none;
}
.picker-center-highlight:after {
  content: none;
}
.slot5 .picker-slot-wrapper {
  height: 2800px !important;
  transform: translate(0px, 36px) translateZ(0px);
}
.slot .picker-slot-wrapper .picker-item {
  height: 28px !important;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px !important;
}

/* 搜索 */
li {
  list-style: none;
}
.afterslot .slotfirst {
  width: 345px;
  height: 68px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.afterslot .all {
  width: 345px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.afterslot .kind {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.afterslot .cost {
  width: 131px;
  height: 22px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 17px;
  margin-right: -6px;
}
.afterslot .cost span {
  font-size: 14px;
}
.afterslot .down {
  width: 345px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.afterslot .genre {
  width: 218px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
  margin-left: 10px;
}
.afterslot .detail {
  width: 75px;
  height: 16px;
  display: flex;
  align-items: center;
}
.afterslot .detail a {
  text-decoration: none;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.afterslot .detail img {
  width: 7px;
  height: 12px;
  margin: auto 0;
  margin-left: 5px;
}
</style>
