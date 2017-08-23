<template>
  <el-row class="detail-bd">
    <el-col :span="24">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="description" class="description">
          <div class="label" slot="label">描述</div>
          <el-row class="content">
            <el-col :span="24">
              <article v-html="item.abstract"></article>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="comment" class="comment">
          <div class="badge" slot="label">评论<sup>{{ item.comments }}</sup></div>
          <el-row class="content">
            <el-col :span="24" class="item" v-for="comment in comments" :key="comment.id">
              <el-row>
                <el-col :span="4" class="avatar" v-lazy:background-image.container="comment.uid_img"></el-col>
                <el-col :span="19" :offset="1" class="item-bd">
                  <div class="nickname"><nuxt-link to="/">{{ comment.full_name }}</nuxt-link><span class="time">{{ comment.createtime }}</span></div>
                  <div class="comment-content">
                    <div class="image" v-if="comment.type == 4">
                      <img v-lazy="comment.content"/>
                    </div>
                    <div :class="'color_' + comment.type" v-else>{{ comment.content }}</div>
                    <div class="sub">
                      <div class="item" v-for="sub in comment.children" :key="sub.id">
                        <el-row>
                          <el-col :span="4" class="avatar" v-lazy:background-image.container="sub.uid_img"></el-col>
                          <el-col :span="19" :offset="1" class="item-bd">
                            <div class="nickname"><nuxt-link to="/">{{ sub.full_name }}</nuxt-link><span class="time">{{ sub.createtime }}</span></div>
                            <div class="comment-content">{{ sub.content }}</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" v-if="loading">
              <el-button :loading="loading">加载更多</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="praise" class="praise">
          <div class="badge" slot="label">牛逼<sup>{{ item.praise }}</sup></div>
          <el-row class="content">
            <el-col class="item" v-for="item in praises" :key="item.id" :xs="{ span: 5 }" :sm="{ span: 4 }" :md="{ span: 4 }" :lg="{ span: 3 }">
              <nuxt-link to="/">
                <div class="item-image" v-lazy:background-image.container="item.avatar"></div>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>

export default {
  props: {
    item: {
      type: Object
    },
    comments: {
      type: Array
    },
    comments_pagination: {
      type: Object
    },
    praises: {
      type: Array
    }
  },
  computed: {
    loading () {
      return this.$store.state.option.infiniteScroll.loading
    }
  },
  data () {
    return {
      activeName: 'description'
    }
  },
  methods: {
    handleClick (tab) {
      if (tab.name === 'comment') {
        // console.log(tab.name)
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
      .color_2 {
        color: red;
      }
      img {
        max-width: 100%;
      }
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
