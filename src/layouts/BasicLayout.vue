<script>
/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 20:16:37
 * @Last Modified by:   TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-20 20:16:37
 */
export default {
    name: "BasicLayout"
};
</script>

<template>
    <div>
        <router-view />
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['2']"
                :style="{ lineHeight: '64px' }"
            >
                <a-menu-item key="1">nav 1</a-menu-item>
                <a-menu-item key="2">nav 2</a-menu-item>
                <a-menu-item key="3">nav 3</a-menu-item>
                <a-sub-menu>
                    <span slot="title" class="submenu-title-wrapper"
                        ><a-icon type="setting" />Navigation Three -
                        Submenu</span
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
            </a-menu>
        </a-layout-header>
    </div>
</template>

<style scoped>
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
}
</style>
