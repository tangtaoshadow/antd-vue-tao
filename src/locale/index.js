/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Filename:
 * @Date: 2019-11-22 19:13:18
 * @Last Modified by: TangTao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement:
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive: 国际化配置
 * @Statement: 输出语言
 * @Last Modified time: 2019-11-22 19:14:07
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

/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Filename:
 * @Date: 2019-11-22 19:13:18
 * @Last Modified by:   TangTao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive: 国际化配置
 * @Statement: 输出语言
 * @Last Modified time: 2019-11-22 19:13:18
 */
