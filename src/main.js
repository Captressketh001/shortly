import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

import '../src/assets/styles.css'

import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAos from 'vue-aos'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueAxios, axios).use(store).use(VueAos).use(VueClipboard).mount('#app')
