
import { mdiFormTextboxPassword } from '@mdi/js';

<template>

    <v-container fluid>
       
        
        <v-img src="../assets/logo.png" height="200" contain></v-img>
      

      <v-row justify="center" justify-content="center">
        <v-col
        cols="12"
        sm="4"
        >
        <v-text-field
        
            v-model="username"
            label="Login"
            
            outlined
        ></v-text-field>
        </v-col>
      </v-row>     

      
      <v-row justify="center" justify-content="center">
        <v-col 
       
        class="text-center"        
        cols="12"
        sm="4"
        
        >
        <v-text-field 

            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="At least 8 characters"
            outlined
            @click:append="show1 = !show1"
        ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center" justify-content="center">
        <v-btn 
          
          color="#FE7271"
          justify="center" justify-content="center"
          class="mr-4"
          @click="submit">
              ENTRAR
              </v-btn>
      </v-row>
        
   

    </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        }
      
    };
  },
};
</script>