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
 * @Last Modified time: 2019-11-27 17:34:36
 */

import { Modal } from "ant-design-vue";
let Antd = { Modal };

const data2 = [
    {
        key: "row1",
        experimentName: "experimentName 1",
        type: "wwwweee",
        platform: "OPEDHGE",
        groupingInfo:
            "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
    },
    {
        key: "row2",
        experimentName: "experimentName 2",
        type: "Hedgegted",
        platform: "GTET353",
        groupingInfo:
            "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
    },
    {
        key: "row3",
        experimentName: "experimentName 3",
        type: "DyyGRwrr3",
        platform: "EDETRRRR",
        groupingInfo:
            "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
    }
];

const data = [
    {
        key: 1,
        batchName: "batchName 1",
        acquisitionMethod: "wwwweee",
        platform: "OPEDHGE",
        expandedRowTable: data2
    },
    {
        key: 2,
        batchName: "batchName 2",
        acquisitionMethod: "Hedgegted",
        platform: "GTET353",
        expandedRowTable: data2
    },
    {
        key: 3,
        batchName: "batchName 3",
        acquisitionMethod: "DyyGRwrr3",
        platform: "EDETRRRR",
        expandedRowTable: data2
    }
];

export default {
    name: "batchAnalyse",
    data() {
        return {
            columns: [
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Batch Name
                        </span>
                    ),
                    dataIndex: "batchName",
                    key: "name"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Acquisition Method
                        </span>
                    ),
                    dataIndex: "acquisitionMethod",
                    key: "acquisitionMethod"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Platform
                        </span>
                    ),
                    dataIndex: "platform",
                    key: "platform"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Action
                        </span>
                    ),
                    dataIndex: "",
                    key: "x",
                    scopedSlots: { customRender: "action" }
                }
            ],
            columns2: [
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Experiment Name
                        </span>
                    ),
                    dataIndex: "experimentName",
                    key: "experimentName"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Type
                        </span>
                    ),
                    dataIndex: "type",
                    key: "type"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            Platform
                        </span>
                    ),
                    dataIndex: "platform",
                    key: "platform"
                },
                {
                    title: (
                        <span style="font-size:15px;font-weight:600;">
                            GroupingInfo
                        </span>
                    ),
                    dataIndex: "groupingInfo",
                    key: "groupingInfo"
                }
            ],
            rowSelection: {
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(
                        `selectedRowKeys: ${selectedRowKeys}`,
                        "selectedRows: ",
                        selectedRows
                    );
                },
                onSelect: (record, selected, selectedRows) => {
                    console.log(record, selected, selectedRows);
                },
                onSelectAll: (selected, selectedRows, changeRows) => {
                    console.log(selected, selectedRows, changeRows);
                }
            },
            data,
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
                Batch Analyse
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
                    <a-tabs style="padding:10px 0px;">
                        <a-tab-pane tab="Step 1" key="1">
                            <a-table
                                :columns="columns"
                                :defaultExpandedRowKeys="[1]"
                                :dataSource="data"
                            >
                                <a slot="action" href="javascript:;">Delete</a>
                                <div
                                    slot="expandedRowRender"
                                    slot-scope="record"
                                    style="margin: 0"
                                >
                                    <a-table
                                        :pagination="{ hideOnSinglePage: true }"
                                        :columns="columns2"
                                        :size="'small'"
                                        :dataSource="record.expandedRowTable"
                                    >
                                    </a-table>
                                </div> </a-table
                        ></a-tab-pane>
                        <a-tab-pane tab="Step 2" key="2"
                            >Content of Step 2</a-tab-pane
                        >
                        <a-tab-pane tab="Step 3" key="3"
                            >Content of Step 3</a-tab-pane
                        >
                    </a-tabs>

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
