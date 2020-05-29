<template>
  <v-app>
      <Navbar/>
    <v-content>
      <router-view/> 
    <v-container>
      <v-alert 
      v-model="loadingAlert.stado" 
      type="error" dismissible 
      absolute="true"
      elevation="20"
      >
        {{loadingAlert.title}} 
      </v-alert>   
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import {mapState} from 'vuex'

export default {

  name: 'App',

  components: {
    Navbar,
  },
  computed: {
    ...mapState(['loadingAlert'])
  },

  data: () => ({
    //
  }),
};
</script>
