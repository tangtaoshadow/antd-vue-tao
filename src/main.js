/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-22 13:41:21
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// 导入 antd 实现的配置
import { antd } from "./config/antd";

// 国际化配置
import i18n from "../src/locale";

Vue.config.productionTip = false;

antd;

window.tao = new Vue({
    // 导入国际化
    i18n,
    // 导入路由
    router,
    // 导入数据
    store,
    render: h => h(App)
}).$mount("#app");
