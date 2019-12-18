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
 * @Last Modified time: 2019-12-15 18:52:52
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import myData from "./json/list4";
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

      let data = myData;
      const ds = new DataSet({
        state: {
          start: new Date("2009/7/20 9:00").getTime(),
          end: new Date("2009/7/21 0:00").getTime()
        }
      });

      const originDv = ds.createView("origin");
      originDv.source(data).transform({
        type: "fold",
        fields: ["rain", "flow"],
        key: "type",
        value: "value",
        retains: ["rain", "flow", "time"]
      });

      const chartDv = ds.createView();
      chartDv
        .source(originDv)
        .transform({
          type: "fold",
          fields: ["rain", "flow"],
          key: "type",
          value: "value",
          retains: ["rain", "flow", "time"]
        })
        .transform({
          type: "filter",
          callback(obj) {
            const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
            return time >= ds.state.start && time <= ds.state.end;
          }
        });
      console.log("过滤后的数据chartdv", chartDv);

      console.log("写入图表的数据", data);
      const chart = new G2.Chart({
        container: "chart-container",
        forceFit: true,
        height: 400,
        padding: [20, 20, 0, 80],
        animate: false
      });
      // 实际写入的是 x 轴
      chart.source(chartDv, {
        time: {
          type: "time",
          // tickCount: 10,
          mask: "M/DD H:mm"
        }
      });
      console.log("1111111111");
      chart.facet("mirror", {
        fields: ["type"],
        showTitle: false, // 显示标题
        padding: [0, 0, 40, 0],
        eachView(view, facet) {
          const { colValue } = facet;
          let color;
          let alias;
          console.log(`colValue ${colValue}`);
          if (colValue === "rain") {
            color = "#1890ff";
            alias = "降雨量(mm)";
          } else if (colValue === "flow") {
            color = "#2FC25B";
            alias = "流量(m^3/s)";
          }

          view.source(data, {
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
            .position("time*" + colValue)
            .color(color);
        }
      });
      chart.render();

      // // 创建 Slider
      // chart.interact("slider", {
      //   container: "slider",
      //   start: ds.state.start, // 和状态量对应
      //   end: ds.state.end,
      //   xAxis: "time",
      //   yAxis: "value",
      //   data: originDv,
      //   backgroundChart: {
      //     type: "line",
      //     color: "grey"
      //   },
      //   onChange({ startValue, endValue }) {
      //     ds.setState("start", startValue);
      //     ds.setState("end", endValue);
      //   }
      // });
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


