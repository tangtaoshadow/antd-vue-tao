/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive: babel 配置文件
 * @Statement: 启用了按需加载机制
 * @Date: 2019-11-22 19:25:07
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-22 19:37:26
 */

module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "import",
            {
                libraryName: "ant-design-vue",
                libraryDirectory: "es",

                // tangtao: 配置加载 less
                // 如果写成 style: "css" 就会加载css 那么覆盖就要使用 css  更加复杂
                style: true
            }
        ]
    ]
};
