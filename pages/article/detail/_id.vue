<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="banner[1]"></div>
    <el-row class="article-detail">
      <el-col class="title" :xs="{ span: '20' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '1' ,pull : '1' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
        <h1>标题标题标题标题标题</h1>
        <div class="time">
          <span><i class="el-icon-time"></i>2017/02/02</span>
          <span><i class="el-icon-view"></i>10k</span>
        </div>
      </el-col>
      <el-col class="content" :xs="{ span: '20' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '1' ,pull : '1' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
        <article>
          简单的介绍一下吧
        </article>
      </el-col>
      <el-col class="recommend" :span="24">
        <el-row>
          <el-col :xs="0" :sm="0" :md="4" :lg="4" class="title">推荐视频</el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" v-for="item in banner" :key="item.src" class="item">
            <nuxt-link :to="{ name: 'video-detail-id', params: { id: '123' } }">
              <div class="item-image" v-lazy:background-image.container="item.src">
                <span class="item-tag">混蛋出差</span>
              </div>
              <div class="item-title">
                <h3>这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题这是一个标题</h3>
                <p>
                  <span><i class="el-icon-time"></i>2017/02/02</span>
                  <span><i class="el-icon-view"></i>3k</span>
                </p>
              </div>
            </nuxt-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="{ span: '20' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '1' ,pull : '1' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
        图片
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import qrCode from '~components/Qrcode'
  export default {
    data () {
      return {
        qrcode: {
          value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/9964.html',
          ec_level: 'M',
          type: 'png',
          size: 5
        },
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    },
    components: {
      'qrCode': qrCode
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    .page-bg {
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      border: none;
      height: 80vh;
      background-position: 50% 50%;
      background-size: 0;
      bottom: 0;
      position: absolute;
      background-repeat: no-repeat;
      &:after {
        content: '';
        height: 50%;
        width: 100%;
        background-image: linear-gradient(to bottom,rgba(255,255,255,0),#f2f2f2);
        background-repeat: repeat-x;
        bottom: 0;
        position: absolute;
      }
      &:before {
        content: '';
        background-size: cover;
        background-image: inherit;
        background-position: inherit;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: .1;
        background-repeat: no-repeat;
      }
    }
    .article-detail {
      position: relative;
      z-index: 10;
      & > .el-col {
        margin-top: 1.5rem;
        // padding-top: 1.5rem;
      }
      .video {
        video {
          width: 100%
        }
      }
      .title {

        h1 {
          margin: 0;
        }
        .time {
          margin-top: 1rem;
          span {
            margin-right: 1rem;
            opacity: .6;
            i {
              margin-right: .5rem;
            }
          }
        }
      }
      .recommend {
        background-color: #1c202b;
        padding: 1.5rem 2rem;
        .el-row {
          margin: 0 -12px;
          .el-col {
            color: #fff;
            &.item {
              padding-left: 12px;
              padding-right: 12px;
              // padding-bottom: 6px;
              a {
                display: block;
                &:hover {
                  .item-image {
                    .item-tag {
                      background-color: #6cc788;
                      transition-property: background-color;
                      transition-duration: 0.3s;
                      transition-timing-function: ease;
                    }
                    &:after {
                      transition-property: background-color;
                      transition-duration: 0.3s;
                      transition-timing-function: ease;
                      background-color: rgba(0, 0, 0, 0.2);
                    }
                  }
                  .item-title {
                    opacity: 1;
                  }
                }
                .item-image {
                  border-radius: inherit;
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: 50% 50%;
                  background-color: rgba(120,120,120,.2);
                  border-radius: 0.2rem;
                  position: relative;
                  .item-tag {
                    position: absolute;
                    bottom: .5rem;
                    right: .5rem;
                    padding: .4rem;
                    line-height: 1em;
                    height: 1em;
                    background-color: #767a7e;
                    border-radius: 0.2rem;
                    color: #fff;
                    font-size:12px;
                  }
                  &:after {
                    content: '';
                    display: block;
                    padding-bottom: 56.25%;
                  }
                }
                .item-title {
                  display: block;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  opacity: .9;
                  h3 {
                    margin: .5em 0;
                  }
                  p {
                    margin: 0;
                    // margin-bottom: 1em;
                    opacity: .6;
                    span {
                      margin-right: 1rem;
                      i {
                        margin-right: .5rem;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
