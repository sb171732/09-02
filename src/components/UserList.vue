<template>
  <div>
        <table class="w3-table w3-bordered">
            <tr>
                <th>Id</th>
                <th>fio</th>
                <th>role</th>
            </tr>
            <tr v-for="u in users" :key="u.id">
               <td>{{ u.id }}</td>
               <td>{{ u.fio }}</td>
               <td>{{ u.role }}</td>
            </tr>
        </table>
  </div>
</template>

<script>
import store from '../store/index'
export default {
   computed:{
     users(){
        return store.state.users
     }
   },
   created(){
    store.dispatch('getUsers')
   }
}
</script>

<style>

</style>