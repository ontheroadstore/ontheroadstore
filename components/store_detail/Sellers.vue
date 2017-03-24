<template>
  <el-row class="sellers">
    <el-col :span="8">
      <el-row class="detail-user-info">
        <nuxt-link to="/">
          <el-col :span="8" class="avatar" v-lazy:background-image="banner[0]"></el-col>
          <el-col :span="16" class="nickname">
            <span><label>卖家：</label>最猛是我飞机</span>
          </el-col>
        </nuxt-link>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-row class="detail-user-items">
        <el-col :span="6" class="item" v-for="item in banner">
          <nuxt-link to="/">
            <div class="item-image" v-lazy:background-image="item.src"></div>
            <div class="item-title">最猛是我飞机</div>
          </nuxt-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .sellers {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(120,130,140,.13);
    position: relative;
    & > .el-col {
      .detail-user-info {
       a {
        display: block;
        .avatar {
          display: block;
          overflow: hidden;
          border-radius: .2rem;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          &:after {
            content: '';
            display: block;
            padding-top: 100%;
          }
        }
        .nickname {
          padding: 0 1rem;
          h3 {
            margin: 0;
          }
        }
      }
    }
    .detail-user-items {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        position: relative;
        a {
          display: block;
          .item-image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120, 120, 120, 0.2);
            border-radius: 3px;
            &:after {
              content: '';
              display: block;
              padding-bottom: 56%;
            }
          }
          .item-title {
            position: absolute;
            bottom: -2em;
            line-height: 1em;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
