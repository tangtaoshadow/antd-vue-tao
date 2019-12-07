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
 * @Last Modified time: 2019-11-30 17:57:11
 */
export default {
  name: "project",
  data() {
    return {
      dataSource: [
        {
          key: "0",
          batchName: "batchName 1",
          experiments: "32",
          platform: "QXA01DN",
          acquisitionMethod: "POSLAT",
          uploadStatus: "100% (44/44)",
          createDate: "2019-11-24 04:33:26",
          description: "tangtao update at 2019-11-24 04:34:02"
        },
        {
          key: "1",
          batchName: "batchName 2",
          experiments: "444",
          platform: "GSGGSW2",
          acquisitionMethod: "POSLAU",
          uploadStatus: "90% (60/54)",
          createDate: "2019-11-24 11:12:00",
          description: "tangtao update at 2019-11-24 04:34:55"
        },
        {
          key: "2",
          batchName: "batchName 3",
          experiments: "122",
          platform: "DWHEDG33",
          acquisitionMethod: "GTOSLAT",
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
          dataIndex: "batchName",
          // width: "30%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Experiments</span>
          ),
          dataIndex: "experiments",
          // 自定义渲染 支持jsx 语法
          // customRender: (text, record, index) => {
          //   console.log(text, record, index);
          //   return text;
          // }
          customRender: text => {
            return (
              <router-link to="/experiment/list/12622">
                <span class="font_green_color">{text}</span>
              </router-link>
            );
          }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Platform</span>,
          dataIndex: "platform",
          scopedSlots: { customRender: "platform" }
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">
              Acquisition Method
            </span>
          ),
          dataIndex: "acquisitionMethod"
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
      ],
      customHeaderRow: (record, index) => {
        console.log(record, index);
        return <h3>ss</h3>;
      },
      loading: false,
      visible: false
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        batchName: `Edit Me ${count}`,
        experiments: 312,
        platform: `tangtao. ${count}`,
        acquisitionMethod: "HDU",
        uploadStatus: "60% (70/42)",
        createDate: "2019-11-24 16:11:19",
        description: "tangtao update at 2019-11-24 16:11:23"
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
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
    }
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Batches
        <div
          v-pointer
          style="display:inline;font-size:26px;font-weight:700;padding-left:20px;"
          @click="showModal"
        >+</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style>
        <a-col :sm="23" class="my-table" style="background:#FFF;padding:10px;">
          <a-table
            :bordered="false"
            :size="'middle'"
            :dataSource="dataSource"
            :customHeaderRow="customHeaderRow"
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

            <template slot="platform" slot-scope="text">
              <div v-html="text"></div>
            </template>

            <template slot="operation" slot-scope="text, record">
              <a-popconfirm
                v-if="dataSource.length"
                title="Sure to delete?"
                @confirm="() => onDelete(record.key)"
              >
                <a class="font_red_color" href="javascript:;">Delete</a>
              </a-popconfirm>&nbsp;
              <router-link to="/batch/upload/">Upload</router-link>&nbsp;
              <router-link to="/batch/analyse/12763633">Analyze</router-link>&nbsp;
              <router-link to="/">QC</router-link>
            </template>
          </a-table>
          <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>

          <a-modal v-model="visible" title="Add New Batch" onOk="handleOk" width="500px">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">Cancel</a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Add</a-button>
            </template>
            <div>
              <div style="line-height:30px;height:40px;padding:5px 0px;">
                <div
                  style="font-size:16px;font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                >Batch Name&nbsp;:</div>
                <div style="float:left;">
                  <a-input style="max-width:200px;height:30px;" />
                </div>
              </div>
              <div style="line-height:30px;height:40px;padding:5px 0px;">
                <div
                  style="font-size:16px;font-weight:600;
                                    float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                >Platform&nbsp;:</div>
                <div style="float:left;">
                  <a-input style="max-width:200px;height:30px;" />
                </div>
              </div>
              <div style="line-height:30px;height:40px;padding:5px 0px;">
                <div
                  style="font-size:16px;font-weight:600;
                                    float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                >Acquisition Method&nbsp;:</div>
                <div style="float:left;">
                  <a-select defaultValue="tangtao" style="max-width: 200px;height:30px;">
                    <a-select-option value="HDU" key="22">HDU</a-select-option>
                    <a-select-option value="tangtao" key="11">Tangtao</a-select-option>
                    <a-select-option value="disabled" disabled key="23">2019</a-select-option>
                    <a-select-option value="hangzhou" key="4">hangzhou</a-select-option>
                  </a-select>
                </div>
              </div>
              <div style="line-height:30px;min-height:40px;padding:5px 0px;">
                <div style="font-size:16px;font-weight:600;margin-bottom:5px;">Description:</div>
                <div>
                  <a-textarea placeholder="Basic usage" :rows="4" />
                </div>
              </div>
            </div>
          </a-modal>
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
