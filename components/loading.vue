<template>
  <div class="loadanimation-container" v-if="loading">
    <!-- 动画背景层 -->
    <div class="mask" v-show="loading" :style="[currentBgStyle, maskSize]">
      <div class="item" :style="mask.style" :class="{ visible: mask.visible }" v-for="mask in maskItems"></div>
    </div>
    <div class="title">
      <div class="mask">
        <div class="flag">
          <img src="/flag_min.gif" width="320" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  data: () => ({
    loading: false,
    // 当前活动背景图下标，随便默认一个，反正初始化的没意义
    currentActiveBgImgIndex: 0,
    // 背景图是否活动
    bgImgActive: false,
    // 遮罩层尺寸
    maskSize: {},
    // 遮罩层数量
    maskItems: [],
    // 入场动画是否已结束
    enterLoading: false,
    // 出场动画是否已结束
    leaveLoading: false
  }),
  computed: {
    currentActiveBgImg () {
      return this.backgrounds[this.currentActiveBgImgIndex].src
    },
    currentBgStyle () {
      return !this.bgImgActive ? {} : {
        'background-image': `url(${this.currentActiveBgImg})`
      }
    },
    backgrounds () {
      let temp = []
      for (var items of this.$store.state.option.pageAnimation.transitionActive.array) {
        temp.push({
          src: this.$store.state.option.globalOption.baseCdn + items,
          size: null,
          loaded: false
        })
      }
      return temp
    },
    surprises () {
      return this.$store.state.option.pageAnimation.surprises
    }
  },
  methods: {
    start () {
      this.loadBgImgAndSetActive()
    },
    finish () {
      this.forceEndAnimation()
    },
    fail () {
      this.forceEndAnimation()
    },
    forceEndAnimation () {
      const leave = () => {
        const canLeave = !this.enterLoading && !this.leaveLoading && this.loading
        if (canLeave) {
          window.requestAnimationFrame(this.leaveBackgroundAnimate.bind(this))
        } else {
          window.requestAnimationFrame(leave.bind(this))
        }
      }
      leave()
    },
    // 设置一个随机背景图为要用的图
    setARandomBackground ({ randomIndex, size }) {
      // 这会说明图已经loaded成功了，所以可以改状态了
      this.backgrounds[randomIndex].size = size
      this.backgrounds[randomIndex].loaded = true
      this.currentActiveBgImgIndex = randomIndex
    },

    // 更新某个遮罩子元素的可见性状态
    setMaskItemState ({ id, visible }) {
      const targetItem = this.maskItems.find(item => Object.is(item.id, id))
      if (targetItem) {
        targetItem.visible = visible
      }
    },
    initSurprises () {
      if (_.random(1, this.surprises.random) % this.surprises.random === 0) {
        let surprisesTemp = _.sample(this.surprises.array)
        this.$store.commit('option/SET_SURPRISES', surprisesTemp)
        setTimeout(() => {
          this.$store.commit('option/SET_SURPRISES', null)
        }, 1200)
      }
    },
    // 将某个背景图加载到内存里，并设置为活动背景图，要是load失败就递归一次
    loadBgImgAndSetActive () {
      // 这行日志无论是初次加载或者页面切换，你一定会看到，初次加载不会阻塞，页面切换会阻塞，这也是要的效果
      // 生成个下标（图片总数）范围内的随机数
      const randomIndex = _.random(1, this.backgrounds.length)
      // 生成的随机图片
      const randomImg = this.backgrounds[randomIndex]

      return new Promise((resolve, reject) => {
        // 如果这个图片已加载，就直接返回成功，同时执行动画
        if (randomImg.loaded) {
          // console.log('图片本身成功了')
          this.setARandomBackground({
            randomIndex,
            size: randomImg.size
          })
          resolve()
          this.initBackgroundAnimate()

          // 否则，加载这个随机图片（内存中）
        } else {
          let img = new Image()
          img.onload = () => {
            // console.log('图片加载成功', img.width, img.height)
            // 图片加载成功，则更改状态，同时执行动画
            this.setARandomBackground({
              randomIndex,
              size: {
                width: img.width,
                height: img.height
              }
            })
            resolve()
            this.initBackgroundAnimate()
          }
          img.onerror = () => {
            // console.log('图片加载失败')
            // 失败了，则把失败的图片pop出去，且递归的
            this.backgrounds.replace(this.backgrounds.splice(i => Object.is(i.src, img.src)), 1)
            this.loadBgImgAndSetActive()
            // 如果一张有效的图都没了，就放弃吧
            if (!this.backgrounds.length) {
              this.reject()
            }
          }
          img.src = randomImg.src
        }
      })
    },

    // 核心 - 动画初始化逻辑
    initBackgroundAnimate () {
      // 先判断，要是在动画结束之前，就进入了新的页面，那就不取消了，直接初始化
      if (this.enterLoading) {
        return false
      }
      // 执行这段逻辑的时候说明要用的图片已经load到内存了
      // 所以，可以造dom了，同时把所有dom遍历出去，且透明度全部为1

      // 获取屏幕可视范围宽高
      const { clientHeight, clientWidth } = document.body

      // 目标遮罩层大小就是图片大小
      const { width, height } = this.backgrounds[this.currentActiveBgImgIndex].size

      // 横向数量，向上取整
      const xCount = Math.ceil(clientWidth / width)

      // 竖向数量，向上取整
      const yCount = Math.ceil(clientHeight / height)

      // 总数量
      const maskCount = xCount * yCount

      // 这些图平铺完需要的容器尺寸
      const maskSize = {
        width: `${xCount * width}px`,
        height: `${yCount * height}px`
      }

      // console.log('遮罩层数量黑尺寸', xCount, yCount, maskCount, maskSize)

      // 造item行动
      let maskItems = []
      for (let i = 1; i <= maskCount; i++) {
        maskItems.push({
          id: i,
          visible: true,
          style: { width: `${width}px`, height: `${height}px` }
        })
      }

      // 然后，直接把状态改变
      // console.log('遮罩层展示，背景图+遮罩层展示')
      this.maskItems = maskItems
      this.maskSize = maskSize
      this.loading = true
      this.bgImgActive = true

      // 开始动画
      this.intoBackgroundAnimate()
    },

    // 动画开始的主逻辑
    intoBackgroundAnimate () {
      // console.log('入场动画开始')
      this.enterLoading = true
      // 这里需要一个递归帧动画的方法，去一直到没有遮罩层在展示为止
      const step = () => {
        // 拿到所有展示状态的item的id数组
        const visibleItems = this.maskItems.filter(item => item.visible).map(item => item.id)
        // console.log(visibleItems)

        // 如果还有在展示状态的遮罩层，则继续执行
        if (visibleItems.length) {
          // 在他们的id中生成一个随机数，把这个对应的item隐藏
          const randomId = _.random(0, visibleItems.length)
          this.setMaskItemState({ id: visibleItems[randomId], visible: false })

          // 如果已经没有了，则定时两秒执行结束动画，跳出函数
        } else {
          this.enterLoading = false
          // console.log('定时器已安置', this.animateTimer)
          return false
        }
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
      // console.log('入场动画结束')
    },

    // 动画结束的主逻辑
    leaveBackgroundAnimate () {
      if (this.leaveLoading) {
        return false
      }
      this.leaveLoading = true
      const step = () => {
        const visibleItems = this.maskItems.filter(item => !item.visible).map(item => item.id)
        if (visibleItems.length) {
          const randomId = _.random(0, visibleItems.length)
          this.setMaskItemState({ id: visibleItems[randomId], visible: true })
        } else {
          this.loading = false
          this.bgImgActive = false
          this.leaveLoading = false
          return false
        }
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
      this.initSurprises()
      // console.log('出厂结束结束')
    }
  }
}
</script>

<style lang="scss" scoped>
.loadanimation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1040;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      visibility: hidden;
      opacity: 0;
      background-color: rgba(19, 206, 102, 0.87);
    }
    .visible {
      visibility: visible;
      opacity: 1;
    }
  }
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    .mask {
      display: table;
      .flag {
        display: table-cell;
        vertical-align:middle;
        margin: 0;
        color: #fff;
        h2 {
          text-transform: Uppercase;
        }
        img {
          border: .4rem solid #fff;
        }
      }
    }
  }
}
</style>
