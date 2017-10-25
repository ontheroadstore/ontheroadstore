<template>
  <div class="video">
    <video playsinline autoplay muted loop="loop" class="video-background" v-lazy:background-image.container="poster">
      <source v-if="videoSrcWebm" :src="videoSrcWebm" type="video/webm" />
      <!-- <source v-if="videoSrcMp4" :src="videoSrcMp4" type="video/mp4" /> -->
    </video>
    <div class="overlay" v-show="isOverlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    videoSrcWebm: {
      default: '',
      type: String
    },
    videoSrcMp4: {
      default: '',
      type: String
    },
    poster: {
      type: String,
      default: ''
    },
    isOverlay: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  .video-background {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
  }
  .overlay {
    position: absolute;
    background: rgba(34, 34, 34 ,.75);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -100;
  }
}
</style>
