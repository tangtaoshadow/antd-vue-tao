/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive: 注入需要安装的自定义组件
 * @Statement:
 * @Date: 2019-11-23 20:19:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-23 21:09:07
 */
import Vue from "vue";

import EditTableCell from "../components/Table/EditTableCell";

// 添加可编辑组件
Vue.component("edit-table-cell", EditTableCell);
