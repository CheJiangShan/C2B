<template>
  <div class="shouye">
    <!-- 导航栏 -->
    <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <router-link :to="'/'">
              <span>买车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link :to="'sell1'">
              <span>卖车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="3">
            <span>用车</span>
          </mt-tab-item>
          <mt-tab-item id="4">
            <router-link :to="'shop'">
              <span>商城</span>
            </router-link>
          </mt-tab-item>
        </mt-navbar>
      </nav>
      <img @click="news()" src="../../assets/1.png" alt />
    </div>
    <!-- header -->
    <div class="header">
      <div class="tianqi">
        <div class="tianqi-1">
          <img src="../../assets/7.png" alt />
          <p>未来三天多云</p>
          <span>适宜洗车</span>
        </div>
        <img
          @click="captureImage()"
          class="saoyosao"
          src="../../assets/6.png"
          alt
        />
      </div>
      <!-- 车主称呼 -->
      <h1>您好，{{ username ? username : "亲爱的用户!" }}</h1>
      <div class="cheliang">
        <div class="cheliang-1" v-if="chelaing">
          <span>{{ model }}</span>
          <p>{{ plate_num }}</p>
        </div>
        <div class="cheliang-1" v-else>
          <p class="cheliangtxt">扫描行驶证，快速添加爱车~</p>
        </div>
        <div class="cheliang-3" @click="cheku()">
          <img src="../../assets/8.png" alt />
          <span>{{ car_num }}</span>
        </div>
      </div>

      <!-- 记录 -->
      <div class="jilu">
        <div class="baoyangjilu" @click="tobaoyang()">
          <img src="../../assets/9.png" alt />
          <span>保养记录</span>
        </div>
        <div class="weizhangjilu" @click="breakrules()">
          <img src="../../assets/10.png" alt />
          <span>违章记录</span>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="gongnengzu">
        <div class="mokuai" @click="toSort(0)">
          <img src="../../assets/11.png" alt />
          <span>精洗</span>
        </div>
        <div class="mokuai" @click="toSort(2)">
          <img src="../../assets/12.png" alt />
          <span>保养</span>
        </div>
        <div class="mokuai" @click="toSort(4)">
          <img src="../../assets/13.png" alt />
          <span>钣金</span>
        </div>
        <div class="mokuai" @click="toSort(6)">
          <img src="../../assets/14.png" alt />
          <span>改装</span>
        </div>
        <div class="mokuai" @click="toWait()">
          <img src="../../assets/15.png" alt />
          <span>事故上报</span>
        </div>
        <div class="mokuai" @click="toSort(1)">
          <img src="../../assets/17.png" alt />
          <span>美容</span>
        </div>
        <div class="mokuai" @click="toSort(3)">
          <img src="../../assets/18.png" alt />
          <span>维修</span>
        </div>
        <div class="mokuai" @click="toSort(5)">
          <img src="../../assets/21.png" alt />
          <span>喷漆</span>
        </div>
        <div class="mokuai" @click="toSort(7)">
          <img src="../../assets/19.png" alt />
          <span>翻新</span>
        </div>
        <div class="mokuai" @click="toWait()">
          <img src="../../assets/20.png" alt />
          <span>查看更多</span>
        </div>
      </div>
      <!-- 地点班组 -->
      <div class="didianbanzu">
        <div class="didian" @click="tocarstore()">
          <img src="../../assets/24.png" alt />
          <div class="dianshangxia">
            <div class="didian-1">
              <h3>{{ storm_name }}</h3>
              <!-- <img src="../../assets/22.png" alt /> -->
            </div>
            <div class="didian-2">
              <img src="../../assets/23.png" alt />
              <span>{{ address }}</span>
            </div>
          </div>
        </div>
        <div class="banzu" @click="totechnician()">
          <img src="../../assets/jishi.png" alt />
          <div class="dianshangxia">
            <div class="banzuming">
              <img src="../../assets/25.png" alt />
              <span>{{ realname }}</span>
            </div>
            <p>服务次数：666次</p>
          </div>
        </div>
      </div>
      <img class="yaoqing" src="../../assets/26.png" alt />
    </div>
    <!-- 邀请好友 -->
    <!-- footer导航栏 -->
    <footeree></footeree>
  </div>
</template>

