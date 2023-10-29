<template>
  <div :class="newClass" class="flex flex-col justify-center items-center">
    <div
      class="inline-flex border-4 border-bluePrimary rounded-full bg-grayLight"
      :class="extended && foto == '' ? 'w-358 h-358' : addClass"
    >
      <div v-if="time != 0">
        <svg :class="addClass" class="overlay z-[1] absolute">
          <g transform="translate(50,50)">
            <text
              id="countdown"
              x="50%"
              y="50%"
              alignment-baseline="middle"
              text-anchor="middle"
              class="font-chakraBold text-9xl"
              fill="#EBEBEB"
            ></text>
          </g>
        </svg>
      </div>
      <div class="overlay z-[1] absolute bottom-[10%] left-[43%]">
        <button
          class="bg-white hover:bg-gray-200 rounded-full cursor-pointer p-3"
          v-if="ambilFoto && time == 4"
          @click="takePicture"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#6B7280"
            class="w-8 h-8"
          >
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
            <path
              fill-rule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <video
        ref="videos"
        :class="foto == '' ? 'video-circle relative z-0' : 'hidden'"
        poster="../assets/avatar.png"
        autoplay
        playsinline
      ></video>
      <canvas :class="foto != '' ? 'canvas-circle relative' : 'hidden'"></canvas>
    </div>
    <div class="pt-5">
      <ButtonComponent v-if="ambilFoto == false" @click="mulai()">Mulai</ButtonComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
import { useDeviceStore, useRecognitionStore } from '../store'
import { storeToRefs } from 'pinia'

export default {
  components: {
    ButtonComponent
  },
  props: {
    newClass: String,
    addClass: {
      type: String,
      default: 'w-258 h-258'
    },
    id: String
  },
  setup() {
    const recognition = useRecognitionStore()
    const deviceStore = useDeviceStore()
    const { foto, time, ambilFoto, extended } = storeToRefs(recognition)

    const handleError = (error) => {
      const audioSource = deviceStore.checkDevice.microphone
      const videoSource = deviceStore.checkDevice.webcam
      const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : true },
        video: { deviceId: videoSource ? { exact: videoSource } : true }
      }
      console.log(error.name)
      if (error.name === 'OverconstrainedError') {
        const v = constraints.video
        console.log(
          `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
        )
      } else if (error.name === 'NotAllowedError') {
        console.log(
          'Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.'
        )
      }
      console.log(`getUserMedia error: ${error.name}`, error)
    }

    const start = async () => {
      try {
        const audioSource = deviceStore.checkDevice.microphone
        const videoSource = deviceStore.checkDevice.webcam
        const constraints = {
          audio: { deviceId: audioSource ? { exact: audioSource } : true },
          video: { deviceId: videoSource ? { exact: videoSource } : true }
        }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)

        const localStream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log('opened', localStream)

        const video = document.querySelector('video')
        console.log('Got stream with constraints:', constraints)
        console.log(`Using video device: ${videoSource}`)
        window.stream = stream
        video.srcObject = stream
      } catch (e) {
        handleError(e)
      }
    }
    const mulai = async () => {
      recognition.extended = true
      recognition.ambilFoto = true
      start()
    }

    const takePicture = () => {
      if (recognition.foto == '') {
        var countdown = setInterval(function () {
          recognition.time -= 1
          if (recognition.time === 0) {
            clearInterval(countdown)
            const video = document.querySelector('video')
            const canvas = document.querySelector('canvas')

            canvas.width = 250
            canvas.height = 250

            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
            recognition.foto = canvas.toDataURL('image/png')
          }
          if (recognition.time >= 0) {
            document.getElementById('countdown').innerHTML = recognition.time
          }
        }, 1000)
      }
    }

    return {
      foto,
      time,
      ambilFoto,
      mulai,
      extended,
      takePicture
    }
  }
}
</script>

<style>
.video-circle {
  border-radius: 50%;
  object-fit: cover;
}
video {
  width: 500px;
  height: 400px;
  background-color: #666;
  /*Mirror code starts*/
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  /*Mirror code ends*/
}
.canvas-circle {
  border-radius: 50%;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  /*Mirror code ends*/
}
</style>
