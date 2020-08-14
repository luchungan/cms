import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import {messages} from './components/common/i18n'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css'
import './components/common/directives'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI,{
  size:'small'
})
const i18n = new VueI18n({
  locale:'zh',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
