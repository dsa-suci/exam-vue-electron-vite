<template>
  <div class="max-h-full h-full w-full absolute md:block md:static">
    <div class="flex-row bg-lightMode h-full pt-5 pb-10">
      <slot> </slot>

      <div class="absolute w-full bg-lightMode bottom-0 pb-[5px] px-2 items-center space-x-1">
        <img class="w-8 h-8" alt="logo" src="../../src/assets/vite.png" />
      </div>
    </div>
  </div>
</template>
