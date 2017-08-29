<template>
  <div class="container">
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '22', push: '1', pull: '1' }" :lg="{ span: '22', push: '1', pull: '1' }" class="title">
        <h1>文章</h1>
      </el-col>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '22', push: '1', pull: '1' }" :lg="{ span: '22', push: '1', pull: '1' }" class="article-list">
        <el-row>
          <el-col :xs="{ span: '12' }" :sm="{ span: '12' }" :md="{ span: '8' }" :lg="{ span: '6' }" class="item" v-for="item in items" :key="item.id">
            <nuxt-link :to="{ name: 'article-detail-id', params: { id: item.id } }">
              <div class="item-image" v-lazy:background-image.container="item.thumb + '@640w_1l'"></div>
              <div class="item-title">
                <h3>{{ item.title }}</h3>
                <p>
                  <span><i class="el-icon-time"></i>{{ item.date }}</span>
                  <span><i class="el-icon-view"></i>{{ item.view }}</span>
                </p>
              </div>
            </nuxt-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '22', push: '1', pull: '1' }" :lg="{ span: '22', push: '1', pull: '1' }">
        <MyPagination :pagination="pagination" />
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
import MyPagination from '~/components/Pagination'

export default {
  head () {
    return {
      title: '文章'
    }
  },
  validate ({ params }) {
    return (!!params.pages && !Object.is(Number(params.pages), NaN))
  },
  fetch ({ store, params }) {
    return Promise.all([store.dispatch('article/REQ_PAGES', params.pages)])
  },
  computed: {
    items () {
      return this.$store.state.article.pages.items
    },
    pagination () {
      return this.$store.state.article.pages.pagination
    }
  },
  components: {
    'MyPagination': MyPagination
  }
}
</script>
<style lang="scss" scoped>
.container {
  & > .el-row {
    .article-list {
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
                opacity: .9;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                h3 {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
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
}
</style>
