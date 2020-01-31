<template>
  <v-app>
    <vue-particles color="#FFFFFF"  :lineOpacity="0" :particleSize="30"  :particleOpacity="0.9" :particlesNumber="20" class="background"></vue-particles>
     <router-view></router-view> 
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
  })
}
</script>

<style>
.background{
    z-index: 0!important;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px
}
</style>
