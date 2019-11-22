/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-22 14:49:23
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

// 导入 antd 实现的配置
import { antd } from "./config/antd";

/******************  导入依赖配置   success  ************************/

/*****************************************************/
/******************  完成 Vue 配置   ************************/
/******************  完成 Vue 配置   ************************/
Vue.config.productionTip = false;

antd;

/******************  完成 Vue 配置 success   ************************/

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
