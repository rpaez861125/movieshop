<template>
    <v-container>
      
        <v-app-bar
        color="blue lighten-1"
        dense
        dark
        app
        >
            <div class="d-flex align-center">
            <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.svg"
            transition="scale-transition"
            width="30"
            />
            </div>
            <v-toolbar-title> 
                Movies Shop 
            </v-toolbar-title>
                
            <v-spacer></v-spacer>
        
                <v-text-field
                    hide-details 
                    label="Filled" 
                    placeholder="Search" 
                    filled 
                    rounded 
                    dense 
                    single-line 
                    prepend-icon="search" 
                    class="shrink mx-4"
                ></v-text-field>                
                <v-btn icon>
                    <v-icon>shopping_cart</v-icon>
                </v-btn>
        </v-app-bar>
    </v-container>
</template>
<script>
export default {
    
}
</script>

