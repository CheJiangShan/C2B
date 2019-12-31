<template>
  <div class="mine">
    <nav>
      <p>我的</p>
    </nav>
    <footeree></footeree>
  </div>
</template>
<script>
import footeree from "../other/footer.vue";
export default {
  name: "mine",
  components: {
    footeree
  },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
.price {
  width: 100%;
  height: 100%;
}
.nav{
    width: 100%;
    height: 95px;
}
</style>