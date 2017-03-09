<template>
  <div class="container">
  <nuxt-child />
  </div>
</template>
<script>
  import MyIndexTop10 from '~/components/index/top10'

  export default {
    data () {
      return {
        store: [{'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
        {'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'}]
      }
    },
    components: {
      'MyTop10': MyIndexTop10
    },
    // validate ({ params }) {
    //   // console.log(params)
    //   return /^\d+$/.test(params.pages)
    // },
    mounted () {
      // console.log(this.$route.params.pages)
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    & > .el-row {
      & > .el-col {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        &.el-col-16 {
          padding-bottom: 16px;
          border-right: 1px solid rgba(120,130,140,.13);
          .store-list {
            .title {
              margin-top: 12px;
              .dropdown {
                color: initial;
                h1 {
                  display: inline-block;
                  margin: 0;
                  margin-right: 1rem;
                }
              }
            }
            & > .el-row {
              margin-left: -12px;
              margin-right: -12px;
              .item {
                padding: 12px;
                border-radius: 5px;
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                a {
                  display: block;
                  position: relative;
                  &:hover {
                    .item-image {
                      &:after {
                        background: linear-gradient(0deg,rgba(0,0,0,.2),transparent);
                      }
                    }
                  }
                  .item-image {
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-color: rgba(120,120,120,.2);
                    &:after {
                      content: '';
                      display: block;
                      padding-bottom: 60%;
                      background: linear-gradient(0deg,rgba(0,0,0,.6),transparent);
                    }
                  }
                  .item-tag {
                    position: absolute;
                    left: .8rem;
                    top: .8rem;
                    padding: .4rem;
                    line-height: 1em;
                    height: 1em;
                    background-color: #6cc788;
                    border-radius: 0.2rem;
                    color: #fff;
                    font-size: 12px;
                  }
                  .item-title {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 0 .8rem;
                    position: absolute;
                    bottom: 2.2rem;
                    color: #fff;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.1);
                    h3 {
                      margin: 0;
                    }
                  }
                  .item-info {
                    position: absolute;
                    bottom: .8rem;
                    right: .8rem;
                    color: #fff;
                    font-size: 13px;
                    span {
                      margin-left: 1em;
                      i {
                        margin-right: .5em;
                      }
                    }
                  }
                  .item-time {
                    font-size: 13px;
                    position: absolute;
                    color: #fff;
                    left: .8rem;
                    bottom: .8rem;
                  }
                }
              }
              .pagination {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
