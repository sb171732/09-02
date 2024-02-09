<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ counter}}</h3>
    <button @click="plus()">Increment ++</button>
    <button @click="dec()">Decrement --</button>
   
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'HelloWorld',
  computed:{
    counter(){
      return store.state.counter
    },
    users(){
      return store.state.users
    }
  },
  
  methods:{
    plus(){
        store.dispatch('Inc')
    },
    dec(){
        store.dispatch('Dec')
    }
  },
  props: {
    msg: String
  },
  created(){
     store.dispatch('getCounter')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
