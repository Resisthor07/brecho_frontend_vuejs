<template>

        <v-footer
        color="primary"
        padless
        >
            

            <v-container fluid>
                <v-row class="justify-space-around">
                    <v-col cols="auto" class="col_footer">
                        <v-list color="primary">
                            <v-list-item>
                                <v-list-item-title class="titulo_footer">Instrucional</v-list-item-title>
                            </v-list-item>
                    <v-list-item
                    v-for="(item,i) in instrucional"
                    :key="i">
                        <v-list-item-title v-text="item" class="lista_footer"></v-list-item-title>
                    </v-list-item>
                </v-list>

                            <v-list-item
                            v-for="item in instrucional"
                            :key="item">
                                <v-list-item-title v-text="item" class="lista_footer"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary">
                            <v-list-item>
                                <v-list-item-title class="titulo_footer">Pagamentos</v-list-item-title>
                            </v-list-item>
                            <v-img src="../assets/pagamento.png"
                            max-width="275px"
                            min-width="185px"
                            width="28vw">
                            </v-img>

                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary">
                            <v-list-item>
                                <v-list-item-title class="titulo_footer">Contato</v-list-item-title>
                            </v-list-item>

                            <v-list-item
                            v-for="item in contato"
                            :key="item">
                                
                                <v-icon v-text="item.icon" color="#FFFFFF" size="26"></v-icon>
                                
                                <v-list-item-title v-text="item.text" class="lista_footer icone_texto_footer"></v-list-item-title>
                                
                            </v-list-item>
                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary">
                            <v-list-item>
                                <v-list-item-title class="titulo_footer">Redes Sociais</v-list-item-title>
                            </v-list-item>
                    <v-list-item
                    v-for="(item,i) in contato"
                    :key="i">
                        
                        <v-icon v-text="item.icon" color="#FFFFFF" size="26"></v-icon>
                        
                        <v-list-item-title v-text="item.text" class="lista_footer icone_texto_footer"></v-list-item-title>
                        
                    </v-list-item>
                </v-list>

                            <v-list-item
                            v-for="item in redes"
                            :key="item">
                                <v-icon v-text="item.icon" color="#FFFFFF" size="30"></v-icon>
                                
                                <v-list-item-title v-text="item.text" class="lista_footer icone_texto_footer"></v-list-item-title>
                                
                            </v-list-item>
                        </v-list>
                    </v-col>

                </v-row>
                
                <v-row class="divisoria">
                    <v-col cols="4" offset="4">
                        <p class="lista_footer paragrafo_footer">2023 todos os direitos reservados - Desenvolvido por G7</p>
                
                    </v-col>

                    <v-col cols="2" offset="2">
                        <router-link class="lista_footer" to="/login">flor da fronteira</router-link>
                    </v-col>
                </v-row>
            </v-container>

<<<<<<< HEAD
=======
                    <v-list-item
                    v-for="(item,i) in redes"
                    :key="i">
                        <v-icon v-text="item.icon" color="#FFFFFF" size="30"></v-icon>
                        
                        <v-list-item-title v-text="item.text" class="lista_footer icone_texto_footer"></v-list-item-title>
                        
                    </v-list-item>
                </v-list>
>>>>>>> 7740f981e1da7911103a29767a3b70d42c24e6c0
            


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

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');


    .col_footer
    {
        display: flex;
        justify-content: start;
    }
    .titulo_footer
    {
        color: #FFFFFF;
        font-family: "Dongle";
        font-style: normal;
        font-size: 30px;
        font-weight: 400;
    }

    .lista_footer
    {
        color: #FFFFFF;
        font-family: "Dongle";
        font-style: normal;
        font-size: 30px;
        font-weight: 300;
    }


    .divisoria
    {
        border-top: 4px solid #FFFFFF ;
    }

    .paragrafo_footer
    {
        margin: 15px;
    }

    .icone_texto_footer
    {
        margin-left: 13px;
    }

    
</style>