<template>
  <div class="versions">
    <p class="newversion">发现新版本</p>
    <p class="versionEng">beta1.2.0</p>
    <p class="content">新版本更新内容：</p>
    <div class="content-item">
      <p style="margin-bottom:10px">
        1、新版本更新内容新版本更新内容新版本更新内容新版本更新内容
      </p>
      <p style="margin-bottom:10px">
        2、新版本更新内容新版本更新内容新版本更新内容新版本更新内容
      </p>
      <p>
        3、新版本更新内容新版本更新内容新版本更新内容新版本更新内过节费IG记录须交付距离想法V型，看
      </p>
    </div>
    <div class="button">
      <div class="cancel">
        <span>暂不更新</span>
      </div>
      <div class="sure">
        <span>
          我要尝鲜
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.versions {
  width: 292px;
  height: 383px;
  background: url("../../assets/version.png") no-repeat 0 0;
  background-size: 292px 383px;
  position: fixed;
  top: 142px;
  left: 41px;
}
.newversion {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  margin: 20px 0 0 20px;
}
.versionEng {
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  margin-left: 20px;
}
.content {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-top: 79px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.content-item p {
  width: 252px;
  margin-left: 20px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(119, 119, 119, 1);
  line-height: 18px;
}

.button {
  width: 292px;
  height: 66px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px 20px 20px 20px;
}
.button .cancel {
  width: 100px;
  height: 30px;
  background: rgba(63, 100, 253, 1);
  box-shadow: 0px 2px 4px 1px rgba(73, 162, 249, 0.29);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center
}
.button .cancel span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
.button .sure {
  width: 100px;
  height: 30px;
  background: rgba(63, 100, 253, 1);
  box-shadow: 0px 2px 4px 1px rgba(73, 162, 249, 0.29);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center
}
.button .sure span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}
</style>
