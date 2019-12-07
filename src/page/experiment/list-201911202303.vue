<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement: experimentList 数据列表
 * @Date: 2019-11-30 17:36:17
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-11-30 23:01:25
 */
export default {
  name: "experimentList",
  data() {
    return {
      dataSource: [
        {
          key: "0",
          expermentName: "expermentName 1",
          mode: "Positive",
          platforn: "EAR QXA01",
          type: "POSLAT",
          batch: "32",
          inject: "22",
          classLabel: "Control / Experiment / *"
        },
        {
          key: "1",
          expermentName: "DDA-lib-example-egsc",
          mode: "Positive",
          platforn: "安绍维",
          type: "Standard",
          batch: "22",
          inject: "22",
          classLabel: "Control / Experiment / *"
        },
        {
          key: "2",
          expermentName: "QXA01DNNEG20190627_DIAN1019VWHUMAN_HUMAN_PLASMA2_01",
          mode: "Negative",
          platforn: "瑞敏哥",
          type: "GTOSLAT",
          batch: "12",
          inject: "23",
          classLabel: "Healthy / Step 1, 2, 3, 4"
        }
      ],
      count: 4,
      columns: [
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Experment Name</span>
          ),
          dataIndex: "expermentName",
          // width: "30%",
          scopedSlots: { customRender: "experimentName" }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Mode</span>,
          dataIndex: "mode",
          // 自定义渲染 支持jsx 语法
          // customRender: (text, record, index) => {
          //   console.log(text, record, index);
          //   return text;
          // }
          customRender: text => {
            return <span class="font_second_color">{text}</span>;
          },
          filters: [
            { text: "Positive", value: "Positive" },
            { text: "Negative", value: "Negative" }
          ],
          onFilter: (value, record) => record.mode.indexOf(value) === 0
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Platforn</span>,
          dataIndex: "platforn",
          scopedSlots: { customRender: "platforn" },
          filters: [
            { text: "瑞敏哥", value: "瑞敏哥" },
            { text: "安绍维", value: "安绍维" }
          ],
          onFilter: (value, record) => record.platforn.indexOf(value) === 0
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Batch</span>,
          dataIndex: "batch",
          filters: [{ text: "22", value: "22" }, { text: "32", value: "32" }],
          onFilter: (value, record) => record.batch.indexOf(value) === 0
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Inject Vol.(μL)</span>
          ),
          dataIndex: "inject"
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Type</span>,
          dataIndex: "type",
          filters: [
            { text: "POSLAT", value: "POSLAT" },
            { text: "GTOSLAT", value: "GTOSLAT" }
          ],
          onFilter: (value, record) => record.type.indexOf(value) === 0
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">ClassLabel</span>
          ),
          dataIndex: "classLabel",
          customRender: text => {
            return <span class="font_primary_color">{text}</span>;
          }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Operation</span>,
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      loading: false,
      visible: false,
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
        expermentName: `王瑞敏  ${count}`,
        mode: 312,
        platforn: `牛逼 ,  ${count}`,
        type: "HDU",
        batch: "322",
        inject: "22",
        classLabel: "boss/游戏/学习/跳绳/1,2,3,4"
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
        Experiments
        <div style="display:inline;font-size:26px;font-weight:700;padding:0px 10px;"></div>Projects152424332
        <div
          v-pointer
          style="display:inline;font-size:26px;font-weight:700;padding:0px 20px;"
          @click="showModal"
        >+</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style>
        <a-col :sm="23" class="my-table" style="background:#FFF;padding:10px;">
          <div style="text-align:left;">
            <a-button class="table-operation-btn" type="default">Clear Sorts</a-button>
            <a-button class="table-operation-btn" type="default">Clear Filters</a-button>
            <a-button class="table-operation-btn" type="default">Edit</a-button>
            <a-button class="table-operation-btn" type="default">Save</a-button>
          </div>
          <a-table
            :bordered="false"
            :size="'middle'"
            :rowSelection="rowSelection"
            :dataSource="dataSource"
            :columns="columns"
          >
            <template slot="name" v-pointer slot-scope="text">
              <router-link :to="'/library/detail/' + text">
                <span v-html="text"></span>
                <!-- <edit-table-cell
                                    :text="text"
                                    @change="
                                        onCellChange(record.key, 'name', $event)
                                    "
                />-->
              </router-link>
            </template>

            <template slot="platforn" slot-scope="text">
              <div v-html="text"></div>
            </template>

            <template slot="experimentName" v-pointer slot-scope="text">
              <router-link :to="'/library/detail/' + text">
                <div
                  v-html="text"
                  style="max-width:350px;word-wrap:break-word;word-break:break-all;"
                ></div>
              </router-link>
            </template>

            <template slot="operation" slot-scope="text, record">
              <router-link to="/">
                <a-button class="table-btns btn-hover-green">Detail</a-button>
              </router-link>&nbsp;
              <router-link to="/">
                <a-button class="table-btns btn-hover-green">RI Calibration</a-button>
              </router-link>&nbsp;
              <router-link to="/">
                <a-button class="table-btns btn-hover-green">Peak Manual Check</a-button>
              </router-link>&nbsp;
              <a-popconfirm
                v-if="dataSource.length"
                title="Sure to delete?"
                @confirm="() => onDelete(record.key)"
              >
                <a-button class="table-btns table-btns-danger btn-hover-red">Delete</a-button>
              </a-popconfirm>&nbsp;
            </template>
          </a-table>
          <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>

          <a-modal v-model="visible" title="Add New Experiment" onOk="handleOk" width="500px">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">Cancel</a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Add</a-button>
            </template>
            <div>
              <div style="line-height:30px;height:40px;padding:5px 0px;">
                <div
                  style="font-size:16px;font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                >Experiment Name&nbsp;:</div>
                <div style="float:left;">
                  <a-input value="测试代码" style="max-width:200px;height:30px;" />
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
                  <a-textarea placeholder="正在测试..." :rows="4" />
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

.table-btns-danger {
  color: @common_red_color;
  border-color: @common_red_color;
}

.table-btns {
  height: 30px !important;
  line-height: 24px;
  padding: 3px 5px;
  margin: 2px 2px;
}

.btn-hover-green:hover {
  color: @common_green_color;
  border-color: @common_green_color;
  cursor: pointer;
}

.btn-hover-red:hover {
  color: #ffffff;
  background: @common_red_color;
  cursor: pointer;
}
// 表格操作按钮
.table-operation-btn {
  padding: 2px 5px;
  margin: 5px 5px;
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
