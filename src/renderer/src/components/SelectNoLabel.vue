<template>
  <div class="">
    <SelectSearch
      :label="label"
      :data="data"
      :optionsValue="optionsValue"
      :optionsKey="optionsKey"
      v-model:formControlName="formName"
      :placeholder="placeholder"
      :loading="loading"
      @onSelectChange="changeData"
      :theme="theme"
      :addClass="addClass"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import SelectSearch from './SelectSearch.vue'

export default {
  components: {
    SelectSearch
  },

  props: {
    addClass: String,
    label: String,
    data: {
      type: Array,
      required: true
    },
    placeholder: String,
    optionsValue: {
      type: String,
      required: true
    },
    optionsKey: String,
    formControlName: [String, Number],
    loading: Boolean,
    theme: {
      type: String
    }
  },
  setup(props, { emit }) {
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
      formName,
      changeData
    }
  }
}
</script>
