/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-20 13:21:53
 */
import Vue from "vue";
import App from "./App.vue";
import { Button } from "ant-design-vue";
import store from "./store";
import router from "./router";

// 国际化配置
import i18n from "../src/locale";

Vue.config.productionTip = false;
Vue.component(Button.name, Button);

window.tao = new Vue({
    // 导入国际化
    i18n,
    // 导入路由
    router,
    store,
    render: h => h(App)
}).$mount("#app");
