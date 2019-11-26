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
 * @Last Modified time: 2019-11-26 22:38:30
 */
import { Modal } from "ant-design-vue";
let Antd = { Modal };
let data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "Deutsch No. 3 Lake Park"
  },
  {
    key: "5",
    name: "Jim Red",
    age: 32,
    address: "Gfsfr No. 6 Lake Park"
  },
  {
    key: "6",
    name: "Jim R2ed",
    age: 11,
    address: "London No. 12 Lake Park"
  },
  {
    key: "7",
    name: "Jim Red11",
    age: 42,
    address: "dgdggdo. 2 Lake1 Park"
  }
];
export default {
  name: "libraryDetail",

  data() {
    return {
      data,
      // 模态框
      visible: false,
      searchText: "",
      searchInput: null,
      columns: [
        {
          title: <span style="font-size:14px;font-weight:600;">Name</span>,
          dataIndex: "name",
          key: "name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: <span style="font-size:14px;font-weight:600;">Age</span>,

          dataIndex: "age",
          key: "age",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.age
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: <span style="font-size:14px;font-weight:600;">Address</span>,

          dataIndex: "address",
          key: "address",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.address
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        }
      ]
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },

    // 删除警告
    warning() {
      Antd.Modal.warning({
        title: (
          <span style="font-size:18px;font-weight:600;">Delete warning</span>
        ),
        content: (
          <span>
            You are deleting a LIBRARY!
            <br />
            Any data in this library will be permanently removed.
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
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Library Detail
        <div
          v-pointer
          style="display:inline;font-size:22px;font-weight:500;padding-left:20px;"
        >Librarygftetete</div>
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
          <a-col :xs="24" :lg="10" :xl="8" :xxl="7" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Library Name&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Library ID&nbsp;:</div>
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
          <a-col :xs="24" :lg="10" :xl="8" :xxl="7" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Project Name&nbsp;:</div>
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
          <a-col :xs="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Project ID&nbsp;:</div>
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
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Create Date&nbsp;:</div>
              <div style="float:left;">
                <a-input-group compact>
                  <a-date-picker style="max-width:240px;height:30px;" />
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
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Acquisition Method&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :md="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Platform&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Description&nbsp;:</div>
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

          <!-- new Line -->
          <!-- new Line -->
          <a-col
            :xs="23"
            :md="19"
            :lg="16"
            style="font-weight:600;text-align:left;max-width:700px;padding:40px 0px 20px 20px;"
          >
            <a-tabs defaultActiveKey="1" size="large">
              <a-tab-pane tab="Tab 1" key="1" style="font-size:23px;">
                <a-table :dataSource="data" :columns="columns">
                  <div
                    slot="filterDropdown"
                    slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                    style="padding: 8px"
                  >
                    <a-input
                      v-ant-ref="c => searchInput = c"
                      :placeholder="`Search ${column.dataIndex}`"
                      :value="selectedKeys[0]"
                      @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                      @pressEnter="() => handleSearch(selectedKeys, confirm)"
                      style="width: 188px; margin-bottom: 8px; display: block;"
                    />
                    <a-button
                      type="primary"
                      @click="() => handleSearch(selectedKeys, confirm)"
                      icon="search"
                      size="small"
                      style="width: 90px; margin-right: 8px"
                    >Search</a-button>
                    <a-button
                      @click="() => handleReset(clearFilters)"
                      size="small"
                      style="width: 90px"
                    >Reset</a-button>
                  </div>
                  <a-icon
                    slot="filterIcon"
                    slot-scope="filtered"
                    type="search"
                    :style="{ color: filtered ? '#108ee9' : undefined }"
                  />
                  <template slot="customRender" slot-scope="text">
                    <span v-if="searchText">
                      <template
                        v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                      >
                        <mark
                          v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                          :key="i"
                          class="highlight"
                        >{{fragment}}</mark>
                        <template v-else>{{fragment}}</template>
                      </template>
                    </span>
                    <template v-else>
                      <span style="font-weight:500;" v-pointer>{{text}}</span>
                    </template>
                  </template>
                </a-table>
              </a-tab-pane>
              <a-tab-pane tab="Tab 2" key="2" forceRender style="font-size:23px;">This is Tab2...</a-tab-pane>
            </a-tabs>
          </a-col>
          <!-- new Line end -->

          <a-col :sm="23">
            <div style="text-align:center;padding-top:60px;max-width:400px;padding-bottom:30px;">
              <a-button style="margin-left:20px;">Save</a-button>
              <a-button type="danger" style="margin-left:20px;" @click="warning">Delete</a-button>
            </div>
          </a-col>

          <a-modal v-model="visible" @ok="handleOk">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
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

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
