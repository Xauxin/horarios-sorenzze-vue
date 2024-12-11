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

//Temas
import { myCustomLightTheme, myCustomDarkTheme } from './customThemes/customDarkAndLight'

//Icones
import { socialIcons } from './customIcons/socials'
import { aliases, md } from 'vuetify/iconsets/md'

//Componentes
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VCalendar, VCalendarMonthDay } from 'vuetify/labs/VCalendar'

//Locale
import { createI18n, useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import messages from './messages/messages'


const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'pt',
  fallbackLocale: 'en',
  messages: messages
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
date:{
  locale: {
    pt: 'pt-BR',
  }
},
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
  components:{
    VDateInput,
    VTimePicker,
    VCalendar, 
    VCalendarMonthDay 
  }
})
