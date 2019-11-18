/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-18 18:46:35
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-18 18:58:31
 * @Archive: 触发器 修改 state
 */
import Cookies from "js-cookie";

export default {
    setLang(state, data) {
        if (data) {
            Cookies.set("lang", data);
        } else {
            Cookies.remove("lang");
        }
        state.lang = data;
    },
    switchLang(state, lang) {
        state.lang = lang;
        window.app.$i18n.locale = lang;
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
