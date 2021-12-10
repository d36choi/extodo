import {createApp} from 'vue'
import App from './App.vue'
import store from './store.js'

//font-awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.mount('#app')
