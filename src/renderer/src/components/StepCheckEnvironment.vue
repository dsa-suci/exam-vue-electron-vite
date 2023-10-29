<template>
  <div class="pl-20" :class="addClass">
    <ol class="relative border-l-4 space-y-5 border-borderBlue dark:border-gray-700">
      <li class="pt-5 ml-4">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Posisikan kamera/webcam anda menghadap lingkungan sekitar.
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Klik tombol <span class="font-chakraBold">“Mulai”</span>.
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Tunggu sampai hitungan ke-3 untuk mengambil lingkungan sekitar.
        </p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Lakukan gerakan memutar 360° untuk merekam lingkungan ujian anda.
        </p>
      </li>
      <li class="ml-4 items-center">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Klik tombol <span class="font-chakraBold">“Selesai”</span> apabila sudah cukup merekam
          lingkungan sekitar.
        </p>
      </li>
      <li class="ml-4 pb-3">
        <div
          class="absolute w-4 h-4 bg-grayLight rounded-full mt-1.5 -left-2.5 border border-textContent"
        ></div>
        <p class="text-17 font-chakra text-textContent">
          Silakan klik tombol <span class="font-chakraBold">“Lanjutkan”</span> untuk ketahap
          selanjutnya.
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
