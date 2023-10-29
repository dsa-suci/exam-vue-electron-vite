<template>
  <FooterExam>
    <div class="px-4 h-full">
      <div
        class="container relative border-borderBlue border-2 bg-environment h-full overflow-y-auto px-3"
      >
        <div class="flex justify-end pr-2 pt-5">
          <div
            class="box absolute cursor-move border-2 border-borderBlue w-251 h-262 pt-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  </FooterExam>
</template>

<script>
import { onMounted } from 'vue'
import FooterExam from '../../components/FooterExam.vue'

export default {
  components: {
    FooterExam
  },
  setup() {
    onMounted(() => {
      const el = document.querySelector('.box')
      let newPosX = 0,
        newPosY = 0,
        startPosX = 0,
        startPosY = 0

      el.addEventListener('mousedown', function (e) {
        e.preventDefault()

        startPosX = e.clientX
        startPosY = e.clientY

        document.addEventListener('mousemove', mouseMove)

        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', mouseMove)
        })
      })

      function mouseMove(e) {
        newPosX = startPosX - e.clientX
        newPosY = startPosY - e.clientY

        startPosX = e.clientX
        startPosY = e.clientY

        el.style.top = el.offsetTop - newPosY + 'px'
        el.style.left = el.offsetLeft - newPosX + 'px'
      }
    })
  }
}
</script>

<style></style>
