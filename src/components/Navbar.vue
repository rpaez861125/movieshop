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
        
                <v-text-field
                    v-model="search"
                    hide-details 
                    label="Filled" 
                    placeholder="Search" 
                    filled 
                    rounded 
                    dense 
                    single-line 
                    prepend-icon="search" 
                    class="shrink mx-4"
                    @keyup.enter="sendData"
                ></v-text-field>                
                <v-btn 
                icon
                :to="{name: 'Prueba'}"
                >                 
                    <v-icon>table_chart</v-icon>                    
                </v-btn>                
                <v-btn 
                icon
                :to="{name: 'Cart'}"
                >
                    <v-badge
                    :content="cart.length"
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
            search: '',                
        }
    },
    computed: {
       ...mapState(['cart', 'totalPrice', 'show'])
    },
    methods: {
        ...mapMutations(['dataSearch']),
        sendData(){
            this.dataSearch(this.search)
        }
    }
}
</script>

