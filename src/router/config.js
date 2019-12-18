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
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-18 18:54:02
 */

// import Layout from "../components/layout";
import HelloWorld from "../components/HelloWorld";
import HelloWorld2 from "../components/HelloWorld2";
import HelloWorld3 from "../components/HelloWorld3";
import Home from "../page/home/index";
import Project from "../page/project/list";
import ProjectDetail from "../page/project/detail";
import ProjectAnalyse from "../page/project/analyse";
import Library from "../page/library/list";
import LibraryDetail from "../page/library/detail";
import BatchList from "../page/batch/list";
import BatchDetail from "../page/batch/detail";
import BatchUpload from "../page/batch/upload";
import BatchAnalyse from "../page/batch/analyse";
import ExperimentList from "../page/experiment/list";
import ExperimentDetail from "../page/experiment/detail";
import ExperimentRiCalibration from "../page/experiment/ri_calibration";
// 导入 Antv
import AntvList1 from "../page/charts/list1";
import AntvList2 from "../page/charts/list2";
import AntvList3 from "../page/charts/list3";
import AntvList4 from "../page/charts/list4";
import AntvList5 from "../page/charts/list5";
import AntvList6 from "../page/charts/list6";
import AntvList7 from "../page/charts/list7";

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
                name: "projectList",
                component: Project,
                meta: {
                    title: "项目",
                    content: "tangtao : project at 2019-11-23 15:11:14"
                }
            },
            {
                path: "project/detail/*",
                name: "projectDetail",
                component: ProjectDetail,
                meta: {
                    title: "项目详情",
                    content: "tangtao : project detail at 2019-11-24 16:18:20"
                }
            },
            {
                path: "project/analyse/*",
                name: "projectAnalyse",
                component: ProjectAnalyse,
                meta: {
                    title: "项目分析",
                    content: "tangtao : project analyse at 2019-11-27 15:22:46"
                }
            },
            {
                path: "library",
                name: "libraryList",
                component: Library,
                meta: {
                    title: "库列表",
                    content: "tangtao : library at 2019-11-24 19:53:36"
                }
            },
            {
                path: "library/detail/*",
                name: "libraryDetail",
                component: LibraryDetail,
                meta: {
                    title: "库详情",
                    content: "tangtao : library at 2019-11-24 19:53:36"
                }
            },
            {
                path: "batch/list/*",
                name: "batchList",
                component: BatchList,
                meta: {
                    title: "batch 列表",
                    content: "tangtao : batch list at 2019-11-26 22:49:24"
                }
            },
            {
                path: "batch/detail/*",
                name: "batchDetail",
                component: BatchDetail,
                meta: {
                    title: "库详情",
                    content: "tangtao : batch detail at 2019-11-26 22:50:11"
                }
            },
            {
                path: "batch/upload/*",
                name: "batchUpload",
                component: BatchUpload,
                meta: {
                    title: "Batch Upload",
                    content: "tangtao : batch upload at 2019-11-27 10:30:42"
                }
            },
            {
                path: "batch/analyse/*",
                name: "batchAnalyse",
                component: BatchAnalyse,
                meta: {
                    title: "Batch Analyse",
                    content: "tangtao : batch analyse at 2019-11-27 16:40:04"
                }
            },
            {
                path: "experiment/list/*",
                name: "experimentList",
                component: ExperimentList,
                meta: {
                    title: "Experiment List",
                    content: "tangtao : Experiment List at 2019-11-27 16:40:04"
                }
            },
            {
                path: "experiment/detail/*",
                name: "ExperimentDetail",
                component: ExperimentDetail,
                meta: {
                    title: "Experiment Detail",
                    content: "tangtao : Experiment Detail at 2019-12-1 13:59:56"
                }
            },
            {
                path: "experiment/ricalibration/*",
                name: "Experiment Ri Calibration",
                component: ExperimentRiCalibration,
                meta: {
                    title: "Experiment Ri Calibration",
                    content:
                        "tangtao : Experiment Ri Calibration at 2019-12-6 16:20:57"
                }
            },
            {
                path: "antv/list1",
                name: "AntvList1",
                component: AntvList1,
                meta: {
                    title: "Antv List 1",
                    content:
                        "tangtao : Antv List 1 at 2019-12-11 00:46:25"
                }
            },
            {
                path: "antv/list2",
                name: "AntvList2",
                component: AntvList2,
                meta: {
                    title: "Antv List 2",
                    content:
                        "tangtao : Antv List 2 at 2019-12-11 11:04:56"
                }
            },
            {
                path: "antv/list3",
                name: "AntvList3",
                component: AntvList3,
                meta: {
                    title: "Antv List 3",
                    content:
                        "tangtao : Antv List 3 at 2019-12-13 14:34:22"
                }
            },
            {
                path: "antv/list4",
                name: "AntvList4",
                component: AntvList4,
                meta: {
                    title: "Antv List 4",
                    content:
                        "tangtao : Antv List 4 at 2019-12-14 01:38:28"
                }
            },
            {
                path: "antv/list5",
                name: "AntvList5",
                component: AntvList5,
                meta: {
                    title: "Antv List 5",
                    content:
                        "tangtao : Antv List 5 at 2019-12-15 01:12:58"
                }
            },
            {
                path: "antv/list6",
                name: "AntvList6",
                component: AntvList6,
                meta: {
                    title: "Antv List 6",
                    content:
                        "tangtao : Antv List 6 at 2019-12-18 18:13:47"
                }
            },
            {
                path: "antv/list7",
                name: "AntvList7",
                component: AntvList7,
                meta: {
                    title: "Antv List 7",
                    content:
                        "tangtao : Antv List 7 at 2019-12-18 18:54:00"
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
        redirect: "/",
        component: () => {
            console.log("一个也没有匹配");
            return null;
        }
    }
];

export default routes;
