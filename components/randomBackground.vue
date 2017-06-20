<template>
  <div class="randomBackground">
    <img class="interactive-img" v-for="item in items" :src="item.url" :data-scroll-speed="item.speed" :data-scroll-direction="item.direction" :data-init-position="item.position" :style="{ 'top': item.top, 'left': item.left }">
  </div>
</template>
<script>
  import Vue from 'vue'
  import Scrollbar from 'smooth-scrollbar'

  export default {
    name: 'randomBackground',
    computed: {
      items () {
        return this.$store.state.option.pageAnimation.interImage.active
      },
      baseCdn () {
        return this.$store.state.option.globalOption.baseCdn
      }
    },
    mounted () {
      this.init()
      this.$router.beforeEach((to, from, next) => {
        this.init()
        .then(next)
        .catch(next)
      })
    },
    methods: {
      setARandomBackground (size) {
        this.$store.commit('option/SET_INTER_IMAGE', size)
      },
      // 初始化随机背景逻辑
      init () {
        return new Promise((resolve, reject) => {
          resolve()
          setTimeout(() => {
            Vue.nextTick(() => {
              setTimeout(() => {
                this.setARandomBackground(Scrollbar.getAll()[0].size.content)
              }, 200)
            })
          }, 500)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .randomBackground {
    .interactive-img {
      position: fixed;
      z-index: -1;
      opacity: .8
    }
  }
</style>
