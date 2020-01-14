<template>
  <div class="technician">
    <header>
      <img  style="padding:5px"  @click="back()" src="../../assets/xiangqing.png" alt />
      <p>技师列表</p>
    </header>
    <div style="height:80px"></div>
    <ul class="standard">
      <li v-for="item1 in jishilist" :key="item1.id">
        <div class="xiche">
          <img src="../../assets/jishi.png" alt />
        </div>
        <div class="clear">
          <p>
            <span style="margin-right:10px">技师姓名:</span>{{ item1.realname }}
          </p>
          <div class="yuyue">
            <p>
              <span style="margin-right:10px">联系方式:</span>{{ item1.mobile }}
            </p>
            <p @click="toindex(item1.id)">预约</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { jishiall } from "../api/apisum";
export default {
  name: "technician",
  data() {
    return {
      jishilist: []
    };
  },
  async created() {
    let storm_id = localStorage.getItem("storm_id");
    const res = await jishiall(storm_id);
    console.log(res);
    if (res.data.code == 1) {
      this.jishilist = res.data.data;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toindex(id) {
      localStorage.setItem("artificer_id", id);
      this.$router.push({
        name: "shouye"
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
  margin-left: 10px;
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
