<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement:
 * @Date: 2019-11-27 16:38:28
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-27 16:38:36
 */

import { Modal } from "ant-design-vue";
let Antd = { Modal };
export default {
    name: "batchAnalyse",
    data() {
        return {
            loading: false,
            visible: false
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            e;
            this.loading = true;
            setTimeout(() => {
                this.visible = false;
                this.loading = false;
            }, 3000);
        },
        handleCancel(e) {
            e;
            this.visible = false;
        },

        // 删除警告
        deleteWarning() {
            Antd.Modal.warning({
                title: (
                    <span style="font-size:18px;font-weight:600;">
                        Delete warning
                    </span>
                ),
                content: (
                    <span>
                        You are deleting your PROJECT and ALL THE EXPERIMENTS in
                        this project.
                        <br />
                        Any data in this project will be permanently removed.
                    </span>
                ),
                okText: "Delete",
                okType: "danger",
                maskClosable: true,
                width: "600px",
                closable: true
            });
        }
    }
};
</script>

<template>
    <div>
        <a-row type="flex" class="nav2" justify="center" style>
            <a-col
                :xs="23"
                style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;"
            >
                Projects Analyse
                <div
                    v-pointer
                    style="display:inline;font-size:22px;font-weight:500;padding-left:20px;"
                >
                    Projectgsgsggs
                </div>
            </a-col>
        </a-row>

        <div style="max-width:1500px;margin:auto;margin-top:30px;">
            <a-row type="flex" justify="center" style>
                <a-col
                    :sm="23"
                    style="background:#FFF;padding:10px;line-height:30px;font-size:14px;font-weight:500;"
                >
                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="8"
                        :xxl="7"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Project Name&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input
                                    :disabled="true"
                                    :defaultValue="'dgggrrrrf'"
                                    style="max-width:200px;height:30px;"
                                />
                            </div>
                        </div>
                    </a-col>

                    <!-- 这里是右边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="12"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Project ID&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input
                                    :disabled="true"
                                    :defaultValue="12222"
                                    style="max-width:200px;height:30px;"
                                />
                            </div>
                        </div>
                    </a-col>

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="8"
                        :xxl="7"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                RI Library&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-select
                                    defaultValue="hdu"
                                    style="max-width: 200px;height:30px;"
                                >
                                    <a-select-option value="hdu" key="22"
                                        >wang ruimi bbasgstt22
                                    </a-select-option>
                                    <a-select-option value="tangtao" key="11"
                                        >Tangtao</a-select-option
                                    >
                                    <a-select-option
                                        value="disabled"
                                        disabled
                                        key="23"
                                        >https://www.promiselee.cn/tao</a-select-option
                                    >
                                    <a-select-option value="hangzhou" key="4"
                                        >lms</a-select-option
                                    >
                                </a-select>
                            </div>
                        </div>
                    </a-col>

                    <!-- 这里是右边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="12"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Compound Library&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-select
                                    defaultValue="hdu"
                                    style="max-width: 400px;height:30px;"
                                >
                                    <a-select-option value="hdu" key="22"
                                        >Hangzhuo xihu propro
                                    </a-select-option>
                                    <a-select-option value="tangtao" key="11"
                                        >Tangtao</a-select-option
                                    >
                                    <a-select-option
                                        value="disabled"
                                        disabled
                                        key="23"
                                        >https://www.promiselee.cn/tao</a-select-option
                                    >
                                    <a-select-option value="hangzhou" key="4"
                                        >hangzhou</a-select-option
                                    >
                                </a-select>
                            </div>
                        </div>
                    </a-col>

                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="8"
                        :xxl="7"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                RT Window&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input-number
                                    style="max-width:200px;height:30px;"
                                    size="default"
                                    :step="0.1"
                                    :min="0"
                                    :max="100"
                                    :defaultValue="0.4"
                                />
                            </div>
                        </div>
                    </a-col>

                    <!-- 这里是右边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :lg="10"
                        :xl="12"
                        style="font-weight:600;text-align:center;"
                    >
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                M/z Window&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input-number
                                    style="max-width:200px;height:30px;margin-right:15px;"
                                    size="default"
                                    :min="0"
                                    :max="1000"
                                    :defaultValue="13"
                                />
                                <a-checkbox>PPM</a-checkbox>
                            </div>
                        </div>
                    </a-col>

                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col :xs="24" style="font-weight:600;text-align:center;">
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Create Date&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input-group compact>
                                    <a-date-picker
                                        style="max-width:240px;height:30px;"
                                    />
                                </a-input-group>
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col :xs="24" style="font-weight:600;text-align:center;">
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Algorithm Relative Filter Criterias&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input
                                    :defaultValue="'fegfgfg'"
                                    style="max-width:200px;height:30px;margin-top:30px;"
                                />
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col :xs="24" style="font-weight:600;text-align:center;">
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Notes&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-textarea
                                    :autosize="{ minRows: 4, maxRows: 15 }"
                                    placeholder="notes  ......"
                                    style="min-width:300px;margin-top:5px;"
                                />
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col :xs="24" style="font-weight:600;text-align:center;">
                        <div
                            style="line-height:30px;height:40px;padding:5px 0px;"
                        >
                            <div
                                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Feature Scores&nbsp;:
                            </div>
                            <div
                                style="float:left;text-align:left;word-wrap: break-word;word-break: break-all;max-width:300px;padding:0px 0px 0px 10px;"
                            >
                                <a-checkbox style="margin-left:8px;"
                                    >scores1</a-checkbox
                                >
                                <a-checkbox>scores2</a-checkbox>
                                <a-checkbox>scores3</a-checkbox>
                                <a-checkbox>scores4</a-checkbox>
                                <a-checkbox>scores5</a-checkbox>
                                <a-checkbox>scores6</a-checkbox>
                                <a-checkbox>scores7</a-checkbox>
                                <a-checkbox>scores8</a-checkbox>
                                <a-checkbox>scores9</a-checkbox>
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col :xs="24" style="font-weight:600;text-align:center;">
                        <div style="line-height:30px;padding:5px 0px;">
                            <div
                                style="font-weight:600;text-align:right;padding-right:10px;
                                   width:170px;"
                            >
                                Experiment List(22)&nbsp;:
                            </div>
                            <div
                                style="margin-top:5px;padding:0px 0px 0px 15px;text-align:left;margin-bottom:30px;"
                            >
                                <a-tag color="#8069f2">
                                    F20190530liangx_SILAC_K562_DIA LHtitra0_1(5
                                    d17a2821fb7212da565015f)
                                </a-tag>
                                <a-tag color="#8069f2">
                                    F20190530liangx_SILAC_K562_DIA LHtitra0_1(5
                                    d17a2821fb7212da565015f)
                                </a-tag>
                                <a-tag color="#8069f2">
                                    F20190530liangx_SILAC_K562_DIA LHtitra0_1(5
                                    d17a2821fb7212da565015f)
                                </a-tag>
                                <a-tag color="#8069f2">
                                    F20190530liangx_SILAC_K562_DIA LHtitra0_1(5
                                    d17a2821fb7212da565015f)
                                </a-tag>
                                <a-tag color="#8069f2">
                                    F20190530liangx_SILAC_K562_DIA LHtitra0_1(5
                                    d17a2821fb7212da565015f)
                                </a-tag>
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <a-col :sm="23" style="">
                        <div
                            style="text-align:center;max-width:400px;padding-bottom:30px;"
                        >
                            <a-button>Start Analyze</a-button>
                        </div>
                    </a-col>

                    <!-- a-modal -->
                    <a-modal
                        v-model="visible"
                        title="Edit Project Detail"
                        onOk="handleOk"
                        width="500px"
                    >
                        <template slot="footer">
                            <a-button key="back" @click="handleCancel"
                                >Cancel</a-button
                            >
                            <a-button
                                key="submit"
                                type="primary"
                                :loading="loading"
                                @click="handleOk"
                                >Save</a-button
                            >
                        </template>
                        <div>
                            <div
                                style="line-height:30px;height:40px;padding:5px 0px;"
                            >
                                <div
                                    style="font-size:16px;font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                                >
                                    Project Name&nbsp;:
                                </div>
                                <div style="float:left;">
                                    <a-input
                                        style="max-width:200px;height:30px;"
                                    />
                                </div>
                            </div>

                            <div
                                style="line-height:30px;min-height:40px;padding:5px 0px;"
                            >
                                <div
                                    style="font-size:16px;font-weight:600;margin-bottom:5px;"
                                >
                                    Description:
                                </div>
                                <div>
                                    <a-textarea
                                        placeholder="project descriptions"
                                        :rows="4"
                                    />
                                </div>
                            </div>
                        </div>
                    </a-modal>
                    <!-- a-modal -->
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";

// 导航条下面的导航条
.nav2 {
    background: @common_black3_color;
    color: #ffffff;
}

@media (max-width: 576px) {
    .my-table {
        margin: 10px;
    }
}

.experiment-list {
    color: @common_second_color;
    font-weight: 500;
    font-size: 14px;
    padding: 5px;
    text-align: left;
    float: left;
    max-width: 400px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
}
.editable-cell {
    position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
    padding-right: 24px;
}

.editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
}

.editable-cell-icon {
    line-height: 18px;
    display: none;
}

.editable-cell-icon-check {
    line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
    display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
    color: #108ee9;
}

.editable-add-btn {
    margin-bottom: 8px;
}
</style>
