<template>
  <div>
    <div class="lock-body">
      <div id="indexTop" class="index-top" @click="clickVideo">
<!--        <img src="~/assets/index/index_img_1.png" alt>-->
        <video id="mVideo" autoplay loop muted playsInline>
          <source src="~/assets/index/vv.mp4" type="video/mp4">
        </video>
        <div class="c1-text">
          <div class="text-1">PINTOS</div>
          <div class="text-2">智能门锁</div>
          <div class="text-3">精确指纹，一步开门</div>
        </div>
      </div>
      <div class="index-item index-item-1">
        <div class="index-item-title">PINTOS M1</div>
        <div class="index-item-des">“开启瞬间,点亮生活”</div>
        <div class="index-item-logo">
          <img src="~/assets/index/tp_jdj.png" alt>
        </div>
        <div class="index-item-link">
          <nuxt-link to="/mobile/m1">进一步了解&ensp;&gt;</nuxt-link>
        </div>
        <div class="index-item-img">
          <img src="~/assets/index/m1_m.png" alt>
        </div>
      </div>
      <div class="index-item index-item-2">
        <div class="index-item-title">PINTOS P1</div>
        <div class="index-item-des">“如此快捷,一握即开”</div>
        <div class="index-item-link">
          <nuxt-link to="/mobile/p1">进一步了解&ensp;&gt;</nuxt-link>
        </div>
      </div>
      <div class="index-item index-item-3">
        <div class="index-item-title">PINTOS T1</div>
        <div class="index-item-des">“全自动,更未来”</div>
        <div class="index-item-link">
          <nuxt-link to="/mobile/t1">进一步了解&ensp;&gt;</nuxt-link>
        </div>
        <div class="index-item-img">
          <img src="~/assets/index/t1.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "mobile",
    methods: {
      clickVideo() {
        const mVideo = document.getElementById('mVideo');
        mVideo.play()
      },
    },
    mounted() {
      const mVideo = document.getElementById('mVideo');
      mVideo.play();
    }
  };
</script>

<style lang="less" scoped>
  .lock-body {
    .index-top {
      position: relative;
      height: 580px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background-color: #000;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      video {
        width: 750px;
        max-width: initial;
      }

      .c1-text {
        position: absolute;
        width: 300px;
        height: 130px;
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
          font-size: 36px;
          margin-bottom: 20px;
        }

        .text-2 {
          font-size: 24px;
          color: rgba(211, 211, 211, 1);
          margin-bottom: 20px;
        }

        .text-3 {
          font-size: 30px;
        }
      }
    }

    .index-item {
      padding-top: 1px;
      height: 667px;
      background-color: #fff;
      background-size: cover;
      background-position: 50% 50%;
      line-height: 1;
      color: #000;
      text-align: center;
      &-title {
        margin-top: 100px;
        font-size: 24px;
        font-weight: bold;
      }
      &-des {
        margin-top: 12px;
        font-size: 12px;
      }
      &-logo {
        margin-top: 15px;
        img {
          width: 105px;
          height: 26px;
        }
      }
      &-link {
        display: block;
        margin-top: 40px;
        color:rgba(52,150,246,1);
        font-size: 12px;
        font-weight: bold;
      }
      &-img {
        margin-top: 27px;
        img {
          width: 210px;
          height: 388px;
        }
      }
    }

    .index-item-1 {
      background: linear-gradient(0deg,rgba(241,241,241,1) 0%,rgba(242,242,242,1) 100%);
      .index-item-link {
        margin-top: 28px;
      }
    }
    .index-item-2 {
      background-image: url("../../assets/index/p1_m.png");
    }
    .index-item-3 {
      background:rgba(246,246,246,1);
      .index-item-img {
        img {
          position: relative;
          left: 12px;
          width: 261px;
          height: 405px;
        }
      }
    }
  }
</style>
