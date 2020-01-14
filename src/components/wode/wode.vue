<template>
  <div class="mine">
    <!-- 版本 -->
    <div class="versionw" v-show="versionshow">
      <div class="versionsnew">
        <p class="newversion">发现新版本</p>
        <p class="versionEng">beta1.2.0</p>
        <p class="contentnew">新版本更新内容：</p>
        <div class="content-item">
          <p style="margin-bottom:10px">
            1、新版本更新内容新版本更新内容新版本更新内容新版本更新内容
          </p>
          <p style="margin-bottom:10px">
            2、新版本更新内容新版本更新内容新版本更新内容新版本更新内容
          </p>
          <p>
            3、新版本更新内容新版本更新内容新版本更新内容新版本更新内过节费IG记录须交付距离想法V型，看
          </p>
        </div>
        <div class="button">
          <div class="cancel" @click="noupdata()">
            <span>暂不更新</span>
          </div>
          <div class="sure" @click="updata()">
            <span>
              我要尝鲜
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩完 -->

    <nav>
      <img class="shezhi" src="../../assets/shezhi.png" alt />
      <div class="set">
        <img @click="toSet()" class="head" src="../../assets/head.png" alt />
        <div class="type">
          <p class="xiao">{{ username }}</p>
          <p class="bie">{{ model }}</p>
          <p class="kuan">{{ plate_num }}</p>
        </div>
        <div class="car" @click="cheku()">
          <img src="../../assets/8.png" alt />
          <span>{{ car_num }}</span>
          <p></p>
        </div>
      </div>
    </nav>
    <div class="purse">
      <img src="../../assets/purse.png" alt />
      <span class="qian">我的钱包</span>
      <span>¥{{ usermoney }}</span>
      <p>提现</p>
    </div>
    <!-- 预约记录 -->
    <div class="order">
      <div class="content">
        <div class="contain">
          <div class="record">
            <img src="../../assets/record.png" alt />
            <span>预约记录</span>
          </div>
          <div class="see">
            <span>查看更多</span>
            <img src="../../assets/xiaojiantou.png" alt />
          </div>
        </div>
        <div class="list" v-for="value in 3" :key="value">
          <div class="date">
            <span>2019.10.19</span>
            <span>14:30</span>
          </div>
          <span>陇海路店</span>
          <span class="small">小保养</span>
        </div>
      </div>
    </div>
    <div class="yaoqing">
      <img src="../../assets/26.png" alt />
    </div>
    <div class="last">
      <div class="all" @click="looknewversion()">
        <div class="edition">
          <img class="pic" src="../../assets/edition.png" alt />
          <span class="top">版本升级</span>
        </div>
        <div class="right">
          <span class="next">最新版本</span>
          <img class="jian" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="all" @click="lookus()">
        <div class="edition">
          <img class="pic" src="../../assets/about.png" alt />
          <span class="top">关于我们</span>
        </div>
        <div class="right">
          <img class="jian" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="all">
        <div class="edition">
          <img class="pic" src="../../assets/tel.png" alt />
          <span class="top">联系我们</span>
        </div>
        <div class="right">
          <span class="next">400-111-3777</span>
        </div>
      </div>
    </div>
    <footeree></footeree>
  </div>
