
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
 * @Statement:  实验详情
 * @Date: 2019-12-01 13:54:09
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-01 16:35:43
 */
import { Modal } from "ant-design-vue";
let Antd = { Modal };
export default {
  name: "experimentDetail",
  data() {
    return {
      sbText: ""
    };
  },

  methods: {
    sb() {
      //   alert("对不起，你没有装逼权限，即将进入傻逼模式(((((ી(･◡･)ʃ)))))");
      this.sbText = "请稍等。。。";

      setTimeout(() => {
        this.sbText +=
          "<br/>对不起，你没有装逼权限，‧★,:*:‧(￣▽￣)/‧:*‧°★* <br/>即将进入傻逼模式(((((ી(･◡･)ʃ)))));";
      }, 1000);
      setTimeout(() => {
        this.sbText +=
          "<br/> 成功进入傻逼模式" + "<br/>系统即将执行<br/>while(1){}";
      }, 2000);
      setTimeout(() => {
        this.sbText +=
          "<br/>系统警告: <br/> ๑乛◡乛๑ 卡在了奇怪的地方 <br/>_(:3」∠❀)_菊花碎了一地";
      }, 4000);
      setTimeout(() => {
        this.sbText += "<br/>系统提示: <br/> (((┏(;￣▽￣)┛装完逼就跑 ";
      }, 6000);
      setTimeout(() => {
        this.sbText = "";
      }, 7500);
    },
    // 删除警告
    warning() {
      Antd.Modal.warning({
        title: (
          <span style="font-size:18px;font-weight:600;">Delete warning</span>
        ),
        content: (
          <span>
            You are deleting a Experiment!
            <br />
            Any data in this experiment will be permanently removed.
          </span>
        ),
        okText: "Delete",
        okType: "danger",
        maskClosable: true,
        width: "600px",
        closable: true
      });
    }
  }
};
</script>

