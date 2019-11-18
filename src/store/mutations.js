/***文档注释***
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-19 00:01:28
 * @Email: tangtao2099@outlook.com
 * @LastModifiedBy: TangTao tangtao2099@outlook.com
 * @LastModifiedTime: 2019-11-19 00:01:28
 * @Archive: 触发器 修改 state
 * @Statement:
 ***/

export default {
    switchLang(state, lang) {
        state.lang = lang;
        window.tao.$i18n.locale = lang;
        localStorage.setItem("lang", lang);
    },
    addLangPack(state, data) {
        if (data) {
            state.langPack.push(data);
        }
    },
    setLayout(state, data) {
        if (data) {
            state.navbarPosition = data;
        }
    },
    setThemeColor(state, data) {
        state.theme = data;
    }
};
