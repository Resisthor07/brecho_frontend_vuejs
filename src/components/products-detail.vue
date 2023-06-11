<template>
    <v-app>
        <header-componente></header-componente>
        <v-main>
            <p>Detalhes do produto</p>
            <p>ksdmgdsklgmslkfmgmfg</p>
        </v-main>
        <footer-componente></footer-componente>
    </v-app>
</template>

<script>
import HeaderComponente from "@/components/header-componente";
import FooterComponente from "@/components/footer-componente";

export default {
    name: "ProductsDetail",
    components: {
        HeaderComponente,
        FooterComponente
    },
    data: ()=>({

    })
}
</script>

<style>
p{
    color: black;
}

</style>