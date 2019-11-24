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
 * @Last Modified time: 2019-11-24 00:13:10
 */
export default {
  name: "project",
  data() {
    return {
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          age: "32",
          address: "London, Park Lane no. 0"
        },
        {
          key: "1",
          name: "Edward King 1",
          age: "323",
          address: "London, Park Lane no. 1"
        },
        {
          key: "2",
          name: "柔柔弱弱 King 1",
          age: "322",
          address: "London, Park Lane no. 1"
        }
      ],
      count: 2,
      columns: [
        {
          title: "Batch Name",
          dataIndex: "name",
          width: "30%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "Experiments",
          dataIndex: "age",
          // 自定义渲染 支持jsx 语法
          customRender: (text, record, index) => {
            console.log("111111", text, record, index);
            return <h2> + 111 + text + </h2>;
          }
        },
        {
          title: <h1>Platform</h1>,
          dataIndex: "address",
          scopedSlots: { customRender: "address" }
        },
        {
          title: "Acquisition Method",
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
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
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
    <a-table
      bordered
      :size="'middle'"
      :dataSource="dataSource"
      :customHeaderRow="customHeaderRow"
      :columns="columns"
    >
      <template slot="name" slot-scope="text, record">
        <edit-table-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>

      <template slot="address" slot-scope="text">
        <div v-html="text"></div>
      </template>

      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";

// 导航条下面的导航条
.nav2 {
  background: @common_black3_color;
  color: #ffffff;
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
