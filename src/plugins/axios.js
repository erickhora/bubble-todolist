import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://bubble-list-72cfa.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})