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
 * @Statement:  RI Calibration
 * @Date: 2019-12-6 16:18:48
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 16:53:07
 */
import { Modal } from "ant-design-vue";
let Antd = { Modal };
// 导入图表
import tao from "../../utils/common";
import G2Line from "../../components/G2/MyLine";
import G2MyColumn from "../../components/G2/MyColumn";
tao.consolelog("page: ExperimentRICalibration");

export default {
  name: "ExperimentRICalibration",
  data() {
    return {
      serverData: [
        {
          year: 123,
          value: 3
        },
        {
          year: 125,
          value: 4
        },
        {
          year: 127,
          value: 3.5
        },
        {
          year: 133,
          value: 5
        },
        {
          year: 140,
          value: 4.9
        },
        {
          year: 160,
          value: 6
        },
        {
          year: 162,
          value: 7
        },
        {
          year: 170,
          value: 9
        },
        {
          year: 177,
          value: 13
        }
      ]
    };
  },
  components: {
    G2Line,
    G2MyColumn
  },

  methods: {
    // 删除警告
    warning() {
      Antd.Modal.warning({
        title: (
          <span style="font-size:18px;font-weight:600;">Delete warning</span>
        ),
        content: (
          <span>
            You are deleting a Experiment!
            <br />
            Any data in this experiment will be permanently removed.
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
        RI Calibration
        <div
          v-pointer
          style="display:inline;font-size:22px;font-weight:500;padding-left:20px;"
        >Projectg3333sgsggs</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style="font-weight:600;text-align:center;">
        <a-col
          :sm="23"
          style="background:#FFF;padding:10px 10px 15px;line-height:30px;font-size:14px;font-weight:500;"
        >
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

          <a-col :xs="24">
            <g2-line :charData="serverData" :id="'c1'"></g2-line>
          </a-col>
          <a-col :xs="24">
            <g2-my-column :charData="serverData" :id="'c2'"></g2-my-column>
          </a-col>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";
@import "../../layouts/AntdVue";

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
