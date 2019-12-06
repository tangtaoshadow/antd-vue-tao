/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement: 配置文件：导入 store 配置
 * @Date: 2019-12-06 19:20:22
 * @Last Modified by:   TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 19:20:22
 */

import Vue from "vue";
import Vuex from "vuex";
import vuexModules from "./modules";

import state from "./state";
import mutations from "./mutations";
// import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    // actions,
    modules: vuexModules
});
