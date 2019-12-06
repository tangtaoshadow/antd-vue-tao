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
 * @Date: 2019-11-22 20:00:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-24 18:59:13
 */
export default {
    name: "project",
    data() {
        return {};
    },
    methods: {}
};
</script>

<template>
    <div>
        <a-row type="flex" class="nav2" justify="center" style>
            <a-col
                :xs="23"
                style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;"
            >
                Batches Detail
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
                                Batch Name&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input style="max-width:200px;height:30px;" />
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
                                Batch ID&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input
                                    :disabled="true"
                                    :defaultValue="'235535435434455555'"
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

                    <!-- new Line -->
                    <!-- new Line -->

                    <!-- 这里是左边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :md="24"
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
                                Acquisition Method&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input style="max-width:200px;height:30px;" />
                            </div>
                        </div>
                    </a-col>

                    <!-- 这里是右边 布局样式不一样 不能搞混 -->
                    <a-col
                        :xs="24"
                        :md="24"
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
                                Platform&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-input style="max-width:200px;height:30px;" />
                            </div>
                        </div>
                    </a-col>

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
                                Description&nbsp;:
                            </div>
                            <div style="float:left;">
                                <a-textarea
                                    :autosize="{ minRows: 4, maxRows: 30 }"
                                    placeholder="Basic usage"
                                    style="min-width:300px;"
                                />
                            </div>
                        </div>
                    </a-col>
                    <!-- new Line end -->

                    <a-col :sm="23">
                        <div
                            style="text-align:center;padding-top:60px;max-width:400px;"
                        >
                            <a-button>Modify</a-button>
                            <a-button type="danger" style="margin-left:20px;"
                                >Delete</a-button
                            >
                        </div>
                    </a-col>
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
