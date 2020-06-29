<template>
  <div>
    <div class=" lock-body">
      <div class="content-1">
        <video src="~/assets/index/vv.mp4" width="100%" autoplay loop muted>
          您的浏览器不支持 video 标签。
        </video>
        <div class="c1-text">
          <div class="text-1">PINTOS</div>
          <div class="text-2">智能门锁</div>
          <div class="text-3">精确指纹，一步开门</div>
        </div>
      </div>
      <div class="container px-20px">
        <div class="is-flex-desktop justify-center item-wrap item-1">
          <div class="m1-left left-desc">
            <div class="text-1"># 智能门锁</div>
            <div class="text-2"><img src="~/assets/index/title_m1.png" alt></div>
            <div class="text-3">“开启瞬间,点亮生活”</div>
            <div class="text-4"><img src="~/assets/index/tp_jdj.png" alt></div>
            <div class="know-more">
              <nuxt-link class="navbar-item nuxt-link-active flex justify-center" to="/m1">进一步了解</nuxt-link>
              <span class="arrow"></span>
            </div>
          </div>
          <div class="pic-neck has-text-centered">
            <img class="pic-m1" src="~/assets/index/m1_m.png" alt>
          </div>
        </div>
      </div>
      <div class="px-20px is-flex-desktop justify-center item-wrap bg-f2 item-2">
        <div class="p1-left left-desc">
          <div class="text-1"># 智能门锁</div>
          <div class="text-2"><img src="~/assets/index/title_p1.png" alt></div>
          <div class="text-3">“如此快捷,一握即开”</div>
          <div class="know-more">
            <nuxt-link class="navbar-item nuxt-link-active flex justify-center" to="/p1">进一步了解</nuxt-link>
            <span class="arrow"></span>
          </div>
        </div>
        <div class="pic-neck has-text-centered">
          <img class="pic-p1" src="~/assets/index/c_p1.png" alt>
        </div>
      </div>
      <div class="px-20px is-flex-desktop justify-center item-wrap">
        <div class="t1-left left-desc">
          <div class="text-1"># 智能门锁</div>
          <div class="text-2"><img src="~/assets/index/title_t1.png" alt></div>
          <div class="text-3">“全自动,更未来”</div>
          <div class="know-more">
            <nuxt-link class="navbar-item nuxt-link-active flex justify-center" to="/t1">进一步了解</nuxt-link>
            <span class="arrow"></span>
          </div>
        </div>
        <div class="pic-neck has-text-centered">
          <img class="pic-t1" src="~/assets/index/t1.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";

  export default {
    layout: "default",
    components: {
      Logo
    }
  };
</script>

<style lang="less" scoped>
  // Arrow
  // -------------------------
  ._setArrow(@arrowsize, @borderColor, @borderWidth) {
    display: inline-block;
    height: @arrowsize;
    width: @arrowsize;
    border-width: @borderWidth @borderWidth 0 0;
    border-color: @borderColor;
    border-style: solid;
  }

  .setArrow(@direction, @arrowsize, @borderColor,@borderWidth) when (@direction = right) {
    ._setArrow(@arrowsize, @borderColor, @borderWidth);
    transform: matrix(0.71, 0.71, -0.71, 0.71, -1, 2); // rotate(45deg);

    position: relative;
  }

  .container {
    justify-content: center;
    // width: 513px;
    .pic-p1 {
      margin-right: 36px;
    }
  }

  .item-wrap {
    margin-bottom: 100px;
  }

  .item-1 {
    background: url('../assets/index/bg_logo.png') no-repeat center;
  }

  .m1-left {
    width: 540px;
  }

  .p1-left {
    order: 2;
    margin-left: 20px;
  }

  .t1-left {
    width: 529px;
    margin-right: 40px;
  }

  .item-wrap {
    padding: 86px 20px 80px;
  }

  .pic-m1 {
    width: 370px;
    height: 666px;
  }

  .pic-p1 {
    width: 323px;
    height: 674px;
  }

  .pic-t1 {
    width: 422px;
    height: 671px;
  }

  .lock-body {
    .left::after,
    .right::after {
      clear: both;
    }
  }

  .smart-lock {
    h2 {
      font-size: 42px;
      color: rgba(52, 150, 246, 1);
      margin-right: 22px;
    }
  }

  .content-1 {
    position: relative;

    .c1-text {
      position: absolute;
      width: 600px;
      height: 260px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      line-height: 1;
      color: #fff;
      font-weight: 400;

      .text-1 {
        font-size: 72px;
        margin-bottom: 40px;
      }

      .text-2 {
        font-size: 48px;
        color: rgba(211, 211, 211, 1);
        margin-bottom: 40px;
      }

      .text-3 {
        font-size: 60px;
      }
    }
  }

  .left-desc {
    padding-top: 200px;
    text-align: left;
    line-height: 1;
    .text-1 {
      font-size:18px;
      font-weight:bold;
      color:rgba(3,3,3,1);
    }
    .text-2 {
      margin-top: 8px;
      img {
        width: 338px;
        height: 46px;
        vertical-align: top;
      }
    }
    .text-3 {
      margin-top: 18px;
      font-size:28px;
      font-weight:400;
      color:rgba(3,3,3,1);
    }
    .text-4 {
      margin-top: 32px;
      img {
        width: 226px;
        height: 54px;
        vertical-align: top;
      }
    }
  }

  .know-more {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      color: #1AA0FB !important;
      text-align: center;

      &::after {
        .setArrow(right, 14px, #00A8EC, 2px)
      }
      &:hover {
        background: transparent;
      }
    }

    .arrow {
      .setArrow(right, 14px, #00A8EC, 2px)

    }

    font-size: 20px;
    margin: 70px 0 0;
  }

  .item-2 {
    background-image: url('../assets/index/bg_p1.png');
    background-size: cover;
    background-position: 50% 50%;

    .pic-neck {
      width: 650px;
      overflow: hidden;
      img {
        width: 840px;
        max-width: initial;
      }
    }
  }
</style>
