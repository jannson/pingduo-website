<template>
  <div class="service">
    <div class="banner">
      <img src="~/assets/m_service/banner.png" alt>
    </div>
    <div class="content">
      <div class="header">
        <div class="name">售后服务</div>
        <div class="en-name">AFTER-SALES SERVICE</div>
        <div class="line"></div>
      </div>
      <div class="content-list">
        <div class="content-item">
          <div class="item-header">7天无理由退换</div>
          <div class="item-text">未安装情况下，您可以7天无理由退换产品。</div>
        </div>
        <div class="content-item">
          <div class="item-header">2年无条件免费维修</div>
          <div class="item-text">我们的承诺：2年内，产品出现任何问题，我们都将为您无条件免费维修或调换。</div>
        </div>
        <div class="content-item">
          <div class="item-header">专业服务覆盖全国</div>
          <div class="item-text">品多已经为全国多地图提供过上门安装服务。安装团队以负责的态度、及时的反应、周到的服务获点赞无数。</div>
        </div>
        <div class="content-item">
          <div class="item-header">覆盖1,800个区县</div>
          <div class="item-text">品多安装目前已覆盖全国1,800多个区县，由专业师傅上门安装。品多保证：有任何问题，您都可以随时随地找到我们。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
  };
</script>

<style lang="less" scoped>
  .service {
    .banner {
      img {
        width: 100%;
        vertical-align: top;
      }
    }

    .content {
      padding: 35px 25px 33px;
      background-color: #ffffff;
      .header {
        .name {
          font-size:18px;
          font-weight: bold;
          color:rgba(0,0,0,1);
        }
        .en-name {
          margin-top: 4px;
          font-size: 16px;
          font-weight:400;
          color:rgba(122,122,122,1);
          transform: scale(0.5, 0.5);
          transform-origin: 0 0;
        }
        .line {
          margin-top: 0;
          width:15px;
          height:2px;
          background:rgba(79,157,241,1);
        }
      }

      &-item {
        margin-top: 32px;
        .item-header {
          font-size:14px;
          font-weight:400;
          color:rgba(0,0,0,1);
        }
        .item-text {
          margin-top: 8px;
          font-size:12px;
          font-weight:400;
          color:rgba(90,90,90,1);
          line-height: 20px;
        }
      }
    }
  }
</style>
