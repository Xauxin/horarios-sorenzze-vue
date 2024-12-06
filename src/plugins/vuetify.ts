/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'
import { myCustomLightTheme, myCustomDarkTheme } from './customThemes/customDarkAndLight'
import { socialIcons } from './customIcons/socials'
import { aliases, md } from 'vuetify/iconsets/md'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes:{
      myCustomLightTheme,
      myCustomDarkTheme
    }
  },
  icons:{
    defaultSet: 'md',
    aliases:{...aliases,...socialIcons},
    sets:{  
      md
    }
  },
})
