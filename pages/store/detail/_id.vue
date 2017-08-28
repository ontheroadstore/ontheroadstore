<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="item.cover"></div>
    <el-row class="store-detail">
      <el-col :xs="0" :sm="0" :md="{ span: '2', push: '21' }" :lg="{ span: '2', push: '21' }" v-sticky style="position: absolute">
        <div class="qrcode">
          <qrCode :value="qrcode.value" :ec_level="qrcode.level" :type="qrcode.type" :size="qrcode.size" />
          <div class="qrcode-info">
            分享、转发<br>请微信扫一扫
          </div>
        </div>
      </el-col>
      <el-col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 14, push: 5, pull: 5 }" :lg="{ span: 12, push: 6, pull: 6 }" class="store-detail-bd">
        <el-col :span="24" class="cover" v-lazy:background-image="item.cover + '@640w_1l'">
          <!-- <img v-lazy:background-image="item.cover"> -->
        </el-col>
        <el-col :span="22" :push="1" :pull="1">
          <h1>{{ item.title }}</h1>
        </el-col>
        <el-col :span="22" :push="1" :pull="1" v-html="item.abstract" class="content"></el-col>
        <el-col :span="22" :push="1" :pull="1">
          <el-row :gutter="12" class="images">
            <el-col :span="8" v-for="image in item.images" :key="image"><img v-lazy="'http://img8.ontheroadstore.com/' + image + '@!320x320'" /></el-col>
          </el-row>
        </el-col>
        <el-col :span="24" class="buy">
          <el-row>
            <el-col :span="12" :push="1" :pull="0" class="price">¥ <span>{{ price }}</span>元/份</el-col>
            <el-col :span="12" :push="0" :pull="1" class="go-buy"><a :href="qrcode.value"><el-button type="primary" icon="d-arrow-right">点我去黑市购买</el-button></a></el-col>
          </el-row>
        </el-col>
        <el-col :span="22" :push="1" :pull="1" class="comment" v-show="item.comments">
          <el-col :span="24" class="title"><h3>评论 ({{ item.comments }})</h3></el-col>
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
          <el-col><el-alert title="查看更多评论请进入黑市" type="info" :closable="false" show-icon /></el-col>
        </el-col>
        <el-col :span="22" :push="1" :pull="1" class="top10-items">
          <el-col :span="24" class="title"><h3>大家还买了什么</h3></el-col>
          <el-row>
            <el-col :span="24" class="item" v-for="item in alike" :key="item.id">
              <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.id } }" class="el-row">
                <el-col :span="4" class="item-image" v-lazy:background-image.container="item.image"></el-col>
                <el-col :span="20" class="item-title">
                  <h4>{{ item.post_title }}</h4>
                  <div class="item-info">
                    <span class="view"><i class="el-icon-view"></i> {{ item.post_hits }}</span>
                    <span class="time"><i class="el-icon-time"></i> {{ item.comment_count }}</span>
                  </div>
                </el-col>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import qrCode from '~/components/Qrcode'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  asyncData ({ store, params, error }) {
    return store.dispatch('store/REQ_DETAIL', params.id).catch((data) => {
      error({
        statusCode: 404,
        message: data.info
      })
    })
  },
  fetch ({ store, params }) {
    return Promise.all([store.dispatch('store/REQ_SELLERS', params.id), store.dispatch('store/REQ_COMMENT', params.id, 1), store.dispatch('store/REQ_PRAISE', params.id), store.dispatch('store/REQ_ALIKE', params.id)])
  },
  head () {
    return {
      title: this.item.title,
      meta: [{ hid: 'description', name: 'description', content: this.item.abstract }, { name: 'keywords', content: this.keyword }]
    }
  },
  computed: {
    item () {
      return this.$store.state.store.detail.items
    },
    keyword () {
      return this.$store.state.store.detail.keywords.join(',')
    },
    comments () {
      return this.$store.state.store.detail.comments
    },
    alike () {
      return this.$store.state.store.detail.alike
    },
    qrcode () {
      return {
        value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/' + this.item.id + '.html',
        ec_level: 'M',
        type: 'png',
        size: 5
      }
    },
    isMobile () {
      return this.$store.state.option.isMobile
    },
    price () {
      if (this.item.price.length === 1) {
        return this.item.price[0]
      } else {
        return this.item.price[0] + '~' + this.item.price[1]
      }
    }
  },
  components: {
    'qrCode': qrCode
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 10;
  .page-bg {
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    border: none;
    height: 100%;
    background-position: 50% 50%;
    background-size: 0;
    bottom: 0;
    position: absolute;
    background-repeat: no-repeat;
    &:after {
      content: '';
      height: 50%;
      width: 100%;
      background-image: linear-gradient(to bottom,rgba(255,255,255,0),#ffffde);
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
  .store-detail {
    position: relative;
    z-index: 10;
    .store-detail-bd {
      background-color: #fff;
    }
    .qrcode {
      margin-top: 1rem;
      // right: 0rem;
      text-align: center;
      width: 100%;
      // padding: 1rem;
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.02);
      z-index: 1020;
      opacity: .8;
      .qrcode-item {
        width: 100%;
        height: 100%;
      }
      .qrcode-info {
        padding: 0.5rem 0;
        color: #717375;
      }
    }
    .cover {
      height: 320px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      img {
        min-height: 240px;
        max-height: 360px;
        width: 100%;
      }
    }
    .content {
      margin-bottom: 12px;
    }
    .images {
      .el-col {
        padding: 0;
        margin-top: 0;
        margin-bottom: 12px;
        img {
          min-height: 120px;
          width: 100%;
        }
      }
    }
    .buy {
      padding: .6rem;
      background-color: #cd2836;
      margin-bottom: 12px;
      .price {
        color: #f0e042;
        text-align: left;
        font-size: 18px;
        line-height: 36px;
        span {
          font-size: 22px;
          margin: 0 .2rem;
        }
      }
      .go-buy {
        text-align: right;
        button {
          background-color: #f0e042;
          border-color: #f0e042;
          color: #000;
        }
      }
    }
    .comment {
      margin-bottom: 12px;
      .title {
        display: block;
        padding-bottom: .5rem;
        h3 {
          margin: 0;
          color: inherit;
          opacity: .6;
        }
      }
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
    .top10-items {
      .title {
        display: block;
        // padding-top: 1rem;
        // padding-bottom: .5rem;
        h3 {
          margin: 0;
          color: inherit;
          opacity: .6;
        }
      }
      & > .el-row {
        margin-left: -12px;
        margin-right: -12px;
        .item {
          padding-left: 12px;
          padding-right: 12px;
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
            padding-top: .5rem;
            padding-bottom: .5rem;
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
              // 16:9比例
              padding-bottom: 100%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: 12px;
            opacity: .9;
            h4 {
              font-weight: normal;
              margin: 0;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
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
}
}
</style>
