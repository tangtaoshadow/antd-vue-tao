/***文档注释***
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-19 21:43:15
 * @Email: tangtao2099@outlook.com
 * @LastModifiedBy: TangTao tangtao2099@outlook.com
 * @LastModifiedTime: 2019-11-19 21:43:15
 * @Archive:
 * @Statement: 异步事件处理
 ***/

import i18n from "@/utils/locale";

export default {
    loadLang({ dispatch, commit, state }, lang) {
        // 加载要切换的语言包
        let langPackList = state.langPack;
        if (!langPackList.includes(lang)) {
            return import(
                /* webpackChunkName: "lang/lang-[request]" */ `@/lang/${lang}`
            )
                .then(msgs => {
                    i18n.setLocaleMessage(lang, msgs.default);
                    i18n.locale = lang;
                    commit("addLangPack", lang);
                    commit("setLang", lang);
                    return Promise.resolve(lang);
                })
                .catch(e => {
                    dispatch("loadLang", i18n.fallbackLocale).then(lang => {
                        console.warn(
                            `未找到对应语言包，已加载默认语言：${lang}`
                        );
                        console.log(e);
                        return lang;
                    });
                });
        }
        i18n.locale = lang;
        commit("setLang", lang);
        return Promise.resolve(lang);
    }
};