</template>
<script>
import { getUser } from "../api/apisum";
import footeree from "../other/footer.vue";
import { Toast } from "mint-ui";
export default {
  name: "mine",
  components: {
    footeree
  },
  data() {
    return {
      versionshow: false,
      username: localStorage.getItem("username"),
      usermoney: localStorage.getItem("usermoney"),
      model: "",
      car_num: "",
      plate_num: ""
    };
  },
  async created() {
    let token = localStorage.getItem("token");
    const res = await getUser(token);
    if (res.data.code == 1) {
      this.model = res.data.data.car_msg.model;
      this.plate_num = res.data.data.car_msg.plate_num;
      // this.carid = res.data.data.car_msg.id;
      this.car_num = res.data.data.car_num;
    } else {
      let instance = Toast(res.data.msg);
      setTimeout(() => {
        instance.close();
      }, 1000);
    }
  },
  methods: {
    toSet() {
      this.$router.push({ path: "/set" });
    },
    // 查看关于我们
    lookus() {
      this.$router.push({ path: "/aboutus" });
    },
    // 查看新版本
    looknewversion() {
      console.log(1111);
      this.versionshow = true;
    },
    // 取消新版本
    noupdata() {
      this.versionshow = false;
    },
    // 应用新版本
    updata() {
      let instance = Toast("敬请期待");
      setTimeout(() => {
        instance.close();
      }, 3000);
      setTimeout(() => {
        this.versionshow = false;
      }, 2000);
    },
    cheku() {
      this.$router.push({ path: "/cheku" });
    }
  }
};
</script>
<style scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
nav {
  width: 100%;
  height: 187px;
  background: #3f64fd;
  /* position: relative; */
}
.shezhi {
  width: 21px;
  height: 21px;
  float: right;
  padding-top: 33px;
  padding-right: 15px;
}
.set {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
}
.head {
  width: 70px;
  height: 70px;
}
.type {
  margin-left: 10px;
  flex: 1;
  /* display: flex */
}
.xiao {
  font-size: 16px;
  color: #ffffff;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 30px;
}
.bie {
  font-size: 14px;
  color: #ffffff;
}
.kuan {
  font-size: 12px;
  color: #ffffff;
  line-height: 20px;
}
.car span {
  font-size: 11px;
  color: #fff;
}
.car img {
  width: 18px;
  height: 15px;
  margin: 38px 0 0 40px;
}
.purse {
  width: 345px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(38, 95, 254, 0.21);
  border-radius: 5px;
  margin: 0 auto;
  /* position: absolute; */
  /* left: 15px;
  top: 175px; */
  margin-top: -30px;
  display: flex;
  align-items: center;
}
.purse img {
  width: 20px;
  height: 20px;
  padding-left: 20px;
  padding-right: 5px;
}
.purse span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.qian {
  margin-right: 30px;
}
.purse p {
  width: 50px;
  height: 16px;
  background: rgba(63, 100, 253, 1);
  border-radius: 8px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  text-align: center;
  margin-left: 84px;
}
.order {
  width: 345px;
  height: 135px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 7px 0px rgba(38, 95, 254, 0.21);
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
}
.content {
  height: 135px;
  margin: 0 20px;
}
.contain {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.record img {
  width: 20px;
  height: 20px;
  margin: -3px auto;
}
.record span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.see {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.see img {
  width: 7px;
  height: 10px;
}
.list {
  height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
}
.date span:first-child {
  margin-left: -25px;
  margin-right: 10px;
}
.small {
  margin-right: -20px;
}
.yaoqing {
  margin: 0 auto;
  margin-top: 20px;
  /* width:345px ; */
  width: 345px;
  height: 66px;
}
.yaoqing img {
  width: 345px;
  height: 66px;
}
.last {
  margin-top: 13px;
  width: 345px;
  margin: 0 auto;
  height: 220px;
}
.all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 53px;
}
.pic {
  width: 20px;
  height: 20px;
  margin: -5px auto;
}
.top {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.next {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 17px;
}
.jian {
  width: 7px;
  height: 10px;
}

.versionw {
  width: 375px;
  height: 667px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 99;
}
.versionsnew {
  width: 292px;
  height: 383px;
  background: url("../../assets/version.png") no-repeat 0 0;
  background-size: 292px 383px;
  position: fixed;
  top: 142px;
  left: 41px;
}
.versionsnew .newversion {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  margin: 20px 0 0 20px;
}
.versionsnew .versionEng {
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  margin-left: 20px;
  margin-bottom: 79px;
}
.versionsnew .contentnew {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.versionsnew .content-item p {
  width: 252px;
  margin-left: 20px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 18px;
}

.versionsnew .button {
  width: 292px;
  height: 66px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px 20px 20px 20px;
}
.versionsnew .button .cancel {
  width: 100px;
  height: 30px;
  background: rgba(63, 100, 253, 1);
  box-shadow: 0px 2px 4px 1px rgba(73, 162, 249, 0.29);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.versionw .button .cancel span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
.versionw .button .sure {
  width: 100px;
  height: 30px;
  background: rgba(63, 100, 253, 1);
  box-shadow: 0px 2px 4px 1px rgba(73, 162, 249, 0.29);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.versionw .button .sure span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
</style>
