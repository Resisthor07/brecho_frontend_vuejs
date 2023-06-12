
import { mdiFormTextboxPassword } from '@mdi/js';

<template>

    <v-container>

      <v-row flex-direction="column" >

        <v-img src="../assets/logo.png" height="200" contain></v-img>
        

        
        <v-col
         
          cols="12"
          sm="4"
          >
          
          <v-text-field
            background-color="rgba(217, 217, 217, 0.51)"
            border-color="rgba(255, 114, 114)"
            text-field-outlined-fieldset-border="2px solid "
              class="custom-input"
              v-model="username"
              label="Login"
              outlined
          > outlined</v-text-field>
        </v-col>
          

        
          <v-col 
            cols="12"
            sm="4"
            justify-content="flex-end" >
              <v-text-field
                background-color="rgba(217, 217, 217, 0.51)"
                v-model="password"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Senha"
                hint="Favor inserir 8 caracteres"
                outlined
                @click:append="show1 = !show1"
                  
              ></v-text-field>

              <div>
                <p>Esqueceu a senha</p>
              </div>
            
          </v-col >

          <v-btn 
            justify="center"
            align-items="center"
            color="#FE7271"
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

<style>
.row{
  flex-direction: column;
  align-items: center;
}

.v-text-field--outlined fieldset{
  border: 2px solid rgba(255, 114, 114);
}


</style>