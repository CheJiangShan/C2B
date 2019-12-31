<template>
     <div class="roof">
      <nav>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1"><router-link :to="'pay'">
              <span>买车</span>
            </router-link></mt-tab-item>
          <mt-tab-item id="2">
            <router-link :to="'sell1'">
              <span class="sell">卖车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="3">
            <router-link :to="'shouye'">
              <span>用车</span>
            </router-link>
          </mt-tab-item>
          <mt-tab-item id="4">商城</mt-tab-item>
        </mt-navbar>
      </nav>
      <img src="../../assets/1.png" alt />
    </div>
</template>
<script>
export default {
  name: "shouye",
  components: {
    
  },
  data() {
    return {
         selected: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    cheku() {
      this.$router.push({ path: "/cheku" });
    },
  }
}
</script>
<style scoped>
.roof {
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
  color: #333333;
}
</style>