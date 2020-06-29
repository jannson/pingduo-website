<template>
  <div class="m1">
    <div class="m1-content m1-c1">
      <div class="c1-img">
        <img src="~/assets/m1/c1_img.png" alt>
      </div>
      <div class="c1-text">
        <div class="title">PINTOS M1</div>
        <div class="sub-title">“开启瞬间,点亮生活”</div>
        <div class="des">
          <div>手机CNC工艺 | 无把手设计&emsp;</div>
          <div>双重专利认证 | 人工智能算法</div>
        </div>
      </div>
    </div>
    <div class="m1-content m1-c2">
      <div class="c2-content">
        <div class="logo">
          <img src="~/assets/m1/c2_logo.png" alt>
        </div>
        <div class="features">
          <div class="features-item">
            <img src="~/assets/m1/c2_img1.png" alt>
            <div class="features-text">指纹开锁</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m1/c2_img2.png" alt>
            <div class="features-text">密码开锁</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m1/c2_img3.png" alt>
            <div class="features-text">钥匙开锁</div>
          </div>
        </div>
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
      <div class="text-1">使用方法</div>
      <div class="text-2"><img src="~/assets/m1/c6_img1.png" alt></div>
      <div class="text-3">15位数字内含正确密码</div>
    </div>
    <div class="m1-content m1-c7"></div>
  </div>
</template>

<style lang="less" scoped>
  .m1 {
    margin-top: -44px;
    .m1-content {
      padding-top: 1px;
      height: 1080px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
    }

    .m1-c1 {
      background-color: #F9F9F9;
      display: flex;
      justify-content: center;
      align-items: center;

      .c1-img {
        img {
          width: 865px;
          height: 853px;
        }
      }

      .c1-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          font-size:36px;
          font-weight:300;
          color:rgba(54,155,250,1);
        }
        .sub-title {
          margin-top: 20px;
          font-size:36px;
          font-weight:bold;
          color:rgba(3,3,3,1);
        }
        .des {
          margin-top: 28px;
          width: 260px;
          font-size:20px;
          font-weight:300;
          color:rgba(0,0,0,1);
          line-height:27px;
          opacity:0.91;
        }
      }
    }

    .m1-c2 {
      background-image: url("../assets/m1/c2_bg.png");
      position: relative;

      .c2-content {
        position: absolute;
        top: 375px;
        right: 50%;
        margin-right: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
          margin-bottom: 65px;
          img {
            width: 365px;
            height: 103px;
          }
        }

        .features {
          display: flex;
          &-item {
            margin-right: 96px;
            &:last-child {
              margin-right: 0;
            }
            img {
              width: 66px;
              height: 66px;
            }
            .features-text {
              margin-top: 8px;
              font-size:17px;
              font-weight:400;
              color:rgba(235,235,235,1);
              text-shadow:0 11px 4px rgba(7,7,27,0.27);
            }
          }
        }
      }
    }

    .m1-c3 {
      background-image: url("../assets/m1/c3_bg.png");
    }
    .m1-c4 {
      background-image: url("../assets/m1/c4_bg.png");
    }
    .m1-c5 {
      background-image: url("../assets/m1/c5_bg.png");
    }
    .m1-c6 {
      background-image: url("../assets/m1/c6_bg.png");
    }
    .m1-c7 {
      background-image: url("../assets/m1/c7_bg.png");
    }

    .m1-c3, .m1-c4, .m1-c5, .m1-c6 {
      .title {
        margin-top: 140px;
        color: #ffffff;
        font-size:43px;
      }
      .des {
        margin: 40px auto 0;
        width: 720px;
        font-size:20px;
        font-weight:400;
        color:rgba(186,186,186,1);
        line-height:36px;
        opacity:0.91;
      }
    }

    .m1-c6 {
      .text-1 {
        margin-top: 60px;
        font-size:28px;
        font-weight:400;
        color:rgba(255,255,255,1);
        opacity:0.91;
      }
      .text-2 {
        margin-top: 26px;
        img {
          width: 547px;
          height: 57px;
          vertical-align: top;
        }
      }
      .text-3 {
        margin-top: 22px;
        font-size:24px;
        color:rgba(255,255,255,1);
        opacity:0.91;
      }
    }

    .m1-c4, .m1-c7 {
      margin-top: -1px;
    }
  }
</style>
