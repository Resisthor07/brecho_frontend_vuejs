<template>
    <div>
        <v-row>
            <v-col cols="2">
                <AdmMenuLateral />
            </v-col>
            <v-col>
                <div class="tabela"></div>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
import AdmMenuLateral from '@/components/AdmMenuLateral.vue'
export default {
    name: 'PaginaAdm',
    data() {
        return {

        }
    },
    components: {
        AdmMenuLateral
    }
}
</script>
<style lang="scss" scoped>
.h-tela {
    height: 100vh;
}
</style>