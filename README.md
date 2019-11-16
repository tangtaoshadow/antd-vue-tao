

# PROPRO-前端（antd-vue-tao）

**Repository：** [Author: GitHub](https://github.com/tangtaoshadow/ant-design-tao)  [Propro:Gitee](https://gitee.com/ProproStudio/Propro-Server-Front) [Gitee](https://gitee.com/tangtao2099/ant-design-tao)

**Introduction：** 集成当前流行框架，实现前后端分离，强调用户体验的一个国际化的蛋白质组学分析平台。

**Author：**[杭州电子科技大学](http://www.hdu.edu.cn/)  2016级管理学院 工商管理 唐涛 [16011324@hdu.edu.cn](mailto:16011324@hdu.edu.cn)

**CreateTime：**`2019-11-17 01:34:41`

**UpdateTime：**`2019-10-23 13:42:07`

**Copyright:**  唐涛 [HOME](https://www.promiselee.cn/tao) 2019 ©  

**Email：**[tangtao2099@outlook.com](mailto:propro@westlake.edu.cn)

**Link：**  [知乎](https://www.zhihu.com/people/tang-tao-24-36/activities)   [GitHub](https://github.com/tangtaoshadow)



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





# 集成框架

**作者：**`唐涛`

**创建**：`2019-11-17 01:36:58`

**修改**：`2019-9-18 20:18:54`













# 安装过程

**作者：**`唐涛`

**创建**：`2019-11-17 01:36:50`

**修改**：`2019-11-17 01:36:54`

## 创建空项目

```bash
yarn global add @vue/cli
vue create antd-demo
```

**得到的默认目录结构**:

```diff
├── README.md
├── babel.config
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── App.vue
│   └── main.js
└── yarn.lock
```









## 添加`ant-design`

```bash
yarn add ant-design-vue
```



## 添加 `babel-plugin-import`

```bash
yarn add babel-plugin-import --dev
```



#### **注意：**

此处以文档为准，[ant-design-vue](https://www.antdv.com/docs/vue/use-with-vue-cli-cn/#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE) 文档存在错误

修改`babel.config.js`文件，配置 babel-plugin-import

```diff
 module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
+  plugins: [
+        [
+            "import",
+            {
+                libraryName: "ant-design-vue",
+                libraryDirectory: "es",
+                style: "css"
+            }
+        ]
+    ]
};
```

然后移除前面在 `src/main.js` 里全量添加的 `import 'ant-design-vue/dist/antd.css';` 样式代码，并且按下面的格式引入模块。

```diff
  // src/main.js
  import Vue from 'vue'
- import Button from 'ant-design-vue/lib/button';
+ import { Button } from 'ant-design-vue';
- import 'ant-design-vue/dist/antd.css'
  import App from './App'

  Vue.component(Button.name, Button)

  Vue.config.productionTip = false

  new Vue({
    render: h => h(App)
  }).$mount("#app");
```



现在可以这样使用了 ，注释就是之前需要的，现在不需要了

```javascript
import Vue from "vue";
import App from "./App.vue";
// import Button from "ant-design-vue/lib/button";
import { Button } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.component(Button.name, Button);

new Vue({
    render: h => h(App)
}).$mount("#app");

```



最后重启 `npm run serve` 访问页面，antd 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的[警告信息](https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png)。关于按需加载的原理和其他方式可以阅读[这里](https://www.antdv.com/docs/vue/getting-started-cn/#按需加载)。



### 安装 `less-loader`



```bash
npm install -D less less-loader
```



### 安装 `core-js@3`

```bash
 npm install core-js@3
```



