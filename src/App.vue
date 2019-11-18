<template>
  <div id="tao">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </div>
  </div>
</template>

<script>
/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-17 18:19:25
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-18 18:37:46
 */
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
