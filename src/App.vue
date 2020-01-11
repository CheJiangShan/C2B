<template>
  <div id="app">
    <!-- <transition appear name="move"> -->
    <!-- <keep-alive> -->
    <div>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
    <!-- </keep-alive> -->
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },

  created() {
    // let key='pWEHKxg4sFdLGWEx-mQfdlFy-9eKA1UT'
    // let token=localStorage.setItem('token',key)
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
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

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
}
@keyframes animationIn {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes animationOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}

.move-enter {
  transform: translate(-100%, 0);
  position: absolute !important;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
.move-enter-active {
  animation: animationIn 0.2s;
  position: absolute !important;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
.move-leave {
  transform: translate(0, 0);
}
.move-leave-active {
  animation: animationOut 0.2s;
}
</style>
