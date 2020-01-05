<template>
  <div class="new">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>新车热卖</p>
    </header>
    <div class="hot">
      <li class="first" v-for="(item,i) in list" :key="i">
        <div class="all">
          <div class="kind">
            <p>{{item.brand}}</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>{{item.selling_price}}万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p
              style="word-break:keep-all;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; width:240px"
            >{{item.fullname}}</p>
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
</template>
<script>
import {newDetail} from "../api/apisum"
export default {
  data() {
    return {
      list: []
    };
  },
  // created() {
  //   let id = 0;
  //   this.axios
  //     .post("https://api.chejiangshan.com/deal-newmore", { pid: id })
  //     .then(res => {
  //       console.log(res.data);
  //       this.list = res.data.data;
  //     });
  // },
  async created(){
    let id=0;
    const res=await  newDetail(id);
    console.log(res)
     this.list = res.data.data;
  },
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.new {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
}
li {
  list-style: none;
}
header {
  width: 100%;
  padding-top: 15px;
  padding-left: 16px;
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
.hot {
  margin-top: 80px;
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