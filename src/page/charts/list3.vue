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
 * @Last Modified time: 2019-12-13 23:14:37
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
      // 注意由于分类轴的顺序是从下往上的，所以数组的数值顺序要从小到大
      const data = [
        { country: "巴西", population: 18203 },
        { country: "印尼", population: 23489 },
        { country: "美国", population: 29034 },
        { country: "印度", population: 104970 },
        { country: "中国", population: 131744 }
      ];
      const chart = new G2.Chart({
        container: "chart-container",
        forceFit: true,
        height: 500
      });
      const ds = new DataSet();

      const dv = ds.createView().source(data);
      chart.source(dv);
      chart.axis("country", {
        label: {
          offset: 12
        }
      });
      chart.coord().transpose();
      chart.interval().position("country*population");
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



