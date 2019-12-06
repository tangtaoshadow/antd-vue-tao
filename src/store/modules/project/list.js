/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement:  项目列表的数据存储 只负责数据转存 修改
 * @Date: 2019-12-06 19:15:05
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 22:27:52
 */

import axios from "axios";
let tao = {};
tao.state = {
    // 读取数据的状态
    status: -1,
    // 读取到的数据
    data: null,
    // 读取的时间戳
    updateTime: -111,
    createProject: {
        status: -1,
        data: null,
        updateTime: -1
    }
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
    setCreateProject(state, data) {
        console.log(state.createProject, data);
        state.createProject = data;
    }
};

tao.actions = {
    async createProject({ state, commit }, payload) {
        //   state.status1 = payload
        console.log(state, payload, payload.name);

        let { name: projectName, description = null } = payload;
        let obj = {
            status: -1
        };
        obj.updateTime = Date.now();
        await axios
            .get("/MyServer/project/add", {
                // 还可以直接把参数拼接在url后边
                params: {
                    projectName,
                    description
                }
            })
            .then(function(res) {
                obj.status = 0;
                obj.data = res.data;
            })
            .catch(function(error) {
                obj.status = -1;
                console.log("Tangtao", error);
            });
        if (0 == obj.status) {
            // 数据成功返回 不考虑其他情况
        } else {
            obj.status = -1;
            obj.data = null;
        }
        console.log(obj);
        commit("setCreateProject", obj);
        return true;
    }
};

export default tao;
