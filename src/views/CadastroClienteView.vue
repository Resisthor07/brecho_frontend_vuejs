<template>
    <v-app>
        <header-componente></header-componente>
        <v-main>

      <v-container class="mt-15" style="max-width: 1400px">
        <v-alert dense outlined type="error"
                 v-for="(itens, i) in erros"
                 :key="i"
        >{{ itens }}
        </v-alert>
        <v-form ref="form" validate-on="input">
          <v-row class="d flex justify-center align-center ">
            <v-icon x-large class="pr-5">mdi-account</v-icon>
            <h2 class="mr-5">Dados Pessoais</h2>
          </v-row>
          <v-divider class="mt-8 mb-8 "></v-divider>
          <v-col>
            <v-row class="d flex justify-space-between">
              <v-text-field
                  v-model="cliente.nome"
                  class="mr-10"
                  label="Nome Completo"
                  outlined
                  counter
                  maxlength="150"

                  hint="Limite de 150 caracteres"
              ></v-text-field>
              <v-text-field
                  v-model="cliente.telefone"
                  v-mask="'(##) #####-####'"
                  label="Celular"
                  outlined
                  class="width 25%"
                  style="max-width: 700px"
              ></v-text-field>
            </v-row>
            <v-row class="d-flex justify-space-between align-center">
              <v-text-field
                  v-model="cliente.email"
                  aria-required="true"
                  class="mr-6"
                  label="email"
                  outlined
                  counter
                  maxlength="150"


                  hint="Limite de 150 caracteres"></v-text-field>
            </v-row>
            <v-row class="d flex justify-space-between is-flex-direction-row">
            <span class="d-flex flex-row is-center" style="width: 450px">
            <v-text-field
                               label="CEP"
                outlined
                v-mask="'#####-###'" v-model="cliente.cep"
                maxlength="9"
                class="flex-grow-1 flex-shrink-1"
                style="max-width: 350px"
                hide-details
            ></v-text-field>
            <v-icon large class=is-top
                    @click="buscaCep()"

            >mdi-magnify</v-icon>
              </span>
              <v-text-field
                  v-model="cliente.logradouro"
                  label="Logradouro"
                  outlined
                  hide-details
                  class="ml-5"
              ></v-text-field>
            </v-row>
            <v-row class="d-flex justify-space-between align-center mt-10 mr-3">

              <v-text-field
                  v-model="cliente.bairro"
                  class="mr-10"
                  label="Bairro"
                  outlined
                  hide-details
                  counter
                  maxlength="150"
                  hint="Limite de 150 caracteres"
              ></v-text-field>
              <v-text-field
                  v-model="cliente.numResidencia"
                  ref="form"
                  style="max-width: 350px"
                  label="Número"
                  outlined
                  hide-details
                  counter
                  maxlength="4"
                  hint="Limite de 4 caracteres"
              ></v-text-field>
            </v-row>
            <v-row class="d-flex justify-end align-center mt-10 mr-3">
              <v-btn
                  class="mr-10"
                  @click="reset()"
              >Cancelar
              </v-btn>
              <v-btn
                  tile
                  color="success"
                  @click="cadastrar()"
              >
                <v-icon>mdi-check-circle-outline</v-icon>
                Confirmar
              </v-btn>

            </v-row>
          </v-col>
        </v-form>
      </v-container>
      <v-snackbar
          v-model="alerta"
          timeout="5000"

      >
        {{ resposta }}
      </v-snackbar>

        </v-main>
        <footer-componente></footer-componente>
    </v-app>
</template>

<script>
import headerComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente";
import axios from "axios";
import ClienteClient from "@/clients/cliente-client";

export default {
    name: "cadastroCliente",

    components: {
        FooterComponente,
        headerComponente
    },

  computed: {
    cep: {
      set: function (valor) {
        this.cliente.logradouro = valor.logradouro;
        this.cliente.bairro = valor.bairro;
        this.cliente.cep = valor.cep;
      }
    }
  },
  data: () => ({
    ClienteId: '',
    myImputModel: '',
    imputCEP: '',
    alerta: false,
    resposta: '',
    bairro: '',
    erros: [],
    cliente: {
      nome: '',
      telefone: '',
      email: '',
      cep: '',
      logradouro: '',
      numResidencia: '',
      bairro: ''

        }
    }),
    methods: {
        reset() {
            this.$refs.form.reset()
        },
        buscaCep() {
            axios.get(`https://viacep.com.br/ws/${this.cliente.cep.replace('-', '')}/json/`).then(response => (this.cep = response.data));
        },

        cadastrar() {
            let apiCliente = new ClienteClient();

      apiCliente.cadastrarCliente(this.cliente).then(response => {

        this.resposta = 'Cadastro realizado com sucesso!'

        this.ClienteId = response.data;
        this.erros='Cadastro realizado com sucesso!'


        this.$router.push({name:'checkoutpagamento', params: {id: this.ClienteId}})

      }).catch(response => {
        this.erros = response.data



      });
    }


    }
}
</script>

<style scoped></style>