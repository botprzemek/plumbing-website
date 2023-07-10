import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.productionTip = false
app.devtools = false

app.use(router)

app.mount('body')
