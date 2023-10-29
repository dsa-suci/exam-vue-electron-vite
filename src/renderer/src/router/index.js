import { createWebHashHistory, createRouter } from 'vue-router'

import Loginview from '../views/login/Loginview.vue'
import CheckDevice from '../views/checkDevice/CheckDeviceView.vue'
import CheckRecognition from '../views/checkRecognition/CheckRecognitionView.vue'
import PhotoIDCard from '../views/photoIDCard/PhotoIDCardView.vue'
import CheckEnvironment from '../views/checkEnvironment/CheckEnvironmentView.vue'
import TermCondition from '../views/termCondition/TermCondition.vue'
import ExamView from '../views/exam/ExamView.vue'
import DeviceInfo from '../components/DeviceInfoComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Loginview
  },
  {
    path: '/check-device',
    name: 'Check-Device',
    component: CheckDevice
  },
  {
    path: '/check-recognition',
    name: 'Check-Recognition',
    component: CheckRecognition
  },
  {
    path: '/photo-id-card',
    name: 'Photo-ID-Card',
    component: PhotoIDCard
  },
  {
    path: '/check-environment',
    name: 'Check-Environment',
    component: CheckEnvironment
  },
  {
    path: '/term-condition',
    name: 'Term-Condition',
    component: TermCondition
  },
  {
    path: '/exam',
    name: 'Exam',
    component: ExamView
  },
  {
    path: '/info',
    name: 'info',
    component: DeviceInfo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
