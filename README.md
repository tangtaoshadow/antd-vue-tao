

# PROPRO-前端（antd-vue-tao）

**Repository：** [Author: GitHub](https://github.com/tangtaoshadow/ant-design-tao)  [Propro:Gitee](https://gitee.com/ProproStudio/Propro-Server-Front) [Gitee](https://gitee.com/tangtao2099/ant-design-tao)

**Introduction：** 集成当前流行框架，实现前后端分离，强调用户体验，

**Author：**[杭州电子科技大学](http://www.hdu.edu.cn/)  2016级管理学院 工商管理 唐涛 [16011324@hdu.edu.cn](mailto:16011324@hdu.edu.cn)

**CreateTime：**`2019-11-17 01:34:41`

**UpdateTime：**`2019-11-22 21:11:35`

**Copyright:**  唐涛 [HOME | 首页](https://www.promiselee.cn/tao) 2019 ©  

**Email：**[tangtao2099@outlook.com](mailto:propro@westlake.edu.cn)

**Link：**  [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)   [GitHub](https://github.com/tangtaoshadow)



---

# [访问网页](https://www.promiselee.cn/tao/antd-vue)



---

# <a target="blank" href="http://cdn.promiselee.cn/antd_vue/development_document.html">开发文档</a>





---

# package.json

**作者：**[唐涛](https://www.promiselee.cn/tao)

**创建**：`2019-11-18 19:55:40`

**修改**：`2019-11-18 19:59:15`

```json
{
    "name": "antd-vue-tao",
    "version": "1.5.0",
    "private": true,
    "create_time": "2019-11-16 03:33:56",
    "update_time": "2019-11-22 13:45:50",
    "tangtao": "tangtao tangtao2099@outlook.com https://www.promiselee.cn/tao",
    "description": "基于ant-design-vue开发",
    "GitHub[Author]": "https://github.com/tangtaoshadow/antd-vue-tao",
    "Repository[Author]": "https://github.com/tangtaoshadow/antd-vue-tao",
    "scripts": {
        "tao": "echo antd-vue-tao && vue-cli-service serve",
        "build": "echo antd-vue-tao && vue-cli-service build",
        "lint": "vue-cli-service lint"
    },
    "keywords": [
        "TangTao",
        "https://www.promiselee.cn/tao",
        "tangtao2099@outlook.com",
        "https://www.promiselee.cn/tao",
        "https://github.com/tangtaoshadow/antd-vue-tao"
    ],
    "author": "TangTao",
    "my_home": "https://www.promiselee.cn/tao",
    "my_email": "tangtao2099@outlook.com",
    "Gitee[Author]": "https://gitee.com/tangtao2099/antd-vue-tao",
    "Gitee[Propro]": "https://gitee.com/ProproStudio/Propro-Server-Front",
    "license": "TangTao",
    "dependencies": {
        "ant-design-vue": "1.4.6",
        "core-js": "^3.4.1",
        "less-loader": "^5.0.0",
        "vue": "^2.6.10",
        "vue-i18n": "^8.15.0",
        "vue-router": "3.1.3",
        "vuex": "3.1.2"
    },
    "devDependencies": {
        "@vue/cli-plugin-babel": "^4.0.0",
        "@vue/cli-plugin-eslint": "^4.0.0",
        "@vue/cli-service": "^4.0.0",
        "babel-eslint": "^10.0.3",
        "babel-plugin-import": "^1.12.2",
        "eslint": "^5.16.0",
        "eslint-plugin-vue": "^5.0.0",
        "less": "^3.10.3",
        "vue-template-compiler": "^2.6.10"
    },
    "eslintConfig": {
        "root": true,
        "env": {
            "node": true
        },
        "extends": [
            "plugin:vue/essential",
            "eslint:recommended"
        ],
        "rules": {
            "no-console": "off"
        },
        "parserOptions": {
            "parser": "babel-eslint"
        }
    },
    "postcss": {
        "plugins": {
            "autoprefixer": {}
        }
    },
    "browserslist": [
        "> 1%",
        "last 2 versions"
    ],
    "updateTao": [
        "1.0.0 初始化项目 at 2019-11-16 11:22:58",
        "1.1.0 添加必备组件 antd babel less at 2019-11-17 01:59:18",
        "1.2.0 添加组件 i18n at 2019-11-17 17:48:30",
        "1.3.0 添加组件 vuex at 2019-11-18 19:54:12",
        "1.4.0 添加组件 vue-router 3.1.3 at 2019-11-20 09:37:10",
        "1.5.0 升级组件 ant-design-vue 1.4.6 at 2019-11-22 15:15:01",
        "1.5.1 实现底部样式  at 2019-11-22 17:46:32",
        "update time at 2019-11-22 15:15:11"
    ]
}

```





---

# 首页

**作者：**[唐涛](https://www.promiselee.cn/tao)

**创建**：`2019-11-22 20:27:17`

**修改**：`2019-11-22 20:29:52`

## 导航、中间布局

![tangtao](http://cdn.promiselee.cn/share_static/files/dian/antd-vue-tao/home1-2019-11-22-202422.png)

## 底部布局

![tangtao](http://cdn.promiselee.cn/share_static/files/dian/antd-vue-tao/home2-2019-11-22-202840.png)



## 实验列表

**作者：**[唐涛](https://www.promiselee.cn/tao)

**创建**：`2019-12-1 01:13:40`

**修改**：`2019-12-1 01:15:15`

![tangtao](http://cdn.promiselee.cn/share_static/files/dian/antd-vue-tao/experiments1-2019-12-1-011222.png)





---

# 运行

**作者：**[唐涛](https://www.promiselee.cn/tao)

**创建**：`2019-12-6 16:41:34`

**修改**：`2019-12-6 16:41:39`



```bash
C:\program1\dian\antd-vue-2\antd-demo>npm  run tao

> antd-vue-tao@1.6.3 tao C:\program1\dian\antd-vue-2\antd-demo
> echo antd-vue-tao && vue-cli-service serve

antd-vue-tao
 INFO  Starting development server...
98% after emitting CopyPlugin

 DONE  Compiled successfully in 15601ms                                                                      下午4:40:48


  App running at:
  - Local:   http://localhost:8008/
  - Network: http://192.168.103.197:8008/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```



---

# 编译打包

**作者：**[唐涛](https://www.promiselee.cn/tao)

**创建**：`2019-12-6 16:40:02`

**修改**：`2019-12-6 16:40:07`

```bash
C:\program1\dian\antd-vue-2\antd-demo>yarn  build
yarn run v1.19.1
$ echo antd-vue-tao && vue-cli-service build
antd-vue-tao

-  Building for production...

 WARNING  Compiled with 3 warnings                                                                           下午4:38:21
 warning

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  img/5dc00d10e4b0c555374d5255.270c1fd6.png (1.22 MiB)
  css/chunk-vendors.b4531557.css (348 KiB)
  js/chunk-vendors.f5fcbd09.js (1.68 MiB)

 warning

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  app (2.16 MiB)
      css/chunk-vendors.b4531557.css
      js/chunk-vendors.f5fcbd09.js
      css/app.edcedb81.css
      js/app.cb3d4dc7.js


 warning

webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

  File                                   Size              Gzipped

  dist\js\chunk-vendors.f5fcbd09.js      1716.49 KiB       530.35 KiB
  dist\js\app.cb3d4dc7.js                119.63 KiB        20.56 KiB
  dist\css\chunk-vendors.b4531557.css    347.74 KiB        39.81 KiB
  dist\css\app.edcedb81.css              32.56 KiB         3.77 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html

Done in 49.14s.

```





























