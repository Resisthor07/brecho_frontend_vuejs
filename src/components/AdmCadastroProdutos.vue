<template>
    <div class="containerScroll">
        <!-- <v-form @submit.prevent fast-fail> -->
        <v-container class="pa-10">
            <v-row>
                <v-col class="d-flex justify-start">
                    <h2 class="font-family font-title">Cadastrar Produto</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3" class="pb-0">
                    <v-text-field v-model="productNumber" label="Codigo" :counter="10" required :disabled="false"
                        :outlined="true" :dense="true"></v-text-field>
                </v-col>
                <v-col cols="9" class="pb-0">
                    <v-text-field v-model="productName" :counter="50" required label="Nome do produto" :outlined="true"
                        :dense="true"></v-text-field>
                </v-col>
                <v-col cols="5" class="pb-0">
                    <v-select v-model="productSize" :items="productSizeOptions" label="Tamanho" required :outlined="true"
                        :dense="true">
                    </v-select>
                </v-col>
                <v-col cols="5" class="pb-0">
                    <v-text-field v-model="productKind" label="Tipo" :counter="100" required :outlined="true" :dense="true">
                    </v-text-field>
                </v-col>
                <v-col cols="2" class="pb-0">
                    <v-text-field v-model="productQuantity" label="Quantidade" required :disabled="false" :outlined="true"
                        :dense="true"></v-text-field>
                </v-col>
                <v-col cols="2" class="pb-0">
                    <v-autocomplete v-model="productGenre" :items="['Masculino', 'Feminino', 'Unissex']" label="Genero"
                        :required="true" outlined dense>
                    </v-autocomplete>
                </v-col>
                <v-col cols="2" class="pb-0">
                    <v-select v-model="productStation" :items="stationOptions" label="Estacao" required :outlined="true"
                        :dense="true"></v-select>
                </v-col>
                <v-col cols="4" class="pb-0">
                    <v-text-field v-model="productColor" label="Cor" :counter="50" :outlined="true"
                        :dense="true"></v-text-field>
                </v-col>
                <v-col cols="4" class="pb-0">
                    <v-text-field v-model="productBrand" label="Marca" :counter="100" required :disabled="false"
                        :outlined="true" :dense="true"></v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <v-textarea v-model="productDescrition" label="Descricao" :counter="500" :outlined="true"
                        :dense="true"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="9" class="pb-0">
                    <v-file-input class="full-height" v-model="productImages" :outlined="true"
                        prepend-icon="fa-solid fa-camera" accept="image/*" label="Anexe as imagens" show-size
                        :counter="true" multiple :dense="true"></v-file-input>
                </v-col>
                <v-col cols="3" class="pb-0">
                    <v-text-field v-model="productPrice" label="Valor (R$)" required :outlined="true"
                        :dense="true"></v-text-field>
                    <v-text-field v-model="productDiscountPrice" label="Valor com desconto" required :outlined="true"
                        :dense="true"></v-text-field>
                    <v-switch v-model="productDiscount" color="#FE7271" label="Produto com desconto"></v-switch>
                    <v-switch v-model="productAvailable" color="#FE7271" label="Produto disponivel"></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn @click="clearFields" color="grey" :outlined="true"
                        class="font-family button-size ma-1">Cancelar</v-btn>
                    <v-btn @click="sendToServer" class="button-style font-family button-size ma-1">Salvar</v-btn>
                </v-col>
            </v-row>

        </v-container>
        <!-- </v-form> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "RegisterProduct",
    data: () => {
        return {
            productNumber: '',
            productName: '',
            productKind: '',
            productQuantity: '',
            productSize: '',
            productGenre: '',
            productStation: '',
            productDescrition: '',
            productImages: [],
            productColor: '',
            productBrand: '',
            productPrice: '',
            productDiscountPrice: '',
            productDiscount: false,
            productAvailable: false,
            productDescountPrice: '',
            genreOptions: ["Masculino", "Feminino", "Unissex"],
            stationOptions: ["Primavera", "Verao", "Outono", "Inverno"],
            productSizeOptions: ["Extra pequeno PP", "Pequeno P", "Medio M", "Grande G", "Extra grande GG", "Sem tamanho definido"],

            // productRules: [
            //     (value: string) => {
            //         if (value) return true
            //         return "Digite o codigo do produto."
            //     }
            // ],
            // nameRules: [
            //     (value: string) => {
            //         if (value) return true;
            //         return "Digite o nome do produto."
            //     }
            // ],
            // textFieldRules: [
            //     (value: string) => {
            //         if (value) return true;
            //         return "Digite o tipo."
            //     }
            // ],
            // quantityRules: [
            //     (value: string) => {
            //         if (value) return true
            //         return "Digite a quantidade."
            //     }
            // ]
        }
    },
    methods: {
        clearFields() {

            // this.productNumber = ''
            // this.productName = ''
            // this.productKind = ''
            // this.productQuantity = ''
            // this.productSize = ''
            // this.productGenre = ''
            // this.productStation = ''
            // this.productDescrition = ''
            // this.productImages = []
            // this.productColor = ''
            // this.productBrand = ''
            // this.productPrice = ''
            // this.productDiscount = false
            // this.productAvailable = false
            // this.productDescountPrice = ''
        },
        sendToServer() {

        }
    }
})
</script>

<style lang="scss" scoped>
$font-color: white;
$backgroud-primary-color: #FF7272;
$button-togle-color: #f69a9a;

.full-height {
    height: 100%;
}

.containerScroll {
    height: 100vh;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
}

.button-style {
    background-color: $backgroud-primary-color;
    color: $font-color;
}

.button-size {
    min-width: 200px;
    font-size: 1.5em;
    text-transform: none;
    font-weight: 300;
}

.pa-10 {
    padding: 5%;
}
</style>