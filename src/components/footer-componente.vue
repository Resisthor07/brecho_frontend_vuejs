<template>


<v-footer
        color="primary"
        padless
        >
            

            <v-container fluid>
                <v-row class="justify-space-around">
                    <v-col cols="auto" class="col_footer">
                        <v-list color="primary" class="text-start">
                            <v-list-item>
                                <v-list-item-title class="dongle-regular cfff f35">Instrucional</v-list-item-title>
                            </v-list-item>

                            <v-list-item
                            v-for="item in instrucional"
                            :key="item">
                                <v-list-item-title v-text="item" class="dongle-light cfff f30"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary" class="text-start">
                            <v-list-item>
                                <v-list-item-title class="dongle-regular cfff f35">Pagamentos</v-list-item-title>
                            </v-list-item>
                            <v-img src="../assets/pagamento.png"
                            max-width="275px"
                            min-width="185px"
                            width="28vw">
                            </v-img>

                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary" class="text-start">
                            <v-list-item>
                                <v-list-item-title class="dongle-regular cfff f35">Contato</v-list-item-title>
                            </v-list-item>

                            <v-list-item
                            v-for="item in contato"
                            :key="item">
                                
                                <v-icon v-text="item.icon" color="#FFFFFF" size="26"></v-icon>
                                
                                <v-list-item-title v-text="item.text" class="espaco_icone_texto_footer dongle-light cfff f30"></v-list-item-title>
                                
                            </v-list-item>
                        </v-list>
                    </v-col>

                    <v-col cols="auto">
                        <v-list color="primary" class="text-start">
                            <v-list-item>
                                <v-list-item-title class="dongle-regular cfff f35">Redes Sociais</v-list-item-title>
                            </v-list-item>

                            <v-list-item
                            v-for="item in redes"
                            :key="item">
                                <v-icon v-text="item.icon" color="#FFFFFF" size="30"></v-icon>
                                
                                <v-list-item-title v-text="item.text" class="espaco_icone_texto_footer dongle-light cfff f30"></v-list-item-title>
                                
                            </v-list-item>
                        </v-list>
                    </v-col>

                </v-row>
                
                <v-row class="divisoria_footer">
                    <v-col cols="6" offset="3">
                        <p class="dongle-regular cfff f35">2023 todos os direitos reservados - Desenvolvido por G7</p>
                
                    </v-col>

                    <v-col cols="3">
                        <router-link class="dongle-regular cfff f35" to="/login">flor da fronteira</router-link>
                    </v-col>
                </v-row>
            </v-container>

            


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

    .espaco_icone_texto_footer
    {
        margin-left: 10px;
    }

    .branco_footer
    {
        color: #FFFFFF;
        background-color: #FFFFFF;

    }

    .divisoria_footer
    {
        border-top: 4px solid #FFFFFF ;
    }


</style>