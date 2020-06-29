<template>
  <div class="t1">
    <div class="t1-content t1-c1">
      <div class="c1-text">
        <div class="title">PINTOS T1</div>
        <div class="sub-title">“全自动,更未来”</div>
      </div>
      <div class="c1-img">
        <img src="~/assets/t1/c1_img1.png" alt>
      </div>
    </div>
    <div class="t1-content t1-c2">
      <div class="c2-content">
        <div class="features">
          <div class="features-item">
            <img src="~/assets/t1/c2_img1.png" alt>
            <div class="features-text">指纹开锁</div>
          </div>
          <div class="features-item">
            <img src="~/assets/t1/c2_img2.png" alt>
            <div class="features-text">密码开锁</div>
          </div>
          <div class="features-item">
            <img src="~/assets/t1/c2_img3.png" alt>
            <div class="features-text">钥匙开锁</div>
          </div>
        </div>
      </div>
      <div class="c2-footer">高清LED显示屏 | 瑞典FPC指纹头 | 人体工程学把手 | 隐藏式钥匙孔</div>
    </div>
    <div class="t1-content t1-c3">
      <div class="title">高精度外观设计</div>
      <div class="des">T1的设计方案是由获得多项红点奖的设计师亲自操刀设计，表面采用IMD加工工艺，坚固防抗腐蚀且耐用。</div>
    </div>
    <div class="t1-content t1-c4">
      <div class="title">人体工程学设计</div>
      <div class="des">相比传统显示屏视角设计，T1根据人体工程学原理，以115°角倾斜设计，让用户体验起来更舒服，从每个细节把控，让智能锁更未来。</div>
    </div>
    <div class="t1-content t1-c5">
      <div class="title">轻松解锁，一气呵成</div>
      <div class="des">T1采用瑞典FPC半导体传感器轻松解锁，一气呵成。开门无需手动推拉把手， 指纹一触即开，从未如此快捷。</div>
    </div>
    <div class="t1-content t1-c6">
      <div class="title">可拆卸锂电池</div>
      <div class="des">采用2700毫安可拆卸锂电池，使用时间更长，充电更方便。让智能，不断电。</div>
    </div>
    <div class="t1-content t1-c7">
      <div class="title">C级锁芯-防技术开启</div>
      <div class="des">采用C级防盗锁芯,有效防止270分钟内技术开启，隐藏式锁孔设计美观大方，保障家庭的安全与美好。</div>
    </div>
    <div class="t1-content t1-c8">
      <div class="c8-img">
        <img src="~/assets/t1/c8_img1.png" alt>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .t1 {
    margin-top: -44px;
    .t1-content {
      padding-top: 1px;
      height: 1080px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
    }

    .t1-c1 {
      background-color: #F9F9F9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 960px;

      .c1-img {
        margin-right: -100px;
        img {
          width: 761px;
          height: 782px;
          object-fit: cover;
          object-position: 0 0;
        }
      }

      .c1-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 160px;

        .title {
          font-size:36px;
          font-weight:300;
          color:rgba(54,155,250,1);
        }
        .sub-title {
          margin-top: 0px;
          font-size:36px;
          font-weight: 400;
          color:rgba(3,3,3,1);
        }
      }
    }

    .t1-c2 {
      background-image: url("../assets/t1/c2_bg.png");
      position: relative;

      .c2-content {
        position: absolute;
        top: 480px;
        right: 50%;
        margin-right: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;

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
              margin-top: 20px;
              font-size:17px;
              font-weight:400;
              color:rgba(235,235,235,1);
              text-shadow:0 11px 4px rgba(7,7,27,0.27);
            }
          }
        }
      }
      .c2-footer {
        position: absolute;
        bottom: 50px;
        width: 100%;
        text-align: center;
        font-size:20px;
        font-weight:400;
        color:rgba(186,186,186,1);
        opacity:0.91;
      }
    }

    .t1-c3 {
      background-image: url("../assets/t1/c3_bg.png");
    }
    .t1-c4 {
      background-image: url("../assets/t1/c4_bg.png");
    }
    .t1-c5 {
      background-image: url("../assets/t1/c5_bg.png");
    }
    .t1-c6 {
      background-image: url("../assets/t1/c6_bg.png");
    }
    .t1-c7 {
      background-image: url("../assets/t1/c7_bg.png");
    }

    .t1-c3, .t1-c4, .t1-c5, .t1-c6, .t1-c7 {
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

    .t1-c6 {
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

    .t1-c8 {
      background:rgba(241,240,245,1);
      position: relative;
      .c8-img {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        img {
          width: 1167px;
          height: 934px;
          vertical-align: top;
        }
      }
    }
  }
</style>
