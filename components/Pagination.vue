<template>
  <section class="pagination">
    <ul class="items">
      <li class="item prev" v-show="prevPage != 0">
        <nuxt-link :to="{ name: routeName, params: { pages: prevPage }}">
          <i class="el-icon el-icon-arrow-left"></i>
        </nuxt-link>
      </li>
      <li class="item" v-for="item in items" v-bind:class="{ active: item === currentPage }">
        <nuxt-link :to="{ name: routeName, params: { pages: item } }">
          {{ item }}
        </nuxt-link>
      </li>
      <li clsas="item next" v-show="nextPage === totalPage">
        <nuxt-link :to="{ name: routeName, params: { pages: nextPage }}">
          <i class="el-icon el-icon-arrow-right"></i>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
  .pagination {
    text-align: center;
    ul {
      user-select: none;
      list-style: none;
      padding: 0;
      li {
        padding: 0 .4rem;
        display: inline-block;
        &.active {
          a {
            background-color: #000;
            color: #fff;
          }
        }
        a {
          border-radius: 0.2rem;
          font-size: 18px;
          display: block;
          height: 2rem;
          line-height: 2rem;
          width: 2em;
          background-color: #fff;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'pagination',
    props: {
      pagination: {
        type: Object
      }
    },
    computed: {
      items () {
        const items = []
        if (this.currentPage < this.showPage) {
          let i = Math.min(this.showPage, this.totalPage)
          while (i) {
            items.unshift(i--)
          }
        } else {
          let middle = this.currentPage - Math.floor(this.showPage / 2)
          let i = this.showPage
          if (middle > (this.totalPage - this.showPage)) {
            middle = (this.totalPage - this.showPage) + 1
          }
          console.log(middle)
          while (i--) {
            items.push(middle++)
          }
        }
        return items
      },
      routeName () {
        return this.$route.name
      },
      currentPage () {
        return this.pagination.current
      },
      totalPage () {
        return this.pagination.total
      },
      prevPage () {
        return (this.pagination.current - 1)
      },
      nextPage () {
        return (this.pagination.current + 1)
      }
    },
    data () {
      return {
        showPage: 10
      }
    },
    methods: {
      changePage (page) {
        console.log('翻页', {
          page: page,
          routename: this.routeName
        })
      }
    }
  }
</script>
