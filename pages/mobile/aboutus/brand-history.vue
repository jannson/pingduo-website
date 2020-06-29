<template>
  <div class="brand-history">
    <div class="banner">
      <img src="~/assets/m_brand_history/banner.png" alt>
    </div>
    <div class="content">
      <div class="header">
        <div class="name">品牌历程</div>
        <div class="en-name">BRAND HISTORY</div>
        <div class="line"></div>
      </div>
      <div class="content-list">
        <div class="content-item">
          <div class="item-header">华为生态产品</div>
          <div class="item-text">2018年3月：品多M1智能锁（华为HiLink智能锁）在华为官网上线，成为华为生态产品圈首款全自动智能锁.</div>
          <div class="item-img">
            <img src="~/assets/m_brand_history/img1.png" alt>
          </div>
        </div>
        <div class="content-item">
          <div class="item-header">德国柏林展会</div>
          <div class="item-text">2018年9月，华为携手品PINTOS参加德国柏林展会（IFA）</div>
          <div class="item-img">
            <img src="~/assets/m_brand_history/img2.png" alt>
          </div>
        </div>
        <div class="content-item">
          <div class="item-header">华为荣耀旗舰店</div>
          <div class="item-text">线下方面，品多M1智能锁（华为HiLink智能锁）已入驻深圳 壹方城为荣耀旗舰店</div>
          <div class="item-img">
            <img src="~/assets/m_brand_history/img3.png" alt>
          </div>
        </div>
        <div class="content-item">
          <div class="item-header">产品荣誉</div>
          <div class="item-text">品多M1荣获台湾金点设计奖：2018年度最佳设计金奖产品</div>
          <div class="item-img">
            <img src="~/assets/m_brand_history/img4.png" alt>
          </div>
        </div>
        <div class="content-item">
          <div class="item-header">华为荣耀杭州展会</div>
          <div class="item-text">在华为荣耀杭州展会上，品多智能锁系列产品作为主要产品进行展示</div>
          <div class="item-img">
            <img src="~/assets/m_brand_history/img5.png" alt>
          </div>
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
  .brand-history {
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
          font-size:12px;
          font-weight:400;
          color:rgba(0,0,0,1);
        }
        .item-text {
          margin-top: 8px;
          font-size:12px;
          font-weight:400;
          color:rgba(90,90,90,1);
        }
        .item-img {
          margin-top: 6px;
          img {
            vertical-align: top;
            width: 100%;
            height: 83px;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    }
  }
</style>
