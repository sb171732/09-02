import { createStore } from 'vuex'

export default createStore({
  state: {
      // состояние
      counter:0,
      users:[]
  },
  getters: {
     // 
  },
  mutations: {
      //  мутации 
      set_inc(state){
        state.counter++
      },
      set_dec(state){
        state.counter--
      },
      set_users(state,data){
        state.users = data
      },
      set_count(state,data){
        state.counter = data
        
      }
  },
  actions: {
      // события
      Inc({commit}){
          commit('set_inc')
      },
      Dec({commit}){
          commit('set_dec')
      },
      getUsers({commit}){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost/bdtest/?get_users", requestOptions)
          .then(response => response.json())
          .then(result => commit('set_users',result))
          .catch(error => console.log('error', error));
      },
      getCounter({commit}){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost/bdtest/?get_counter", requestOptions)
          .then(response => response.json())
          .then(result => commit('set_count',result))
          .catch(error => console.log('error', error));
      },
      saveCounter({commit},data){
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost/bdtest/?save_counter="+data, requestOptions)
          .then(response => response.json())
          .then(result => commit('set_count',result))
          .catch(error => console.log('error', error));
      },
  },
  modules: {
     // 
  }
})
