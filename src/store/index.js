/***文档注释***
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-18 23:57:16
 * @Email: tangtao2099@outlook.com
 * @LastModifiedBy: TangTao tangtao2099@outlook.com
 * @LastModifiedTime: 2019-11-18 23:57:16
 * @Archive: 配置文件：导入 store 配置
 * @Statement:
 ***/

import Vue from "vue";
import Vuex from "vuex";
// import vuexModules from "./modules";

import state from "./state";
import mutations from "./mutations";
// import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
    // actions,
    // modules: vuexModules
});
