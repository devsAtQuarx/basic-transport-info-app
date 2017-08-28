import Vue from 'vue'
import Router from 'vue-router'
//import from_city from '@/components/1.1_from_city'
//import to_city from '@/components/1.2_to_city'
//import bus from '@/components/2_bus'
//import redirect from '@/components/redirect.vue'

Vue.use(Router)

//lazy laoding
const from_city = resolve => {
  require.ensure(['@/components/1.1_from_city'],()=>{
      resolve(require('@/components/1.1_from_city'));
  });
};

const to_city = resolve => {
  require.ensure(['@/components/1.2_to_city'],()=>{
      resolve(require('@/components/1.2_to_city'));
  });
};

const bus = resolve => {
  require.ensure(['@/components/2_bus'],()=>{
      resolve(require('@/components/2_bus'));
  });
};

const redirect = resolve => {
  require.ensure(['@/components/redirect.vue'],()=>{
      resolve(require('@/components/redirect.vue'));
  });
};

export default new Router({
  routes: [
    {path: '/', component: from_city},
    {path:'/to_city', component:to_city},
    {path: '/bus', component: bus},
    {path:'/redirect', component:redirect}
  ]
})
