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
 * @Last Modified time: 2019-12-15 18:49:30
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import myData from "./json/list3";
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
      console.log("drawChart chart-container");
      myData;
      //
      console.log("原始数据", myData);
      let {
        expName,
        expRi,
        shape,
        color,
        size,
        id
      } = myData.inputData.scatters;
      expName = expName.reverse();
      expRi = expRi.reverse();
      shape = shape.reverse();
      color = color.reverse();
      size = size.reverse();
      id = id.reverse();

      console.log(expName, expRi, shape, color, size, id);
      //   遍历
      let arr = new Array();
      for (let i = 0, len = expName.length; i < len; i++) {
        let obj = {};
        obj.index = i + 1;
        obj.expName = expName[i];
        obj.expRi = expRi[i];
        obj.shape = shape[i];
        obj.color = color[i];
        obj.size = size[i];
        obj.id = id[i];

        arr.push(obj);
      }
      console.log(arr);
      const data = arr;
      const chart = new G2.Chart({
        container: "chart-container",
        padding: [20, 20, 20, 90],
        forceFit: true,
        height: 500,
        plotBackground: {
          stroke: "#ccc", // 边颜色
          lineWidth: 1 // 边框粗细
        } // 绘图区域背景设置
      });

      const ds = new DataSet();

      const dv = ds.createView().source(data);
      chart.source(dv);

      chart.axis("expRi", {
        type: "line",
        grid: {
          lineStyle: {
            stroke: "#d9d9d9",
            lineWidth: 1,
            lineDash: [2, 0]
          }
        }
      });

      chart.tooltip(true, {
        showTitle: true,
        inPlot: false
      });
      chart.scale({
        expRi: {
          alias: "expRi",
          min: 30,
          max: 80,
          sync: true
        }
      });

      // 对笛卡尔坐标轴进行转置
      chart.coord().transpose();

      let point = chart.point();

      point
        .size("size", v => {
          return v;
        })
        .color("color", v => {
          return v;
        });
      point
        .position("expName*expRi")
        .tooltip("expRi")
        .style({
          textAlign: "left"
        });
      point.shape("shape", v => {
        return v;
      });
      chart.tooltip({
        crosshairs: {
          type: "cross"
        }
      });

      chart.legend(false);

      const view1 = chart.view();
      const view2 = chart.view();
      const view3 = chart.view();
      const view4 = chart.view();
      let data2 = [{ start: 0, expRi: 35 }, { start: 40, expRi: 35 }];
      let data3 = [{ start: 0, expRi: 40 }, { start: 40, expRi: 40 }];
      let data4 = [{ start: 0, expRi: 45 }, { start: 40, expRi: 45 }];
      let data5 = [
        { start: 0, expRi: [35, 45] },
        { start: 40, expRi: [35, 45] }
      ];
      view1
        .source(data2)
        .tooltip(false)
        .axis(false)
        .line()
        .position("start*expRi")
        .style({
          lineWidth: 1
        })
        .color("#6c757d");
      view2
        .source(data3)
        .tooltip(false)
        .axis(false)
        .line()
        .position("start*expRi")
        .style({
          lineWidth: 1
        })
        .color("#218838");
      view3
        .source(data4)
        .tooltip(false)
        .axis(false)
        .line()
        .position("start*expRi")
        .style({
          lineWidth: 1
        })
        .color("#6c757d");

      view4
        .source(data5)
        .tooltip(false)
        .axis(false)
        .area()
        .position("start*expRi")
        .color("#fff")
        .style({ fill: "#eeeeee" })
        .shape("line");
      data5, view4;

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



