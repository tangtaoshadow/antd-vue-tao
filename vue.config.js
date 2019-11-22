/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-22 14:54:45
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-22 16:10:25
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
