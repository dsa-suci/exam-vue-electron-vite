<template>
  <p class="text-17 text-textContent font-chakra">{{ a }}</p>
  <!-- <SelectSearchLabel
    :label="'Device group'"
    :data="microphone.length ? microphone : []"
    :optionsValue="'label'"
    :optionsKey="'id'"
    v-model:formControlName="formName"
    placeholder="Select device group"
    :labelColor="labelColor"
    :loading="result.loading ? true : false"
    @onSelectChange="changeData"
    :theme="theme"
  /> -->
</template>

<script>
import { useDeviceStore } from '../store'
// import SelectSearchLabel from './SelectNoLabel.vue'
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

export default {
  components: {
    // SelectSearchLabel
  },
  props: {
    formControlName: [String, Number],
    theme: String,
    labelColor: String
  },
  setup(props, { emit }) {
    const a = ref()
    // console.log(microphone)

    onMounted(() => {
      const device = useDeviceStore
      const { microphone } = storeToRefs(device)
      a.value = microphone
      console.log(a.value)
    })

    const formName = computed({
      get() {
        return props.formControlName
      },
      set(value) {
        emit('update:formControlName', value)
      }
    })

    const changeData = (value) => {
      emit('onSelectChange', value)
    }

    return {
      a,
      formName,
      changeData
    }
  }
}
</script>

<style lang="scss" scoped></style>
