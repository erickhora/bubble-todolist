<template>
  <v-app id="home">
      <app-navbar/>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: {'app-navbar': Navbar}

}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
    
    
</style>
