<template>
  <div :class="newClass" class="flex flex-col justify-center items-center">
    <div
      class="inline-flex bg-environment border-borderBlue border-4"
      :class="extended && vid == '' ? 'w-500 h-300' : addClass"
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
          v-if="mulaiRekam && time == 4"
          @click="rekam"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#6B7280"
            class="w-8 h-8"
          >
            <path
              d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z"
            />
          </svg>
        </button>
      </div>
      <video
        ref="videos"
        :class="vid == '' ? 'video-square relative z-0' : 'hidden'"
        autoplay
        playsinline
      ></video>
      <video
        id="record"
        :class="vid != '' ? 'video-square relative z-0' : 'hidden'"
        playsinline
        controls
      ></video>
    </div>
    <div class="pt-5">
      <ButtonComponent v-if="!mulaiRekam && !selesaiRekam" @click="mulai()">Mulai</ButtonComponent>
      <ButtonComponent v-if="mulaiRekam && time == 0" @click="onFinish">Selesai</ButtonComponent>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
import { useDeviceStore, useEnvironmentStore } from '../store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export default {
  components: {
    ButtonComponent
  },
  props: {
    newClass: String,
    addClass: {
      type: String,
      default: 'w-354 h-210'
    },
    id: String
  },
  setup() {
    const deviceStore = useDeviceStore()
    const environment = useEnvironmentStore()
    const { mulaiRekam, selesaiRekam, vid, time, extended } = storeToRefs(environment)

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

    const st = ref()

    const start = async () => {
      try {
        const audioSource = deviceStore.checkDevice.microphone
        const videoSource = deviceStore.checkDevice.webcam
        const constraints = {
          audio: { deviceId: audioSource ? { exact: audioSource } : true },
          video: { deviceId: videoSource ? { exact: videoSource } : true }
        }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        st.value = stream

        const localStream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log('opened', localStream)

        const video = document.querySelector('video')
        console.log('Got stream with constraints:', constraints)
        console.log(`Using video device: ${videoSource}`)
        console.log(`Using audio device: ${audioSource}`)
        window.stream = stream
        video.srcObject = stream
      } catch (e) {
        handleError(e)
      }
    }

    const mediaRecorder = ref()
    const rekam = async () => {
      var countdown = setInterval(function () {
        environment.time -= 1
        if (environment.time === 0) {
          clearInterval(countdown)
          if (!MediaRecorder.isTypeSupported('video/webm')) {
            console.warn('video/webm is not supported')
          }
          mediaRecorder.value = new MediaRecorder(st.value, {
            mimeType: 'video/webm'
          })
          mediaRecorder.value.start()
        }
        if (environment.time >= 0) {
          document.getElementById('countdown').innerHTML = environment.time
        }
        console.log(time.value)
      }, 1000)
    }

    const mulai = async () => {
      environment.extended = true
      environment.mulaiRekam = true
      start()
    }

    const onFinish = () => {
      environment.mulaiRekam = false
      environment.selesaiRekam = true
      mediaRecorder.value.stop()
      const videoRecorded = document.querySelector('#record')

      mediaRecorder.value.addEventListener('dataavailable', (event) => {
        videoRecorded.src = URL.createObjectURL(event.data)
        environment.vid = videoRecorded.src
        console.log(environment.vid)
      })
    }

    return {
      mulaiRekam,
      time,
      selesaiRekam,
      vid,
      extended,
      mulai,
      onFinish,
      rekam
    }
  }
}
</script>

<style>
.video-square {
  width: 100%;
  border-radius: 0;
  object-fit: cover;
  background-color: #666;
}
video {
  width: 354px;
  height: auto;
  /*Mirror code starts*/
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  /*Mirror code ends*/
}
video::-webkit-media-controls {
  transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1); /* Safari and Chrome */
  -moz-transform: scale(-1, 1); /* Firefox */
}
</style>
