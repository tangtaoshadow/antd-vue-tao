/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive: 路由组件 配置
 * @Statement:
 * @Date: 2019-11-23 15:11:30
 * @Last Modified by:   TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-23 15:11:30
 */

// import Layout from "../components/layout";
import HelloWorld from "../components/HelloWorld";
import HelloWorld2 from "../components/HelloWorld2";
import HelloWorld3 from "../components/HelloWorld3";
import Home from "../page/home/index";
import Project from "../page/project/index";

import { BasicLayout } from "../layouts";

const routes = [
    {
        // 根路径
        path: "/",
        // 加载组件
        // component: Layout,
        component: BasicLayout,
        // redirect: "/",
        meta: {
            title: "首页",
            content: "tangtao"
        },
        // 子路由配置
        children: [
            {
                // 首页
                path: "",
                name: "Home1",
                component: Home,
                // 错误用法 ： 这样路由不会匹配
                // component: () => {
                //     console.log("222222222");
                //     return HelloWorld2;
                // }
                meta: {
                    title: "首页",
                    content: "tangtao1"
                }
            },
            {
                path: "project",
                name: "project",
                component: Project,
                meta: {
                    title: "项目",
                    content: "tangtao : project at 2019-11-23 15:11:14"
                }
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
