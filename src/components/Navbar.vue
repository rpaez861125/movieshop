<template>
    <v-container>
      
        <v-app-bar
        color="blue lighten-1"
        dense
        dark
        app
        >
            <div class="d-flex align-center">
                <router-link to="/">
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/logo.svg"
                    transition="scale-transition"
                    width="30"           
                    />
                </router-link>
            </div>
            
            <v-toolbar-title > 
                Movies Shop 
            </v-toolbar-title>
            <v-spacer></v-spacer>                 
                             
                <v-btn 
                icon
                :to="{name: 'Cart'}"
                >
                    <v-badge
                    :content="items.length"
                    :value="show"    
                    color="error"                                          
                    overlap                    
                    >
                      <v-icon>shopping_cart</v-icon>
                    </v-badge>
                </v-btn>                
        </v-app-bar>
        
    </v-container>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
    data() {
        return {  
            show: false,            
        }
    },
    computed: {
       ...mapState(['items', 'totalPrice'])
    },
    methods: {
       showBadge(){
           if(this.items.length != 0){
               this.show = true
           }else{
                this.show = false
           }

       }
    },
    updated() {
       this.showBadge()
    },
}
</script>

