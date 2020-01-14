<template>
  <div class="set">
    <header>
      <img
        style="padding:5px"
        @click="fanhui()"
        src="../../assets/xiangqing.png"
        alt
      />
      <p>账号设置</p>
    </header>
    <div class="big">
      <div class="edit" @click="toChange()">
        <span>头像</span>
        <div class="right">
          <img v-if="!imgSrc" src="../../assets/one.png" alt />
          <img v-if="imgSrc" :src="imgSrc" alt="" />
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit" @click="toCall()">
        <span>称呼</span>
        <div class="right">
          <span style="font-size:14px">{{ username }}</span>
          <img
            style="margin:-2px auto"
            src="../../assets/xiaojiantou.png"
            alt
          />
        </div>
      </div>
      <div
        class="edit  weixin"
        @click="
          toFixed();
          remove();
        "
      >
        <span>绑定微信</span>
        <div class="right">
          <span class="weixinstate" style="font-size:14px">{{
            weixinstate
          }}</span>
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit" @click="tophone()">
        <span>注册手机号</span>
        <div class="right">
          <span style="font-size:14px">{{phone}}</span>
          <img
            style="margin:-2px auto"
            src="../../assets/xiaojiantou.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="exit" @click="quit()">
      <p>退出登录</p>
    </div>
    <van-action-sheet v-model="show">
      <ul>
        <li class="paizhao" @click="captureImage()">拍照</li>
        <li class="paizhao" @click="galleryImg()">从相册选择</li>
        <li class="paizhao" @click="toCancle()">取消</li>
      </ul>
    </van-action-sheet>
    <van-action-sheet v-model="show1">
      <div class="bottom">
        <p>点击使用微信登录</p>
        <img @click="Success()" src="../../assets/weixin.png" alt />
        <p @click="Cancle()">取消</p>
      </div>
    </van-action-sheet>
    <!-- <mt-popup v-model="popupVisible"  position="bottom">
      ...
    </mt-popup> -->
    <mt-popup v-model="popupVisible">绑定成功</mt-popup>
    <mt-popup v-model="removeshow">解绑成功</mt-popup>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";
export default {
  name: "set",
  components: {},
  data() {
    return {
      show: false, //照片相册
      show1: false, //是弹出的绑定微信的界面
      popupVisible: false,
      removeshow: false,
      weixinstate: "",
      username: localStorage.getItem("username"),
      imgSrc: "",
      phone:localStorage.getItem("shoujihao")
    };
  },
  created() {},
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#F6F7FB");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    // 返回上一个页面
    fanhui() {
      this.$router.push({ path: "/wode" });
    },
    //
    toCall() {
      this.$router.push({ path: "/call" });
    },
    // 跳转手机号
    tophone() {
      this.$router.push({ path: "/registerphone" });
    },
    toFixed() {
      this.show1 = true;
    },
    Cancle() {
      this.weixinstate = "";
      this.show1 = !this.show1;
    },
    toChange() {
      this.show = true;
    },
    toCancle() {
      this.show = !this.show;
    },
    Success() {
      this.popupVisible = true; //绑定成功弹出层
      this.show1 = !this.show1;
      this.weixinstate = "已绑定";
      this.state = false;
    },
    remove() {
      if (this.weixinstate == "已绑定") {
        this.show1 = false;
        MessageBox.confirm("", {
          message: "确定解除绑定",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
          .then(action => {
            if (action == "confirm") {
              //确认的回调
              console.log(1);
              this.weixinstate = "";
              this.removeshow = true;
            }
          })
          .catch(err => {
            if (err == "cancel") {
              //取消的回调
              this.weixinstate = "已绑定";
              console.log(2);
            }
          });
      }
    },
    quit() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("usermoney");
      localStorage.removeItem("touxiang");
      localStorage.removeItem("shoujihao");
      let shangbaoshuju = "您已退出";
      let instance = Toast(shangbaoshuju);
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    galleryImg() {
      let This = this;
      console.log("从相册中选择图片:");
      plus.gallery.pick(function(path) {
        This.imgSrc = path; //path 是本地路径
        let img = new Image();
        img.src = path;
        img.onload = function(path) {
          var that = img;
          var w = that.width, //320
            h = that.height, //426
            scale = w / h;
          w = 320 || w;
          h = w / scale;
          var canvas = document.createElement("canvas");
          canvas.width = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
          canvas.height = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
          var ctx = canvas.getContext("2d");
          ctx.drawImage(that, 0, 0, 300, 300);
          var base64 = canvas.toDataURL(
            "image/png",
            "image/jpeg",
            "image/jpg",
            1 || 0.8
          );
          console.log(This.imgSrc);
          // This.qwe.push(This.imgSrc);
          This.tupianlist = base64;
          console.log("图片" + This.tupianlist);
          // console.log(This.tupianlist + "我是转码后的base");
          //这里可以请求接口
          This.axios
            .post("https://api.chejiangshan.com/mine-change", {
              token: localStorage.getItem("token"),
              type: 1,
              content: This.tupianlist
            })
            .then(res => {
              console.log(res);
              if (res.data.code) {
                let instance = Toast("更换成功");
                setTimeout(() => {
                  instance.close();
                }, 1000);
              } else {
                let msg = res.data.msg;
                let instance = Toast(msg);
                setTimeout(() => {
                  instance.close();
                }, 1000);
              }
            });
        };
      });
    }
  }
};
</script>
<style scoped>
.set {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow: hidden;
  background: #ffffff;
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
.right img:first-child {
  width: 40px;
  height: 40px;
}
.right img:last-child {
  width: 9px;
  height: 16px;
  margin: 8px auto;
}
.weixin {
  position: relative;
}
.weixinstate {
  position: absolute;
  top: 13px;
  right: 14px;
}
.edit span {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.middle {
  width: 100%;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.exit {
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 82, 79, 1);
  line-height: 50px;
  text-align: center;
}
.paizhao {
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #f6f7fb;
}
.bottom {
  width: 100%;
  height: 193px;
  font-size: 16px;
  color: #333333;
}
.bottom p:first-child {
  margin: 30px 124px 20px 123px;
}
.bottom img {
  width: 50px;
  height: 42px;
  margin: 0 162px;
}
.bottom p:last-child {
  margin: 24px 172px 0 171px;
}
.mint-popup {
  width: 130px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
}
</style>
