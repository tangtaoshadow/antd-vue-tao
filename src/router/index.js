/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 13:13:54
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-22 21:06:25
 * @Email: tangtao2099@outlook.com
 * @Archive: 路由配置
 * @Statement:
 */

import Vue from "vue";
// 加载组件
import VueRouter from "vue-router";
// 这里是路由配置文件
import routes from "./config";

Vue.use(VueRouter);

export default new VueRouter({
    // 匹配模式
    mode: "history",
    base: __dirname,
    // 导入路由
    routes
});
