<template>
  <div class="flex h-screen w-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderNavigation />
      <div class="flex h-full">
        <NavigationWeb />

        <MainContent class="bg-content w-full">
          <h1 class="text-center text-title font-chakraSemibold text-25">Pernyataan Persetujuan</h1>
          <p class="px-32 text-center text-textContent font-chakra text-17">
            Mohon untuk membaca dengan hati-hati dan pahami secara keseluruhan pernyataan berikut
            ini, termasuk ketentuan-ketentuan yang harus diikuti oleh peserta ujian sebelum
            menyetujui.
          </p>
          <div class="flex flex-col items-center pt-8 space-y-5">
            <CardTermCondition @scroll="handleScroll" />
            <div class="flex space-x-5">
              <ButtonComponent size="w-109 h-33" @click="batal">Tidak Setuju</ButtonComponent>
              <ButtonComponent
                id="btn"
                size="w-[161,5px] h-33"
                :color="bottom == true ? 'bg-btnPrimary' : 'bg-red-500'"
                @click="setuju"
                :disabled="!bottom"
                >Setuju dan lanjutkan</ButtonComponent
              >
            </div>
          </div>
          <div class="absolute space-y-5 bottom-5 right-8">
            <IconMic />
            <IconInternet />
            <IconWebcam />
            <IconVirtualMachine />
          </div>
        </MainContent>
      </div>
    </div>
  </div>
  <!-- <div class="main dark:bg-lightMode">
    <HeaderNavigation />
    <MainContent>
      <h1 class="text-center text-title font-chakraSemibold text-25">Pernyataan Persetujuan</h1>
      <p class="px-32 text-center text-textContent font-chakra text-17">
        Mohon untuk membaca dengan hati-hati dan pahami secara keseluruhan pernyataan berikut ini,
        termasuk ketentuan-ketentuan yang harus diikuti oleh peserta ujian sebelum menyetujui.
      </p>
      <div class="flex flex-col items-center pt-8 space-y-5">
        <CardTermCondition @scroll="handleScroll" />
        <div class="flex space-x-5">
          <ButtonComponent size="w-109 h-33" @click="batal">Tidak Setuju</ButtonComponent>
          <ButtonComponent
            id="btn"
            size="w-[161,5px] h-33"
            :color="bottom == true ? 'bg-btnPrimary' : 'bg-red-500'"
            @click="setuju"
            :disabled="!bottom"
            >Setuju dan lanjutkan</ButtonComponent
          >
        </div>
      </div>
      <div class="absolute space-y-5 bottom-5 right-8">
        <IconMic />
        <IconInternet />
        <IconWebcam />
        <IconVirtualMachine />
      </div>
    </MainContent>
  </div> -->
</template>

<script>
import HeaderNavigation from '../../components/HeaderNavigation.vue'
import MainContent from '../../components/MainContent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import IconMic from '../../components/icons/IconMic.vue'
import IconInternet from '../../components/icons/IconInternet.vue'
import IconWebcam from '../../components/icons/IconWebcam.vue'
import IconVirtualMachine from '../../components/icons/IconVirtualMachine.vue'
import router from '../../router'
import CardTermCondition from '../../components/CardTermCondition.vue'
import NavigationWeb from '../../components/NavigationWeb.vue'
import { ref } from 'vue'
import { useDeviceStore } from '../../store'

export default {
  components: {
    HeaderNavigation,
    MainContent,
    ButtonComponent,
    IconMic,
    IconInternet,
    IconWebcam,
    IconVirtualMachine,
    CardTermCondition,
    NavigationWeb
  },
  setup() {
    const deviceStore = useDeviceStore()
    const bottom = ref(false)
    const batal = () => {
      deviceStore.page = deviceStore.page - 1
      router.push(`/check-environment`)
    }

    let lastScrollTop = document.documentElement.scrollTop

    const handleScroll = (e) => {
      const scrollTopPosition = e.target.scrollTop

      if (scrollTopPosition > lastScrollTop) {
        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
          bottom.value = true
        }
      } else if (scrollTopPosition < lastScrollTop) {
        bottom.value = false
      }
      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition
    }

    const setuju = () => {
      deviceStore.page = deviceStore.page + 1
      router.push(`/exam`)
      console.log('start exam page', window.examPage.startExam())
    }

    return {
      batal,
      handleScroll,
      bottom,
      setuju
    }
  }
}
</script>

<style></style>
