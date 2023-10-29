<template>
  <div class="px-3">
    <label :for="name" class="text-base font-chakra text-secondary">{{ label }}</label>
    <Field
      :as="as"
      :type="type"
      :id="name"
      :name="name"
      v-model="valueName"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg transition duration-300 block w-48 xl:w-64 h-8 p-2.5"
      :placeholder="placeholder"
      :rows="rows"
      :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500':
          error,
        'focus:ring-blue-800 focus:border-red-800': !error
      }"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ error }}</p>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
import { computed } from 'vue'

export default {
  components: {
    Field
  },
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    name: String,
    error: String,
    as: String,
    rows: Number,
    value: String
  },
  setup(props, { emit }) {
    const valueName = computed({
      get() {
        return props.value
      },
      set(value) {
        emit('update:value', value)
      }
    })

    return {
      valueName
    }
  }
}
</script>
