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
 * @Statement:
 * @Date: 2019-12-06 16:14:03
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-06 16:50:35
 */

import G2 from "@antv/g2";
export default {
  data() {
    return {
      chart: null
    };
  },
  props: {
    charData: {
      type: Array,
      default: function() {
        return {
          data: []
        };
      }
    },
    id: String
  },
  // 如果使用serverData传过来的静态数据 请使用mounted()方法 并注释掉watch
  mounted() {
    this.drawChart();
  },
  // 监听API接口传过来的数据 使用watch  2018-08-21更新
  // watch: {
  // charData: function (val, oldVal) {    // 监听charData，当发生变化时，触发这个回调函数绘制图表
  // console.log('new: %s, old: %s', val, oldVal);
  // this.drawChart(val);
  // }
  //   },
  methods: {
    drawChart: function() {
      // 2019.03.30 更新 destory方法已被废弃
      // this.chart && this.chart.destory()
      this.chart = new G2.Chart({
        container: this.id,
        width: 600,
        height: 300
      });
      this.chart.source(this.charData);
      this.chart.scale("value", {
        min: 0
      });
      this.chart.scale("year", {
        range: [0, 1]
      });
      this.chart.tooltip({
        crosshairs: {
          type: "line"
        }
      });
      this.chart.line().position("year*value");
      this.chart
        .point()
        .position("year*value")
        .size(4)
        .shape("circle")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      this.chart.render();
    }
  }
};
</script>

<template>
  <div :id="id"></div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";
</style>