<template>
  <div class="qrcode-item" v-lazy:background-image="qrCodeSrc"></div>
</template>
<style lang="scss" scoped>
  .qrcode-item {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    // background-color: #f2f2f2;
    // border: 2px solid #68be8c;
    background-size: cover;
    // padding: 2rem;
    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
</style>
<script>
  import qr from 'qr-image'

  export default {
    name: 'qrcode',
    computed: {
      qrcodeSvg () {
        return qr.imageSync(this.value, {
          ec_level: this.ec_level,
          type: this.type,
          size: this.size,
          margin: this.margin
        })
      },
      qrCodeSrc () {
        return 'data:image/png;base64,' + this.qrcodeSvg.toString('base64')
      }
    },
    props: {
      value: {
        type: String,
        required: true,
        default: ''
      },
      type: {
        type: String,
        default: 'png'
      },
      ec_level: {
        type: String,
        default: 'M'
      },
      size: {
        type: Number,
        default: 5
      },
      margin: {
        type: Number,
        default: 0
      }
    }
  }
</script>
