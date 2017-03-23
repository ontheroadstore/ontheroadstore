<template>
  <!-- banner start /components/index/banner.vue -->
  <section class="banner-items">
    <el-row>
      <el-col :span="12">
        <el-carousel height="100%" arrow="always">
          <el-carousel-item class="item" v-for="item in carousel" v-lazy:background-image.container="item.thumb">
            <nuxt-link :to="{ path: item.category, name: item.category + '-detail-id', params: { id: item.id } }" class="item-title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.abstract }}</p>
            </nuxt-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col class="item" :span="6" v-for="item in recommend" v-lazy:background-image.container="item.thumb">
        <nuxt-link :to="{ path: item.category, name: item.category + '-detail-id', params: { id: item.id } }" class="item-title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.abstract }}</p>
        </nuxt-link>
      </el-col>
    </el-row>
  </section>
  <!-- banner end -->
</template>
<script>
  export default {
    computed: {
      carousel () {
        return this.$store.state.Index.banneraa.carousel
      },
      recommend () {
        return this.$store.state.Index.banneraa.recommend
      }
      // recommend: state => state.Index.banner.recommend
    },
    beforeMount () {
      this.$store.dispatch('nuxtServerInit')
    }
  }
</script>
<style lang="scss" scoped>
  .banner-items {
    .el-row {
      .el-col {
        position: relative;
        &:after {
          content: '';
          display: block;
          padding-top: 100%;
        }
        &.el-col-12 {
          .el-carousel {
            position: absolute;
            width: 100%;
            height: 100%;
            .item {
              word-wrap: break-word;
              word-break: normal;
              border-radius: inherit;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-color: rgba(120,120,120,.2);
              a {
                &:after {
                  content: '';
                  background-color: rgba(120, 120, 120, 0.1);
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  transition-property: background-color;
                  transition-duration: 0.3s;
                  transition-timing-function: ease;
                }
                &:hover {
                  &:after {
                    color: inherit;
                    background-color: rgba(0, 0, 0, 0.1);
                    border-color: rgba(0, 0, 0, 0.1);
                  }
                }
                &.item-title {
                  position: absolute;
                  box-sizing: border-box;
                  padding: 1rem;
                  width: 100%;
                  height: 100%;
                  h3 {
                    margin: 0;
                    color: #fff;
                    text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                  }
                  p {
                    color: #fff;
                    opacity: .6;
                    text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                    margin: 1em 0;
                  }
                }
              }
            }
          }
        }
        &.el-col-6 {
          &.item {
            position: relative;
            word-wrap: break-word;
            word-break: normal;
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            transition-property: background-color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
            &:after {
              background-color: rgba(120, 120, 120, 0.1);
              transition-property: background-color;
              transition-duration: 0.3s;
              transition-timing-function: ease;
            }
            &:hover {
              &:after {
                color: inherit;
                background-color: rgba(0, 0, 0, 0.1);
                border-color: rgba(0, 0, 0, 0.1);
              }
            }
            .item-title {
              position: absolute;
              box-sizing: border-box;
              padding: 1rem;
              width: 100%;
              height: 100%;
              h3 {
                margin: 0;
                color: #fff;
                text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
              }
              p {
                color: #fff;
                opacity: .6;
                text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                margin: 1em 0;
              }
            }
          }
        }
      }
    }
  }
</style>
