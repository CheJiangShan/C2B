<template>
  <div class="set">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>账号设置</p>
    </header>
    <div class="big">
      <div class="edit" @click="toChange()">
        <span>头像</span>
        <div class="right">
          <img  src="../../assets/one.png"  alt />
          <!-- <img  alt  /> -->
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit">
        <span>称呼</span>
        <div class="right">
          <span style="font-size:14px">马先生</span>
          <img style="margin:-2px auto" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit">
        <span>绑定微信</span>
        <div class="right">
          <img src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
      <div class="edit">
        <span>注册手机号</span>
        <div class="right">
          <span style="font-size:14px">13000000000</span>
          <img style="margin:-2px auto" src="../../assets/xiaojiantou.png" alt />
        </div>
      </div>
    </div>
    <div class="middle"></div>
    <div class="exit">
      <p>退出登录</p>
    </div>
    <!-- <van-action-sheet v-model="show1">
      <ul>
        <li class="paizhao" @click="captureImage()">拍照</li>
        <li class="paizhao" @click="galleryImg()">从相册选择</li>
        <li class="paizhao" @click="quxiao()">取消</li>
      </ul>
    </van-action-sheet> -->
  </div>
</template>
// <script>
// import footeree from "../other/footer.vue";
// export default {
//   inject: ["reload"],
//   name: "set",
//   components: {},
//   data() {
//     return {
//       show1: false,
//       imgSrc: "", //展示的图片路径
//       tupianlist: "", //展示的图片容器
//       baseUrl: domain.testUrl, //接口变量
//       gerentouxiang: localStorage.getItem("touxiang") //用户头像
//     };
//   },
//   created() {
//     //   console.log(localStorage.getItem("touxiang"),)
//   },
//   methods: {
//     fanhui() {
//       this.$router.push({ path: "/wode" });
//     },
//     toChange() {
//         console.log(1)
//       this.show1 = true;
//     },
//     // 从相册中选取图片
//     galleryImg() {
//       let token = localStorage.getItem("token");
//       this.show1 = false;
//       let This = this;
//       console.log("从相册中选择图片:");
//       plus.gallery.pick(function(path) {
//         // alert(path + "path");
//         // This.imgSrc = path; //path 是本地路径
//         let img = new Image();
//         img.src = path;
//         img.onload = function(path) {
//           var that = img;
//           var w = that.width, //320
//             h = that.height, //426
//             scale = w / h;
//           w = 320 || w;
//           h = w / scale;
//           var canvas = document.createElement("canvas");
//           canvas.width = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
//           canvas.height = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
//           var ctx = canvas.getContext("2d");
//           ctx.drawImage(that, 0, 0, 300, 300);
//           var base64 = canvas.toDataURL(
//             "image/png",
//             "image/jpeg",
//             "image/jpg",
//             1 || 0.8
//           );
//           This.tupianlist = base64;
//           console.log(This.tupianlist + "我是转码后的base");
//           //上传照片
//           This.axios
//             .post(This.baseUrl + "/edit-user-head", {
//               token: token,
//               headpic: This.tupianlist
//             })
//             .then(res => {
//               console.log(res, "我是res");
//               if (res.data.code == 1) {
//                 localStorage.setItem("touxiang", res.data.data);
//                 let shangbaoshuju1 = res.data.msg;
//                 let instance = Toast(shangbaoshuju1);
//                 setTimeout(() => {
//                   instance.close();
//                 }, 2000);
//                 This.reload();
//               } else {
//                 let shangbaoshuju2 = res.data.msg;
//                 let instance = Toast(shangbaoshuju2);
//                 setTimeout(() => {
//                   instance.close();
//                 }, 2000);
//               }
//             });
//           //  This.tupianlist.push(base64);
//         };
//       });
//     },
//     // 拍照
//     captureImage() {
//       let token = localStorage.getItem("token");
//       this.show1 = false;
//       let This = this;
//       var cmr = plus.camera.getCamera(); //获取摄像头管理对象
//       var res = cmr.supportedImageResolutions[0]; //字符串数组，摄像头支持的拍照分辨率
//       var fmt = cmr.supportedImageFormats[0]; //字符串数组，摄像头支持的拍照文件格式
//       // console.log("拍照分辨率: " + res + ", 拍照文件格式: " + fmt);
//       cmr.captureImage(
//         function(path) {
//           plus.gallery.save(path, params => {
//             let file = params.file;
//             //编码为base64
//             var img = new Image();
//             img.src = file;
//             img.onload = function() {
//               var that = img;
//               var w = that.width,
//                 h = that.height,
//                 scale = w / h;
//               w = 320 || w;
//               h = w / scale;
//               var canvas = document.createElement("canvas");
//               canvas.width = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
//               canvas.height = 300; //这个设置不能丢，否者会成为canvas默认的300*150的大小
//               var ctx = canvas.getContext("2d");
//               ctx.drawImage(that, 0, 0, 300, 300);
//               var base64 = canvas.toDataURL(
//                 "image/png",
//                 "image/jpeg",
//                 "image/jpg",
//                 1 || 0.8
//               );
//               This.tupianlist = base64;
//               console.log(This.tupianlist);
//               // This.tupianlist.push(base64);
//               //上传照片
//               This.axios
//                 .post(This.baseUrl + "/edit-user-head", {
//                   token: token,
//                   headpic: This.tupianlist
//                 })
//                 .then(res => {
//                   console.log(res, "我是res");
//                   if (res.data.code == 1) {
//                     localStorage.setItem("touxiang", res.data.data);
//                     let shangbaoshuju3 = res.data.msg;
//                     let instance = Toast(shangbaoshuju3);
//                     setTimeout(() => {
//                       instance.close();
//                     }, 2000);
//                     This.reload();
//                   } else {
//                     let shangbaoshuju4 = res.data.msg;
//                     let instance = Toast(shangbaoshuju4);
//                     setTimeout(() => {
//                       instance.close();
//                     }, 2000);
//                   }
//                 });
//             };
//           });
//           //进行拍照操作
//           // 通过URL参数获取目录对象或文件对象
//           plus.io.resolveLocalFileSystemURL(path, function(entry) {
//             var tmpPath = entry.toLocalURL(); //获取目录路径转换为本地路径URL地址
//             // This.imgSrc = tmpPath;
//             // alert("拍摄成功: " + tmpPath);
//           });
//         },
//         function(error) {
//           //捕获图像失败回调
//           // alert("捕获图像失败: " + error.message);
//         },
//         { resolution: res, format: fmt }
//       );
//     },
//     quxiao() {
//       this.show1 = false;
//     }
//   }
// };
// </script>
<style scoped>
.set {
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
</style>