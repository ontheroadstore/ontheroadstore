<template>
  <div class="top10-items">
    <nuxt-link to="/" class="title"><h3>大家最近都看在</h3></nuxt-link>
    <el-row>
      <el-col :span="24" class="item" v-for="item in top10" :key="item.src">
        <nuxt-link to="/" class="el-row">
          <el-col :span="4" class="item-image" v-lazy:background-image.container="item.src"></el-col>
          <el-col :span="20" class="item-title">
            <h4>大家都在看啥呢？？呵呵呵这是个标题大家大家都在看啥呢？？呵呵呵这是个标题大家大家都在看啥呢？？呵呵呵这是个标题大家</h4>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i> 12122</span>
              <span class="time"><i class="el-icon-time"></i> 2017/11/02</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'index-top10',
    data () {
      return {
        top10: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top10-items {
    .title {
      display: block;
      padding: 1rem 0;
      h3 {
        margin: 0;
        color: inherit;
        opacity: .6;
      }
    }
    & > .el-row {
      margin: 0 -.5rem;
      .item {
        padding: 0 .5rem;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        border-radius: 5px;
        &:hover {
          background-color: rgba(120, 130, 140, 0.13);
          a {
            .item-image {
              &:after {
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
            .item-title {
              opacity: 1;
              text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.1);
            }
          }
        }
        a {
          display: block;
          padding: .5rem 0;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          position: relative;
          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 0.2rem;
            &:after {
              content: '';
              display: block;
              padding-bottom: 100%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: .5rem;
            opacity: .9;
            h4 {
              font-weight: normal;
              margin: 0;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .item-info {
              position: absolute;
              right: 0;
              opacity: .5;
              bottom: .5rem;
              line-height: 0;
              font-size: 12px;
              .view {
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
  }
</style>
