<template>
  <div class="canshu">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>参数配置</p>
    </header>
    <div class="big">
      <div class="first">
        <div class="small">
          <img src="../../assets/xiaoche.png" alt />
        </div>
        <p>别克 英朗</p>
      </div>
      <div class="second">
        <p>2019款 1.5T 双离合互联精英型 国VI</p>
      </div>
    </div>
    <div class="middle"></div>
    <div class="basic">
      <div class="set" @click="collect()">
        <span :v-model="param">{{param}}</span>
        <img class="diyi" src="../../assets/xiaojiantou.png" alt v-show="isShow" @click="toshow()" />
        <img class="dier" src="../../assets/sanjiao.png" alt v-show="!isShow" @click="tohid()" />
      </div>

      <div class="biao">
        <img src="../../assets/biaopei.png" alt />
        <span>标配</span>
        <img src="../../assets/xuanpei.png" alt />
        <span>选配</span>
        <img class="one" src="../../assets/wu.png" alt />
        <span>无</span>
      </div>
    </div>

    <div class="set-select" style="height:440px;width:100%;">
      <div class="f-top" style="width:100%;background-color:#fff;">
        <div
          v-show="hid"
          class="f-top-item"
          @click="seletedItem(item.name, item.id)"
          v-for="item in list_param"
          :key="item.id"
          :class="item.id == paramSelected ? 'activeItem' : ''"
          style="width:107px;
          height:30px;
          background:rgba(240,245,255,1);
          border-radius:2px;
          margin-left:15px;
          margin-bottom:10px"
        >{{ item.name }}</div>
      </div>
      <div class="f-bottom"></div>
    </div>

    <div class="tb">
      <table border="1" cellspacing="0">
        <tr v-for="value in 8" :key="value">
          <td>参考价(元)</td>
          <td>8.38万起</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list_param: [
        {
          id: 1,
          name: "基本参数"
        },
        {
          id: 2,
          name: "车身"
        },
        {
          id: 3,
          name: "发动机"
        },
        {
          id: 4,
          name: "变速箱"
        },
        {
          id: 5,
          name: "底盘转向"
        },
        {
          id: 6,
          name: "车轮制动"
        },
        {
          id: 7,
          name: "主/被动安全装备"
        },
        {
          id: 8,
          name: "辅佐/操控配置"
        },
        {
          id: 9,
          name: "外部/防盗配置"
        },
        {
          id: 10,
          name: "内部配置"
        }
      ],
      selected: "1",
      isShow: true,
      hid: false,
      param: "基本参数",
      paramSelected: 1
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/xiangqing" });
    },
    // 选择item的某一个
    seletedItem(text, id) {
      // console.log(id);
      this.param = text;
      console.log(this.paramSelected);
      this.paramSelected = id;
    },

    collect() {
      this.isShow = !this.isShow;
    },
    tohid() {
      this.hid = !this.hid;
    },
    toshow() {
      this.hid = true;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.canshu {
  width: 100%;
  height: 100%;
  overflow: auto;
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
.big {
  margin-top: 80px;
  width: 100%;
  height: 80px;
}
.first img {
  width: 14px;
  height: 14px;
  margin-left: 15px;
  margin-right: 5px;
  line-height: 14px;
}
.first {
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 30px;
}
.second {
  width: 100%;
  height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 32px;
  margin-left: 15px;
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.basic {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  align-items: center;
}

/* 这个是基本参数的样式 */
.set-select {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
}
.f-top {
  box-sizing: border-box;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
}
.f-bottom {
  flex: 1;
  background: rgba(51, 51, 51, 1);
  opacity: 0.2;
}
.f-top-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.activeItem {
  background: rgba(91, 151, 255, 1) !important;
  color: rgba(255, 255, 255, 1);
}
.set {
  display: flex;
  align-items: center;
  height: 52px;
}
.set span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  /* line-height: 52px; */
}
.set img {
  padding-top: 2px;
  padding-left: 5px;
}
.diyi {
  width: 8px;
  height: 14px;
}
.dier {
  width: 12px;
  height: 6px;
}
.biao {
  padding-right: 30px;
}
.biao span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 17px;
}
.biao img {
  width: 8px;
  height: 8px;
}
.biao .one {
  width: 8px;
  height: 1px;
  padding-bottom: 4px;
}
.tb {
  width: 100%;
  flex: 1;
}
.tb tr {
  flex: 1;
}
.tb td {
  width: 234px;
  height: 39px;
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.tb td:first-child {
  background: #f6f7fb;
  width: 140px;
}
.tb table {
  border: #eaedf1;
  border-collapse: collapse;
}
</style>
