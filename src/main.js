// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from "echarts"
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  echarts,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
