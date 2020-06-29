<template>
  <div class="t1">
    <div class="t1-content t1-c1">
      <div class="title">PINTOS T1</div>
      <div class="sub-title">“全自动,更未来”</div>
      <div class="bg-img">
        <img src="~/assets/m_t1/bg_c1.png" alt>
      </div>
    </div>
    <div class="t1-content t1-c2">
      <div class="content-wrap">
        <div class="c2-content">
          <div class="features">
            <div class="features-item">
              <img src="~/assets/m_t1/c2_img_1.png" alt>
              <div class="features-text">指纹开锁</div>
            </div>
            <div class="features-item">
              <img src="~/assets/m_t1/c2_img_2.png" alt>
              <div class="features-text">密码开锁</div>
            </div>
            <div class="features-item">
              <img src="~/assets/m_t1/c2_img_3.png" alt>
              <div class="features-text">钥匙开锁</div>
            </div>
          </div>
          <div class="c2-footer">高清LED显示屏 | 瑞典FPC指纹头 | 人体工程学把手 | 隐藏式钥匙孔</div>
        </div>
      </div>
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
      <div class="des">T1采用瑞典FPC半导体传感器轻松解锁，一气呵成。开门无需手动推拉把手，指纹一触即开，从未如此快捷。</div>
    </div>
    <div class="t1-content t1-c6">
      <div class="title">可拆卸锂电池</div>
      <div class="des">采用2700毫安可拆卸锂电池，使用时间更长，充电更方便。让智能，不断电。</div>
    </div>
    <div class="t1-content t1-c7">
      <div class="title">C级锁芯-防技术开启</div>
      <div class="des">采用C级防盗锁芯,有效防止270分钟内技术开启，隐藏式锁孔设计美观大方，保障家庭的安全与美好。</div>
    </div>
    <div class="t1-content t1-c8"></div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
  };
</script>

<style lang="less" scoped>
  .t1 {
    margin-top: -44px;

    .t1-content {
      padding-top: 1px;
      height: 667px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
    }

    .t1-c1 {
      .title {
        margin-top: 109px;
        font-size: 27px;
        color: rgba(26, 122, 252, 1);
      }
      .sub-title {
        margin-top: 16px;
        font-size: 18px;
        color: rgba(3, 3, 3, 1);
      }
      .bg-img {
        margin-top: 30px;
        img {
          width: 282px;
          height: 438px;
        }
      }
    }

    .t1-c2 {
      background-image: url("../../assets/m_t1/bg_c2.png");
      .content-wrap {
        margin: 536px 30px 0;
      }
      .c2-content {
        width: 200%;
        transform: scale(0.5, 0.5);
        transform-origin: 0 0;
      }
      .features {
        margin: 0 50px;
        display: flex;
        justify-content: space-between;

        &-item {
          flex: auto;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 76px;
            height: 76px;
          }
        }

        &-text {
          margin-top: 36px;
          font-size:22px;
          color:rgba(235,235,235,1);
          letter-spacing: 1px;
        }
      }
      .c2-footer {
        margin-top: 36px;
        font-size:20px;
        color:rgba(186,186,186,1);
        opacity:0.91;
      }
    }

    .t1-c3 {
      background-image: url("../../assets/m_t1/bg_c3.png");
    }

    .t1-c4 {
      background-image: url("../../assets/m_t1/bg_c4.png");
    }

    .t1-c5 {
      background-image: url("../../assets/m_t1/bg_c5.png");
    }

    .t1-c6 {
      background-image: url("../../assets/m_t1/bg_c6.png");
    }

    .t1-c7 {
      background-image: url("../../assets/m_t1/bg_c7.png");
    }

    .t1-c8 {
      background-image: url("../../assets/m_t1/bg_c8.png");
    }

    .t1-c3 {
      margin-top: -1px;
    }

    .t1-c3, .t1-c4, .t1-c5, .t1-c6, .t1-c6, .t1-c7 {
      .title {
        margin-top: 104px;
        color: #ffffff;
        font-size: 23px;
        font-weight: 300;
      }

      .des {
        margin-top: 25px;
        padding: 0 40px;
        font-size: 13px;
        line-height: 22px;
        color: rgba(228, 228, 228, 1);
        opacity: 0.91;
      }
    }
  }
</style>
