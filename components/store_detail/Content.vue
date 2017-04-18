<template>
  <el-row class="detail-bd">
    <el-col :span="24">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="description" class="description">
          <div class="label" slot="label">描述</div>
          <el-row class="content">
            <el-col :span="24">
              <article>
                {{ item.content }}
              </article>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="comment" class="comment">
          <div class="badge" slot="label">评论<sup>{{ item.comments_number }}</sup></div>
          <el-row class="content">
            <el-col :span="24" class="item">
              <el-row>
                <el-col :span="4" class="avatar" v-lazy:background-image.container="'https://www.etsy.com/images/avatars/default_avatar_75x75.png'"></el-col>
                <el-col :span="19" :offset="1" class="item-bd">
                  <div class="nickname"><nuxt-link to="/">昵称</nuxt-link><span class="time">03/21</span></div>
                  <div class="comment-content">
                    回复内容
                    <div class="sub">
                      <div class="item">
                        <el-row>
                          <el-col :span="4" class="avatar" v-lazy:background-image.container="'https://www.etsy.com/images/avatars/default_avatar_75x75.png'"></el-col>
                          <el-col :span="19" :offset="1" class="item-bd">
                            <div class="nickname"><nuxt-link to="/">昵称</nuxt-link><span class="time">03/21</span></div>
                            <div class="comment-content">回复内容</div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="item">
                        <el-row>
                          <el-col :span="4" class="avatar" v-lazy:background-image.container="'https://www.etsy.com/images/avatars/default_avatar_75x75.png'"></el-col>
                          <el-col :span="19" :offset="1" class="item-bd">
                            <div class="nickname"><nuxt-link to="/">昵称</nuxt-link><span class="time">03/21</span></div>
                            <div class="comment-content">回复内容</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <MyPagination />
        </el-tab-pane>
        <el-tab-pane name="praise" class="praise">
          <div class="badge" slot="label">牛逼<sup>{{ item.praise_number }}</sup></div>
          <el-row class="content">
            <el-col class="item" v-for="item in praise_item" :key="item.src" :xs="{ span: 5 }" :sm="{ span: 4 }" :md="{ span: 4 }" :lg="{ span: 3 }">
              <nuxt-link to="/">
                <div class="item-image" v-lazy:background-image.container="item.src"></div>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
  import MyPagination from '~/components/Pagination_infinite'

  export default {
    props: {
      item: {
        type: Object
      },
      commentItems: {
        type: Array
      }
    },
    components: {
      'MyPagination': MyPagination
    },
    data () {
      return {
        activeName: 'description',
        praise_item: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
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
    methods: {
      handleClick (tab) {
        if (tab.name === 'comment') {
          console.log(tab.name)
        }
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
    .comment {
      .content {
        & > .item {
          padding-bottom: .5rem;
          margin-bottom: .5rem;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          &:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
          .avatar {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            border: 0.2rem solid rgba(120, 130, 140, 0.13);
            border-radius: 0.2rem;
            &:after {
              content: '';
              display: block;
              padding-bottom: 100%;
            }
          }
          .item-bd {
            & > .nickname {
              span {
                margin-left: .5rem;
                opacity: .5;
              }
            }
            .comment-content {
              padding: .5rem 0;
              .sub {
                background-color: rgba(120, 130, 140, 0.13);
                border-radius: .2rem;
                margin: .5rem 0;
                .item {
                  padding: .5rem;
                  border-bottom: 1px solid rgba(120, 130, 140, 0.13);
                }
              }
            }
          }
        }
      }
    }
    .praise {
      margin: 0 -.5rem;
      .item {
        padding: 0 .5rem;
        margin-bottom: .5rem;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        border-radius: 5px;
        .item-image {
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
      }
    }
  }
</style>
