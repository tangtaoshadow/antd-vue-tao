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
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 21:41:30
 */

// import "./src/layouts/Common.less";
// const path = require("path");
// const htmlWebpackPlugin = require("html-webpack-plugin");
// // import HtmlWebpackPlugin from "HtmlWebpackPlugin";
// let obj_htmlwebpackplugin = new htmlWebpackPlugin({
//     minify: {
//         // removeAttributeQuotes: false // 移除属性的引号
//     }
// });
// vue.config.js

const vueConfig = {
    configureWebpack: {
        // webpack plugins
        plugins: [
            // Ignore all locale files of moment.js
            // obj_htmlwebpackplugin
            //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ]
        // if prod is on, add externals
        // externals: isProd() ? prodExternals : {}
    },
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set("@", resolve("src"))
    //         .set("assets", resolve("src/assets"))
    //         .set("components", resolve("src/components"))
    //         .set("router", resolve("src/router"));
    // },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        });
    },
    // 开启hash
    filenameHashing: true,
    css: {
        // sourceMap: false,
        loaderOptions: {
            less: {
                modifyVars: {
                    // 全局配置颜色修改
                    // less vars，customize ant design theme
                    "primary-color": "#FF6A00",
                    "table-header-color": "#333333",
                    "table-row-hover-bg": "#f5f5f6",
                    "table-header-bg": "#f5f5f6",
                    "btn-danger-color": "#dc3545",
                    "btn-danger-bg": "#FFFFFF",
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
        port: 8008,
        // 代理转发配置
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            "/MyServer": {
                target: "http://192.168.102.36:8080/",
                ws: false,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    "^/MyServer": ""
                }
            }
        }
    },
    // disable source map in production
    // productionSourceMap: false,
    lintOnSave: undefined
    // babel-loader no-ignore node_modules/*
    //   transpileDependencies: []
};

module.exports = vueConfig;
