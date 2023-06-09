<template>
    <v-app>
        <header-componente></header-componente>
        <v-main>
            <resultadobusca-componente></resultadobusca-componente>
        </v-main>
        <footer-componente></footer-componente>
    </v-app>
</template>

<script>

    import HeaderComponente from "@/components/header-componente";
    import FooterComponente from "@/components/footer-componente";
    import ResultadoBuscaComponente from "@/components/resultadobusca-componente.vue";


    export default{
        name: "resultadoBuscaView",
        components: {
            HeaderComponente,
            ResultadoBuscaComponente,
            FooterComponente
        }
    }

</script>

<style scoped>

</style>