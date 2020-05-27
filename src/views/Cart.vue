<template>
    <v-container>
        <v-row row wrap>
            <v-col      
            v-for="(item, index) in cart"
            :key="index"
            >
                <v-card 
                class="mx-auto"
                max-width="250"        
                >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
                <v-card-text class="text-center py-0">
                    <div>
                        <span class="red--text">
                            {{item.title}}
                        </span>            
                    </div>            
                    <div> 
                        <strong>Price: ${{item.price}}</strong>
                        </div> 
                    <div> 
                    <v-checkbox                        
                        label="QTY"                
                    ></v-checkbox>            
                    </div>           
                </v-card-text>         
                <v-card-actions>
                    <v-btn
                    block
                    @click="removeCart(index)"
                    color="error"                   
                    >
                    remove from cart
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>  
    
    </v-container>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Cart',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['search','cart'])
    },
    methods: {
        ...mapMutations(['removeCart'])
    },
    
}
</script>