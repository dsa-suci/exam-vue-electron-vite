<template>
  <svg :class="size" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.25 13.5C20.25 17.2279 17.2279 20.25 13.5 20.25M13.5 20.25C9.77208 20.25 6.75 17.2279 6.75 13.5M13.5 20.25V23.625M13.5 23.625H16.875M13.5 23.625H10.125M16.875 6.75V13.5C16.875 15.364 15.364 16.875 13.5 16.875C11.636 16.875 10.125 15.364 10.125 13.5V6.75C10.125 4.88604 11.636 3.375 13.5 3.375C15.364 3.375 16.875 4.88604 16.875 6.75Z"
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
