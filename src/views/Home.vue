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
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-text class="text-center py-0">
            <div>
              <span class="red--text">
                {{item.title}}
              </span>
              <!-- <span class="black--text">(1990)</span>               -->
            </div>
            <!-- <div class="text--disabled">
              <span>
                List Price:
              </span>
              <s>$120</s>
            </div>-->
            <div> 
              <strong>Price: ${{item.price}}</strong>
            </div>
            <!-- <div class="text--disabled">
              <span>
                You Save: $ 20 (10%)
              </span>
            </div> -->
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
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="8"
    ></v-pagination>
  </div>   
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

    }
  },
  methods: {
    async getMovies(){
      try {
        let dataMovie = await axios.get(`static/MOCK_DATA.json`)
         this.movieData = dataMovie.data
         this.pages = dataMovie.data.length / 20
         //console.log(this.movieData)
       
      } catch (error) {
        console.log(error)
      }finally{

      }
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
