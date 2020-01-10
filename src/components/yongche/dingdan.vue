<template>
  <div class="dingdan">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>我的订单</p>
    </header>
    <div class="record">
      <div id="searchBar">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <div>
              <span>全部</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="2">
            <div>
              <span>待预约</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="3">
            <div>
              <span>维保中</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="4">
            <div>
              <span>已完工</span>
            </div>
          </mt-tab-item>
          <mt-tab-item id="5">
            <div>
              <span>已交付</span>
            </div>
          </mt-tab-item>
        </mt-navbar>
      </div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
<<<<<<< HEAD
          <li v-for="item in list" :key="item" @click="toorder(item.id)">
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span v-if="item.status == 0">已交付</span>
              <span v-if="item.status == 1">待预约</span>
              <span v-if="item.status == 2">待交付/维保中</span>
              <span v-if="item.status == 3">已完工</span>
=======
          <li v-for="item in list" :key="item" @click="toorder(item.id,item.status)">
            <div class="finish">
              <span>{{item.storm_name}}</span>
              <span v-if="item.status==0">已付款</span>
              <span v-if="item.status==1">待预约</span>
              <!-- <span v-if="item.status==-1">已关闭</span> -->
              <span v-if="item.status==-1">待交付/维保中</span>
              <span v-if="item.status==3">已完工</span>
>>>>>>> b096fe022cc71725a51f9888d1726c3475239c5b
            </div>
            <div class="curing">
              <span>{{ item.title }}</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
<<<<<<< HEAD
          <li v-for="item in list1" :key="item" @click="toorder(item.id)">
=======
          <li v-for="item in list1" :key="item" @click="toorder(item.id,item.status)">
>>>>>>> b096fe022cc71725a51f9888d1726c3475239c5b
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span>待预约</span>
            </div>
            <div class="curing">
              <span>{{ item.title }}</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
<<<<<<< HEAD
          <li v-for="item in list2" :key="item" @click="toorder(item.id)">
=======
          <li v-for="item in list2" :key="item" @click="toorder(item.id,item.status)">
>>>>>>> b096fe022cc71725a51f9888d1726c3475239c5b
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span>待交付/维保中</span>
            </div>
            <div class="curing">
              <span>{{ item.title }}</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
<<<<<<< HEAD
          <li v-for="item in list3" :key="item" @click="toorder(item.id)">
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span>待交付/维保中</span>
=======
          <li v-for="item in list3" :key="item" @click="toorder(item.id,item.status)">
            <div class="finish">
              <span>{{item.storm_name}}</span>
              <span>已完工</span>
>>>>>>> b096fe022cc71725a51f9888d1726c3475239c5b
            </div>
            <div class="curing">
              <span>{{ item.title }}</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
<<<<<<< HEAD
          <li v-for="item in list4" :key="item" @click="toorder(item.id)">
=======
          <li v-for="item in list4" :key="item" @click="toorder(item.id,item.status)">
>>>>>>> b096fe022cc71725a51f9888d1726c3475239c5b
            <div class="finish">
              <span>{{ item.storm_name }}</span>
              <span>已交付</span>
            </div>
            <div class="curing">
              <span>{{ item.title }}</span>
              <span class="serve">共2次服务</span>
              <span>¥65.00</span>
            </div>
            <p class="serial">订单编号：{{ item.order_num }}</p>
          </li>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="slotBottom"></div>
    <footeree></footeree>
  </div>
</template>

<script>
import { orderDetail } from "../api/apisum";
import footeree from "../other/footer.vue";
export default {
  name: "dingdan",
  components: {
    footeree
  },
  data() {
    return {
      selected: "1",
      list: [],
      list1: [],
      list2:[],
      list3: [],
      list4: []
    };
  },
  async created() {
    let token = "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT";
    const res = await orderDetail(token, "");
    console.log(res);
    console.log(res.data.data);
    this.list = res.data.data;
    const res1 = await orderDetail(token, 1);
    console.log(res1);
    this.list1 = res1.data.data;
    const res2 = await orderDetail(token, -1);
    console.log(res2);
    this.list2 = res2.data.data;
    const res3 = await orderDetail(token, 3);
    console.log(res3);
    this.list3 = res3.data.data;
    const res4 = await orderDetail(token, 0);
    console.log(res4);
    this.list4 = res4.data.data;
  },
  mounted() {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/shouye" });
    },
    //1:带预约，2：待交付/维保中，3：已完工 ，0：已交付
  async  toorder(a, b) {
      console.log(a);
      console.log(b);
      this.axios
        .post("https://api.chejiangshan.com/usecar-ordermsg", {
          token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
          order_id: a
        })
        .then(res => {
          if (b === 0) {
            this.$router.push({
              path: "/closed",
              query: {
                order_id:a
              }
            });
          } else if (b === 1) {
            this.$router.push({ path: "/noorder", query: {
                order_id:a
              } });
          } else if (b === -1) {
            this.$router.push({ path: "/nopayment", query: {
                order_id:a
              } });
          } else if (b === 3) {
            this.$router.push({ path: "/completed", query: {
                order_id:a
              } });
          }
          console.log(res);
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dingdan {
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  overflow: hidden;
}
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
header p {
  font-size: 18px;
  color: #333333;
  padding-left: 32%;
}
.record {
  width: 100%;
  /* margin-top: 80px; */
  /* height: 1000px */
}
#searchBar{
  position:fixed;
  top:80px;
  left:0;
  width: 100%;
  z-index:99
}
.record .mint-tab-item {
  color: #a4a3a3;
}
.record .mint-navbar .mint-tab-item.is-selected {
  color: #3f64fd;
  border-bottom: 4px solid #3f64fd;
}
.record li {
  width: 345px;
  height: 109px;
  background: #f0f5ff;
  margin-left: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.mint-tab-container-item {
  margin-top: 130px;
}
.finish {
  width: 345px;
  height: 32px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5e3ff;
}
.finish span:first-child {
  padding-left: 10px;
}
.finish span:last-child {
  padding-right: 10px;
}
.curing {
  /* width: 320px; */
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.curing span:first-child {
  margin-left: 5px;
}
.curing span:last-child {
  margin-right: 5px;
}
.serve {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  padding: 0 60px 0 55px;
}
.serial {
  width: 345px;
  /* margin: 0 auto; */
  margin-left: 10px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
.next {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 30px;
  text-align: center;
}
.slotBottom{
  width: 100%;
  height: 50px
}
</style>
