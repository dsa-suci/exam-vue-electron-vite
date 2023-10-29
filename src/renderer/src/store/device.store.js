import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useDeviceStore = defineStore({
  id: 'device',
  state: () => ({
    page: 1,
    video: null,
    videoElement: null,
    checkDevice: reactive({
      microphone: '',
      webcam: '',
      internet: 'offline',
      virtualMachine: false
    }),
    device: false,
    listAudio: reactive([]),
    listVideo: reactive([])
  }),
  actions: {
    async start() {
      try {
        const audioSource = this.checkDevice.microphone
        const videoSource = this.checkDevice.webcam

        const constraints = {
          audio: { deviceId: audioSource ? { exact: audioSource } : true },
          video: { deviceId: videoSource ? { exact: videoSource } : true }
        }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)

        const localStream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log('opened', localStream)

        const deviceinfo = await navigator.mediaDevices.enumerateDevices(constraints)

        this.videoElement = this.video
        await this.gotStream(stream)
        await this.gotDevices(deviceinfo)
        console.log('Got stream with constraints:', constraints)

        this.checkInternet()

        this.checkDevice.virtualMachine = true
      } catch (e) {
        this.handleError(e)
      }
    },

    checkInternet() {
      const internet = navigator.onLine ? 'online' : 'offline'
      this.checkDevice.internet = internet
      window.addEventListener('offline', () => {
        this.checkDevice.internet = 'offline'
      })

      window.addEventListener('online', () => {
        this.checkDevice.internet = 'online'
      })
    },

    gotStream(stream) {
      window.stream = stream
      this.videoElement.srcObject = stream
    },

    gotDevices(deviceInfos) {
      this.listAudio = []
      this.listVideo = []
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i]
        if (deviceInfo.kind === 'audioinput') {
          this.listAudio.push({ id: deviceInfo.deviceId, label: deviceInfo.label })
        } else if (deviceInfo.kind === 'videoinput') {
          this.listVideo.push({ id: deviceInfo.deviceId, label: deviceInfo.label })
        } else {
          console.log('Some other kind of source/device: ', deviceInfo)
        }
      }
      if (this.checkDevice.microphone == '') {
        this.checkDevice.microphone = this.listAudio[0].id
      }
      if (this.checkDevice.webcam == '') {
        this.checkDevice.webcam = this.listVideo[0].id
      }
    },

    handleError(error) {
      const audioSource = this.checkDevice.microphone
      const videoSource = this.checkDevice.webcam

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
  }
})
