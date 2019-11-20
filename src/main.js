/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 01:43:07
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-20 20:15:03
 */
import Vue from "vue";
import App from "./App.vue";
import { Button, Layout, Menu, Icon } from "ant-design-vue";
import store from "./store";
import router from "./router";

// 国际化配置
import i18n from "../src/locale";

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Menu.name, Menu);
Vue.component(Icon.name, Icon);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);

window.tao = new Vue({
    // 导入国际化
    i18n,
    // 导入路由
    router,
    // 导入数据
    store,
    render: h => h(App)
}).$mount("#app");
