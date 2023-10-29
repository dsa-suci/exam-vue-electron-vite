<template>
  <div class="flex flex-col space-y-8 h-193 w-447 xl:w-497">
    <div class="flex flex-col space-y-5">
      <div class="flex justify-between">
        <p class="text-17 text-textContent font-chakra w-100">OS</p>
        <IconOS size="w-27 h-27" />
        <p class="mr-5 text-17 text-textContent text-right font-chakra w-100">{{ OS }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-17 text-textContent font-chakra w-100">CPU</p>
        <IconCPU size="w-27 h-27" />
        <p class="mr-5 text-17 text-textContent text-right font-chakra w-100">{{ cpu }} Core</p>
      </div>
      <div class="flex justify-between">
        <p class="text-17 text-textContent font-chakra w-100">Memory</p>
        <IconMemory size="w-27 h-27" />
        <p class="mr-5 text-17 text-textContent text-right font-chakra w-100">{{ memory }} GB</p>
      </div>

      <div class="flex justify-between">
        <p class="text-17 text-textContent font-chakra w-100">Storage</p>
        <IconStorage size="w-27 h-27" />
        <p class="mr-5 text-17 text-textContent text-right font-chakra w-100">{{ storage }} MB</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconOS from './icons/IconOS.vue'
import IconCPU from './icons/IconCpu.vue'
import IconMemory from './icons/IconMemory.vue'
import IconStorage from './icons/IconStorage.vue'
import { onMounted, reactive, ref } from 'vue'

export default {
  components: {
    IconOS,
    IconCPU,
    IconMemory,
    IconStorage
  },
  setup() {
    const OS = ref('')
    const storage = ref()
    const memory = ref()
    const cpu = ref()

    const deviceInfo = reactive({
      os: '',
      cpu: '',
      memory: '',
      storage: ''
    })

    onMounted(() => {
      info()
    })

    const checkOS = () => {
      if (navigator.userAgent.indexOf('Windows NT 10.0') != -1) {
        OS.value = 'Windows 10'
      }

      if (navigator.userAgent.indexOf('Windows NT 6.3') != -1) {
        OS.value = 'Windows 8.1'
      }

      if (navigator.userAgent.indexOf('Windows NT 6.2') != -1) {
        OS.value = 'Windows 8'
      }

      if (navigator.userAgent.indexOf('Windows NT 6.1') != -1) {
        OS.value = 'Windows 7'
      }

      if (navigator.userAgent.indexOf('Windows NT 6.0') != -1) {
        OS.value = 'Windows Vista'
      }

      if (navigator.userAgent.indexOf('Windows NT 5.1') != -1) {
        OS.value = 'Windows XP'
      }

      if (navigator.userAgent.indexOf('Windows NT 5.0') != -1) {
        OS.value = 'Windows 2000'
      }

      if (navigator.userAgent.indexOf('Mac') != -1) {
        OS.value = 'MacOS'
      }

      if (navigator.userAgent.indexOf('X11') != -1) {
        OS.value = 'UNIX'
      }

      if (navigator.userAgent.indexOf('Linux') != -1) {
        OS.value = 'Linux'
      }
    }
    const info = () => {
      checkOS()

      navigator.storage.estimate().then((estimate) => {
        storage.value = (estimate.quota / 1024 / 1024).toFixed(0)
      })

      cpu.value = navigator.hardwareConcurrency

      memory.value = navigator.deviceMemory
    }

    return {
      OS,
      memory,
      storage,
      cpu,
      deviceInfo
    }
  }
}
</script>

<style></style>
