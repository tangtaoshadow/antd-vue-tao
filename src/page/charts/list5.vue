<script>
/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Archive:
 * @Statement: 镜像图 双坐标系
 * @Date: 2019-11-22 20:00:34
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-15 19:01:28
 */
import G2 from "@antv/g2";
// import DataSet from "@antv/data-set";
import myData from "./json/list5";
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
      // myData;
      //
      console.log("原始数据", myData);

      // 提取数据
      let data = myData;
      let { expMs2Spectrum, libMs2Spectrum } = data.inputData;
      let { length } = expMs2Spectrum.mzArray;
      let arr = new Array();
      let obj = {};
      for (let i = 0; i < length; i++) {
        obj = {};
        obj.type = "expMs2Spectrum";
        obj.expMs2Spectrum = expMs2Spectrum.intensityArray[i];
        obj.libMs2Spectrum = 0;
        // 这个是正向的 y值
        obj.value = obj.expMs2Spectrum;
        // 这个是 x 轴
        obj.mz = expMs2Spectrum.mzArray[i];
        arr.push(obj);
        /************  分割线 *******************/
        /************  分割线 *******************/
        // 让js重新指向新内存
        obj = {};
        // 这里是新的 obj
        obj.type = "libMs2Spectrum";
        obj.expMs2Spectrum = 0;
        obj.libMs2Spectrum = libMs2Spectrum.intensityArray[i];
        // 这个是镜像 的 y 值
        obj.value = obj.libMs2Spectrum;
        // 这个是 x 轴
        obj.mz = libMs2Spectrum.mzArray[i];
        arr.push(obj);
      }
      // 得出格式化数据
      console.log("格式化后的数据", arr);
      const chart = new G2.Chart({
        container: "chart-container",
        forceFit: true,
        height: 400,
        padding: [20, 20, 0, 80],
        animate: false
      });

      /******  测试 ***************** */
      // data = [
      //   { year: "1991", value: 3 },
      //   { year: "1992", value: 4 },
      //   { year: "1993", value: 3.5 },
      //   { year: "1994", value: 5 },
      //   { year: "1995", value: 4.9 },
      //   { year: "1996", value: 6 },
      //   { year: "1997", value: 7 },
      //   { year: "1998", value: 9 },
      //   { year: "1999", value: 13 }
      // ];

      // const view1 = chart.view();

      // view1.source(data);
      // view1.scale("value", {
      //   min: 0
      // });
      // view1.scale("year", {
      //   range: [0, 1]
      // });
      // view1.tooltip({
      //   crosshairs: {
      //     type: "line"
      //   }
      // });
      // view1.line().position("year*value");
      // view1
      //   .point()
      //   .position("year*value")
      //   .size(4)
      //   .shape("circle")
      //   .style({
      //     stroke: "#fff",
      //     lineWidth: 1
      //   });
      // view1.axis("x", false);
      // chart.render();
      /******  测试 ***************** */

      console.log("chart DV", arr);
      console.log("写入图表的数据", arr);
      chart.source(arr, {
        mz: { sync: true }
      });

      chart.facet("mirror", {
        fields: ["type"],
        showTitle: false, // 显示标题
        padding: [0, 0, 40, 0],
        eachView(view, facet) {
          const { colValue } = facet;
          let color, alias;
          if (colValue === "expMs2Spectrum") {
            color = "#1890ff";
            alias = "expMs2Spectrum(10^4)";
          } else if (colValue === "libMs2Spectrum") {
            color = "#2FC25B";
            alias = "libMs2Spectrum(10^2)";
          }

          view.source(arr, {
            [`${colValue}`]: {
              alias
            }
          });
          view.axis(colValue, {
            title: {
              autoRotate: false,
              offset: -10,
              position: "end",
              textStyle: {
                textAlign: "start"
              }
            }
          });
          view
            .interval()
            .position("mz*" + colValue)
            .size(2)
            .color(color);
        }
      });
      chart.tooltip({
        crosshairs: {
          type: "rect"
        }
      });
      chart.render();
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


