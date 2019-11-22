/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement:
 * @Date: 2019-11-22 19:37:45
 * @Last Modified by:   TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-22 19:37:45
 */

// import "./src/layouts/Common.less";
// vue.config.js
const vueConfig = {
    configureWebpack: {
        // webpack plugins
        plugins: [
            // Ignore all locale files of moment.js
            //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ]
        // if prod is on, add externals
        // externals: isProd() ? prodExternals : {}
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 全局配置颜色修改
                    // less vars，customize ant design theme
                    // 使用了阿里云主题色
                    "primary-color": "#FF6A00",
                    "link-color": "#42B983"
                    // "link-color": "#ff6a00"
                    // 'border-radius-base': '4px'
                },
                // do not remove this line
                javascriptEnabled: true
            }
        }
    },

    devServer: {
        // development server port 8000
        // 配置部署端口
        port: 8008
        // 代理转发配置
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // proxy: {
        //   '/api': {
        //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        //     ws: false,
        //     changeOrigin: true
        //   }
        // }
    }

    // disable source map in production
    //   productionSourceMap: false,
    //   lintOnSave: undefined,
    // babel-loader no-ignore node_modules/*
    //   transpileDependencies: []
};

module.exports = vueConfig;
