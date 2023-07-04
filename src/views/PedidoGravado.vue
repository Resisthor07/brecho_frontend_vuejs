<template>
<main-layout>
<finalizar-pedido></finalizar-pedido>
</main-layout>
</template>

<script>
import MainLayout from "@/components/main-layout";
import FinalizarPedido from "@/components/FinalizarPedido";
export default {
  name: "PedidoGravado",
  components: {FinalizarPedido, MainLayout}
}
</script>

<style scoped>

</style>