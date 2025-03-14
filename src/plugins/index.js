/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'

import Toasted from 'vue-toasted';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vuex from 'vuex'
// import VueApexCharts from 'vue-apexcharts'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Vuex)
    // .use(Toasted)
    .use(VueSweetalert2)
    // .use(VueApexCharts)
    // .component('apexchart', VueApexCharts)
}
