<template>
  <!-- <router-link
    :to="routeLink"
    active-class="border-l border-l-[6px] border-l-[#FF8B26] "
    class="p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200"
  >
    <slot />
</router-link> -->
  <div
    :id="id"
    :class="{
      'border-l border-l-[6px] border-l-[#FF8B26]': id == page,
      'p-2 text-white h-[87px] inline-flex items-center justify-center border-l-[6px] border-l-[#3F6588] transition-colors duration-200':
        id != page
    }"
  ></div>
</template>

<script>
export default {
  props: {
    routeLink: String
  }
}
</script>
