<template>
  <div class="relative" ref="target">
    <div class="flex justify-between items-center">
      <!-- <p class="text-17 text-textContent font-chakra w-52" @click="openSelect">{{ label }}</p> -->
      <input
        type="text"
        id="value"
        @click="openSelect"
        :value="value"
        :placeholder="placeholder"
        class="text-17 text-textContent font-chakra bg-lightMode border-none focus:outline-none focus:ring-0 focus:border-lightMode peer"
      />
      <div v-if="data.length != 0">
        <svg
          v-if="!showOptions"
          class="w-5 h-5"
          :class="theme == 'default' ? 'text-gray-600' : 'text-gray-100'"
          @click="openSelect"
          fill="none"
          stroke="#607080"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <svg
          v-if="showOptions"
          class="w-5 h-5"
          :class="theme == 'default' ? 'text-gray-600' : 'text-gray-100'"
          @click="closeClick"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>
    </div>

    <div
      v-show="showOptions"
      class="text-17 text-textContent font-chakra w-52 z-50 mt-1 bg-lightMode border border-gray-300 max-h-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
    >
      <ul class="py-1" :class="addClass">
        <li
          v-for="(item, index) in dataSelect"
          :key="index"
          @click="handleClick(item)"
          class="px-3 py-2 cursor-pointer hover:bg-gray-300 flex justify-between items-center"
          :class="{ 'bg-gray-200': item[optionsKey] == formControlName }"
        >
          {{ item[optionsValue] }}
          <!-- <input
            :checked="value"
            id="default-radio-2"
            type="radio"
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          /> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { onClickOutside } from '@vueuse/core'
import { computed, onMounted, ref, toRefs, watchEffect } from 'vue'

export default {
  props: {
    addClass: String,
    label: String,
    theme: {
      type: String,
      default: 'default'
    },
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
    loading: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const showOptions = ref(false)
    const target = ref(null)
    const value = ref('')
    const searchTerm = ref('')
    const { data, optionsValue, optionsKey, formControlName } = toRefs(props)

    onMounted(() => {
      // data.value.forEach((db) => {
      //   console.log(db[0])
      //   // if (db[optionsKey.value] == formControlName.value) {
      //   //   value.value = db[0]
      //   // }
      // })
    })

    watchEffect(() => {
      data.value.forEach((db) => {
        if (db[optionsKey.value] == formControlName.value) {
          value.value = db[optionsValue.value]
        }
      })

      if (formControlName.value == '') {
        value.value = ''
      }
    })

    // onClickOutside(target, (event) => {
    //   if (event) {
    //     showOptions.value = false
    //   }
    // })

    const dataSelect = computed(() => {
      return data.value.filter((item) => {
        return item[optionsValue.value]
      })
    })

    const handleInput = (evt) => {
      value.value = evt.target.value
    }

    const openSelect = () => {
      if (!showOptions.value) {
        showOptions.value = true
      }
    }

    const handleClick = (item) => {
      value.value = item[optionsValue.value]
      // showOptions.value = false
      emit('update:formControlName', item[optionsKey.value])
      emit('onSelectChange', item[optionsKey.value])
    }

    const closeClick = () => {
      showOptions.value = false
    }

    return {
      showOptions,
      searchTerm,
      target,
      handleInput,
      handleClick,
      openSelect,
      value,
      dataSelect,
      closeClick
    }
  }
}
</script>

<style lang="scss" scoped></style>
