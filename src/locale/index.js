/***文档注释***
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 13:22:59
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-20 13:24:12
 * @Archive: 国际化配置
 * @Statement: 输出语言
 */

// 国际化设置
import Vue from "vue";
import VueI18n from "vue-i18n";
// 读取已加载的语言
import messages from "./config";

Vue.use(VueI18n);

const i18n = new VueI18n({
    // 当前语言环境 先尝试从缓存中读取
    locale: window.localStorage.lang || "zhCN",
    // 默认语言环境。如果locale中无匹配项则采用该项值
    fallbackLocale: "zhCN",
    messages
});

export default i18n;
