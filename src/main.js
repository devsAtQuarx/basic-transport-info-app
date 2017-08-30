// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import VueResource from 'vue-resource'
//import VueProgressBar from 'vue-progressbar'
import './assets/css/vuetify.min.css'
import Vuetify from 'vuetify'



Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuetify)

/*const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)
*/

let state_name = 'rajasthan';
Vue.http.options.root='https://orangebusv1-38083.firebaseio.com/'+state_name+ '/';

/* eslint-disable no-new */

const app = new Vue({
   render: h => h(App),
   router,
   store
}).$mount('#app');
