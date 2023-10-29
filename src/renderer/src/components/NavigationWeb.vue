<template>
  <aside
    class="inset-y-0 z-20 w-[85px] duration-200 flex-shrink-0 h-screen overflow-hidden bg-[#D9D9D9] md:static focus:outline-none"
  >
    <nav class="flex flex-col flex-shrink-0 h-full px-4 py-4 border-r">
      <div class="overflow-y-auto overflow-x-hidden" id="style-1">
        <div class="flex flex-col items-center justify-center flex-1 space-y-1">
          {{ page }}
          <div
            class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
            :class="{
              'border-l border-l-[6px] border-l-[#FF8B26]': page == 1
            }"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 23.9999C28.1333 23.9999 29.32 22.7999 29.32 21.3333L29.3333 7.99992C29.3333 6.51992 28.1333 5.33325 26.6667 5.33325H5.33333C3.85333 5.33325 2.66667 6.51992 2.66667 7.99992V21.3333C2.66667 22.7999 3.85333 23.9999 5.33333 23.9999H0V26.6666H32V23.9999H26.6667ZM5.33333 21.3333V7.99992H26.6667V21.3466L5.33333 21.3333ZM17.3333 12.1733C12.1467 12.8933 10.08 16.4399 9.33333 19.9999C11.1867 17.5066 13.6267 16.3733 17.3333 16.3733V19.2933L22.6667 14.3066L17.3333 9.33325V12.1733Z"
                fill="#3F6588"
              />
            </svg>
          </div>
          <div
            class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
            :class="{
              'border-l border-l-[6px] border-l-[#FF8B26]': page == 2
            }"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6667 17.3334C13.6667 18.2534 12.92 19.0001 12 19.0001C11.08 19.0001 10.3333 18.2534 10.3333 17.3334C10.3333 16.4134 11.08 15.6667 12 15.6667C12.92 15.6667 13.6667 16.4134 13.6667 17.3334ZM20 15.6667C19.08 15.6667 18.3333 16.4134 18.3333 17.3334C18.3333 18.2534 19.08 19.0001 20 19.0001C20.92 19.0001 21.6667 18.2534 21.6667 17.3334C21.6667 16.4134 20.92 15.6667 20 15.6667ZM29.3333 16.0001C29.3333 23.3601 23.36 29.3334 16 29.3334C8.64001 29.3334 2.66667 23.3601 2.66667 16.0001C2.66667 8.64008 8.64001 2.66675 16 2.66675C23.36 2.66675 29.3333 8.64008 29.3333 16.0001ZM14.2133 5.49341C16.08 8.58675 19.4667 10.6667 23.3333 10.6667C23.9467 10.6667 24.5467 10.6001 25.12 10.5067C23.2533 7.41341 19.8667 5.33341 16 5.33341C15.3867 5.33341 14.7867 5.40008 14.2133 5.49341ZM5.89334 12.6267C8.17334 11.3334 9.93334 9.22675 10.7733 6.70675C8.49334 8.00008 6.73334 10.1067 5.89334 12.6267ZM26.6667 16.0001C26.6667 14.9601 26.5067 13.9601 26.2267 13.0134C25.2933 13.2134 24.3333 13.3334 23.3333 13.3334C19.16 13.3334 15.44 11.4134 12.9867 8.41341C11.5867 11.8267 8.8 14.5067 5.33334 15.8134C5.34667 15.8667 5.33334 15.9334 5.33334 16.0001C5.33334 21.8801 10.12 26.6667 16 26.6667C21.88 26.6667 26.6667 21.8801 26.6667 16.0001Z"
                fill="#3F6588"
              />
            </svg>
          </div>
          <div
            class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
            :class="{
              'border-l border-l-[6px] border-l-[#FF8B26]': page == 3
            }"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3333 4H2.66667C1.2 4 0 5.2 0 6.66667V25.3333C0 26.8 1.2 28 2.66667 28H29.3333C30.8 28 31.9867 26.8 31.9867 25.3333L32 6.66667C32 5.2 30.8 4 29.3333 4ZM29.3333 25.3333H2.66667V6.66667H29.3333V25.3333ZM28 8H18.6667V14.6667H28V8ZM26.6667 10.6667L23.3333 13L20 10.6667V9.33333L23.3333 11.6667L26.6667 9.33333V10.6667ZM12 16C14.2 16 16 14.2 16 12C16 9.8 14.2 8 12 8C9.8 8 8 9.8 8 12C8 14.2 9.8 16 12 16ZM12 10.6667C12.7333 10.6667 13.3333 11.2667 13.3333 12C13.3333 12.7333 12.7333 13.3333 12 13.3333C11.2667 13.3333 10.6667 12.7333 10.6667 12C10.6667 11.2667 11.2667 10.6667 12 10.6667ZM20 22.12C20 18.7867 14.7067 17.3467 12 17.3467C9.29333 17.3467 4 18.7867 4 22.12V24H20V22.12ZM7.30667 21.3333C8.29333 20.6667 10.2667 20 12 20C13.7333 20 15.6933 20.6533 16.6933 21.3333H7.30667Z"
                fill="#3F6588"
              />
            </svg>
          </div>
          <div
            class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
            :class="{
              'border-l border-l-[6px] border-l-[#FF8B26]': page == 4
            }"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4ZM18.8533 15.8133L14.8533 20.9733L12 17.52L8 22.6667H24L18.8533 15.8133Z"
                fill="#3F6588"
              />
            </svg>
          </div>
          <div
            class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
            :class="{
              'border-l border-l-[6px] border-l-[#FF8B26]': page == 5
            }"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33334 3.99992H5.33334V7.99992H2.66667V1.33325H9.33334V3.99992ZM29.3333 7.99992V1.33325H22.6667V3.99992H26.6667V7.99992H29.3333ZM9.33334 27.9999H5.33334V23.9999H2.66667V30.6666H9.33334V27.9999ZM26.6667 23.9999V27.9999H22.6667V30.6666H29.3333V23.9999H26.6667ZM22.6667 7.99992H9.33334V23.9999H22.6667V7.99992ZM25.3333 23.9999C25.3333 25.4666 24.1333 26.6666 22.6667 26.6666H9.33334C7.86667 26.6666 6.66667 25.4666 6.66667 23.9999V7.99992C6.66667 6.53325 7.86667 5.33325 9.33334 5.33325H22.6667C24.1333 5.33325 25.3333 6.53325 25.3333 7.99992V23.9999ZM20 10.6666H12V13.3333H20V10.6666ZM20 14.6666H12V17.3333H20V14.6666ZM20 18.6666H12V21.3333H20V18.6666Z"
                fill="#3F6588"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useDeviceStore, useRecognitionStore } from '../store'

export default {
  name: 'NavigationWeb',
  components: {},
  setup() {
    const recognitionStore = useRecognitionStore()
    const { foto } = storeToRefs(recognitionStore)
    const deviceStore = useDeviceStore()
    const { page } = storeToRefs(deviceStore)

    return {
      page,
      foto
    }
  }
}
</script>
<style>
#style-1::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

#style-1::-webkit-scrollbar {
  width: 6px;
  display: none;
}

#style-1::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
</style>
