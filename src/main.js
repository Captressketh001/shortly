import { createApp } from 'vue'
import App from './App.vue'

import '../src/assets/styles.css'

import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAos from 'vue-aos'

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueAos).mount('#app')
