<template>

  <main-layout>
  

    <v-conteiner>

      <v-row class="organiza-header">
        <v-col cols="12"
        sm="12"
        >
            <div>                
              <v-img src="../assets/sacolaCompras.png" height="30" contain></v-img>
            </div>
              <div class="titulo_sacola">
                <span class="titulo_desejo">Sacola de Compras</span>
                <span class="titulo_desejo" font-size="2px"> {{quantidade}} items adicionado(s) a sacola</span>
              </div>
        </v-col>
      </v-row>

      <v-divider :thickness="5" color="black" class="border-opacity-100"> </v-divider>

      <v-row >
        <v-col class="col_desejo d-flex justify-center ">
          <span class="c313 dongle-light f35 " >{{
              this.quantidade
            }} items adicionado(s) Sacola</span>
        </v-col>
      </v-row>

      <v-col  v-for="item in produtos" :key="item.id" >

        <v-col cols="8"
        sm="8">
          <v-col cols="5"
          sm="6"> 
            <v-img src={{ item.fotosDoProduto}}></v-img>
          </v-col>

          <v-col cols="4"
          sm="4">
            <h1>nome: {{ item.nome }}</h1>
            <span>Tamanho: {{ item.tamanho }}</span>
            <span>Qnt: {{ item.quantidade }} </span>
          </v-col>

          <v-row cols="2" class="row-preco align-items-center">

            <v-row>
              <span class="font-weight-black ">Preço</span>
            </v-row>
            
            <v-row>
              <span class="font-weight-black"> R$ {{ item.valorAtual}}</span>
            </v-row>

          </v-row>

          
          
        </v-col>

        <v-divider :thickness="7" color="black" class="border-opacity-100" vertical></v-divider>

        <v-col cols="4" class=" d-flex flex-column align-center">
         
       
          <h1  v-if="!vazio" class="mb-5"> Resumo da Compra</h1>
          
          <v-row justify="space-between" class="mt-5 ">
            <v-col cols="12">
              <div class="d-flex flex-column mt-5">
                
                <v-row cols="10" class="mb-2">
                  <v-col >
                    <span>Subtotal:</span>
                  </v-col>
                  <v-col >
                    <span>R$ {{subTotal}}</span>
                  </v-col>
                </v-row>

                <v-row cols="10" class="mb-2">
                  <v-col>
                    <span>Desconto:</span>
                  </v-col>
                  <v-col >
                    <span>R$ - {{ desconto }}</span>
                  </v-col>
                </v-row>


      <v-divider color="black" class="border-opacity-100 mt-5"></v-divider>

      <span class="mt-5 mb-10 font-weight-black">Valor Total: R$ 80,00</span>
    </div>
  </v-col>
          </v-row>
            <v-row class=" d-flex flex-column align-center">
              <v-row cols="6">
                <v-col 
                  cols="12"
                  
                  class="text-center">
                  <div  cols="6" class="text-center">
                    <router-link :to="{name:'checkout-pagamento', params:{listaSacola: this.produtos} }">
                      <v-btn
                        rounded
                        color="primary"
                        dark
                        sm="3"
                        >

                      Finalizar Compra
                      </v-btn>
                    </router-link>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col 
                  cols="12"
                  
                  class="text-center">
                    <div cols="6"  class="text-center">
                      <v-sheet>
                      <router-link :to="{name:'home'}">
                        <v-btn
                        class="btn-compra borda-padrao w-100"
                          rounded
                          color="primary"
                          dark
                          sm="3"
                          
                        >
                        <v-icon
                          dark
                          left
                        >
                          mdi-arrow-left
                        </v-icon>
                        Continuar Comprando
                        </v-btn>
                      </router-link>
                    </v-sheet>
                            
                                
                        
                  </div>
                </v-col>
              </v-row>
            

            </v-row>
          </v-col>

        

      </v-col>


    </v-conteiner>
        
  </main-layout>

  
</template>
  
<script>
import MainLayout from '@/components/main-layout';
import {useSacolaStore} from "@/store/sacolaStore";
import {ProdutoClient} from "@/clients/produto-client"

export default {
  name: "sacolaCompras",
  components: {
    MainLayout    
},
  data: () => ({
    produtos: [],
    vazio: true,
    quantidade: 0,
    produtoClient: new ProdutoClient(),
    subTotal: 0,
    desconto: 0,
  }),
  created: function () {
    console.log(this.quantidade)
    this.findById()

  },
  methods: {

    async findById() {
  const valor = useSacolaStore().listaSacola;
  console.log(valor);

  valor.map((valor) => {
    this.ProdutoClient.findById(valor)
      .then((produto) => {
        this.produtos.push(produto);
        this.quantidade = this.produtos.length;
        this.subTotal += this.produto.valorAtual;
        this.desconto += this.produto.valorAnterior - this.produto.valorAtual;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Verifica se a sacola está vazia
  this.vazio = this.produtos === undefined || this.produtos.length === 0;
},

   
  },
  mounted: function () {
    // this.adicionaProdutos();
  }



}






</script>
  
<style scoped lang="scss">

  .titulo_sacola{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    
  }


  .col{
    display: flex;
    flex-direction: row;
  }

  .col-sm-12{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .col-sm-8{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .col-sm-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  
  .row-preco{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  
</style>