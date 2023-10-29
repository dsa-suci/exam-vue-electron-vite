<template>
  <div class="inline-flex border-4 border-bluePrimary rounded-full bg-grayLight" :class="addClass">
    <video
      ref="videos"
      class="video-circle"
      poster="../../assets/avatar.png"
      autoplay
      playsinline
    ></video>
  </div>
</template>

<script>
import { useDeviceStore } from '../../store'
export default {
  props: {
    addClass: {
      type: String,
      default: 'w-300 h-300'
    }
  },
  data() {
    return {
      dev: useDeviceStore()
    }
  },
  mounted() {
    this.dev.video = document.querySelector('video')
  }
  // methods: {
  //   async start() {
  //     var that = this
  //     try {
  //       let constraints = {
  //         video: true,
  //         audio: true
  //       }
  //       const stream = await navigator.mediaDevices.getUserMedia(constraints)

  //       const localStream = await navigator.mediaDevices.getUserMedia(constraints)
  //       console.log('opened', localStream)

  //       const deviceinfo = await navigator.mediaDevices.enumerateDevices(constraints)
  //       console.log(deviceinfo[2].label)

  //       const video = document.querySelector('video')
  //       const videoTracks = stream.getVideoTracks()
  //       console.log('Got stream with constraints:', constraints)
  //       console.log(`Using video device: ${videoTracks[0].label}`)
  //       window.stream = stream
  //       video.srcObject = stream
  //     } catch (e) {
  //       that.handleError(e)
  //     }
  //   },
  //   handleError(error) {
  //     let constraints = {
  //       video: true,
  //       audio: true
  //     }
  //     console.log(error.name)
  //     if (error.name === 'OverconstrainedError') {
  //       const v = constraints.video
  //       console.log(
  //         `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
  //       )
  //     } else if (error.name === 'NotAllowedError') {
  //       console.log(
  //         'Permissions have not been granted to use your camera and ' +
  //           'microphone, you need to allow the page access to your devices in ' +
  //           'order for the demo to work.'
  //       )
  //     }
  //     console.log(`getUserMedia error: ${error.name}`, error)
  //   }
  // }
}
</script>

<style>
.video-circle {
  border-radius: 50%;
  object-fit: cover;
}
video {
  width: 500px;
  height: 375px;
  background-color: #666;
  /*Mirror code starts*/
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  /*Mirror code ends*/
}
</style>
