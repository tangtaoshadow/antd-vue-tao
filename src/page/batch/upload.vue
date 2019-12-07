
<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement:
 * @Date: 2019-11-27 10:27:02
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-27 12:26:26
 */

const rowSelection = {
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
};
export default {
  name: "batchUpload",
  data() {
    return {
      rowSelection,
      dataSource: [
        {
          key: "0",
          fileName: "fileName 1",
          fileSize: "32MB",
          uploadStatus: "100% (44/44)",
          createDate: "2019-11-24 04:33:26",
          description: "tangtao update at 2019-11-24 04:34:02"
        },
        {
          key: "1",
          fileName: "fileName 2",
          fileSize: "123KB",
          uploadStatus: "90% (60/54)",
          createDate: "2019-11-24 11:12:00",
          description: "tangtao update at 2019-11-24 04:34:55"
        },
        {
          key: "2",
          fileName: "fileName 3",
          fileSize: "1.11G",
          uploadStatus: "44% (100/44)",
          createDate: "2019-11-24 15:44:20",
          description: "tangtao update at 2019-11-24 14:11:23"
        }
      ],
      count: 4,
      columns: [
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Batch Name</span>
          ),
          dataIndex: "fileName",
          // width: "30%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Filesize</span>,
          dataIndex: "fileSize",
          // 自定义渲染 支持jsx 语法
          // customRender: (text, record, index) => {
          //   console.log(text, record, index);
          //   return text;
          // }
          customRender: text => {
            return <span class="font_green_color">{text}</span>;
          }
        },

        {
          title: (
            <span style="font-size:15px;font-weight:600;">Upload Status</span>
          ),
          dataIndex: "uploadStatus",
          customRender: text => {
            return <span class="font_green_color">{text}</span>;
          }
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Create Date</span>
          ),
          dataIndex: "createDate",
          customRender: text => {
            return <span class="font_orange_color">{text}</span>;
          }
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Description</span>
          ),
          dataIndex: "description",
          customRender: text => {
            return <span class="font_gray_color">{text}</span>;
          }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Operation</span>,
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ]
    };
  },
  methods: {
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        fileName: `File Name ${count}`,
        fileSize: "311MB",
        uploadStatus: "60% (70/42)",
        createDate: "2019-11-24 16:11:19",
        description: "tangtao update at 2019-11-24 16:11:23"
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    }
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Upload
        <div
          v-pointer
          style="display:inline;font-size:22px;font-weight:500;padding-left:20px;"
        >Projectgsgsggs-batch272663333</div>
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
          <a-col :xs="23" :lg="24" :xl="16" :xxl="16" style="font-weight:600;text-align:center;">
            <div style="text-align:left;font-size:18px;padding:5px 0px 10px;">File Lists</div>
            <a-table
              :bordered="false"
              :size="'small'"
              :rowSelection="rowSelection"
              :dataSource="dataSource"
              :columns="columns"
            >
              <template slot="name" v-pointer slot-scope="text">
                <router-link :to="'/batch/detail/' + text">
                  <span v-html="text"></span>
                  <!-- <edit-table-cell
                                    :text="text"
                                    @change="
                                        onCellChange(record.key, 'name', $event)
                                    "
                  />-->
                </router-link>
              </template>
              <template slot="table-title" v-pointer slot-scope="text">
                <router-link :to="'/batch/detail/' + text">
                  <span v-html="text"></span>
                  <!-- <edit-table-cell
                                    :text="text"
                                    @change="
                                        onCellChange(record.key, 'name', $event)
                                    "
                  />-->
                </router-link>
              </template>

              <template slot="operation" slot-scope="text, record">
                <a-popconfirm
                  v-if="dataSource.length"
                  title="Sure to delete?"
                  @confirm="() => onDelete(record.key)"
                >
                  <a class="font_red_color" href="javascript:;">Delete</a>
                </a-popconfirm>&nbsp;
                <router-link to="/batch/upload/">Upload</router-link>
              </template>
            </a-table>
            <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
          </a-col>

          <a-col :xs="23" :lg="12" :xl="8" :xxl="6" style="padding:5px 10px;">
            <div style="text-align:left;font-size:18px;padding:5px 0px 10px;">Upload File</div>

            <a-upload-dragger
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload.
                <br />Strictly prohibit from uploading company data or other
                band files
                <br />
              </p>
            </a-upload-dragger>
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
