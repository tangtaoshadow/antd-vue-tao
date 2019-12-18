<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement: 🔳镜像图 双坐标系
 * @Date: 2019-11-22 20:00:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-18 18:25:18
 */
import { Line } from "@antv/g2plot";
import myData from "./json/list6";
export default {
  name: "AntvList3",
  data() {
    return {};
  },
  methods: {
    //
    drawChart() {
      //
      console.log("drawChart chart-container");
      console.log("原始数据", myData);

      let data = myData;
      // myData;
      //
      const linePlot = new Line(document.getElementById("chart-container"), {
        title: {
          visible: true,
          text: "单折线图的基础用法"
        },
        description: {
          visible: true,
          text: "最基础简单的折线图使用方式，显示一个指标的趋势"
        },
        forceFit: true,
        data,
        padding: "auto",
        xField: "Date",
        yField: "scales",
        xAxis: {
          type: "dateTime",
          tickCount: 5
        }
      });

      linePlot.render();
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawChart();
    }, 200);
  },
  beforeUpdate() {
    setTimeout(() => {
      this.drawChart();
    }, 200);
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Libraries
        <div v-pointer style="display:inline;font-size:26px;font-weight:700;padding-left:20px;">+</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style>
        <a-col :sm="22" style="background:#FFF;padding:30px;">
          <div id="chart-container"></div>
          <div id="slider"></div>
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
</style>


