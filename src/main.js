import './assets/style.css'

import {createI18n} from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const i18n = createI18n({
    locale:'tr',
    fallbackLocale:'en',
    messages:{
        en:{
            message:{
                todo_name :"Todo App",
                add:"Add",
                place_holder : "Add a new task...",
                locale: "en-US"
            }
        },
        tr:{
            message:{
                todo_name : "Yapılacak Listesi",
                add: "Ekle",
                place_holder : "Yeni bir görev ekle...",
                locale:"tr-TR"
            }
        }
    }
})
  
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
