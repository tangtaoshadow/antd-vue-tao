/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Date: 2019-11-22 19:09:07
 * @Last Modified by:   TangTao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive: ant-design 配置文件
 * @Statement: 这里启用了按需加载的机制 把需要配置的antd组件加载进入
 * @Last Modified time: 2019-11-22 19:09:07
 */

import Vue from "vue";

import { Button, Icon, Layout, Menu, Row, Col } from "ant-design-vue";
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

// grid 配置
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

// 输出antd的详细信息
let antd = {
    version: "1.4.4",
    update_time: "2019-11-22 13:39:09",
    update_author: "tangtao https://www.promiselee.cn/tao"
};

export default antd;
