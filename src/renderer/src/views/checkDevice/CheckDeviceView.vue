<template>
  <div class="flex h-screen w-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderNavigation />

      <div class="flex h-full">
        <NavigationWeb />

        <MainContent class="bg-content w-full">
          <h1 class="pt-6 text-center text-title font-chakraSemibold text-25">
            Pemeriksaan Perangkat Peserta
          </h1>
          <p class="px-32 text-center text-textContent font-chakra text-17">
            Sistem akan memeriksa kesiapan perangkat ujian yang terdiri dari mikrofon, internet dan
            webcam <br class="hidden xl:block" />
            serta bebas dari penggunaan mesin virtual
          </p>
          <div class="flex justify-center pt-8 space-x-14 items-center">
            <IconUser />

            <div class="flex flex-col space-y-5">
              <TabDeviceComponent />
              <div class="bg-bgGreen w-full h-[57px] py-2" v-if="device == true">
                <p class="text-sm text-center text-textKet font-chakra">
                  Perangkat Anda siap digunakan untuk ujian.
                </p>
                <p class="text-sm text-center text-textKet font-chakra">
                  silahkan klik tombol
                  <span class="font-chakraBold">lanjutkan</span>
                </p>
              </div>
              <div class="bg-bgGagal w-full h-[57px] py-2" v-else>
                <p class="text-sm text-center text-textKet font-chakra">
                  Perangkat Anda belum memenuhi untuk ujian.
                </p>
                <p class="text-sm text-center text-textKet font-chakra">
                  silahkan klik tombol
                  <span class="font-chakraBold">"Batalkan"</span>
                </p>
              </div>
              <div class="flex justify-end space-x-5 pb-2">
                <ButtonComponent @click="batal">Batalkan</ButtonComponent>
                <ButtonComponent @click="lanjut">Lanjutkan</ButtonComponent>
              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from '../../components/HeaderNavigation.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import MainContent from '../../components/MainContent.vue'
import IconUser from '../../components/icons/IconUser.vue'
import TabDeviceComponent from '../../components/TabDeviceComponent.vue'
import NavigationWeb from '../../components/NavigationWeb.vue'
import router from '../../router'
import { storeToRefs } from 'pinia'
import { useDeviceStore } from '../../store'

export default {
  components: {
    HeaderNavigation,
    MainContent,
    ButtonComponent,
    IconUser,
    TabDeviceComponent,
    NavigationWeb
  },
  setup() {
    const deviceStore = useDeviceStore()
    const { device } = storeToRefs(deviceStore)

    const batal = () => {
      router.push(`/`)
    }
    const lanjut = () => {
      deviceStore.page = deviceStore.page + 1
      router.push(`/check-recognition`)
    }

    return {
      device,
      batal,
      lanjut
    }
  }
}
</script>

<style></style>
