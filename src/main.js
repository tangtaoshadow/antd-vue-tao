/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-18 23:40:20
 */
import Vue from "vue";
import App from "./App.vue";
import { Button } from "ant-design-vue";
import store from "./store";

// 国际化配置
import i18n from "./utils/locale";

Vue.config.productionTip = false;
Vue.component(Button.name, Button);

window.tao = new Vue({
    // 导入国际化
    i18n,
    store,
    render: h => h(App)
}).$mount("#app");
