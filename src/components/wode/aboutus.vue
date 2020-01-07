<template>
  <div class="main">
    <header>
      <div class="header">
        <img @click="fanhui()" src="../../assets/xiangqing.png" alt />
        <p>关于我们</p>
      </div>
    </header>
    <div style=" height: 79px;"></div>
    <h5>标题标题</h5>
    <div class="content">
      <p>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。
      </p>
      <p>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。
      </p>
    </div>
  </div>
</template>
<script>
export default {};
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
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
}
.header {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 64px;
}
.header img {
  position: absolute;
  width: 9px;
  height: 17px;
  top: 25px;
  left: 15px;
}
.header p {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}
h5 {
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin-top: 10px;
}
.content {
  width: 345px;
  margin-left: 15px;
}
p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 20px;
  text-indent: 2em;
}
</style>
