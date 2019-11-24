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
 * @Last Modified time: 2019-11-24 15:09:01
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
            return <span class="font_green_color">{text}</span>;
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
      }
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
        batchName: `Edward King ${count}`,
        experiments: 32,
        platform: `London, Park Lane no. ${count}`
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    }
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Batches
        <div v-pointer style="display:inline;font-size:26px;font-weight:700;padding-left:20px;">+</div>
      </a-col>
    </a-row>
    <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>

    <div style="max-width:1500px;margin:auto;">
      <a-row type="flex" justify="center" style>
        <a-col :sm="23" class="my-table" style="background:#FFF;padding:10px;">
          <a-table
            :bordered="false"
            :size="'middle'"
            :dataSource="dataSource"
            :customHeaderRow="customHeaderRow"
            :columns="columns"
          >
            <template slot="name" v-pointer slot-scope="text, record">
              <edit-table-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
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
              <router-link to="/">Upload</router-link>&nbsp;
              <router-link to="/">Analyze</router-link>&nbsp;
              <router-link to="/">QC</router-link>
            </template>
          </a-table>
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
