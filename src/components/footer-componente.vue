<template>
    <v-app>
        <v-footer
        color="primary"
        absolute="true"
        >

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
            </v-list>

            <v-spacer></v-spacer>

            <v-list color="primary">
                <v-list-item>
                    <v-list-item-title class="titulo">Contato</v-list-item-title>
                </v-list-item>

                <v-list-item
                v-for="item in contato"
                :key="item">
                    <v-list-item-title v-text="item.text" class="lista"></v-list-item-title>
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
                    <v-list-item-title v-text="item.text" class="lista"></v-list-item-title>
                </v-list-item>
            </v-list>
        
            <v-spacer></v-spacer>

        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'FooterComponente',
        data: () => ({
            instrucional: [
                "Sobre-nós",
                "Como comprar?",
                "Onde estamos"
            ],
            contato: [
                {
                    text: "(45) 9999-9999"
                },
                {
                    text: "(45) 9999-9999"
                },
                {
                    text: "fulana@flordafronteira.com"
                }
            ],
            redes: [
                {
                    text: "@flordafronteira"
                },
                {
                    text: "@flordafronteira"
                }
            ]
        })
    }


</script>

<style>

    .titulo
    {
        color: #FFFFFF;
    }

    .lista
    {
        color: #FFFFFF;
    }

    
</style>