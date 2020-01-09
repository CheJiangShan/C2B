<template>
  <div  v-if="have" class="record">
      <header>
      <p>评估记录</p>
    </header>
    <div class="hot">
      <li class="first">
        <div class="all">
          <div class="kind">
            <p>别克  英朗</p>
          </div>
          <div class="cost">
            <p>
              综合估值：
              <span>18.01万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款  1.5T  双离合互联精英型  国VI</p>
          </div>
          <div class="detail">
            <p>评估报告</p>
            <div class="xiaojiantou">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
    </div>
    <!-- 底部 -->
    <footere></footere>
  </div>
   <div v-else class="que">
      <header>
        <p>评估记录</p>
      </header>
      <div class="kong">
        <img src="../../assets/que.png" alt />
        <p>还没有评估记录哦</p>
      </div>
      <footere></footere>
    </div>
</template>
<script>
import footere from "../sellfooter/sellfooter";
export default {
  name: "record",
  components: {
    footere
  },
  data() {
    return {
      have:false
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.second {
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
  padding-left: 35%;
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
  width: 70px;
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
  width: 218px;
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
.detail p {
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
.que {
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
header p {
  font-size: 18px;
  color: #333333;
  text-align: center;
}
.kong {
  margin-top: 80px;
}
.kong img {
  width: 153px;
  height: 190px;
  margin: 144px 103px 0 109px;
}
.kong p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 120px;
  text-align: center;
}
</style>