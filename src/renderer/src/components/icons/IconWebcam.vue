<template>
  <svg :class="size" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 10.125L23.625 7.875V19.125L18 16.875M4.5 6.1875H16.875C17.4963 6.1875 18 6.69118 18 7.3125V19.6875C18 20.3088 17.4963 20.8125 16.875 20.8125H4.5C3.87868 20.8125 3.375 20.3088 3.375 19.6875V7.3125C3.375 6.69118 3.87868 6.1875 4.5 6.1875Z"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'w-27 h-27'
    },
    color: {
      type: String,
      default: '#3F6588'
    }
  }
}
</script>

<style></style>
