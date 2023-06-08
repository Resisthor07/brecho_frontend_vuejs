<template>

        <v-footer
        color="primary"
        padless
        >

            <div class="parte_de_cima">
                <v-spacer></v-spacer>
            
                <v-list color="primary">
                    <v-list-item>
                        <v-list-item-title class="titulo">Instrucional</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    v-for="item in instrucional"
                    :key="item">
                        <v-list-item-title v-text="item" class="lista"></v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-spacer></v-spacer>

                <v-list color="primary">
                    <v-list-item>
                        <v-list-item-title class="titulo">Pagamentos</v-list-item-title>
                    </v-list-item>
                    <v-img src="../assets/pagamento.png"
                    max-width="275px"
                    width="28vw">
                    </v-img>

                </v-list>

                <v-spacer></v-spacer>

                <v-list color="primary">
                    <v-list-item>
                        <v-list-item-title class="titulo">Contato</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    v-for="item in contato"
                    :key="item">
                        
                        <v-icon v-text="item.icon" color="#FFFFFF" size="26"></v-icon>
                        
                        <v-list-item-title v-text="item.text" class="lista icone_texto"></v-list-item-title>
                        
                    </v-list-item>
                </v-list>

                <v-spacer></v-spacer>

                <v-list color="primary">
                    <v-list-item>
                        <v-list-item-title class="titulo">Redes Sociais</v-list-item-title>
                    </v-list-item>

                    <v-list-item
                    v-for="item in redes"
                    :key="item">
                        <v-icon v-text="item.icon" color="#FFFFFF" size="30"></v-icon>
                        
                        <v-list-item-title v-text="item.text" class="lista icone_texto"></v-list-item-title>
                        
                    </v-list-item>
                </v-list>
            
                <v-spacer></v-spacer>
            </div>
            <div class="parte_de_baixo">
                <p class="lista paragrafo">2023 todos os direitos reservados - Desenvolvido por G7</p>
            </div>


        </v-footer>

</template>

<script>


    import { mdiWhatsapp } from '@mdi/js';
    import { mdiPhone } from '@mdi/js';
    import { mdiEmail } from '@mdi/js';
    import { mdiFacebook } from '@mdi/js';
    import { mdiInstagram } from '@mdi/js';

    export default {
        name: 'FooterComponente',
        data: () => ({
            mdiWhatsapp,
            mdiPhone,
            mdiEmail,
            mdiFacebook,
            mdiInstagram,
            instrucional: [
                "Sobre-nós",
                "Como comprar?",
                "Onde estamos"
            ],
            contato: [
                {
                    text: "(45) 9999-9999",
                    icon: "mdi-whatsapp"
                },
                {
                    text: "(45) 9999-9999",
                    icon: "mdi-phone"
                },
                {
                    text: "fulana@flordafronteira.com",
                    icon: "mdi-email"
                }
            ],
            redes: [
                {
                    text: "@flordafronteira",
                    icon: "mdi-facebook"
                },
                {
                    text: "@flordafronteira",
                    icon: "mdi-instagram"
                }
            ]
        })
    }


</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');

    .titulo
    {
        color: #FFFFFF;
        font-family: "Dongle";
        font-style: normal;
        font-size: 30px;
        font-weight: 400;
    }

    .lista
    {
        color: #FFFFFF;
        font-family: "Dongle";
        font-style: normal;
        font-size: 30px;
        font-weight: 300;
    }

    .parte_de_cima
    {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        width: 100%;
    }

    .parte_de_baixo
    {   
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 4px solid #FFFFFF ;
    }

    .paragrafo
    {
        margin: 15px;
    }

    .icone_texto
    {
        margin-left: 13px;
    }

    
</style>