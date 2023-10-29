<template>
  <button
    type="submit"
    :class="[vClass, size, color]"
    class="flex justify-center items-center text-textBtn focus:outline-none font-chakra text-15 text-center px-3 py-2.5 rounded-tl-xl rounded-br-xl"
    :disabled="loading"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    vClass: String,
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'w-24 h-8'
    },
    color: {
      type: String,
      default: 'bg-btnPrimary'
    }
  },
  setup() {
    return {}
  }
}
</script>
