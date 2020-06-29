<template>
  <div class="company">
    <div class="banner">
      <img src="~/assets/m_company/banner.png" alt>
    </div>
    <div class="content">
      <div class="header">
        <div class="name">公司简介</div>
        <div class="en-name">COMPANY PROFILE</div>
        <div class="line"></div>
      </div>
      <div class="des">
        2017年初，我们参加了小米生态链谷仓学院加速营项目，希望能孵化出一款标杆级的智能锁产品。7月，在系统学习了小米方法论后，组建了项目团队，开始进行新产品研发。团队成员中有获得过20多项IF、红点设计大奖的顶级设计师，10年全球一线品牌锁具代工生产经验的结构工程师、生产和供应链管理负责人。8月，完成了产品调研并设计出产品原型。9月，完成第一期DEMO1样机。10月，对产品结构进行修改调整，针对性攻克技术难点，突破了研发中的困难，最终拿出了超乎预期的孵化器毕业产品。
      </div>
      <div class="img">
        <img src="~/assets/m_company/img1.png" alt>
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
  .company {
    .banner {
      img {
        width: 100%;
        vertical-align: top;
      }
    }

    .content {
      padding: 35px 25px 17px;
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

      .des {
        margin-top: 30px;
        font-size:12px;
        font-weight:400;
        color:rgba(83,83,83,1);
        line-height:21px;
      }

      .img {
        margin-top: 20px;
        text-align: center;
        img {
          vertical-align: top;
          width: 271px;
          height: 268px;
        }
      }
    }
  }
</style>
