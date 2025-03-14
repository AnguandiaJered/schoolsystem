/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import "@mdi/font/css/materialdesignicons.min.css";
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // theme: {
  //   defaultTheme: 'dark',
  // },
    icons: {
        iconfont: 'md' || 'mdi'
    },
    theme: {
      dark: false,
      light:false
    },
})
