<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
      loading
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details            
            prepend-inner-icon="search"
            label="Search"
          ></v-text-field>            
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
                    
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
																			<div> 
																			<v-checkbox                
                        label="QTY"
                        v-model="selected"   
                        :value="item"             
                    ></v-checkbox>            
                    </div>           
                </v-card-text>         
                <v-card-actions>
                    <v-btn
																					block
																					color="error"
																					@click="chageBtn(item)"
																					v-show="show"
                    >
                    add to cart
                    </v-btn>
																				<v-btn
																					block
																					color="error"
																					v-show="!show"
																					:to="{name: 'Cart'}"
                    >
                    on the cart
                    </v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer v-if="items.length">
        <v-container>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

        <div class="text-center">
            <v-pagination
                v-model="page"
                color="blue darken-3"
                :length="numberOfPages"
                :total-visible="10"                
            ></v-pagination>
        </div> 
        </v-row>
        </v-container>
      </template>
    </v-data-iterator>

    <v-fab-transition>
        <v-btn
        v-show="selected.length"
        color="error"
        dark
        fixed
        bottom
        right
        fab        
        @click="emptySelected(selected)"
        >
         <v-icon>add</v-icon>
        </v-btn>
    </v-fab-transition>

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
                @click="addCart(dialogItem)"
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
import {mapState, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        itemsPerPageArray: [20, 50, 100],
        search: '',        
        sortDesc: false,
        page: 1,
        itemsPerPage: 20,
        sortBy: 'title', 
        items:[], 
        dialog: false,
        dialogItem:[], 
								selected:[],  
								show: true,        
      }
    },
    props:{

    },
    computed: {      
        numberOfPages () {
            return Math.ceil(this.items.length / this.itemsPerPage)
      },     
    },
    methods: {
        ...mapMutations(['addCart', 'addCartSelected', 'showAlert']),
        async getMovies(){
        try {
            let dataMovie = await axios.get(`static/MOCK_DATA.json`)
            this.items = dataMovie.data                
        } catch (error) {
            this.showAlert({title: error})
        }finally{

        }
    },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
    },
    prueba(){
      console.log(this.page)
    },
      openDialog(item){
      this.dialog = true     
      this.dialogItem = item
    },
    emptySelected(data){
      this.addCartSelected(data)
      this.selected = []
				},
				chageBtn(item){
						this.show = false
						this.addCart(item)
				}        
    },
    created() {
        this.getMovies()
    },
  }
</script>