<template>
  <v-app>
    <v-container>
      <v-alert dense outlined type="error"
               v-for="(itens, i) in erros"
               :key="i"
      >{{ itens }}
      </v-alert>
      <v-form ref="form">
        <v-row class="d-flex justify-space-between flex-column">
          <v-col style="max-width:250px " cols="12" sm="4" class="mr-10">

            <v-text-field
                v-model="produto.codigo"
                disabled
                STYLE="max-width: 150px"
                outlined
                label="Código do Produto"
                :value="codigoPdt"
            ></v-text-field>

          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
                v-model="produto.nome"
                outlined
                label="Nome do produto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-space-between is-flex-direction-row">
          <v-col cols="12" sm="2" >
            <v-select
                v-model="produto.tamanho"
                :items="tamanhos"
                outlined
                label="Tamanho"
            ></v-select>
          </v-col>

            <v-col cols="12" sm="3" >
              <v-text-field
                  v-model="produto.marca"
                  outlined
                  label="Marca"
              ></v-text-field>
            </v-col>
          <v-col cols="12" sm="3" >
            <v-text-field
                v-model="produto.cor"
                outlined
                label="Cor"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="d-flex">
            <v-select
                v-model=" produto.tipo"
                @change="codigoPdt()"
                label="Tipo do Produto"
                outlined
                :items="tipos"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="2" class="d-flex">
            <v-text-field
                v-model="produto.quantidade"
                label="Qtde"
                outlined
                type="number"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-col cols="12" sm="12">
          <v-textarea
              v-model="produto.descricao"
              outlined
              name="imput-7-4"
          ></v-textarea>
        </v-col>
        <v-row>
          <v-text-field
              v-model="produto.fotosDoProduto"
              outlined
              label="Endereço da imagem"
          ></v-text-field>
        </v-row>
        <v-row class="d-flex justify-space-between">
          <v-col cols="12" sm="4">
            <v-text-field
                v-model="produto.valorAtual"
                label="Valor do Produto"
                prefix="R$ "
                outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
                v-model="produto.valorAnterior"
                label="Valor do com desconto"
                prefix="R$ "
                outlined
            ></v-text-field>
          </v-col>
          <v-col class="d-flex flex-row j">
            <v-switch
                v-model="produto.emPromocao"
                class="mr-10"
                inset
                label="Produto em promoção"
                color="success"
                value="Produto em promoção"
                hide-details
            ></v-switch>
            <v-switch
                v-model="produto.disponibilidade"
                inset
                label="Disponibilidade"
                color="success"
                value="Produto em promoção"
                hide-details
            ></v-switch>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-end">
          <v-btn class="mr-10" width="250" height="50" outlined
                 @click="reset()"
          >Cancelar
          </v-btn>

          <v-btn class="mr-10" width="250" height="50" color="primary"
          @click="cadastrarProduto()"
          >Cadastrar</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import ProdutoClient from "@/clients/produto-client";

export default {
  name: "cadastrpProduto",


  data: () => ({
    erros: [],
    tipo: '',
    tamanhos: ['PP', 'P', 'M', 'G', 'GG', 'XGG', 'XXG'],
    tipos: ['Calça', 'Saia', 'Blusa', 'Blazer', 'Camisa', 'Shorts', 'Bermuda', 'Cardigam', 'Vestido'],
    produto:{
      codigo:'',
      nome:'',
      tipo:'',
      cor:'',
      tamanho:'',
      valorAtual:'',
      quantidade:'',
      descricao:'',
      fotosDoProduto:'',
      marca:'',
      disponibilidade: 'false' ,
      valorAnterior:'',
      emPromocao: 'false'
    }

  }),

  computed: {


}
,

  methods: {
    reset() {
      this.$refs.form.reset()
    },

    cadastrarProduto() {
      let apiProduto = new ProdutoClient();

      apiProduto.cadastrarProduto(this.produto).then(response => {
        this.resposta = response.data
        this.erros = []
        this.alerta = true;
      }).catch(response => {
        this.erros = response.data
      });


    },
    codigoPdt ()
         {
          const inicial = this.produto.tipo.substring(0, 1);

          let ano = new Date();

          const codigo = `${inicial}${ano.getFullYear()}.${ano.getMonth()}/${ano.getHours()}${ano.getMinutes()}${inicial}`

          this.produto.codigo = codigo
        }


  }
}
</script>

<style scoped>

</style>