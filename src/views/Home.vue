<template>
  <v-app id="home">
     <!--  <app-navbar> teste </app-navbar>  -->
     <app-navbar/>
  </v-app>
</template>




<script>
import Navbar from '../components/Navbar.vue'

export default {
  data: () => ({

  
  }),
  components: {'app-navbar': Navbar}
}
</script>




<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');

  

  * {
    font-family: 'Public Sans', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
  }

</style>
