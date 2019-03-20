import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import Page from './Page.vue'

Vue.config.productionTip = false

Vue.use(antd)

Vue.component('Page', Page)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
