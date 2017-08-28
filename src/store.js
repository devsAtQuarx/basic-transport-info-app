import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state:{
    from_city : {
      name : ''
    },
    to_city : {
      name : ''
    },
    recent : [],
    direct_bus_route_str : '',
    show_p_bar : false,
    flg : false, //redirect flag
    flg2: false
  },
  //STATE ends

  getters:{
    from_city : state=>{
      return state.from_city
    },
    to_city :state =>{
      return state.to_city
    },
    recent : state =>{
      return state.recent
    },
    direct_bus_route_str : state => {
      return state.direct_bus_route_str
    },
    show_p_bar : state => {
      return state.show_p_bar
    }
  }
  //GETTERS ends

})
