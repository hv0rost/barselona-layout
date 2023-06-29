import { createApp } from 'vue'
import App from "./App.vue"
import store from "../src/store/index"

const app = createApp(App)
app.use(store).mount('#app')
