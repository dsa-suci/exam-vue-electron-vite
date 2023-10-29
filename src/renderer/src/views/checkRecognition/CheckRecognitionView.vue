<template>
  <div class="flex h-screen w-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderNavigation />
      <div class="flex h-full">
        <NavigationWeb />

        <MainContent class="bg-content w-full">
          <h1 class="text-title font-chakraSemibold text-25 text-center">Verifikasi Peserta</h1>
          <p class="text-textContent font-chakra text-17 text-center px-32">
            Langkah 1: Ambil foto wajah anda menggunakan webcam.<br />
            Pastikan dengan pencahayaan yang cukup [tidak terlalu terang/tidak terlalu redup]
          </p>

          <XyzTransition appear duration="auto">
            <div class="grid grid-cols-2 pt-10">
              <div class="xl:pl-10" xyz="fade left-3 stagger ease-in-out">
                <StepRecognitionComponent
                  :addClass="ambilFoto == false || foto != '' ? 'xyz-none' : 'xyz-out'"
                  xyz="fade left-3 stagger ease-in-out"
                />
              </div>

              <div
                :class="
                  extended && foto == ''
                    ? 'absolute justify-self-center xyz-in delay-4 '
                    : 'flex flex-col pt-5 items-center justify-center'
                "
                xyz="fade right-100% duration-10 stagger  "
              >
                <RecognitionComponent
                  xyz="small-25% stagger delay-15 duration-10"
                  :newClass="ambilFoto == false || foto != '' ? 'xyz-none' : 'xyz-in'"
                />

                <div v-if="verifikasi == ''" class="flex justify-center space-x-5 pt-5 xyz-nested">
                  <ButtonComponent v-if="foto != ''" @click="ulang">Ulangi</ButtonComponent>
                  <ButtonComponent v-if="foto != ''" @click="onVerifikasi"
                    >Verifikasi</ButtonComponent
                  >
                </div>
                <div
                  v-if="verifikasi == 'gagal'"
                  class="flex flex-col justify-center space-y-3 pt-2 xyz-nested"
                >
                  <div class="bg-bgGagal w-368 h-57 py-2">
                    <p class="text-textKet text-sm font-chakra text-center">
                      Verifikasi
                      <span class="text-sm font-chakraBold">“Gagal”</span> silahkan ulangi
                      pengambilan foto, pastikan wajah anda berada pada frame
                    </p>
                  </div>
                  <div class="flex justify-center space-x-5">
                    <ButtonComponent @click="batal">Batalkan</ButtonComponent>
                    <ButtonComponent @click="ulang">Ulangi</ButtonComponent>
                  </div>
                </div>
                <div
                  v-if="verifikasi == 'berhasil'"
                  class="flex flex-col justify-center space-y-3 pt-2 xyz-nested"
                >
                  <div class="bg-bgGreen w-368 h-57 py-2">
                    <p class="text-textKet text-sm font-chakra text-center">
                      Verifikasi <span class="text-sm font-chakraBold">“Berhasil”</span> silahkan
                      klik tombol<br />
                      <span class="text-sm font-chakraBold">“Lanjutkan”</span> untuk ketahap
                      selanjutnya
                    </p>
                  </div>
                  <div class="flex justify-center space-x-5">
                    <ButtonComponent @click="batal">Batalkan</ButtonComponent>
                    <ButtonComponent @click="lanjut">Lanjutkan</ButtonComponent>
                  </div>
                </div>
              </div>
            </div>
          </XyzTransition>
          <div class="absolute bottom-5 right-8 space-y-5">
            <IconMic />
            <IconInternet />
            <IconWebcam />
            <IconVirtualMachine />
          </div>
        </MainContent>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from '../../components/HeaderNavigation.vue'
import MainContent from '../../components/MainContent.vue'
import StepRecognitionComponent from '../../components/StepRecognitionComponent.vue'
import RecognitionComponent from '../../components/RecognitionComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import IconMic from '../../components/icons/IconMic.vue'
import IconInternet from '../../components/icons/IconInternet.vue'
import IconWebcam from '../../components/icons/IconWebcam.vue'
import IconVirtualMachine from '../../components/icons/IconVirtualMachine.vue'
import NavigationWeb from '../../components/NavigationWeb.vue'
import { ref } from 'vue'
import router from '../../router'
import { useDeviceStore, useRecognitionStore } from '../../store'
import { storeToRefs } from 'pinia'

export default {
  components: {
    HeaderNavigation,
    MainContent,
    StepRecognitionComponent,
    ButtonComponent,
    IconMic,
    IconInternet,
    IconWebcam,
    IconVirtualMachine,
    RecognitionComponent,
    NavigationWeb
  },
  setup() {
    const recognition = useRecognitionStore()
    const { foto, ambilFoto, extended, time } = storeToRefs(recognition)
    const verifikasi = ref('')
    const deviceStore = useDeviceStore()

    const ulang = () => {
      recognition.foto = ''
      recognition.time = 4
      recognition.ambilFoto = false
      verifikasi.value = ''
      recognition.extended = false
    }

    const onVerifikasi = () => {
      verifikasi.value = 'berhasil'
    }

    const batal = () => {
      recognition.foto = ''
      recognition.time = 4
      recognition.ambilFoto = false
      verifikasi.value = ''
      recognition.extended = false
      deviceStore.page = deviceStore.page - 1
      router.push(`/check-device`)
    }

    const lanjut = () => {
      deviceStore.page = deviceStore.page + 1
      router.push(`/photo-id-card`)
    }

    return {
      foto,
      ambilFoto,
      verifikasi,
      ulang,
      onVerifikasi,
      batal,
      lanjut,
      extended,
      time
    }
  }
}
</script>

<style></style>
