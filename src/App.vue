<template>
  <div id="app">
    <!-- <keep-alive> -->
    <div>
      <transition :name="transitionName">
        <router-view  class="child-view" v-if="isRouterAlive"></router-view>
      </transition>
    </div>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
      transitionName: "slide-right"
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
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
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
.child-view {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.1s;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
/* .fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.8s;
} */
/* @keyframes animationIn {
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
} */
</style>
