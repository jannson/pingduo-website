<template>
  <div class="m1">
    <div class="m1-content m1-c1">
      <div class="title">PINTOS M1</div>
      <div class="sub-title">“开启瞬间,点亮生活”</div>
      <div class="des">手机CNC工艺 | 无把手设计 | 双重专利认证 | 人工智能算法</div>
    </div>
    <div class="m1-content m1-c2">
      <div class="logo">
        <img src="~/assets/m_m1/c2_img_1.png" alt>
      </div>
      <div class="features">
        <img src="~/assets/m_m1/c2_img_2.png" alt>
        <div class="features-text">指纹开锁</div>
      </div>
      <div class="features">
        <img src="~/assets/m_m1/c2_img_3.png" alt>
        <div class="features-text">密码开锁</div>
      </div>
      <div class="features">
        <img src="~/assets/m_m1/c2_img_4.png" alt>
        <div class="features-text">钥匙开锁</div>
      </div>
    </div>
    <div class="m1-content m1-c3">
      <div class="title">行业创新的面板对称设计</div>
      <div class="des">前后面板对称式设计，前后一致，表里如一。突破全自动指纹锁后面板颜值过低的短板，实现高颜值与黑科技并存。</div>
    </div>
    <div class="m1-content m1-c4">
      <div class="title">双重认证 防儿童误开功能</div>
      <div class="des">室内开门时，需同时碰触背面感应区+按压开锁键，才可开门。以防小孩不小心按压开门键将门误开。</div>
    </div>
    <div class="m1-content m1-c5">
      <div class="title">高亮铝合金曲面边框设计</div>
      <div class="des">尖端高精度数控车床（ＣＮＣ）加工工艺，高密度表面氧化处理，提升产品耐磨耐腐蚀性，整体工艺细节与高端手机一致，突破行业原有水平，无论是在外观或者使用手感上，让产品触摸体验更胜一筹。</div>
    </div>
    <div class="m1-content m1-c6">
      <div class="title">虚位密码</div>
      <div class="des">可有效防止他人通过指纹查看密码痕迹破解密码（比如不方便让同行的亲友看到正确密码，则可以输入虚位密码，避免尴尬）。</div>
    </div>
    <div class="m1-content m1-c7"></div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
  };
</script>

<style lang="less" scoped>
  .m1 {
    margin-top: -44px;
    .m1-content {
      padding-top: 1px;
      height: 667px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
    }

    .m1-c1 {
      background-image: url("../../assets/m_m1/bg_c1.png");
      .title {
        margin-top: 109px;
        font-size:27px;
        color:rgba(26,122,252,1);
      }
      .sub-title {
        margin-top: 16px;
        font-size:18px;
        color:rgba(3,3,3,1);
      }
      .des {
        margin-top: 10px;
        font-size:12px;
        color:rgba(0,0,0,1);
        opacity:0.91;
      }
    }

    .m1-c2 {
      background-image: url("../../assets/m_m1/bg_c2.png");
      text-align: left;
      .logo {
        margin-top: 169px;
        margin-left: 45px;
        img {
          width: 108px;
          height: 33px;
        }
      }
      .features {
        margin-top: 35px;
        margin-left: 74px;
        &:first-child {
          margin-top: 54px;
        }
        img {
          width: 38px;
          height: 38px;
          margin-left: 5px;
        }
        &-text {
          margin-top: 19px;
          font-size:12px;
          color:rgba(235,235,235,1);
          text-shadow: 0 11px 4px rgba(7,7,27,0.27);
        }
      }
    }

    .m1-c3 {
      background-image: url("../../assets/m_m1/bg_c3.png");
      margin-left: -1px;
    }
    .m1-c4 {
      background-image: url("../../assets/m_m1/bg_c4.png");
    }
    .m1-c5 {
      background-image: url("../../assets/m_m1/bg_c5.png");
    }
    .m1-c6 {
      background-image: url("../../assets/m_m1/bg_c6.png");
      background-position: 0 -1px;
    }
    .m1-c7 {
      background-image: url("../../assets/m_m1/bg_c7.png");
    }

    .m1-c3, .m1-c4, .m1-c5, .m1-c6 {
      .title {
        margin-top: 104px;
        color: #ffffff;
        font-size:23px;
      }
      .des {
        margin-top: 25px;
        padding: 0 40px;
        font-size:13px;
        line-height:22px;
        color:rgba(228,228,228,1);
        opacity:0.91;
      }
    }

    .m1-c4, .m1-c5 {
      margin-top: -1px;
    }
  }
</style>
