<template>
  <svg :class="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.39997 19.78C7.60395 19.78 8.57997 18.804 8.57997 17.6C8.57997 16.396 7.60395 15.42 6.39997 15.42C5.19599 15.42 4.21997 16.396 4.21997 17.6C4.21997 18.804 5.19599 19.78 6.39997 19.78Z"
      :fill="color"
    />
    <path
      d="M4.21997 4.22V7.05C11.25 7.05 16.95 12.75 16.95 19.78H19.78C19.78 11.19 12.81 4.22 4.21997 4.22ZM4.21997 9.88V12.71C8.11997 12.71 11.29 15.88 11.29 19.78H14.12C14.12 14.31 9.68997 9.88 4.21997 9.88Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'w-6  h-6'
    },
    color: {
      type: String,
      default: '#3F6588'
    }
  }
}
</script>

<style></style>
