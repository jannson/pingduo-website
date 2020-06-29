<template>
  <div>
    <img src="~/assets/aboutus/gsjj_banner.png" alt>
    <div class="content">
      <div class="container is-desktop is-block-mobile is-flex-widescreen">
        <div class="left-desc column">
          <h1>公司简介</h1>
          <div class="rect">COMPANY PROFILE</div>
          <div class="text">
            <div class="text-1">
              2017年初，我们参加了小米生态链谷仓学院加速营项目，希望能孵化出一款标杆级的智能锁产品。
            </div>
            <div class="text-2">
              7月，在系统学习了小米方法论后，组建了项目团队，开始进行新产品研发。团队成员中有获得过20多项IF、红点设计大奖的顶级设计师，10年全球一线品牌锁具代工生产经验的结构工程师、生产和供应链管理负责人。8月，完成了产品调研并设计出产品原型。9月，完成第一期DEMO1样机。10月，对产品结构进行修改调整，针对性攻克技术难点，突破了研发中的困难，最终拿出了超乎预期的孵化器毕业产品。
            </div>
          </div>
        </div>
        <div class="right-pic column">
          <img class="is-square" src="~/assets/aboutus/gsjj_cp.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@media screen and (min-width: 1024px) {
  .left-desc {
    width: 630px;
  }
  .right-pic {
    width: 610px;
    height: 603px;
  }
}
.content {
  padding: 108px 0;
  .left-desc {
    // width: 630px;
    h1 {
      font-size:36px;
      font-weight:400;
      color:rgba(0,0,0,1);
      margin-bottom: 10px;
    }
    .rect {
      font-size:16px;
      font-weight:400;
      color:rgba(122,122,122,1);
    }
    .text {
      margin-top: 40px;
      font-size:18px;
      font-weight:400;
      color:rgba(90,90,90,1);
      line-height:30px;
      .text-1 {
        margin-bottom: 40px;
      }
    }
  }
}
</style>

