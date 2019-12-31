<template>
  <div>
    <div class="bottom-tab">
      <div class="tab-item" @click="switchTo('/sell1')">
        <img
          :src="'/sell1' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal"
          alt="首页"
        />
        <span :class="{on: '/sell1' === $route.path}">首页</span>
      </div>
      <div class="tab-item" @click="switchTo('/pinggujilu')">
        <img
          :src="'/xunjiajilu' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal"
          alt="评估记录"
        />
        <span :class="{on: '/xunjiajilu' === $route.path}">评估记录</span>
      </div>
      <div class="tab-item" @click="switchTo('/wode')">
        <img
          :src="'/wode' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
          alt="我的"
        />
        <span :class="{on: '/wode' === $route.path}">我的</span>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarImgArr: [
        //图片切换
        {
          normal: require("../../assets/shouye.png"),
          selected: require("../../assets/shouye2.png")
        },
        {
          normal: require("../../assets/juxing.png"),
          selected: require("../../assets/juxing2.png")
        },
        {
          normal: require("../../assets/wode.png"),
          selected: require("../../assets/wode2.png")
        },
      ]
    };
  },

  methods: {
    switchTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bottom-tab {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  z-index: 999;
  border-top: 1px solid rgb(227, 230, 241);
}
.bottom-tab .tab-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #666;
}
.bottom-tab .tab-item img {
 width: 22px;
 height: 22px;
  margin-bottom: 2px;
}
.bottom-tab .tab-item img .on {
  color: red;
}
</style>
