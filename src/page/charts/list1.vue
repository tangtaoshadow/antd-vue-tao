<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement: ANTV
 * @Date: 2019-11-22 20:00:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-11 12:24:39
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";

export default {
  name: "AntvList1",
  data() {
    return {};
  },
  methods: {
    //
    drawChart() {
      //
      console.log("drawChart list1");
      const data = [
        { Date: "22 February", 订阅数: 50000, 月收入: 125000 },
        { Date: "28 February", 订阅数: 60000, 月收入: 150000 },
        { Date: "3 March", 订阅数: 100000, 月收入: 250000 },
        { Date: "20 March", 订阅数: 200000, 月收入: 500000 },
        { Date: "7 April", 订阅数: 250000, 月收入: 625000 },
        { Date: "13 June", 订阅数: 210000, 月收入: 525000 }
      ];
      const chart = new G2.Chart({
        container: "list1",
        forceFit: true,
        height: 500,
        padding: "auto"
      });
      chart.source(data);

      const ds = new DataSet();
      // return -1;

      const dv = ds
        .createView()
        .source(data)
        .transform({
          type: "fold",
          fields: ["订阅数", "月收入"],
          key: "type",
          value: "value",
          retains: ["Date"]
        });
      const dv2 = ds
        .createView()
        .source(data)
        .transform({
          type: "map",
          callback(row) {
            row.range = [row["订阅数"], row["月收入"]];
            return row;
          }
        });
      chart.scale("Date", {
        range: [0, 1],
        tickCount: 10,
        type: "timeCat"
      });
      chart.axis("Date", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        }
      });
      chart.axis("value", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          },
          formatter: text => {
            return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
          }
        }
      });
      chart.tooltip({
        crosshairs: "y"
      });

      // view1
      const view1 = chart.view();
      view1.source(dv2);
      view1.axis(false);
      view1
        .area()
        .position("Date*range")
        .color("#8d8d8d")
        .opacity(0.1)
        .tooltip(false);
      // view1
      const view2 = chart.view();
      view2.source(dv);
      view2
        .line()
        .position("Date*value")
        .color("type")
        .opacity(1);
      view2
        .point()
        .position("Date*value")
        .color("type")
        .opacity(1)
        .shape("circle");

      chart.render();
      console.log("end ");
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
          <div id="list1"></div>
        </a-col>
      </a-row>
    </div>
    <!-- 强行刷新 -->
    <!-- {{this.drawChart()}} -->
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
