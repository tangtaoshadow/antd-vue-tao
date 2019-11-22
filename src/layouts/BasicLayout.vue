<script>
/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-20 20:16:37
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-23 01:09:37
 */
export default {
    name: "BasicLayout",
    data() {
        //
        return {
            img_logo: require("../assets/logo.png"),
            img_logo1: require("../assets/static/public/5dba549ae4b0c5553747ebc6.png"),
            img_dian: require("../assets/static/public/5dba8d2de4b0ece759450b77.png"),
            img_2: require("../assets/static/public/5dba8d94e4b0335f1e47fa0a.png"),
            img_3: require("../assets/static/public/20191122182019.png"),
            img_4: require("../assets/static/public/5dba605be4b0ece75944abaa.png"),
            img_5: require("../assets/static/public/5dc00d10e4b0c555374d5255.png"),
            footer_col_style: {
                paddingTop: "15px"
            }
        };
    },
    directives: {
        // pointer: {
        //   // 指令的定义
        //   bind: function(el) {
        //     el.style.cursor = "pointer";
        //   }
        // }
    }
};

/********
 * 注意 ： 页面最宽只支持 1500px
 *
 */
</script>

<template>
    <div style="min-width:700px;padding:0px;">
        <div
            style="position:fixed;width:100%;z-index:1000;top:0px;height:65px;background:#FFF;"
        >
            <a-layout-header class="header" style="background:#fff;">
                <a-row
                    type="flex"
                    justify="space-around"
                    style="max-width:1500px;margin:auto;padding:0px;"
                >
                    <a-col class="nav_logo" :md="3">
                        <div style="float:left;width:90px;">
                            <router-link to="/">
                                <img :src="img_logo" style="width:80px" />
                            </router-link>
                        </div>
                    </a-col>
                    <a-col :sm="16" :md="14">
                        <a-menu
                            mode="horizontal"
                            :style="{
                                lineHeight: '65px',
                                width: '100%',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: 'rgba(0, 0, 0, 0.65)',
                                border: '0px'
                            }"
                        >
                            <a-menu-item key="1"
                                >&nbsp;Projects&nbsp;</a-menu-item
                            >
                            <a-menu-item key="2"
                                >&nbsp;Databases&nbsp;</a-menu-item
                            >
                            <a-sub-menu key="3">
                                <span
                                    slot="title"
                                    class="submenu-title-wrapper"
                                >
                                    &nbsp;
                                    <!-- <a-icon type="setting" /> -->
                                    ToolBox&nbsp;
                                </span>
                                <a-menu-item
                                    key="setting:1"
                                    style="font-size:16px;"
                                    >&nbsp;DiskUsage&nbsp;</a-menu-item
                                >
                                <a-menu-item
                                    key="setting:2"
                                    style="font-size:16px;"
                                    >&nbsp;Download Result&nbsp;</a-menu-item
                                >
                            </a-sub-menu>
                            <a-menu-item key="4"
                                >&nbsp;Tutorials&nbsp;</a-menu-item
                            >
                            <a-menu-item key="5"
                                >&nbsp;Support&nbsp;</a-menu-item
                            >
                            <a-menu-item key="6"
                                >&nbsp;1.0.0-Release&nbsp;</a-menu-item
                            >
                        </a-menu>
                    </a-col>
                    <a-col :md="3"> </a-col>
                </a-row>
            </a-layout-header>
        </div>

        <a-layout-content
            :style="{
                padding: '0 0px',
                margin: '95px 0px 90px',
                minHeight: '700px'
            }"
        >
            <a-row
                type="flex"
                justify="space-between"
                style="max-width:1500px;margin:auto;padding:0px;"
            >
                <router-view />
            </a-row>
        </a-layout-content>

        <a-layout-footer
            class="footer"
            :style="{ textAlign: 'center', padding: '20px 30px' }"
        >
            <a-row
                type="flex"
                justify="space-between"
                style="max-width:1500px;margin:auto;"
            >
                <a-col :md="24" :lg="11" :xl="9" :style="footer_col_style">
                    <img
                        :src="img_logo1"
                        style="max-height: 40px;cursor: pointer;"
                    />
                    <div style="padding:10px 5px;cursor: pointer;">
                        凯莱谱精准医疗，致力于临床质谱技术在中国的推广与应用。
                        公司目前已在杭州，上海，北京成立质谱中心实验室，可提供包括临床检测、
                        代谢组学科研、应用开发、CRO、以及环境毒理等多种质谱检测技术服务，
                        满足不同类型客户需求。同时，公司建有全球领先的代谢组学科研机构METABOLON中国唯一授权实验室，
                        独家为中国科研与医疗机构提供METABOLON Discovery
                        HD4TM非靶向精准代谢组学科研服务。
                    </div>
                </a-col>
                <a-col :md="12" :lg="6" :xl="5" :style="footer_col_style">
                    <div
                        style="font-size:20px;font-weight:600;color:#FFFFFF;cursor: pointer;"
                    >
                        QUICK LINK
                    </div>
                    <div style="padding:10px 5px;">
                        <img
                            :src="img_dian"
                            style="max-width:180px;cursor: pointer;background:#FFFFFF;"
                        />
                    </div>
                    <div style="padding:10px 5px;">
                        <img
                            :src="img_2"
                            style="max-width:180px;cursor: pointer;background:#FFFFFF;"
                        />
                    </div>
                </a-col>

                <a-col :md="12" :lg="6" :xl="5" :style="footer_col_style">
                    <div
                        style="font-size:20px;font-weight:600;color:#FFFFFF;cursor: pointer;"
                    >
                        CONTACT US
                    </div>
                    <div style="padding:10px 5px;cursor: pointer;">
                        M - 凯莱谱代谢组学分析平台
                        <br />地址：杭州市西湖区金蓬街329号
                        <br />电话：123456789 <br />传真：123456789
                        <br />邮箱：123456@123456.cn
                    </div>
                </a-col>
                <a-col :md="24" :style="footer_col_style">
                    <div
                        style="padding:10px 5px;cursor: pointer;text-align:center;"
                    >
                        Terms / Privacy | Copyright . Licensed by propro
                    </div>
                </a-col>
            </a-row>
        </a-layout-footer>
    </div>
</template>

<style lang="less" scoped>
@import "./Common";
.logo {
    width: 120px;
    height: 31px;
    margin: 16px 28px 16px 0;
    float: left;
}
.footer {
    background: @common_black_color;
    color: @common_light_white_color;
}
// 当页面宽度足够小时隐藏图标 logo
@media (max-width: 455px) {
    .nav_logo {
        display: none;
    }
}
</style>
