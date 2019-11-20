/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 17:00:12
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-20 17:37:46
 */
/***文档注释***
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 13:08:08
 * @Email: tangtao2099@outlook.com
 * @LastModifiedBy: TangTao tangtao2099@outlook.com
 * @LastModifiedTime: 2019-11-20 13:08:08
 * @Archive: 路由组件
 * @Statement:
 ***/

import Layout from "../components/layout";
import HelloWorld from "../components/HelloWorld";
import HelloWorld2 from "../components/HelloWorld2";
import HelloWorld3 from "../components/HelloWorld3";
// import { BasicLayout } from "../layouts";

const routes = [
    {
        // 根路径
        path: "/a",
        // 加载组件
        component: Layout,
        // component: BasicLayout,
        redirect: "/a/3",
        // 子路由配置
        children: [
            {
                path: "2",
                name: "HelloWorld2",
                component: HelloWorld2

                // 错误用法 ： 这样路由不会匹配
                // component: () => {
                //     console.log("222222222");
                //     return HelloWorld2;
                // }
            },
            {
                path: "/a/1",
                name: "HelloWorld1",
                component: HelloWorld
            },
            {
                path: "/a/3",
                component: HelloWorld3,
                name: "HelloWorld3"
                // component: HelloWorld3
            }
        ]
    },
    {
        path: "/test1",
        component: HelloWorld
    },
    {
        path: "/test2",
        component: HelloWorld2
    },
    {
        path: "/test3",
        component: HelloWorld3
    },
    {
        path: "*",
        component: () => {
            console.log("一个也没有匹配");
            return null;
        }
    }
];

export default routes;
