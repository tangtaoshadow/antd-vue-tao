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
 * @Last Modified time: 2019-12-13 15:43:03
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
G2.Global.renderer = "canvas";
export default {
  name: "AntvList2",
  data() {
    return {};
  },
  methods: {
    //
    drawChart() {
      //
      console.log("drawChart list2");

      // 定义数据
      const data = [
        { year: 1700, exports: 35, imports: 70 },
        { year: 1710, exports: 59, imports: 81 },
        { year: 1720, exports: 76, imports: 96 },
        { year: 1730, exports: 65, imports: 97 },
        { year: 1740, exports: 67, imports: 93 },
        { year: 1750, exports: 79, imports: 90 },
        { year: 1760, exports: 115, imports: 79 },
        { year: 1770, exports: 163, imports: 85 },
        { year: 1780, exports: 185, imports: 93 }
      ];

      let lineData = [{ x: 1730, y: 76 }, { x: 1750, y: 163 }];
      const ds = new DataSet();
      console.log(ds);
      // 得到了数据源
      const dv = ds.createView().source(data);
      console.log(dv);

      dv.transform({
        type: "map",
        callback(row) {
          row.range = [row.exports, row.imports];
          return row;
        }
      });
      dv.transform({
        type: "fold",
        fields: ["exports", "imports"], // 展开字段集
        key: "type", // key字段
        value: "value" // value字段
      });
      const chart = new G2.Chart({
        container: "chart-list2",
        forceFit: true,
        height: 500,
        width: 600
      });
      chart.source(dv, {
        value: { min: 0, max: 200 },
        range: { min: 0, max: 200 }
      });
      // 关闭坐标轴
      chart.axis("range", false);
      chart.legend({ attachLast: false });
      chart.tooltip({
        crosshairs: { type: "line" }
      });
      chart
        .line()
        .position("year*value")
        .color("type", ["#F5222D", "#FAAD14"])
        .size(2.5)
        .shape("smooth");

      chart
        .area()
        .position("year*range")
        .color("#ffffff")
        .shape("smooth")
        .tooltip(false);
      // chart.guide().regionFilter({
      //   top: true,
      //   start: [1700, "min"],
      //   end: [1753, "max"],
      //   color: "#F5222D",
      //   apply: ["area"]
      // });
      chart.guide().regionFilter({
        top: true,
        start: [1753, "min"],
        end: [1780, "max"],
        color: "#FAAD14",
        apply: ["area"]
      });
      // chart.guide().dataMarker({
      //   position: [1753, 87],
      //   content:
      //     "1755 年在印度周边建立诸多殖民\n地与附属国，垄断出口贸易，导致\n出品总额激增。",
      //   lineLength: 50,
      //   style: {
      //     text: { textAlign: "left", fontSize: 13 },
      //     point: { stroke: "#FF4D4F" }
      //   },
      //   direction: "downward"
      // });
      chart.guide().text({
        top: true,
        position: [1730, 80],
        content: "贸易赤字",
        style: {
          fontSize: 12,
          fontWeight: "normal",
          // 字体颜色
          fill: "rgba(0,0,0,0.45)"
        }
      });
      // chart.guide().text({
      //   top: true,
      //   position: [1765, 110],
      //   content: "贸易盈余",
      //   style: {
      //     fontSize: 12,
      //     fontWeight: "normal",
      //     fill: "rgba(0,0,0,0.45)"
      //   }
      // });
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
          <div id="chart-list2"></div>
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
