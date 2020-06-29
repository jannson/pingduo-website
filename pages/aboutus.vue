<template>
  <div>
    <div class="top-link is-hidden-mobile">
      <div class="content flex justify-between">

        <nuxt-link to="/aboutus/company-produce" data-itme="1" class=" has-text-centered">

          <img v-if="currentPath=='/aboutus/company-produce'" src="~/assets/aboutus/icon_gsjj_active.png" alt="">
          <img v-else src="~/assets/aboutus/icon_gsjj.png" alt="">
          <div data-item=1>
            公司简介
          </div>
        </nuxt-link>
        <nuxt-link to="/aboutus/brand-history" data-itme="2" class="link has-text-centered">
          <img v-if="currentPath=='/aboutus/brand-history'" src="~/assets/aboutus/icon_ppgs_active.png" alt="">
          <img v-else src="~/assets/aboutus/icon_ppgs.png" alt="">
          <div data-item=2>
            品牌故事
          </div>
        </nuxt-link>
        <nuxt-link to="/aboutus/pd-only" data-itme="3" class="link has-text-centered">
          <img v-if="currentPath=='/aboutus/pd-only'" src="~/assets/aboutus/icon_zlsm_active.png" alt="">
          <img v-else src="~/assets/aboutus/icon_zlsm.png" alt="">
          <div>
            专利声明
          </div>
        </nuxt-link>
        <nuxt-link to="/aboutus/service" class="link has-text-centered">
          <img v-if="currentPath=='/aboutus/service'" src="~/assets/aboutus/icon_shfw_active.png" alt="">
          <img v-else src="~/assets/aboutus/icon_shfw.png" alt="">
          <div>
            售后服务
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="wrap-content">
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPath: '/aboutus/company-produce'
      }
    },
    created() {
      console.log(this.$router.history.current.path)

    },
    watch: {
      '$route'(to, from) {
        this.currentPath = to.path
      }
    }
  }
</script>

<style lang="less" scoped>
  .top-link {
    position: sticky;
    top: 50px;
    width: 100%;
    // background: transparent;
    background-color: #ffffff;
    z-index: 998;
    height: 117px;

    .content {
      width: 546px;
      margin: 0 auto;
      // height: 100%;
      padding: 33px 0 15px;
    }

    a {
      color: #000;
    }
  }

  .wrap-content {
    transform: translateY(-119px);
  }
</style>

