<template>
  <div class="flex flex-col space-y-8">
    <div class="flex flex-col space-y-5">
      <div class="flex justify-between gap-5">
        <AccordionComponent
          id="accordion-flush-body-1"
          target="#accordion-flush-body-1"
          label="Mikrofon"
          :dataSelect="listAudio"
          name="microphone"
          v-model:value="checkDevice.microphone"
          @handleChange="handleChange"
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
          name="webcam"
          :dataSelect="listVideo"
          v-model:value="checkDevice.webcam"
          @handleChange="handleChange"
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
      <div class="flex justify-between gap-5 items-center">
        <p class="text-17 text-textContent font-chakra w-280 xl:w-330">Internet</p>
        <IconInternet />
        <span
          class="bg-bgGreen text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-if="checkDevice.internet == 'online'"
          >Tersedia</span
        >
        <span
          class="bg-bgGagal text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-if="checkDevice.internet == 'offline'"
          >Gagal</span
        >
      </div>

      <div class="flex justify-between gap-5 items-center">
        <p class="text-17 text-textContent font-chakra w-280 xl:w-330">Virtual Machine</p>
        <IconVirtualMachine />
        <span
          class="bg-bgGreen text-textContent text-17 text-center font-chakra mr-2 px-2.5 py-0.5 rounded-md w-92 h-7"
          v-if="checkDevice.virtualMachine == true"
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
import IconInternet from './icons/IconInternet.vue'
import IconWebcam from './icons/IconWebcam.vue'
import IconVirtualMachine from './icons/IconVirtualMachine.vue'
import AccordionComponent from './AccordionComponent.vue'
import { useDeviceStore } from '../store'
import { storeToRefs } from 'pinia'

export default {
  components: {
    IconMic,
    IconInternet,
    IconWebcam,
    IconVirtualMachine,
    AccordionComponent
  },
  setup() {
    const deviceStore = useDeviceStore()
    const { checkDevice, device, listAudio, listVideo } = storeToRefs(deviceStore)

    onMounted(async () => {
      await deviceStore.start()
      check()
    })

    const check = () => {
      if (
        deviceStore.checkDevice.microphone != '' &&
        deviceStore.checkDevice.webcam != '' &&
        deviceStore.checkDevice.internet == 'online' &&
        deviceStore.checkDevice.virtualMachine
      ) {
        deviceStore.device = true
      } else {
        deviceStore.device = false
      }
    }

    const handleChange = () => {
      deviceStore.listAudio = []
      deviceStore.listVideo = []
      deviceStore.start()
    }

    return {
      checkDevice,
      device,
      listAudio,
      listVideo,
      handleChange
    }
  }
}
</script>

<style></style>
