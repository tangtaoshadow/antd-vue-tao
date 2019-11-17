/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 17:29:12
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-17 17:30:45
 * @Archive: 国际化配置文件
 */

// 国际化设置
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/locale";

Vue.use(VueI18n);
const i18n = new VueI18n({
    // 当前语言环境
    locale: "zhCN",
    // 默认语言环境。如果locale中无匹配项则采用该项值
    fallbackLocale: "zhCN",
    messages
});

export default i18n;
