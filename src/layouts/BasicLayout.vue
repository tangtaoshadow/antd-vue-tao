<script>
/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 20:16:37
 * @Last Modified by: TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-22 15:18:15
 */
export default {
    name: "BasicLayout",
    data() {
        //
        return {
            img_logo: require("../assets/logo.png")
        };
    }
};
</script>

<template>
    <div>
        <a-layout-header class="header" :style="{ background: '#fff' }">
            <a-menu
                mode="horizontal"
                :defaultSelectedKeys="['2']"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="img"
                    ><img :src="img_logo" style="width:90px"
                /></a-menu-item>

                <a-menu-item key="1">Projects</a-menu-item>
                <a-menu-item key="2">Databases</a-menu-item>
                <a-sub-menu key="3">
                    <span slot="title" class="submenu-title-wrapper"
                        ><a-icon type="setting" />ToolBox</span
                    >
                    <a-menu-item-group title="Item 1">
                        <a-menu-item key="setting:1">Option 1</a-menu-item>
                        <a-menu-item key="setting:2">Option 2</a-menu-item>
                    </a-menu-item-group>
                    <a-menu-item-group title="Item 2">
                        <a-menu-item key="setting:3">Option 3</a-menu-item>
                        <a-menu-item key="setting:4">Option 4</a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
                <a-menu-item key="4">Tutorials</a-menu-item>
                <a-menu-item key="5">Support</a-menu-item>
                <a-menu-item key="6">1.0.0-Release</a-menu-item>
            </a-menu>
        </a-layout-header>
        <router-view />
    </div>
</template>

<style lang="less" scoped>
@import "./Common";
.logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
</style>
