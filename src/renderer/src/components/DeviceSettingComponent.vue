<template>
  <div class="flex flex-col space-y-8 h-193">
    <div class="flex flex-col space-y-5">
      <div class="flex justify-between gap-5">
        <AccordionComponent
          id="accordion-flush-body-1"
          target="#accordion-flush-body-1"
          label="Mikrofon"
          :dataSelect="listAudio"
          name="audio"
          v-model:value="checkDevice.microphone"
          @handleChange="handleChangeAudio"
        />
        <IconMic />
        <span
          class="bg-bgGreen text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-if="checkDevice.microphone != ''"
          >Tersedia</span
        >
        <span
          class="bg-bgGagal text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-else
          >Gagal</span
        >
      </div>
      <div class="flex justify-between gap-5">
        <AccordionComponent
          id="accordion-flush-body-2"
          target="#accordion-flush-body-2"
          label="Webcam"
          name="video"
          :dataSelect="listVideo"
          v-model:value="checkDevice.webcam"
          @handleChange="handleChangeVideo"
        />
        <IconWebcam />
        <span
          class="bg-bgGreen text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-if="checkDevice.webcam != ''"
          >Tersedia</span
        >
        <span
          class="bg-bgGagal text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-else
          >Gagal</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import IconMic from './icons/IconMic.vue'
import IconWebcam from './icons/IconWebcam.vue'
import AccordionComponent from './AccordionComponent.vue'
import { useDeviceStore } from '../store'
import { storeToRefs } from 'pinia'

export default {
  components: {
    IconMic,
    IconWebcam,
    AccordionComponent
  },
  setup() {
    const deviceStore = useDeviceStore()
    const { checkDevice, device, listVideo, listAudio } = storeToRefs(deviceStore)

    onMounted(() => {
      deviceStore.start()
    })

    const handleChangeAudio = (item) => {
      deviceStore.listAudio.value = []
      deviceStore.listVideo.value = []
      deviceStore.checkDevice.microphone = item
      console.log('audio', deviceStore.checkDevice.microphone)
      deviceStore.start()
    }

    const handleChangeVideo = (item) => {
      deviceStore.listAudio.value = []
      deviceStore.listVideo.value = []
      deviceStore.checkDevice.webcam = item
      console.log('video', deviceStore.checkDevice.webcam)
      deviceStore.start()
    }

    return {
      checkDevice,
      device,
      listVideo,
      listAudio,
      handleChangeVideo,
      handleChangeAudio
    }
  }
}
</script>

<style></style>
