<template>
  <v-container>
    <v-row row wrap>
      <v-col      
      v-for="n in 30"
      :key="n"
      >
        <v-card 
        class="mx-auto"
        max-width="200"
        
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          ></v-img>
          <v-card-text class="text-center py-0">
            <div>
              <span class="red--text">
                Movie Name
              </span>
              <span class="black--text">(1990)</span>              
            </div>
            <div class="text--disabled">
              <span>
                List Price:
              </span>
              <s>$120</s>
            </div>
            <div>
              <strong>Price: $100</strong>
            </div>
            <div class="text--disabled">
              <span>
                You Save: $ 20 (10%)
              </span>
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
  </v-container>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      movieData:[],
      search: '',
    }
  },
  components: {
   
  }
}
</script>
