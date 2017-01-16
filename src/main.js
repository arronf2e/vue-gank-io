// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
import routes from './routers'
import VueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload'
import { loadFromLocal } from './common/js/store'
import './common/css/index.styl'; // 引入公共样式

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(infiniteScroll)

Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

const router = new VueRouter({
  'linkActiveClass': 'active',
  routes
})
/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
