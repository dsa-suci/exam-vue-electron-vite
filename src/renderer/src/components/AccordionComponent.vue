<template>
  <div
    id="accordion-flush"
    data-accordion="collapse"
    data-active-classes="text-17 text-textContent font-chakra dark:text-white"
    data-inactive-classes="text-17 text-textContent font-chakra dark:text-gray-400"
  >
    <h2
      id="accordion-flush-heading-1"
      class="text-17 text-textContent font-chakra w-280 xl:w-330 flex items-center cursor-default justify-between pb-3 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    >
      <span>{{ label }}</span>
      <button
        type="button"
        :data-accordion-target="target"
        :aria-expanded="open"
        :aria-controls="id"
        @click="openAccordion"
      >
        <svg
          v-if="dataSelect.length != 0"
          class="w-3 h-3 shrink-0 cursor-pointer"
          :class="!open ? 'rotate-180' : ''"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div :id="id" v-show="open" aria-labelledby="accordion-flush-heading-1">
      <div class="py-2 border-b border-gray-200 dark:border-gray-700 w-280 xl:w-330">
        <ul class="text-17 text-textContent font-chakra">
          <li
            v-for="item in dataSelect"
            :key="item.id"
            class="py-1 cursor-pointer flex justify-between gap-3 items-center"
          >
            {{ item.label }}
            <input
              v-model="valueName"
              :id="item.id"
              :value="item.id"
              type="radio"
              :name="name"
              @change="handleChange(item.id)"
              class="w-4 h-4 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  props: {
    label: String,
    dataSelect: Array,
    name: String,
    value: String,
    id: String,
    target: String
  },
  setup(props, { emit }) {
    const open = ref(false)
    const valueName = computed({
      get() {
        return props.value
      },
      set(value) {
        emit('update:value', value)
      }
    })

    const handleChange = (item) => {
      emit('update:value', item)
      emit('handleChange', item)
    }

    const openAccordion = () => {
      open.value = !open.value
    }

    return {
      valueName,
      handleChange,
      openAccordion,
      open
    }
  }
}
</script>

<style></style>
