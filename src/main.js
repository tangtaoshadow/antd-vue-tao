/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement:
 * @Date: 2019-11-22 19:36:02
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 23:44:52
 */

/*****************************************************/
/******************  导入依赖配置  ************************/
/******************  导入依赖配置  ************************/

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// 国际化配置
import i18n from "../src/locale";

// 加载less 配置
import less from "less";
Vue.use(less);

// // 导入 antd 实现的配置
// import { antd } from "./config/antd";

// // 导入 全局 directive
// import "./config/vue_directives";

import my_config from "./config/index";

my_config;
/******************  导入依赖配置   success  ************************/

/*****************************************************/
/******************  完成 Vue 配置   ************************/
/******************  完成 Vue 配置   ************************/
Vue.config.productionTip = false;

/******************  完成 Vue 配置 success   ************************/

/*****************************************************/
/******************  完成 meta 配置   ************************/
/******************  完成 meta 配置   ************************/
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName("head");
    let meta = document.createElement("meta");
    meta.content = to.meta.content;
    head[0].appendChild(meta);
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

/******************  完成 meta 配置 success   ************************/

/*****************************************************/
/******************  挂载组件  ************************/
/******************  挂载组件  ************************/

window.tao = new Vue({
  // 导入国际化
  i18n,
  // 导入路由
  router,
  // 导入数据
  store,
  render: h => h(App)
}).$mount("#app");

/******************  挂载组件   success  ************************/
