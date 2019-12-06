/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement:  项目列表的数据存储
 * @Date: 2019-12-06 19:15:05
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 20:44:58
 */

let tao = {};
tao.state = {
    // 读取数据的状态
    status: -1,
    // 读取到的数据
    data: null,
    // 读取的时间戳
    updateTime: -1
};

tao.namespaced = true;

tao.mutations = {
    /*****
     * @Author              TangTao  https://www.promiselee.cn/tao
     * @Email               tangtao2099@outlook.com
     * @Copyright           TangTao © 2019 www.promiselee.cn/tao
     * @GitHub              https://github.com/tangtaoshadow
     * @Zhihu               https://www.zhihu.com/people/tang-tao-24-36/activities
     * @CreateTime          2019-12-6 20:14:05
     * @UpdateTime          2019-12-6 20:15:04
     * @Archive             项目列表 触发器
     */
    projectListGet: () => {
        console.log("test 111111");
    },

    projectListCreate1(state, data) {
        console.log("projectCreate", state, data);
    }
};

tao.actions = {
    projectListCreate({ state }, payload) {
        //   state.status1 = payload
        console.log("-----------");
        console.log(state, payload);
        return true;
    }
};

export default tao;
