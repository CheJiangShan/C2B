<template>
  <div class="mine">
    <!-- 顶部 -->
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>我的车库</p>
    </header>
    <div class="second">
      <p>当前共有{{ lovecarlist.length }}辆爱车</p>
    </div>
    <div class="list">
      <li
        class="list-item"
        v-for="item in lovecarlist"
        :key="item.id"
        data-type="0"
        :id="item.id"
      >
        <div
          class="list-box"
          @touchstart.capture="touchStart"
          @touchend.capture="touchEnd"
          @click="skip(item.id)"
        >
          <div class="up">
            <img class="listimg" src="../../assets/17.png" alt />
            <span>{{ item.owner }}</span>
            <!-- <span v-if="item.status == 1">待预约</span> -->
            <p
              @click.stop="setdefault(item.id, $event)"
              :class="item.status == 0 ? 'default' : 'setdefault'"
            ></p>
          </div>
          <div class="bottom">{{ item.plate_num }}</div>
        </div>
        <!-- 左滑删除 :data-index="index" -->
        <div class="delete" @click="deleteItem(item.id, item.status)">
          <img class="deleteimg" src="../../assets/delete.png" alt />
        </div>
      </li>
    </div>
    <div class="slotBottom"></div>
    <div class="footer" @click="captureImage()">
      <img src="../../assets/sao.png" alt />
      <span>扫描行驶证添加爱车</span>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { lovecar } from "../api/apisum";
// const DELBTNWIDTH = 60;
export default {
  inject: ["reload"],
  data() {
    return {
      startX: 0,
      endX: 0,
      lovecarlist: []
    };
  },
  async created() {
    let token = "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT";
    const res = await lovecar(token);
    console.log(res.data.data);
    this.lovecarlist = res.data.data;
  },
  mounted() {},
  computed: {},
  methods: {
    fanhui() {
      this.$router.push({ path: "/shouye" });
    },
    // next() {},
    // 滑动
    skip(id) {
      if (this.checkSlide()) {
        this.restSlide();
      } else {
        this.$router.push({ path: "/aiche", query: { id: id } });
      }
    },
    //滑动开始
    touchStart(e) {
      // 记录初始位置
      this.startX = e.touches[0].clientX;
    },
    //滑动结束
    touchEnd(e) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement;
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = 1;
      }
      // 右滑
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    //判断当前是否有滑块处于滑动状态
    checkSlide() {
      let listItems = document.querySelectorAll(".list-item");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    //复位滑动状态
    restSlide() {
      let listItems = document.querySelectorAll(".list-item");
      // 复位
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    },
    //删除
    deleteItem(id, state) {
      let that = this;
      let index = this.lovecarlist.findIndex(v => {
        return v.id == id;
      });
      if (state == 1) {
        that.reload();
      }
      this.lovecarlist.splice(index, 1);
      this.axios
        .post("https://api.chejiangshan.com/usecar-carsdel", {
          token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
          cid: id
        })
        .then(res => {
          console.log(res);
        });
      // 当前索引
      // let index = e.currentTarget.dataset.index;
      // console.log(index);
      // 复位
      this.restSlide();
      // 删除
      // this.list.splice(index, 1);
    },
    setdefault(id, e) {
      console.log(id);
      // console.log(e);
      let that = this;
      this.axios
        .post("https://api.chejiangshan.com/usecar-carschg", {
          token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
          cid: id
        })
        .then(res => {
          console.log(res);
          console.log(res.data.code);
          if (res.data.code == 1) {
            that.reload();
            // this.
            // this.$router.go(0);
            // console.log(e);
            // let shimoren = document.getElementsByClassName("setdefault");
            // console.log(shimoren);
            e.target.className = "setdefault";
            let instance = Toast("设置成功");
            setTimeout(() => {
              instance.close();
            }, 3000);
          }
        });
    },
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
              This.tupianlist = base64;
              This.axios
                .post("https://api.chejiangshan.com/usecar-addcar", {
                  token: "pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT",
                  pic: This.tupianlist
                })
                .then(res => {
                  console.log(res);
                  let instance = Toast("正在发送，请稍后");
                  setTimeout(() => {
                    instance.close();
                  }, 1000);
                  if (res.data.code == 1) {
                    let instance = Toast(res.data.msg);
                    setTimeout(() => {
                      instance.close();
                    }, 1000);
                    This.reload();
                  } else {
                    let instance = Toast(res.data.msg);
                    setTimeout(() => {
                      instance.close();
                    }, 1000);
                  }
                });
            };
          });
          //进行拍照操作
          // 通过URL参数获取目录对象或文件对象
          // plus.io.resolveLocalFileSystemURL(path, function(entry) {
          //   var tmpPath = entry.toLocalURL(); //获取目录路径转换为本地路径URL地址
          //   This.imgSrc = tmpPath;
          //   This.qwe.push(tmpPath);
          // });
        },
        function(error) {
          //捕获图像失败回调
          console.log("捕获图像失败: " + error.message);
        },
        { resolution: res, format: fmt }
      );
    }
  }
};
// 手机端自适应：

function bodyScale() {
  var devicewidth = document.documentElement.clientWidth;
  var scale = devicewidth / 375;
  document.body.style.zoom = scale;
}
window.onload = window.onresize = function() {
  bodyScale();
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mine {
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
.second {
  margin-top: 80px;
  padding-left: 16px;
  width: 100%;
  height: 52px;
}
.second p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 52px;
}
.list {
  width: 100%;
  /* height: 500px; */
  padding-left: 16px;
}
.list li {
  width: 345px;
  height: 106px;
  background: rgba(240, 245, 255, 1);
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  transition: all 0.2s;
}
.list li[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
.list li[data-type="1"] {
  transform: translate3d(-62px, 0, 0);
}
.list li:after {
  content: " ";
  position: absolute;
  left: 24px;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.list-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.slotBottom {
  width: 100%;
  height: 263px;
}
.delete {
  position: absolute;
  top: 36px;
  right: -56px;
}
.delete .deleteimg {
  width: 36px;
  height: 36px;
}

.up {
  height: 53px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 20px;
  padding-left: 65px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.up span {
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 53px;
  margin-top: 25px;
}
.up .default {
  border: 1px solid #cacaca;
  border-radius: 10px;
  background: #cacaca;
  width: 48px;
  height: 16px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.up .default::after {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  content: "默认";
}
.up .setdefault {
  width: 60px;
  height: 16px;
  background: rgba(91, 151, 255, 1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.up .setdefault::after {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  content: "设为默认";
}
.listimg {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 25px;
}
.bottom {
  height: 53px;
  line-height: 53px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 25px;
}
.footer {
  width: 100%;
  height: 40px;
  background: #5b97ff;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
.footer img {
  width: 20px;
  height: 17px;
  padding: 0 5px 0 100px;
}
</style>