<script>
import { getUser, technician } from "../api/apisum";
import footeree from "../other/footer.vue";
import { Toast } from "mint-ui";
export default {
  name: "shouye",
  components: {
    footeree
  },
  data() {
    return {
      selected: "3",
      username: "",
      model: "",
      plate_num: "",
      storm_name: "",
      address: "",
      realname: "",
      carid: "",
      car_num: "",
      storm_id: localStorage.getItem("storm_id")
        ? localStorage.getItem("storm_id")
        : "",
      artificer_id: localStorage.getItem("artificer_id")
        ? localStorage.getItem("artificer_id")
        : "",
      chelaing: false
    };
  },
  async created() {
    let token = localStorage.getItem("token");
    const res = await getUser(token);
    if (res.data.code == 1) {
      this.username = res.data.data.user.username;
      this.cheliangshow = true;
      this.cheliang = false;
      if (res.data.data.car_msg != "") {
        this.model = res.data.data.car_msg.model;
        this.plate_num = res.data.data.car_msg.plate_num;
        this.carid = res.data.data.car_msg.id;
        this.chelaing = true;
      } else {
        this.chelaing = false;
      }
      this.car_num = res.data.data.car_num;
    }
    //首页技师信息s
    // console.log(this.storm_id);
    // console.log(this.artificer_id);
    let storm_id = this.storm_id;
    let artificer_id = this.artificer_id;
    const res1 = await technician(storm_id, artificer_id);
    console.log(res1);
    console.log(res1.data.data.mendian);
    this.storm_name = res1.data.data.mendian.storm_name;
    localStorage.setItem("storm_id", res1.data.data.mendian.id);
    this.address = res1.data.data.mendian.address;
    this.realname = res1.data.data.jishi.realname;
  },
  mounted() {},
  methods: {
    cheku() {
      this.$router.push({ path: "/cheku" });
    },
    toSort(num) {
      this.$router.push({
        name: "jingxi",
        query: {
          num
        }
      });
    },
    news() {
      this.$router.push({ path: "/news" });
    },
    tobaoyang() {
      this.$router.push({
        name: "aiche",
        query: {
          id: this.carid
        }
      });
    },
    breakrules() {
      this.$router.push({
        name: "aiche",
        query: {
          id: this.carid,
          selected: "2"
        }
      });
    },
    toWait() {
      {
        let shangbaoshuju = "敬请期待";
        let instance = Toast(shangbaoshuju);
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    tocarstore() {
      this.$router.push({
        name: "carstore"
      });
    },
    totechnician() {
      this.$router.push({
        name: "technician"
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
                  token: localStorage.getItem("token"),
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
                    // This.reload();
                    This.$router.push({
                      path: "/cheku"
                    });
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
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow: auto; */
}
.shouye {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.roof {
  padding-top: 15px;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
}
.roof img {
  width: 19px;
  height: 19px;
}
nav {
  color: #aaaaaa;
  width: 80%;
  height: 50px;
}
nav .sell {
  text-decoration: none;
  color: #aaaaaa;
  font-size: 12px;
  line-height: 13px;
}

.mint-navbar {
  height: 42px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid rgba(63, 100, 253, 1);
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  color: #333333;
  margin-bottom: -6px;
}
.mint-navbar .mint-tab-item.is-selected span {
  font-size: 18px;
}
.mint-tab-item-label a span {
  font-size: 16px;
}
.header {
  width: 100%;
  height: 221px;
  margin-top: 50px;
  background: url(../../assets/5.png) no-repeat;
  background-size: 100% 100%;
}
.tianqi {
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding-top: 29px;
  align-items: center;
}
.tianqi .tianqi-1 {
  display: flex;
  align-items: center;
}
.tianqi .tianqi-1 img {
  width: 25px;
  height: 14px;
}
.tianqi .tianqi-1 p {
  font-size: 14px;
  color: #ffffff;
  padding-left: 5px;
  text-align: center;
}
.tianqi .tianqi-1 span {
  font-size: 11px;
  color: #ffffff;
  padding-left: 5px;
  text-align: center;
}
.saoyosao {
  width: 20px;
  height: 17px;
  padding: 5px 0 5px 5px;
}
h1 {
  font-size: 18px;
  color: #ffffff;
  margin-top: 28px;
  font-weight: 500;
  padding-left: 20px;
}
.cheliang {
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.cheliang-1 {
  display: flex;
  flex-direction: column;
}
.cheliang .cheliangtxt {
  margin-top: 52px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
.cheliang-1 span {
  font-size: 16px;
  color: #ffffff;
  padding-top: 15px;
}
.cheliang-1 p {
  font-size: 14px;
  color: #ffffff;
  padding-top: 10px;
}
.cheliang-3 {
  display: flex;
  align-items: center;
}
.cheliang-3 img {
  width: 17px;
  height: 13px;
}
.cheliang-3 span {
  font-size: 11px;
  color: #ffffff;
  padding-left: 5px;
}
.jilu {
  height: 20px;
  display: flex;
  justify-content: space-around;
  padding: 21px 20px;
}
.baoyangjilu {
  display: flex;
}
.baoyangjilu img {
  width: 18px;
  height: 20px;
}
.baoyangjilu span {
  font-size: 13px;
  color: #ffffff;
  padding-left: 7px;
}
.weizhangjilu {
  display: flex;
}
.weizhangjilu img {
  width: 22px;
  height: 18px;
}
.weizhangjilu span {
  font-size: 13px;
  color: #ffffff;
  padding-left: 5px;
}
/* content */
.content {
  height: 379px;
  background: #f6f7fb;
  padding: 20px;
}
.gongnengzu {
  height: 160px;
  background: #ffffff;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.mokuai {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 17px;
}
.mokuai img {
  width: 26px;
  height: 26px;
}
.mokuai span {
  font-size: 13px;
  color: #333333;
  padding-top: 8px;
}
.didianbanzu {
  height: 73px;
  background: #ffffff;
  /* padding: 15px; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: space-between;
}
.dianshangxia {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  /* align-items: center; */
}
.didian {
  display: flex;
}
.didian img {
  width: 47px;
  height: 43px;
}
.didian-1 {
  display: flex;
  align-items: center;
}
.didian-1 h3 {
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.didian-1 img {
  width: 25px;
  height: 21px;
}
.didian-2 {
  width: 100px;
  display: flex;
  align-items: center;
}
.didian-2 img {
  width: 11px;
  height: 13px;
}
.didian-2 span {
  font-size: 11px;
  color: #a4a3a3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banzu {
  display: flex;
}
.banzu img {
  width: 44px;
  height: 44px;
}
.banzuming {
  display: flex;
}
.banzuming img {
  width: 15px;
  height: 15px;
}
.banzuming span {
  font-size: 12px;
  color: #333333;
}
.dianshangxia p {
  font-size: 11px;
  color: #777777;
  padding-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  display: box;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.yaoqing {
  height: 66px;
  margin: 0 auto;
  margin-top: 15px
}
</style>
