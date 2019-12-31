<template>
  <div class="xiangqing">
    <nav>
      <div class="left">
        <img src="../../assets/xiangqing.png" alt />
      </div>
      <p>宝马</p>
    </nav>
    <div class="tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">新车(16)</mt-tab-item>
        <mt-tab-item id="2">二手车(8)</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'宝马1系 ' " :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'宝马1系' " :key="n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <div class="record">
      <li class="first">
        <div class="all">
          <div class="kind">
            <p>宝马&nbsp;&nbsp;&nbsp;1系</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款&nbsp;&nbsp;&nbsp;1.5T&nbsp;&nbsp;&nbsp;双离合互联精英型&nbsp;&nbsp;&nbsp;国VI</p>
          </div>
          <div class="detail">
            <p>报价详情</p>
            <div class="xiaojiantou" @click="switchTo('/xiangqing1')">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
      <li class="first">
        <div class="all">
          <div class="kind">
           <p>宝马&nbsp;&nbsp;&nbsp;1系</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款&nbsp;&nbsp;&nbsp;1.5T&nbsp;&nbsp;&nbsp;双离合互联精英型&nbsp;&nbsp;&nbsp;国VI</p>
          </div>
          <div class="detail">
            <p>报价详情</p>
            <div class="xiaojiantou" @click="switchTo('/xiangqing')">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
      <li class="first">
        <div class="all">
          <div class="kind">
            <p>宝马&nbsp;&nbsp;&nbsp;1系</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款&nbsp;&nbsp;&nbsp;1.5T&nbsp;&nbsp;&nbsp;双离合互联精英型&nbsp;&nbsp;&nbsp;国VI</p>
          </div>
          <div class="detail">
            <p>报价详情</p>
            <div class="xiaojiantou"  @click="switchTo('/xiangqing')">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
      <li class="first">
        <div class="all">
          <div class="kind">
            <p>宝马&nbsp;&nbsp;&nbsp;1系</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款&nbsp;&nbsp;&nbsp;1.5T&nbsp;&nbsp;&nbsp;双离合互联精英型&nbsp;&nbsp;&nbsp;国VI</p>
          </div>
          <div class="detail">
            <p>报价详情</p>
            <div class="xiaojiantou" @click="switchTo('/xiangqing')">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
      <li class="first">
        <div class="all">
          <div class="kind">
            <p>宝马&nbsp;&nbsp;&nbsp;1系</p>
          </div>
          <div class="cost">
            <p>
              厂商指导价:
              <span>22.49万</span>
            </p>
          </div>
        </div>
        <div class="down">
          <div class="genre">
            <p>2019款&nbsp;&nbsp;&nbsp;1.5T&nbsp;&nbsp;&nbsp;双离合互联精英型&nbsp;&nbsp;&nbsp;国VI</p>
          </div>
          <div class="detail">
            <p>报价详情</p>
            <div class="xiaojiantou" @click="switchTo('/xiangqing')">
              <img src="../../assets/xiaojiantou.png" alt />
            </div>
          </div>
        </div>
      </li>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "xiangqing",
  components: {},
  data() {
    return {
      selected: "1"
    };
  }
  //   methods: {
  //     switchTo(path) {
  //       this.$router.replace(path);
  //     }
  //   }
};
</script>
<style scoped>
.xiangqing {
  width: 100%;
  height: 100%;
}
li {
  list-style-type: none;
}
nav {
  width: 100%;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #f6f7fb;
  align-items: center;
}
nav p {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 70px;
  margin-left: 137px;
}
.left img {
  width: 9px;
  height: 17px;
  margin-left: 15px;
}
.tab {
  width: 100%;
  height: 50px;
}
.mint-navbar {
  height: 42px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 22px;
  color: rgba(164, 163, 163, 1);
}
.tab .mint-tab-item-label {
  font-size: 16px;
}
/* .mint-cell:first-child .mint-cell-wrapper {
  width: 30px;
  height: 4px;
  background: rgba(63, 100, 253, 1);
  border-radius: 2px;
} */
.tab .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid rgba(63, 100, 253, 1);
  color: #333333;
}
.tab .mint-tab-item-icon img {
  width: 19px;
  height: 19px;
}
.record {
  width: 100%;
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
}
.detail p {
  width: 56px;
  height: 16px;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.xiaojiantou {
  width: 10px;
  height: 16px;
  line-height: 19px;
}
.xiaojiantou img {
  width: 7px;
  height: 12px;
}
</style>