<template>
  <div class="container">
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '22', push: '1', pull: '1' }" :lg="{ span: '22', push: '1', pull: '1' }" class="title">
        <h1>视频</h1>
      </el-col>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '22', push: '1', pull: '1' }" :lg="{ span: '22', push: '1', pull: '1' }" class="video-list">
        <el-row>
          <el-col :xs="{ span: '12' }" :sm="{ span: '12' }" :md="{ span: '8' }" :lg="{ span: '6' }" class="item" v-for="item in video" :key="item.src">
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
    </el-row>
    <!-- <MyPagination :infinite="infinite" v-if="!isMore" /> -->
<!--     <el-row v-else>
      <el-col :span="24" class="ismore">
        <nuxt-link :to="{ name: 'article-pages', params: { pages: '4' } }">
          <el-button>查看更多内容</el-button>
        </nuxt-link>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
  // import { mapState } from 'vuex'
  import MyPagination from '~/components/Pagination_infinite'

  export default {
    data () {
      return {
        video: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
          {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    },
    components: {
      'MyPagination': MyPagination
    },
    mounted () {

    }
  }
</script>
<style lang="scss" scoped>
  .container {

    .video-list {
      .el-row {
        margin: 0 -.5rem;
        .el-col {
          &.item {
            padding: 0 .5rem;
            a {
              display: block;
              padding-bottom: .5rem;
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
</style>

