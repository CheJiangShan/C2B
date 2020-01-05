<template>
  <div class="guochanpinpai">
    <header>
      <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
      <p>车型选择</p>
    </header>
    <div class="changyongpinpai">
      <h6>热门</h6>
      <ul>
        <li class="paizi" v-for="(item,index) in changyonglist" :key="index">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <!-- a-z -->
    <mt-index-list class="zimubox">
      <mt-index-section v-for="(zimi,index) in zimulist" :key="index" :index="index">
        <mt-cell id="wodetianne" v-for="(zimis,index) in zimi" :key="index">
          <img class="xunhuanimg" :src="zimis.oss_logo" v-lazy="zimis.oss_logo"  @click="che(zimis.id,zimis.name)" />
          <p class="xunhuanname" @click="che(zimis.id,zimis.name)">{{ zimis.name }}</p>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import {getType} from "../api/apisum"
export default {
  data() {
    return {
      zimulist: [], //  车辆首字母
      zipinpai: [], //  字母子品牌
      changyonglist: [], //常用品牌数组
      id:''
    };
  },
  // created() {
  //   this.axios.post("https://api.chejiangshan.com/veh-index").then(res => {
  //     //   console.log(res.data.data.wantto);
  //     this.changyonglist = res.data.data.wantto;
  //     this.zimulist = res.data.data.data;
  //   });
  // },
  async created(){
    const res=await  getType()
    console.log(res)
    console.log(res.data.data.wantto)
     this.changyonglist = res.data.data.wantto;
     this.zimulist = res.data.data.data;
  },
  mounted() {},
  computed: {
    NewItems() {
      var _this = this;
      var NewItems = [];
      this.items.map(function(item) {
        if (item.name.search(_this.searchVal) != -1) {
          NewItems.push(item);
        }
      });
      return NewItems;
    }
  },
  methods: {
    fanhui() {
      this.$router.push({ path: "/sell1" });
    },
    che(id,name){
      // console.log(name),
      localStorage.setItem("id",id)
      console.log(id),
    this.$router.push({path:'/sell1',query:{id,name}})
  }
  } 
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.guochanpinpai {
  padding-left: 16px;
}
header {
  padding-top: 15px;
  height: 64px;
  display: flex;
  align-items: center;
  background: #ffffff;
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

/* 常用品牌 */
.changyongpinpai {
  height: 80px;
  padding-bottom: 15px;
}
.changyongpinpai h6 {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  line-height: 40px;
}
.paizi {
  float: left;
  display: block;
  margin: 5px 10px;
  padding-bottom: 10px;
}
.paizi span {
  font-size: 12px;
  color: #333333;
  background: #f6f7fb;
  padding: 5px;
}
/* A-Z */
#wodetianne {
  display: flex;
  align-items: center;
}
.xunhuanimg {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: absolute;
  left: 25px;
}
image[lazy="loading"] {
  width: 40px;
  height: 40px;
  margin: auto;
}
.xunhuanname {
  font-size: 15px;
  color: #333333;
  position: absolute;
  left: 80px;
}
</style>