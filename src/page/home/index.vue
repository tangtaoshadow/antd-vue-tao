<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement:
 * @Date: 2019-11-22 20:00:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-24 15:03:02
 */
export default {
  name: "home",
  data() {
    //
    return {
      img_logo: require("../../assets/logo.png"),
      img_logo1: require("../../assets/static/public/5dba549ae4b0c5553747ebc6.png"),
      img_dian: require("../../assets/static/public/5dba8d2de4b0ece759450b77.png"),
      img_2: require("../../assets/static/public/5dba8d94e4b0335f1e47fa0a.png"),
      img_3: require("../../assets/static/public/20191122182019.png"),
      img_4: require("../../assets/static/public/5dba605be4b0ece75944abaa.png"),
      img_5: require("../../assets/static/public/5dc00d10e4b0c555374d5255.png"),
      footer_col_style: {
        paddingTop: "15px"
      }
    };
  },
  directives: {
    // pointer: {
    //   // 指令的定义
    //   bind: function(el) {
    //     el.style.cursor = "pointer";
    //   }
    // }
  }
};
</script>

<template>
  <div style="max-width:1500px;margin:auto;">
    <a-row type="flex" justify="space-between" style="padding:20px 0px;">
      <a-col :sm="24">
        <img :src="img_5" style="width:100%" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" style="padding:20px 0px 40px;" class>
      <a-col :xs="24" :style="footer_col_style">
        <div
          style="font-size:22px;font-weight:700;padding-bottom:20px;margin:auto;"
          v-pointer
        >———— COMMUNITY SUPPORT ————</div>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" style="padding:0px;" class="content_three">
      <a-col :sm="24" :md="7" :lg="6" :xl="5" :style="footer_col_style" class="three_margin">
        <div style="font-size:16px;font-weight:700;text-align:left;" v-pointer>
          &nbsp;Official Documents
          <div style="height:10px;width:100%;border-top:1px solid #000;"></div>
          <span style="font-size:14px;font-weight:500;">
            临床实验室按照ISO15189、CAP、CLSI-62A等国际临床质谱实验室质量体系标准建设，
            可提供临床样本委托检测及方法开发服务。目前已自主研发实验室检测项目200余项
          </span>
          <div style="height:10px;width:30px;"></div>
          <a-button type="default" style="height:40px;font-weight:600;">
            VIEW ON YUQUE
            <img :src="img_4" style="max-height:30px;" />
          </a-button>
        </div>
      </a-col>

      <a-col :sm="24" :md="7" :lg="6" :xl="5" :style="footer_col_style" class="three_margin">
        <div style="font-size:16px;font-weight:700;text-align:left;" v-pointer>
          &nbsp;Official Documents
          <div style="height:10px;width:100%;border-top:1px solid #000;"></div>
          <span style="font-size:14px;font-weight:500;">
            临床实验室按照ISO15189、CAP、CLSI-62A等国际临床质谱实验室质量体系标准建设，
            可提供临床样本委托检测及方法开发服务。目前已自主研发实验室检测项目200余项
          </span>
          <div style="height:10px;width:30px;"></div>
          <a-button type="default" style="height:40px;font-weight:600;">
            ASK A QUESTION
            <img :src="img_4" style="max-height:30px;" />
          </a-button>
        </div>
      </a-col>

      <a-col :sm="24" :md="7" :lg="6" :xl="5" :style="footer_col_style" class="three_margin">
        <div style="font-size:16px;font-weight:700;text-align:left;" v-pointer>
          &nbsp;Official Documents
          <div style="height:10px;width:100%;border-top:1px solid #000;"></div>
          <span style="font-size:14px;font-weight:500;">
            临床实验室按照ISO15189、CAP、CLSI-62A等国际临床质谱实验室质量体系标准建设，
            可提供临床样本委托检测及方法开发服务。目前已自主研发实验室检测项目200余项
          </span>
          <div style="height:10px;width:30px;"></div>
          <a-button type="default" style="height:40px;font-weight:600;">
            REPORT A BUG
            <img :src="img_4" style="max-height:30px;" />
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";

@media (max-width: 1500px) {
  .three_margin {
    padding: 0px 18px;
  }
}
@media (max-width: 576px) {
  .content_three {
    // 强制修改
    width: 100%;
    justify-content: space-around;
    text-align: left;
  }
}
</style>