<template>
  <div>
    <a-row type="flex" class="nav2" justify="center" style>
      <a-col :xs="23" style="max-width:1500px;padding:10px 0px;text-align:left;font-size:22px;">
        Experiment Detail
        <div
          v-pointer
          style="display:inline;font-size:22px;font-weight:500;padding-left:20px;"
        >Projectg3333sgsggs</div>
      </a-col>
    </a-row>

    <div style="max-width:1500px;margin:auto;margin-top:30px;">
      <a-row type="flex" justify="center" style="font-weight:600;text-align:center;">
        <a-col
          :sm="23"
          style="background:#FFF;padding:10px 10px 15px;line-height:30px;font-size:14px;font-weight:500;"
        >
          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Operation&nbsp;:</div>
              <div style="float:left;">
                <a-button class="btn-blue">Modify</a-button>
                <a-button class="btn-red" @click="warning" style="margin-left:20px;">Delete</a-button>
              </div>
            </div>
          </a-col>

          <!-- new Line end -->

          <!-- new Line -->
          <!-- new Line -->
          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :lg="10" :xl="8" :xxl="7" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Experiment Name&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Experiment ID&nbsp;:</div>
              <div style="float:left;">
                <a-input
                  :disabled="true"
                  :defaultValue="'235535435434455555'"
                  style="max-width:200px;height:30px;"
                />
              </div>
            </div>
          </a-col>

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :lg="10" :xl="8" :xxl="7" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Project Name&nbsp;:</div>
              <div style="float:left;">
                <a-input
                  :disabled="true"
                  :defaultValue="'dgggrrrrf'"
                  style="max-width:200px;height:30px;"
                />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Project ID&nbsp;:</div>
              <div style="float:left;">
                <a-input
                  :disabled="true"
                  :defaultValue="12222"
                  style="max-width:200px;height:30px;"
                />
              </div>
            </div>
          </a-col>

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Batch Name&nbsp;:</div>
              <div style="float:left;">
                <a-input
                  :disabled="true"
                  :defaultValue="'dgggrrrrf'"
                  style="max-width:200px;height:30px;"
                />
              </div>
            </div>
          </a-col>

          <!-- new Line end -->

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Create Date&nbsp;:</div>
              <div style="float:left;">
                <a-input-group compact>
                  <a-date-picker style="max-width:240px;height:30px;" />
                </a-input-group>
              </div>
            </div>
          </a-col>

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col
            :xs="24"
            :md="24"
            :lg="10"
            :xl="8"
            :xxl="7"
            style="font-weight:600;text-align:center;"
          >
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Acquisition Method&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :md="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Platform&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" />
              </div>
            </div>
          </a-col>

          <!-- new Line end -->

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col
            :xs="24"
            :md="24"
            :lg="10"
            :xl="8"
            :xxl="7"
            style="font-weight:600;text-align:center;"
          >
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Type&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" value="Blank" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :md="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Grouping Info&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" value="Control" />
              </div>
            </div>
          </a-col>

          <!-- new Line end -->

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col
            :xs="24"
            :md="24"
            :lg="10"
            :xl="8"
            :xxl="7"
            style="font-weight:600;text-align:center;"
          >
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Inject. Volume&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" value="123444" />
              </div>
            </div>
          </a-col>

          <!-- 这里是右边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" :md="24" :lg="10" :xl="12" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Instrument&nbsp;:</div>
              <div style="float:left;">
                <a-input style="max-width:200px;height:30px;" value="THERMO FISHER Q Exactive" />
              </div>
            </div>
          </a-col>

          <!-- new Line end -->

          <!-- new Line -->
          <!-- new Line -->

          <!-- 这里是左边 布局样式不一样 不能搞混 -->
          <a-col :xs="24" style="font-weight:600;text-align:center;">
            <div style="line-height:30px;height:40px;padding:5px 0px;">
              <div
                style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
              >Description&nbsp;:</div>
              <div style="float:left;">
                <a-textarea
                  :autosize="{ minRows: 4, maxRows: 30 }"
                  placeholder="Basic usage"
                  style="min-width:300px;"
                />
              </div>
            </div>
          </a-col>
          <!-- new Line end -->

          <a-col :xs="24" :md="24" :lg="10" :xl="12" style="text-align:left;padding-top:30px;">
            <div
              style="font-weight:600;font-size:18px;letter-spacing:0px;padding:0px 0px 10px;"
            >File Data</div>
            <a-tabs hideAdd defaultActiveKey="1" type="editable-card" style="padding-right:15px;">
              <a-tab-pane tab="MS 1" key="1" :closable="false">
                <a-col :xs="24" :sm="24">
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div style="text-align:left;font-weight:600;padding-left:100px;">
                      <a-radio-group :defaultValue="2">
                        <a-radio :value="1">Spectrum</a-radio>
                        <a-radio :value="2">Chromatogram</a-radio>
                      </a-radio-group>
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Nearest RT&nbsp;:</div>
                    <div style="float:left;">
                      <a-input style="max-width:200px;height:30px;" value="niubi" />
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Precursor Mz&nbsp;:</div>
                    <div style="float:left;">
                      <a-input-number :min="1" :max="100" :step="0.5" :defaultValue="7.5" />
                    </div>
                  </div>

                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Operation&nbsp;:</div>
                    <div style="float:left;">
                      <a-button class="btn-green" icon="search">Search</a-button>
                    </div>
                  </div>
                </a-col>
              </a-tab-pane>
              <a-tab-pane tab="MS 2" key="2" :closable="false">
                <a-col :xs="24" :sm="24">
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Precursor M/z&nbsp;:</div>
                    <div style="float:left;">
                      <a-input style="max-width:200px;height:30px;" value="ruimin" />
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Nearest RT&nbsp;:</div>
                    <div style="float:left;">
                      <a-input style="max-width:200px;height:30px;" value="niubi" />
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >M/z Window&nbsp;:</div>
                    <div style="float:left;">
                      <a-input-number :min="1" :max="100" :step="0.5" :defaultValue="7.5" />
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >RT Window&nbsp;:</div>
                    <div style="float:left;">
                      <a-input-number :min="-3" :max="100" :step="0.1" :defaultValue="-1.38" />
                    </div>
                  </div>
                  <div style="line-height:30px;height:40px;padding:5px 0px;">
                    <div
                      style="font-weight:600;float:left;text-align:right;padding-right:10px;
                                   width:170px;"
                    >Operation&nbsp;:</div>
                    <div style="float:left;">
                      <a-button class="btn-green" icon="search">Search</a-button>
                    </div>
                  </div>
                </a-col>
              </a-tab-pane>
              <a-tab-pane tab="MS 3" key="3" :closable="false" style="text-align:center;">
                <h2 class="font_green_color">hhh ∑(っ°Д°;)っ卧槽，界面还没设计好</h2>
                <img
                  src="http://cdn.promiselee.cn/share_static/files/propro/wangruimin-2019-12-1-152705.png"
                  style="max-width:400px;"
                  title="｡◕ᴗ◕｡ლ(́◉◞౪◟◉‵ლ)"
                />
                <br />天气不错，先进村找找芥末 (ﾉ"◑ ◑)ﾉ"(｡•́︿•̀｡)
              </a-tab-pane>
              <a-tab-pane tab="MS 4" key="4" :closable="false">
                <a-button @click="sb" class="btn-green" icon="search">
                  <span>点击开启装逼模式</span>
                </a-button>
                <div v-html="sbText" style="font-size:20px;"></div>
              </a-tab-pane>
            </a-tabs>
          </a-col>

          <a-col :xs="24" :md="24" :lg="10" :xl="10" style="text-align:left;padding-top:30px;">
            <div
              style="font-weight:600;font-size:18px;letter-spacing:0px;padding:0px 0px 10px;"
            >Spectrum Figure</div>
            <div>
              <img
                src="http://cdn.promiselee.cn/share_static/files/propro/wangruimin-2019-12-1-161537.png"
                style="max-width:400px;"
                title="你的无耻打动了我(́순◞౪◟순‵) "
              />
            </div>
          </a-col>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../layouts/Common";
@import "../../layouts/AntdVue";

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

.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
