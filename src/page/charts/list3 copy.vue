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
 * @Last Modified time: 2019-12-13 15:44:02
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import dataSource from "./json/data1";
G2.Global.renderer = "canvas";
export default {
  name: "AntvList3",
  data() {
    return {};
  },
  methods: {
    //
    drawChart() {
      //
      console.log("drawChart list3");

      let data = dataSource;
      // 定义数据
      console.log(data);
      const ds = new DataSet();
      const dv1 = ds.createView().source(data);
      console.log(dv1);
      // 数据格式化
      dv1.transform({
        type: "map",
        callback: function callback(row) {
          //console.log(row)
          if (typeof row.Deaths === "string") {
            // 解决 9,111 应该是 9111
            row.Deaths = row.Deaths.replace(",", "");
          }
          row.Deaths = parseInt(row.Deaths);
          row.death = row.Deaths;
          row.year = row.Year;
          return row;
        }
      });
      const dv2 = ds.createView().source(dv1.rows);
      console.log("计算回归前", dv2.rows);
      dv2.transform({
        //  调用的方法叫回归
        type: "regression",
        // 使用的方法是多项式拟合曲线
        method: "polynomial",
        fields: ["year", "death"],
        bandwidth: 0.01,
        as: ["year", "death"]
      });
      console.log("计算回归后", dv2.rows);

      const chart = new G2.Chart({
        container: "chart-container",
        forceFit: true,
        height: 500,
        padding: [20, 20, 50, 50]
      });

      // 十字准线
      chart.tooltip({
        crosshairs: true
      });
      const view1 = chart.view();
      //   加载原始数据
      view1.source(dv1);
      //   view1.axis("Year", {
      //     subTickCount: 3,
      //     subTickLine: {
      //       length: 3,
      //       stroke: "#bfbfbf",
      //       lineWidth: 1
      //     },
      //     tickLine: {
      //       length: 6,
      //       lineWidth: 1,
      //       stroke: "#bfbfbf"
      //     },
      //     label: {
      //       textStyle: {
      //         fill: "#aaaaaa"
      //       }
      //     }
      //   });
      //   view1.axis("Deaths", {
      //     label: {
      //       textStyle: {
      //         fill: "#aaaaaa"
      //       },
      //       formatter: text => {
      //         return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      //       }
      //     }
      //   });
      view1.line().position("Year*Deaths");
      const view2 = chart.view();
      view2.axis(false);
      view2.source(dv2);
      view2
        .line()
        .position("year*death")
        .style({
          stroke: "#969696",
          lineDash: [1000, 3]
        })
        .tooltip(false);
      // add guide
      view1.guide().text({
        content: "趋势线",
        position: ["1970", 2500],
        style: {
          fill: "#8c8c8c",
          fontSize: 14,
          fontWeight: 300
        },
        offsetY: -70
      });
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
          <div id="chart-container"></div>
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



