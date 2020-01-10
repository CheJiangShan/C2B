<template>
  <div class="main">
    <header>
      <img @click="back()" src="../../assets/xiangqing.png" alt />
      <p>快速预约</p>
    </header>
    <div style=" height: 79px;"></div>
    <div class="car-owner">
      <div class="owner">
        <div class="owner-left">
          <span>
            {{ usermsg.username }}
          </span>
          <span>
            {{ usermsg.mobile }}
          </span>
        </div>
        <div class="owner-right">
          <span>{{ carmsg.plate_num }}</span>
        </div>
      </div>
      <div class="ownerCar">
        <span>{{ carmsg.model }}</span>
      </div>
    </div>
    <div class="bar"></div>
    <div class="workaddress">
      <img src="../../assets/diangwei1.png" alt="" />
      <div class="address">
        <p>
          陇海路店
        </p>
        <p>
          郑州市陇海路与城东路交叉口南500米路东
        </p>
      </div>
      <span class="workname">{{ technician[0].realname }}</span>
    </div>
    <div class="bar"></div>
    <div class="repair">
      <div class="repaircar">
        <img src="../../assets/yuyue.png" alt="" />
      </div>
      <p>{{ service.title }}</p>
      <span>X 1</span>
    </div>
    <div class="bar"></div>
    <div class="bottom">
      <div class="sign">
        <span>备注：</span>
        <textarea
          ref="moretext"
          style="font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(164, 163, 163, 1);
              line-height: 17px;"
          id="signtxt"
          placeholder="请输入服务需求"
          v-model="textarea"
        ></textarea>
      </div>
      <div class="uploadpic">
        <p>车况图片：</p>
        <div class="pic">
          <img :src="item" alt="" v-for="(item, index) in qwe" :key="index" />
          <img src="../../assets/upload.png" alt="" @click="addpic()" />
        </div>
        <div class="submit" @click="submitcontent()">
          <span>提交</span>
        </div>
      </div>
    </div>

    <van-action-sheet v-model="show1">
      <ul class="phonelist">
        <li class="paizhao" @click="captureImage()">拍照</li>
        <li class="paizhao" @click="galleryImg()">从相册选择</li>
        <li class="paizhao" @click="quxiao()">取消</li>
      </ul>
    </van-action-sheet>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      show1: false,
      usermsg: [],
      carmsg: [],
      technician: [],
      service: [],
      textarea: "",
      menu_id: "",
      car_id: "",
      imgSrc: "", //展示的图片路径
      tupianlist: [], //展示的图片容器
      qwe: []
    };
  },
  created() {
    // console.log(this.$route.query.menu_id);
    this.menu_id = this.$route.query.menu_id;
    this.car_id = this.$route.query.car_id;
    this.axios
      .post("https://api.chejiangshan.com/usecar-order", {
        token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
        menu_id: 28,
        car_id: 6
      })
      .then(res => {
        // console.log(res.data.data.user);
        this.usermsg = res.data.data.user;
        this.carmsg = res.data.data.car;
        this.technician = res.data.data.artificer;
        this.service = res.data.data.menu;
        // console.log(this.service.title);
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addpic() {
      this.show1 = true;
    },
    quxiao() {
      this.show1 = false;
    },
    // 相册中选择
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
          This.qwe.push(This.imgSrc);
          This.tupianlist.push(base64);
          console.log("图片" + This.tupianlist);
          // console.log(This.tupianlist + "我是转码后的base");
          //这里可以请求接口
        };
      });
    },
    // 拍照
    captureImage(e) {
      let This = this;
      var cmr = plus.camera.getCamera(); //获取摄像头管理对象
      var res = cmr.supportedImageResolutions[0]; //字符串数组，摄像头支持的拍照分辨率
      var fmt = cmr.supportedImageFormats[0]; //字符串数组，摄像头支持的拍照文件格式
      console.log("拍照分辨率: " + res + ", 拍照文件格式: " + fmt);
      cmr.captureImage(
        function(path) {
          plus.gallery.save(path, params => {
            let file = params.file;
            console.log(path + "path");
            console.log(params.file + "file");
            //编码为base64
            var img = new Image();
            img.src = file;
            img.onload = function() {
              var that = img;
              var w = that.width,
                h = that.height,
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
              console.log(base64 + "64编码");
              This.tupianlist.push(base64);
            };
          });
          //进行拍照操作
          // 通过URL参数获取目录对象或文件对象
          plus.io.resolveLocalFileSystemURL(path, function(entry) {
            var tmpPath = entry.toLocalURL(); //获取目录路径转换为本地路径URL地址
            This.imgSrc = tmpPath;
            This.qwe.push(tmpPath);
          });
        },
        function(error) {
          //捕获图像失败回调
          console.log("捕获图像失败: " + error.message);
        },
        { resolution: res, format: fmt }
      );
    },
    submitcontent() {
      console.log(110);
      console.log(this.car_id);
      console.log(this.menu_id);
      console.log(this.textarea);
      this.axios
        .post("https://api.chejiangshan.com/usecar-setorder", {
          token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
          car_id: this.car_id,
          menu_id: this.menu_id,
          storm_id: 2,
          artificer_id: 2,
          pic: this.tupianlist,
          remark: this.textarea
        })
        .then(res => {
          if (res.data.code == 1) {
            let instance = Toast(res.data.msg);
            setTimeout(() => {
              instance.close();
            }, 1000);
          }
          if (res.data.code == -1) {
            let instance = Toast(res.data.msg);
            setTimeout(() => {
              instance.close();
            }, 1000);
          }
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
.main {
  width: 375px;
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
.car-owner {
  height: 83px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
}

.owner {
  height: 20px;
  width: 345px;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.owner-left {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.owner-right {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.ownerCar {
  width: 334px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-left: 16px;
  margin-bottom: 15px;
}
.bar {
  width: 375px;
  height: 15px;
  background: rgba(246, 247, 251, 1);
}
.workaddress {
  width: 375px;
  height: 73px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
  justify-content: space-around;
}
.workaddress img {
  width: 18px;
  height: 23px;
  margin-top: 4px;
  margin-right: 5px;
}
.address {
  width: 260px;
}
.address p:first-child {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
}
.address p:last-child {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 16px;
}
.workname {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-top: 7px;
}
.repair {
  width: 375px;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 19px 15px 0 15px;
}
.repair .repaircar {
  width: 47px;
  height: 47px;
  margin-right: 15px;
}
.repair .repaircar img {
  width: 45px;
  height: 45px;
}
.repair p {
  width: 260px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-top: 14px;
}
.repair span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin-top: 15px;
}

.bottom .sign {
  height: 125px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
}
.bottom .sign span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
.bottom .sign #signtxt {
  width: 301px;
  max-height: 90px;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  border: 1px solid rgba(246, 247, 251, 1);
}
textarea::-webkit-input-placeholder {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(164, 163, 163, 1);
  line-height: 17px;
}
.uploadpic {
  height: 192px;
}
.uploadpic p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.uploadpic .pic {
  box-sizing: border-box;
  padding: 0 0 0 15px;
  min-height: 132px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
}
.uploadpic .pic img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
  margin-right: 9px;
}
.submit {
  width: 375px;
  height: 40px;
  background: rgba(63, 100, 253, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit span {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
.paizhao {
  height: 45px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
