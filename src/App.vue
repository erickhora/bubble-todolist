<template>
  <v-app>
    <Login/>
  </v-app>
</template>

<script>
import Login from './views/Login.vue'
/* import Cadastro from './components/Cadastro' */

export default {
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  })
}
</script>
