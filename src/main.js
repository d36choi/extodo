import {createApp} from 'vue'
import App from './App.vue'
import store from './store.js'

//font-awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSun, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faSun, faCoffee)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.mount('#app')
