<template>
  <div class="randomBackground">
    <img class="interactive-img" v-for="item in backgrounds" :src="item.url" :data-scroll-speed="item.speed" :data-scroll-direction="item.direction" :data-init-position="item.position" :style="{ 'top': item.top, 'left': item.left }">
  </div>
</template>
<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import Scrollbar from 'smooth-scrollbar'
  import _ from 'underscore'

  export default {
    name: 'randomBackground',
    data () {
      return {
        backgrounds: [],
        arrayDirections: ['top', 'right', 'bottom', 'left']
      }
    },
    computed: mapState({
      items: store => store.Option.pageAnimation.interActive.array,
      baseCdn: store => store.Option.globalOption.baseCdn
    }),
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
        this.backgrounds = []
        for (var temp of _.sample(this.items, Math.ceil(Math.random() * 2) + 7)) {
          let randomLeft = (Math.floor(Math.random() * size.width))
          let randomTop = (Math.floor(Math.random() * size.height))
          this.backgrounds.push({
            url: this.baseCdn + temp,
            speed: Math.floor(Math.random() * 4) + 5,
            direction: _.sample(this.arrayDirections),
            position: randomLeft + '|' + randomTop,
            left: randomLeft + 'px',
            top: randomTop + 'px'
          })
        }
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
