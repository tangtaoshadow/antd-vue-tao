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
 * @Last Modified time: 2019-12-08 00:22:21
 */

import { mapActions, mapState } from "vuex";
import { Notification, Message } from "ant-design-vue";
import TAO from "../../utils/common";
let Antd = { Notification, Message };
TAO.consolelog("page : project list");
export default {
  name: "projectList",
  data() {
    return {
      projectListTable: [],
      projectListTableColumns: [
        // id: "5dea36fd6382be5b4b3111ac"
        // name: "SWATH_K562"
        // description: null
        // batches: Array(3)
        // createDate: "2019-12-06T11:09:49.544+0000"
        // lastModifiedDate: "2019-12-06T11:10:12.065+0000"
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Project Name</span>
          ),
          dataIndex: "name",
          // width: "30%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Batches</span>,
          dataIndex: "batches",
          // 自定义渲染 支持jsx 语法
          // customRender: (text, record, index) => {
          //   console.log(text, record, index);
          //   return text;
          // }
          scopedSlots: { customRender: "batch" }

          //   customRender: text => {
          //     return (
          //       <a href="/project/">
          //         <span class="font_green_color">{text}</span>
          //       </a>
          //     );
          //   }
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
            <span style="font-size:15px;font-weight:600;">
              Last Modified Date
            </span>
          ),
          dataIndex: "lastModifiedDate",
          customRender: text => {
            return <span class="font_green_color">{text}</span>;
          }
        },
        {
          title: (
            <span style="font-size:15px;font-weight:600;">Description</span>
          ),
          dataIndex: "description",
          customRender: text => {
            return (
              <div style="max-width:200px;" class="font_gray_color">
                {text}
              </div>
            );
          }
        },
        {
          title: <span style="font-size:15px;font-weight:600;">Operation</span>,
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      newProject: {
        name: null,
        description: null
      },
      taskName: null,
      name: null,
      loading: false,
      visible: false
    };
  },
  methods: {
    ...mapActions({
      executeCreateProject: "projectList/createProject",
      executeGetProjectList: "projectList/getProjectList",
      executeDeleteProject: "projectList/deleteProject"
    }),

    async deleteProjectConfirm(obj) {
      Antd.Message.loading("Delete Project ...", 1.5);
      await this.executeDeleteProject(obj);
      this.handleDeleteproject();
      return 0;
    },
    handleDeleteproject() {
      // 处理删除项目
      let { data = {}, status = -1 } = this.deleteProject;
      if (0 == status) {
        let res = data.success;
        if (true == res) {
          // 删除成功
          Antd.Notification.success({
            message: "System Hint",
            description: "Delete success",
            duration: 1
          });
        }
        // 强制刷新
        this.getProjectList();
        return -1;
      }
    },

    showModalCreateProject() {
      this.visible = true;
    },
    async addProject(e) {
      e;
      // this.$store.commit("setThemeColor", val)
      this.taskName = "executeCreateProject";
      await this.executeCreateProject(this.newProject);
      // 隐藏
      this.visible = false;
      this.loading = false;
      this.handleAddProject();
    },
    handleAddProject() {
      let { status = -1, data = {} } = this.createProject;

      if (0 == status) {
        if (true == data.success) {
          Antd.Notification.success({
            message: "System Hint",
            description: "Add project success",
            duration: 1
          });
          // 清空输入的数据
          this.newProject = {
            name: null,
            description: null
          };
          this.getProjectList();
          return 0;
        }
      } else {
        // 添加失败
      }
      Antd.Notification.error({
        message: "System Hint",
        description: "Add project failed",
        duration: 1
      });
    },
    async getProjectList() {
      // this.$store.commit("setThemeColor", val)
      this.taskName = "executeGetProjectList";
      await this.executeGetProjectList();
      // 调用解析数据
      this.handleGetProjectList();
    },
    handleGetProjectList() {
      let { data = {}, status = -1 } = this.projectList;
      let { data: arr = [] } = data;
      let formatArr = [];
      if (0 == status) {
        // 数据获取正常
        let { length: len0 = -1 } = arr;
        0 < len0 && (formatArr = new Array(len0));
        // id: "5dea36fd6382be5b4b3111ac"
        // name: "SWATH_K562"
        // description: null
        // batches: Array(3)
        // createDate: "2019-12-06T11:09:49.544+0000"
        // lastModifiedDate: "2019-12-06T11:10:12.065+0000"
        for (let i = 0; i < len0; i++) {
          formatArr[i] = { ...arr[i], key: "projectList" + i };
          let { length: len1 } = formatArr[i].batches;
          formatArr[i].batches = len1;
        }
        // 存入数据
        this.projectListTable = formatArr;
      } else {
        // 数据获取失败
        Antd.Notification.error({
          message: "System Hint",
          description: "Failed to get data for project List . "
        });
        return -1;
      }
    },
    handleCancel(e) {
      e;
      this.visible = false;
    }
  },
  computed: {
    ...mapState({
      createProject: state => state.projectList.createProject,
      projectList: state => state.projectList.projectList,
      deleteProject: state => state.projectList.deleteProject
    }),
    updateCreateProject() {
      console.log("updateCreateProject");

      return 1;
    }
  },
  beforeCreate() {
    console.log("before Craete");
  },
  beforeMount() {
    Antd.Notification.config({
      placement: "topRight",
      top: "50px",
      duration: 5
    });
    Antd.Message.config({
      top: "450px",
      duration: 3,
      maxCount: 5
    });
    this.getProjectList();

    console.log("beforeMount");
    // if (this.executeCreateProject) {
    // }
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Projects
        <div
          v-pointer
          style="display:inline;font-size:26px;font-weight:700;padding-left:20px;"
          @click="showModalCreateProject"
        >+</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style>
        <a-col :sm="23" class="my-table" style="background:#FFF;padding:10px;">
          <a-table
            :bordered="false"
            :size="'middle'"
            :dataSource="projectListTable"
            :columns="projectListTableColumns"
          >
            <template slot="name" v-pointer slot-scope="text">
              <router-link :to="'/project/detail/' + text">
                <span v-html="text"></span>
                <!-- <edit-table-cell
                                    :text="text"
                                    @change="
                                        onCellChange(record.key, 'name', $event)
                                    "
                />-->
              </router-link>
            </template>

            <template slot="batch" v-pointer slot-scope="text">
              <router-link :to="'/batch/list/' + text">
                <span class="font_green_color" v-html="text"></span>
              </router-link>
            </template>

            <template slot="platform" slot-scope="text">
              <div v-html="text"></div>
            </template>

            <template slot="operation" slot-scope="text, record">
              <a-popconfirm
                v-if="projectListTable.length"
                title="Sure to delete?"
                @confirm="() => deleteProjectConfirm(record)"
              >
                <span v-pointer class="font_red_color" href="javascript:;">Delete</span>
              </a-popconfirm>&nbsp;
              <router-link to="/">Upload</router-link>&nbsp;
              <router-link to="/project/analyse/237e3434734">Analyse</router-link>&nbsp;
              <router-link to="/">QC</router-link>
            </template>
          </a-table>

          <a-modal v-model="visible" title="Create New Project" width="500px">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">Cancel</a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="addProject">Add</a-button>
            </template>
            <div>
              <div style="line-height:30px;height:40px;padding:5px 0px;">
                <div
                  style="font-size:16px;font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:165px;"
                >Project Name&nbsp;:</div>
                <div style="float:left;">
                  <a-input v-model="newProject.name" style="max-width:200px;height:30px;" />
                </div>
              </div>

              <div style="line-height:30px;min-height:40px;padding:5px 0px;">
                <div style="font-size:16px;font-weight:600;margin-bottom:5px;">Description:</div>
                <div>
                  <a-textarea
                    v-model="newProject.description"
                    placeholder="Tangtao 2019"
                    :rows="5"
                  />
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
