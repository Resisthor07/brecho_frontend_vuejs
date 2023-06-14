<template>
    <v-app>
        <header-componente></header-componente>
        <v-main>
            <div class="div_buscav">
                <p class="caminho_buscav">Home / {{ consulta }}</p>
            </div>
            <resultado-busca-componente :vazio="vazio" :produtos="produtos" :consulta="consulta"></resultado-busca-componente>
        </v-main>
        <footer-componente></footer-componente>
    </v-app>
</template>

<script>

    import HeaderComponente from "@/components/header-componente";
    import FooterComponente from "@/components/footer-componente";
    import ResultadoBuscaComponente from "@/components/resultadobusca-componente";


    export default{
        name: "resultadoBuscaView",
        components: {
            HeaderComponente,
            ResultadoBuscaComponente,
            FooterComponente
        },
        data: () => ({
            produtos:[],
            items:[],
            vazio: true,
            consulta: String
        }),
        methods: {
            atribuiItems(){
                this.items.push({
                    text: 'Home',
                    disabled: true
                })
                this.items.push({
                    text: this.consulta,
                    disabled: true
                })
            },
            atribuiConsulta(){
                this.consulta = "calça"
            },
            buscaProdutos(){
                for(let i=0;i<9;i++)
                {
                    this.produtos.push({
                        nome: "Calça",
                        valorAtual: "100,23",
                        imagem: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                        favorite: true
                    })
                }
                if(this.produtos.length == 0)
                {
                    this.vazio = true;
                }
                else
                {
                    this.vazio = false;
                }
            }
        },
        created: function()
        {
            this.atribuiConsulta();
            this.buscaProdutos();
            this.atribuiItems();
        }
    }

</script>

<style scoped>


    @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

    .caminho_buscav
    {
        font-family: 'Dongle';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        margin-left: 60px;
        margin-bottom: 0px;

        color: #313131;
    }

    .div_buscav
    {
        width: 100%;
        border-bottom: 4px solid #FFD0D0 ;
        display: flex;
        align-items: center;
    }

</style>