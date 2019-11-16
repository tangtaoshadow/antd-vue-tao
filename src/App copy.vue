<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-config-provider :autoInsertSpaceInButton="false">
        <a-button type="primary">按钮</a-button>
      </a-config-provider>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { Button } from "ant-design-vue";

Vue.use(Button);

export default {
  name: "app",
  components: {
    HelloWorld
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
