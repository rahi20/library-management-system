//import * as Vue from 'vue'
import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUser, faKey)

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

