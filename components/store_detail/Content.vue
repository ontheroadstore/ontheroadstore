<template>
  <el-row class="detail-bd">
    <el-col :span="24">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="description" class="description">
          <div class="label" slot="label">描述</div>
          <div class="content">
            good worth一个拍官图用充气娃娃当道具的混蛋潮牌，露底裤的妞是它的经典形象。在还没烂大街之前，不管是调侃警察还是调戏大妞都游刃有余。品牌联名首选花花公子。<br><br>这款good worth烟灰缸，浮雕质感，用料厚实，合金材质拿在手里很有分量，中间是叼着烟的火烈鸟，又贱又可爱。12cm左右，不管送人还是自用都很显好。金属面有划痕为做旧效果！不是瑕疵！<br><br>拍两个包邮！私信退邮费！还有花花公子联名款(图9)159元可以点我头像购买<br><br>点击我头像，还有纹身机钥匙扣、野格酒壶、哈雷披头士杯、迷幻眼镜各种狠货
          </div>
        </el-tab-pane>
        <el-tab-pane name="comment" class="comment">
          <div class="badge" slot="label">评论<sup>1242</sup></div>
          <div class="content">
            <div class="item">
              <el-row>
                <el-col :span="6">
                  舒服
                </el-col>
                <el-col :span="18">
                  sad
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="praise" class="praise">
          <div class="badge" slot="label">牛逼<sup>12</sup></div>
          <div class="content">
            asdf
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'comment'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail-bd {
    padding-top: 2rem;
    .badge {
      position: relative;
      vertical-align: middle;
      display: inline-block;
      sup {
        top: 10px;
        right: 10px;
        position: absolute;
        transform: translateY(-50%) translateX(100%);
        background-color: #ff4949;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
      }
    }
    .description {
      line-height: 2em;
    }
  }
</style>
