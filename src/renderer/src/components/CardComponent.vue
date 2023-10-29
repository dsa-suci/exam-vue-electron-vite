<template>
  <div
    class="p-5 rounded-lg shadow-md transition duration-300 border dark:border-white"
    :class="[addClass, background, borderColor]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    addClass: [Array, String],
    background: {
      type: String,
      default: 'bg-bgCard'
    },
    borderColor: {
      type: String,
      default: 'border bg-bgCard'
    }
  }
}
</script>
