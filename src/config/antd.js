/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-22 13:28:41
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-22 15:09:14
 * @Archive: ant-design 配置文件
 * @Statement: 这里启用了按需加载的机制 把需要配置的antd组件加载进入
 */

import Vue from "vue";

import { Button, Icon, Layout, Menu } from "ant-design-vue";
// import "./antd.less";

// 按钮配置
Vue.component(Button.name, Button);

// 布局配置
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);

// 菜单配置
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);

// 图标配置
Vue.component(Icon.name, Icon);

// 输出antd的详细信息
let antd = {
    version: "1.4.4",
    update_time: "2019-11-22 13:39:09",
    update_author: "tangtao https://www.promiselee.cn/tao"
};

export default antd;
