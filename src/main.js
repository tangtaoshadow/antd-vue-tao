/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by:   TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-17 01:43:07
 */
import Vue from "vue";
import App from "./App.vue";
// import Button from "ant-design-vue/lib/button";
import { Button } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.component(Button.name, Button);

new Vue({
    render: h => h(App)
}).$mount("#app");
