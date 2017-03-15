<template>
  <section class="content">
    <el-row>
      <el-col :span="16">
        <section class="store-list">
          <div class="title">
            <el-dropdown class="dropdown">
              <span class="el-dropdown-link">
                <h1>黑市</h1>全部 <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>推荐</el-dropdown-item>
                <el-dropdown-item>热门</el-dropdown-item>
                <el-dropdown-item>文化</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-row>
            <el-col :span="12" class="item" v-for="item in store">
              <nuxt-link :to="{ name: 'store-detail-id', params: { id: '123' } }">
                <div class="item-image" v-lazy:background-image.container="item.src"></div>
                <div class="item-tag">摆摊</div>
                <div class="item-title">
                  <h3>标题标题标题标题标题标题标题标题标题a</h3>
                </div>
                <div class="item-info">
                  <span class="item-view"><i class="el-icon-star-off"></i>123</span>
                  <span class="item-comment"><i class="el-icon-star-off"></i>654</span>
                  <span class="item-like"><i class="el-icon-star-off"></i>77</span>
                </div>
                <div class="item-time">2017/3/7</div>
              </nuxt-link>
            </el-col>
            <el-col :span="24">
              <MyPagination :pagination="pagination" />

            </el-col>
          </el-row>
        </section>
      </el-col>
      <el-col :span="8">
        <!-- AD -->
        <section>
          <h3>分享到微信可购买，或者搜索微信公众号：nbheishi</h3>
          <p>二维码</p>
        </section>
        <!-- TOP10 -->
        <MyTop10 />
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import MyIndexTop10 from '~/components/index/top10'
  import MyPagination from '~/components/pagination'

  export default {
    data () {
      return {
        pagination: {
          current: 21,
          total: 22,
          size: 20
        },
        store: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'}]
      }
    },
    methods: {
      currentChange (currentPage) {
        console.log(this, currentPage)
      }
    },
    components: {
      'MyTop10': MyIndexTop10,
      'MyPagination': MyPagination
    }
  }
</script>
