
import { mdiFormTextboxPassword } from '@mdi/js';

<template>
    <v-container fluid>
       
        <v-row center>
            <v-img src="../assets/logo.png" height="100" contain></v-img>
        </v-row>

        <v-form :key="center">

            <v-row :key="center">
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    
                    v-model="username"
                    label="Login"
                    
                    outlined
                ></v-text-field>
                </v-col>
                

            </v-row>
            <v-rom >
                <v-col 
                cols="12"
                sm="6"
                >
                <v-text-field
                
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Senha"
                    hint="At least 8 characters"
                    counter
                    outlined
                    @click:append="show1 = !show1"
                ></v-text-field>
                </v-col>
            
                <v-btn 
                class="mr-4"
                @click="submit"
                >
                ENTRAR
                </v-btn>
            
            </v-rom>
      
    </v-form>

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