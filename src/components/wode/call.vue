<template>
  <div class="call">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>称呼</p>
    </header>
    <div class="middle">
      <div class="edit">
        <span>您的行驶证姓名</span>
        <div class="right">
          <span>马小号</span>
        </div>
      </div>
      <div class="edit">
        <span>您的用户名</span>
        <div class="right">
          <span style="color:#333333">马小号</span>
        </div>
      </div>
      <div class="edit">
        <span>启用尊称</span>
        <div class="right">
          <mt-switch v-model="value" @change="turn"></mt-switch>
        </div>
      </div>
      <div class="edit" v-show="hid">
        <span style="margin-left:171px;font-size:14px">马</span>
        <div class="right1">
          <span style="font-size:14px">先生</span>
          <span style="background:#F0F5FF;color:#000;margin-left:30px;font-size:14px">女士</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "set",
  components: {},
  data() {
    return {
     hid:false,
      value: false
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    turn: function() {
      // console.log(this.value);
      // this.value = !this.value;
      // this.hid=true
      if(this.value == true){
        this.hid=true
      }
      if(this.value == false){
        this.hid=false
      }
    }
  }
};
</script>
<style  scoped>
.call {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
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
  padding-left: 38%;
}
.middle {
  margin-top: 80px;
  width: 100%;
}
.edit {
  height: 50px;
  width: 345px;
  margin: 0 auto;
  border-bottom: 1px solid #f6f7fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.right span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
}
.right1{
  display: flex
}
.right1 span{
width:45px;
height:20px;
background:#5B97FF
;border-radius:2px;
color:#fff;
display: block;
text-align: center;
line-height: 20px;
}
</style>