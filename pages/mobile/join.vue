<template>
  <div class="join">
    <div class="join-content">
      <div class="text-1">PINTOS</div>
      <div class="text-2">寻找与众不同的你</div>
      <div class="text-3">「 加入我们成就梦想 」</div>
      <div class="footer">400 858 6766</div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
  };
</script>

<style lang="less" scoped>
  .join {
    &-content {
      position: relative;
      margin-bottom: -1px;
      padding-top: 1px;
      height: 366px;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
      background-image: url("../../assets/join/banner.png");

      .text-1 {
        margin-top: 76px;
        font-size: 16px;
        font-weight:500;
        color:rgba(255,255,255,1);
      }

      .text-2 {
        margin-top: 11px;
        font-size:21px;
        font-weight:300;
        color:rgba(255,255,255,1);
      }

      .text-3 {
        margin-top: 34px;
        font-size:16px;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }

      .footer {
        position: absolute;
        bottom: 45px;
        left: 0;
        right: 0;
        width: 170px;
        height: 24px;
        margin: 0 auto;
        padding: 0 28px;
        line-height: 24px;
        background:rgba(255,255,255,0.4);
        border-radius:3px;
        font-size:18px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        text-align: center;
      }
    }
  }
</style>
