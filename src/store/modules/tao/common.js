/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement: 个人 常用库 tangtao 注意命名风格
 * @Date: 2019-12-06 20:23:30
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 20:25:30
 */

let tao = {};

tao.mutations = {
    consolelog() {
        let len = arguments.length;
        for (let i = 0; i < len; i++) {
            window.console.log(arguments[i]);
        }
    },
    dev_consolelog() {
        let len = arguments.length;
        for (let i = 0; i < len; i++) {
            window.console.log(arguments[i]);
        }
    }
};

export default tao;
