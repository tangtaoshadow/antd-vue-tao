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
 * @Last Modified time: 2019-12-13 23:01:57
 */
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
G2.Global.renderer = "canvas";
// 导入数据
import myData from "./json/list2";
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

      // 提取出数据
      let rtStart = myData.peak.rtStart;
      let rtEnd = myData.peak.rtEnd;
      let rtStartY = null,
        rtEndY = null,
        rtStartIndex = null,
        rtEndIndex = null;
      let rtList = myData.peak.hullPoints.rtList;
      let intensityList = myData.peak.hullPoints.intensityList;
      let arr = new Array();
      let [rangeMin, rangeMax] = [intensityList[0], intensityList[0]];

      for (let i = 0, len = rtList.length; i < len; i++) {
        let obj = {};
        // x
        obj.rtList = rtList[i];
        // y
        obj.intensityList = intensityList[i];
        // 求得范围
        rangeMin > intensityList[i] && (rangeMin = intensityList[i]);
        rangeMax < intensityList[i] && (rangeMax = intensityList[i]);
        obj.range = null;
        rtStart == rtList[i] &&
          ((rtStartY = intensityList[i]), (rtStartIndex = i));
        rtEnd == rtList[i] && ((rtEndY = intensityList[i]), (rtEndIndex = i));
        // 同时记录住开始和结束
        arr.push(obj);
      }
      console.log("得出起始点(", rtStart, ",", rtStartY, ")");
      console.log("得出终止点(", rtEnd, ",", rtEndY, ")");
      // 计算一次函数 y=kx+b
      /*
      y1=K*x1+b
      y2=K*x2+b
      所以 
      K=(y2=y1)/(x2-x1)
      b=y1-(y2-y1)/(x2-x1)*x1
      */
      let K = (rtEndY - rtStartY) / (rtEnd - rtStart);
      let b = rtStartY - ((rtEndY - rtStartY) / (rtEnd - rtStart)) * rtStart;
      // 快速计算出range
      for (let i = rtStartIndex; i <= rtEndIndex; i++) {
        let obj = arr[i];
        obj.range = [obj.intensityList, K * obj.rtList + b];
      }
      console.log("格式化后的数据", arr);
      const data = arr;
      const ds = new DataSet();

      const dv = ds.createView().source(data);
      dv.transform({
        type: "fold",
        fields: ["intensityList"],
        key: "type",
        value: "value"
      });
      const chart = new G2.Chart({
        container: "chart-list2",
        forceFit: true,
        height: 600
        // width: 200
      });
      chart
        .scale({
          rtList: {
            sync: true
          }
        })
        .legend(false);
      const view1 = chart.view();
      const view2 = chart.view();
      view1.source(dv, {
        value: { min: rangeMin, max: rangeMax },
        range: { min: rangeMin, max: rangeMax }
      });
      view2.source(dv, {
        value: { min: rangeMin, max: rangeMax },
        range: { min: rangeMin, max: rangeMax }
      });

      view1
        .tooltip(true)
        .line()
        .position("rtList*value")
        .color("type", ["#579834"])
        .size(2.5)
        .shape("line");

      view2
        .tooltip(false)
        .area()
        .position("rtList*range")
        .color("#579834")
        .style({ fill: "#579834" })
        .shape("line");

      chart.render();

      console.log("end 渲染完成");
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
