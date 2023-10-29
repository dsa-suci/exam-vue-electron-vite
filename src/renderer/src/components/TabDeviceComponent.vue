<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-17 font-chakra text-textContent" id="tabExample">
      <li class="mr-2">
        <button
          class="inline-block p-4 border-b-2 border-transparent"
          id="device-check-tab"
          type="button"
          aria-controls="device-check"
          aria-selected="false"
        >
          Device Check
        </button>
      </li>
      <li class="mr-2">
        <button
          class="inline-block p-4 border-b-2 border-transparent"
          id="device-info-tab"
          type="button"
          aria-controls="device-info"
          aria-selected="false"
        >
          Device Info
        </button>
      </li>
      <li class="mr-2">
        <button
          class="inline-block p-4 border-b-2 border-transparent"
          id="settings-tab"
          type="button"
          aria-controls="settings"
          aria-selected="false"
        >
          Settings
        </button>
      </li>
    </ul>
  </div>
  <div id="tabContentExample" class="mb-2">
    <div
      class="hidden overflow-auto max-h-[193px]"
      id="device-check"
      aria-labelledby="device-check-tab"
    >
      <DeviceCheckComponent />
    </div>
    <div
      class="hidden overflow-auto max-h-[193px]"
      id="device-info"
      aria-labelledby="device-info-tab"
    >
      <DeviceInfoComponent />
    </div>
    <div class="hidden overflow-auto max-h-[193px]" id="settings" aria-labelledby="settings-tab">
      <DeviceSettingComponent />
    </div>
  </div>
</template>

<script>
import DeviceCheckComponent from './DeviceCheckComponent.vue'
import DeviceInfoComponent from './DeviceInfoComponent.vue'
import DeviceSettingComponent from './DeviceSettingComponent.vue'
import { Tabs } from 'flowbite'
import { onMounted } from 'vue'

export default {
  components: {
    DeviceCheckComponent,
    DeviceInfoComponent,
    DeviceSettingComponent
  },
  setup() {
    onMounted(() => {
      const tabElements = [
        {
          id: 'device-check',
          triggerEl: document.querySelector('#device-check-tab'),
          targetEl: document.querySelector('#device-check')
        },
        {
          id: 'device-info',
          triggerEl: document.querySelector('#device-info-tab'),
          targetEl: document.querySelector('#device-info')
        },
        {
          id: 'settings',
          triggerEl: document.querySelector('#settings-tab'),
          targetEl: document.querySelector('#settings')
        }
      ]

      const options = {
        defaultTabId: null,
        activeClasses: 'font-chakraBold border-blue-600 dark:border-blue-500',
        inactiveClasses: 'font-chakra dark:border-transparent border-transparent',
        onShow: () => {}
      }
      const tabs = new Tabs(tabElements, options)

      tabs.show('device-check')

      // get the tab object based on ID
      // tabs.getTab('contacts')

      // get the current active tab object
      // tabs.getActiveTab()
    })
  }
}
</script>

<style></style>
