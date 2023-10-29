<template>
  <div class="pl-20" :class="addClass">
    <ol class="relative border-l-4 space-y-5 border-borderBlue dark:border-gray-700">
      <li class="pt-5 ml-4">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">Posisikan wajah anda tepat pada frame</p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Klik tombol <span class="font-chakraBold">“Mulai”</span>
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Tunggu sampai hitungan ke-3 untuk mengambil foto anda
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Klik tombol <span class="font-chakraBold">“Verifikasi”</span> untuk melanjutkan atau
          tombol <span class="font-chakraBold">“Ulangi”</span> untuk mengulang pengambilan foto
        </p>
      </li>
      <li class="ml-4 items-center">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Jika verifikasi gagal silakan klik tombol <span class="font-chakraBold">“Ulangi”</span>
        </p>
      </li>
      <li class="ml-4 pb-3">
        <div
          class="absolute w-4 h-4 bg-step rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Jika verifikasi berhasil silakan klik tombol
          <span class="font-chakraBold">“Lanjutkan”</span>
        </p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    addClass: String
  }
}
</script>

<style></style>
