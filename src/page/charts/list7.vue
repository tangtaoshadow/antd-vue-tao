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
 * @Last Modified time: 2019-12-18 19:12:04
 */
import { TinyArea, Progress } from "@antv/g2plot";
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
      const CSS = `
.g2plot-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 4px 4px 0 0;
  table-layout: fixed;
}
.g2plot-thead {
  display: table-header-group;
  vertical-align: middle;
  border-bottom-color: #e8e8e8;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: #fafafa
}
.th-id {
  width: 15%;
}
.th-status {
  width: 15%;
}
.g2plot-thead th {
  text-align: center;
  height: 24px;
  font-size: 12px;
}
.g2plot-table-row {
  height: 30px;
  vertical-align: middle;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
}
.g2plot-table-column {
  font-size: 12px;
  color: #8c8c8c;
  padding: 15px;
  text-align: center
}
.g2plot-guide-html {
  width: 50px;
  height: 40px;
  vertical-align: middle;
  line-height: 0.8
}
.g2plot-guide-html .title {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 300;
}
.g2plot-guide-html .value {
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
`;
      const TABLE = `<table class="g2plot-table">
  <!--head-->
  <thead class="g2plot-thead">
    <tr>
      <th class="th-id">服务</th>
      <th>趋势</th>
      <th>进度</th>
    </tr>
  </thead>
  <!--body-->
  <tbody>
  </tbody>
</table>`;

      function $(selector) {
        return document.querySelector(selector);
      }

      function loadCssCode(code) {
        const style = document.createElement("style");
        style.type = "text/css";
        style.rel = "stylesheet";
        // for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code));
        // for IE
        // style.styleSheet.cssText = code;
        // 添加css样式
        const head = document.getElementsByTagName("head")[0];
        // const head = document.getElementById("chart-container");
        head.appendChild(style);
      }

      loadCssCode(CSS);

      // create table dom
      const container = document.getElementById("table-container");
      container.innerHTML = TABLE;

      // data
      const data = [
        {
          id: "local-001",
          trend: randomData(50, 10, 1000),
          load: Math.random()
        },
        {
          id: "local-002",
          trend: randomData(50, 10, 1000),
          load: Math.random()
        },
        {
          id: "local-003",
          trend: randomData(50, 10, 1000),
          load: Math.random()
        },
        {
          id: "local-004",
          trend: randomData(50, 10, 1000),
          load: Math.random()
        },
        {
          id: "local-005",
          trend: randomData(50, 10, 1000),
          load: Math.random()
        }
      ];

      //append data
      const $tbody = $(".g2plot-table tbody");

      const content = data.map(d => {
        return `
    <tr class="g2plot-table-row">
      <td class="g2plot-table-column g2plot-table-column-id">${d.id}</td>
      <td class="g2plot-table-column" id="tiny-area-${d.id}"></td>
      <td class="g2plot-table-column" id="progress-${d.id}"></td>
    </tr>`;
      });

      $tbody.innerHTML = content.join("");

      function randomData(num, max, min) {
        const data = [];
        for (let i = 0; i < num; i++) {
          data.push({
            index: String(i),
            value: min + Math.random() * (max - min)
          });
        }
        return data;
      }

      data.forEach(d => {
        //tiny-area
        const tinyAreaContainer = $(`#tiny-area-${d.id}`);
        const tinyArea = new TinyArea(tinyAreaContainer, {
          width: 200,
          height: 50,
          data: d.trend,
          xField: "index",
          yField: "value",
          tooltip: true,
          guideLine: [
            {
              type: "mean",
              text: {
                position: "start",
                content: "平均值",
                style: {
                  stroke: "white",
                  lineWidth: 2
                }
              }
            }
          ]
        });
        tinyArea.render();
        //ring-progress
        const progressContainer = $(`#progress-${d.id}`);
        const progress = new Progress(progressContainer, {
          width: 200,
          height: 50,
          percent: d.load,
          color: v => {
            if (v < 0.3) {
              return ["#30BF78", "#E8EDF3"];
            } else if (v >= 0.3 && v < 0.7) {
              return ["#FAAD14", "#E8EDF3"];
            }
            return ["#F4664A", "#E8EDF3"];
          }
        });
        progress.render();
      });
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
          <div id="table-container"></div>
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


