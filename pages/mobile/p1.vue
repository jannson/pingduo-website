<template>
  <div class="p1">
    <div class="p1-content p1-c1">
      <div class="title">PINTOS P1</div>
      <div class="sub-title">“如此快捷,一握即开”</div>
      <div class="des">活体指纹识别 | 瑞典FPC芯片 | 精致外观工艺 | 人工智能算法</div>
    </div>
    <div class="p1-content p1-c2">
      <div class="features-wrap">
        <div class="features">
          <div class="features-item">
            <img src="~/assets/m_p1/c2_img_1.png" alt>
            <div class="features-text">活体指纹识别</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m_p1/c2_img_2.png" alt>
            <div class="features-text">一键开启</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m_p1/c2_img_3.png" alt>
            <div class="features-text">智能算法</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m_p1/c2_img_4.png" alt>
            <div class="features-text">双轴承防下挂</div>
          </div>
          <div class="features-item">
            <img src="~/assets/m_p1/c2_img_5.png" alt>
            <div class="features-text">安全把控</div>
          </div>
        </div>
      </div>
    </div>
    <div class="p1-content p1-c3">
      <div class="title">活体指纹识别.开锁更安全</div>
      <div class="des">高性能活体半导体指纹技术，360°圆形指纹头触感体验，更方便、更快捷。采用防指纹表面处理，不留指纹，更安全；不留污渍，更清洁。</div>
    </div>
    <div class="p1-content p1-c4">
      <div class="title">人工智能算法，一键开启</div>
      <div class="text-1">可以自主学习的算法，在日 常使用中对干湿、残缺指纹 识别度提升。</div>
      <div class="text-2">还会随着使用次数的增加，对用 户指纹识别越来越精确降低拒真 率，一键开门。</div>
      <div class="text-3">
        <div class="text-title">
          <span>指纹识别精确度</span>
          <img src="~/assets/m_p1/arrow.png" alt>
        </div>
        <div class="scale">96.5%</div>
      </div>
    </div>
    <div class="p1-content p1-c5">
      <div class="title">双轴承设计 防止下挂</div>
      <div class="des">采用来自德国的双轴承结构，使把手不晃动不下垂，下压把手开门柔顺，不卡顿每天使用开门30次，使用10年依然不下垂。</div>
    </div>
    <div class="p1-content p1-c6">
      <div class="title">虚位密码</div>
      <div class="des">可有效防止他人通过指纹查看密码痕迹破解密码（比如不方便让同行的亲友看到正确密码，则可以输入虚位密码，避免尴尬）。</div>
    </div>
    <div class="p1-content p1-c7">
      <div class="title">C级锁芯-防技术开启</div>
      <div class="des">采用C级防盗锁芯,有效防止270分钟内技术开启，隐藏式锁孔设计美观大方，保障家庭的安全与美好。</div>
    </div>
    <div class="p1-content p1-c8">
      <div class="title">无时无刻确保安全</div>
      <div class="des">可远程实时接收和查看开锁记录，家中成员谁出门了，谁回家了，一目了然，而市面上绝大多数品牌的门锁仅支持在家查看记录。</div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
  };
</script>

<style lang="less" scoped>
  .p1 {
    margin-top: -44px;
    .p1-content {
      padding-top: 1px;
      height: 667px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
    }

    .p1-c1 {
      background-image: url("../../assets/m_p1/bg_c1.png");
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

    .p1-c2 {
      background-image: url("../../assets/m_p1/bg_c2.png");
      .features-wrap {
        margin: 550px 30px 0;
      }
      .features {
        width: 200%;
        display: flex;
        justify-content: space-between;
        transform: scale(0.5, 0.5);
        transform-origin: 0 0;
        &-item {
          flex: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 66px;
            height: 66px;
          }
        }
        &-text {
          margin-top: 30px;
          font-size:17px;
          letter-spacing: 1px;
          color:rgba(255,255,255,1);
        }
      }
    }

    .p1-c3 {
      margin-right: -1px;
      background-image: url("../../assets/m_p1/bg_c3.png");
    }
    .p1-c4 {
      background-image: url("../../assets/m_p1/bg_c4.png");
    }
    .p1-c5 {
      background-image: url("../../assets/m_p1/bg_c5.png");
    }
    .p1-c6 {
      background-image: url("../../assets/m_p1/bg_c6.png");
    }
    .p1-c7 {
      background-image: url("../../assets/m_p1/bg_c7.png");
    }
    .p1-c8 {
      background-image: url("../../assets/m_p1/bg_c8.png");
    }

    .p1-c4, .p1-c5 {
      margin-top: -1px;
    }

    .p1-c3, .p1-c5, .p1-c6, .p1-c6, .p1-c7, .p1-c8 {
      .title {
        margin-top: 104px;
        color: #ffffff;
        font-size:23px;
        font-weight: 300;
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

    .p1-c8 {
      .title {
        margin-top: 100px;
        color: #000;
      }
      .des {
        margin-top: 20px;
        color:rgba(53,53,53,1);
        line-height:18px;
        opacity:1;
      }
    }

    .p1-c4 {
      text-align: left;
      .title {
        margin-top: 103px;
        color: #ffffff;
        font-size:23px;
        text-align: center;
        font-weight: 300;
      }
      .text-1 {
        margin: 30px 40px 0 168px;
        font-size:14px;
        color:rgba(255,255,255,1);
        line-height:18px;
      }
      .text-2 {
        margin: 18px 40px 0 168px;
        font-size:12px;
        color:rgba(228,228,228,1);
        line-height:18px;
      }
      .text-3 {
        margin: 40px 40px 0 168px;
        .text-title {
          font-size:12px;
          font-weight:400;
          color:rgba(255,255,255,1);
          img {
            margin-left: 6px;
            width: 9px;
            height: 12px;
          }
        }
        .scale {
          margin-top: 8px;
          font-size:36px;
          font-weight:400;
          color:rgba(22,112,235,1);
        }
      }
    }
  }
</style>
