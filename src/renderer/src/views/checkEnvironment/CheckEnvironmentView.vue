<template>
  <div class="flex h-screen w-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <HeaderNavigation />
      <div class="flex h-full">
        <NavigationWeb />

        <MainContent class="bg-content w-full">
          <h1 class="text-title font-chakraSemibold text-25 text-center">Verifikasi Peserta</h1>
          <p class="text-textContent font-chakra text-17 text-center px-32">
            Langkah 3: Rekam video sekeliling anda menggunakan perangkat ujian<br />
            (webcam) dengan gerakan memutar 360°
          </p>
          <XyzTransition appear duration="auto">
            <div class="grid grid-cols-2 pt-10">
              <div xyz="fade left-3 stagger">
                <StepCheckEnvironment
                  :addClass="mulaiRekam == false || vid != '' ? 'xyz-none' : 'xyz-out'"
                />
              </div>

              <div
                :class="
                  extended && vid == ''
                    ? 'absolute justify-self-center xyz-in'
                    : 'flex flex-col pt-5 items-center justify-center'
                "
                xyz="fade right-100% duration-10 stagger"
              >
                <EnvironmentComponent
                  xyz="small-25% stagger delay-15 duration-10"
                  :newClass="mulaiRekam == false || vid != '' ? 'xyz-none' : 'xyz-in'"
                />
                <div v-if="!mulaiRekam && selesaiRekam" class="flex space-x-5 xyz-nested">
                  <ButtonComponent @click="onReply">Ulangi</ButtonComponent>
                  <ButtonComponent @click="onNext">Lanjutkan</ButtonComponent>
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
import StepCheckEnvironment from '../../components/StepCheckEnvironment.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import IconMic from '../../components/icons/IconMic.vue'
import IconInternet from '../../components/icons/IconInternet.vue'
import IconWebcam from '../../components/icons/IconWebcam.vue'
import IconVirtualMachine from '../../components/icons/IconVirtualMachine.vue'
import EnvironmentComponent from '../../components/EnvironmentComponent.vue'
import NavigationWeb from '../../components/NavigationWeb.vue'
import router from '../../router'
import { useDeviceStore, useEnvironmentStore } from '../../store'
import { storeToRefs } from 'pinia'

export default {
  components: {
    HeaderNavigation,
    MainContent,
    StepCheckEnvironment,
    ButtonComponent,
    IconMic,
    IconInternet,
    IconWebcam,
    IconVirtualMachine,
    EnvironmentComponent,
    NavigationWeb
  },
  setup() {
    const environment = useEnvironmentStore()
    const { mulaiRekam, selesaiRekam, vid, extended } = storeToRefs(environment)

    const deviceStore = useDeviceStore()

    const onReply = () => {
      environment.mulaiRekam = false
      environment.selesaiRekam = false
      environment.time = 4
      environment.vid = ''
      environment.extended = false
    }
    const onNext = () => {
      deviceStore.page = deviceStore.page + 1
      router.push(`/term-condition`)
    }

    return {
      mulaiRekam,
      selesaiRekam,
      vid,
      extended,
      onReply,
      onNext
    }
  }
}
</script>

<style></style>
