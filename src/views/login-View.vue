

<template>

    <v-container fluid>

      <v-row flex-direction="column" >

        <v-img src="../assets/logo.png" height="150" contain></v-img>
        
        <v-col
         
          cols="12"
          sm="4"
          >
          
          <v-text-field
            background-color="rgba(217, 217, 217, 0.51)"
            font-family="Dongle Regular"
            border-color="rgba(255, 114, 114)"
            text-field-outlined-fieldset-border="2px solid "
              class="custom-input"
              v-model="username"
              label="Login"
              outlined
          ></v-text-field>
        
          <v-text-field
            font-family="Dongle Regular"
            background-color="rgba(217, 217, 217, 0.51)"
            v-model="Password"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="Favor inserir 8 caracteres"
            outlined
            @click:append="show1 = !show1"
              
          ></v-text-field>

        </v-col >

        
          <v-btn 
            width="12vw"
            height="7vh"
            color="rgba(254, 114, 113)"
            font-family="Dongle Regular"
            justify="center"
            align-items="center"
            class="mr-4"
            @click="openNewWindow">
                ENTRAR
          </v-btn>

      </v-row>
        
   
      
    </v-container>

</template>

<script >

import administradorClient from "../clients/administrador-client"


export default {
  data() {

    return {
      username: '',
      Password: 'Password',
      administradorClient: new administradorClient(),
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 11 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
        show1: false,
      
    };
  }, 
  methods: {
    async openNewWindow() {
      this.verificaLogin();
    },
    async verificaLogin() {
      try {
        const response = await this.administradorClient.login({
          username: this.username,
          password: this.Password
        });

        if (response.data === 'Autenticado com sucesso') {
          // Login successful, open new window
          window.open('http://localhost:3000/pedidos', '_blank');
        } else {
          alert('Login inválido. Verifique suas credenciais.');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao autenticar. Login ou senha incorretos.');
      }
    }
  }
}

  


</script>

<style scoped lang="scss">
.row{
  flex-direction: column;
  align-items: center;
  
}

.v-text-field--outlined fieldset{
  border: 2px solid rgba(255, 114, 114);
}

p{
  display: flex;
  color: rgb(19, 3, 250);
  justify-content:flex-end
}

.v-btn__content{
  color: white;
  font-family: 'Dongle Regular';
  font-weight: bold;
}



</style>