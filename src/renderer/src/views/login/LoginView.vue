<template>
  <div class="px-10 main">
    <div class="flex justify-between items-center px-4 pt-16">
      <img class="w-20 h-20" src="../../assets/electron.png" />
      <div class="flex justify-between items-center gap-5">
        <img class="w-24 h-24" src="../../assets/vue.png" />
        <img class="w-24 h-24" src="../../assets/vite.png" />
      </div>
    </div>
    <div class="flex justify-between pt-12 space-x-9">
      <div class="basis-10/12">
        <h1 class="text-2xl font-chakra text-primary dark:text-textSistem">Sistem Ujian Online</h1>
        <p class="font-chakra text-15 text-primary dark:text-textSistem">
          Dengan Online Proctoring
        </p>
        <p class="pt-8 leading-snug font-chakra text-sm/loose text-primary dark:text-textSistem">
          Sistem ini dilengkapi dengan Online Proctoring. Dengan demikian, aktivitas Anda selama
          ujian selalu diawasi secara online dengan menggunakan teknologi berbasis kecerdasan buatan
          (Artificial Intelligence).<br />
          Anda akan dimonitor secara auditorial dan visual, sehingga<br />
          akan segera terdeteksi jika ada indikasi bahwa Anda<br />
          melakukan sesuatu yang tidak semestinya selama<br />
          pelaksanaan ujian, seperti menggunakan joki, membuka catatan, berbicara dengan orang lain
          dan lain-lain.
        </p>
        <p class="leading-snug font-chakra text-sm/loose text-primary dark:text-textSistem"></p>
        <p class="pt-3 leading-snug font-chakra text-sm/loose text-primary dark:text-textSistem">
          Oleh karena itu, jagalah integritas Anda sebaik-baiknya.<br />
          Kerjakan ujian Anda dengan jujur dan selalu ikuti ketentuan-ketentuan yang berlaku.
        </p>
      </div>
      <div class="basis-full">
        <CardComponent>
          <h1 class="mb-3 text-2xl text-center font-chakra text-secondary">LOGIN</h1>
          <Form>
            <div class="flex justify-between space-x-5">
              <InputWithLabel label="NIM" name="nim" type="text" />
              <InputWithLabel label="Kode Mata Kuliah" name="kode_matkul" type="text" />
            </div>
            <div class="flex justify-between space-x-5">
              <InputWithLabel label="Password" name="password" type="password" />
              <InputWithLabel label="Masa Ujian" name="masa_ujian" type="text" />
            </div>
            <div class="flex justify-center pt-5">
              <ButtonComponent
                vClass="font-outline-1-black dark:font-outline-1-white"
                @click="onLogin"
                >Login</ButtonComponent
              >
            </div>

            <p class="px-3 pt-3 text-xs font-thin font-chakra text-secondary">
              <span class="font-chakraBold">Catatan :</span> Sangat disarankan Anda memilih
              tempat/ruangan ujian dengan privasi yang memadai dan tenang.Hindari mengenakan penutup
              wajah seperti masker, kacamata hitam atau aksesoris lainnya.
            </p>
            <p class="px-3 pt-3 text-xs font-thin font-chakra text-secondary">
              Jika ada kendala, hubungi 021 xxx xxx xxx atau email info@exam.com
            </p>
          </Form>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import CardComponent from '../../components/CardComponent.vue'
import InputWithLabel from '../../components/InputWithLabel.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import router from '../../router'
import { useDeviceStore } from '../../store'

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    CardComponent,
    InputWithLabel,
    ButtonComponent
  },
  setup() {
    const device = useDeviceStore()
    const onLogin = () => {
      device.page
      router.push(`/check-device`)
    }

    return {
      onLogin
    }
  }
}
</script>

<style></style>
