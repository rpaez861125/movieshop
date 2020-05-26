<template>
  <v-container>
    
    <v-row row wrap>
      <v-col      
      v-for="(item, key) in searchMovies"
      :key="key"
      >
        <v-card 
        class="mx-auto"
        max-width="250"        
        >
          <v-img
            class="white--text align-end"
            height="200px"
            @click="openDialog(item)"
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
          </v-card-text>         
          <v-card-actions>
            <v-btn
            block
            color="error"
            >
              add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>  
    <div class="text-center" v-if="movieData.length">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="8"
      ></v-pagination>
    </div> 
         <!-- Dialog to show each item  -->
    <v-dialog v-model="dialog" persistent max-width="500">         
      <v-card>
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>        
          <v-card-text class="text-center py-0">
              <div>
                <span class="red--text">
                  {{dialogItem.title}}
                </span>            
              </div> 
              <div class="mt-1">
                <span class="black--text">
                    {{dialogItem.description}}
                </span>
              </div>           
              <div class="mt-1"> 
                <strong>Price: ${{dialogItem.price}}</strong>
              </div>
            </v-card-text>
        <v-card-actions>          
          <v-btn
            color="error"
            @click="dialog = false"
          >
              add to cart
            </v-btn>
          <v-spacer></v-spacer>
          <v-btn 
            dark
            color="blue lighten-1" 
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 
  </v-container>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      movieData:[],      
      page:1,
      pages:1,
      dialog: false,
      dialogItem:[],

    }
  },
  methods: {
    async getMovies(){
      try {
        let dataMovie = await axios.get(`static/MOCK_DATA.json`)
         this.movieData = dataMovie.data
         this.pages = dataMovie.data.length / 20
               
      } catch (error) {
        console.log(error)
      }finally{

      }
    },
    openDialog(item){
      this.dialog = true     
      this.dialogItem = item
    }

  },
  computed: {
     ...mapState(['search']),
     searchMovies(){
       return this.movieData.filter( 
         (items) => items.title.includes(this.search) || 
         items.price == parseInt(this.search))
     }
  },
  components: {
   
  }, 
  created() {
    this.getMovies()
  },
}
</script>
