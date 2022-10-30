<template>
  <div class="main">
    <voltar-comp/>
    <h3 class="mb-6">Astronomia</h3>
    <v-select
    class="select"
      @change="selecionarEquacao(select)"
      v-model="select"
      :items="items"
      label="Selecione..."
      dense
    ></v-select>
    <div v-if="controle == 0">
      <h4>Selecione uma equação</h4>
    </div>
    <div v-if="controle == 1">
      <schwarzschild-eq />
    </div>
    <div v-if="controle == 2">
      <gravitacao-newton-eq />
    </div>
  </div>
</template>

<script>
import VoltarComp from "../components/VoltarComp.vue";
import SchwarzschildEq from "../components/equacoes/SchwarzschildEq.vue";
import GravitacaoNewtonEq from "../components/equacoes/GravitacaoNewtonEq.vue";

export default {
  name: "AstronomiaView",
  components: {
    VoltarComp,
    SchwarzschildEq,
    GravitacaoNewtonEq,
  },
  data() {
    return {
      select: null,
      items: ["schwarzschild", "Gravitação Universal"],
      controle: 0,
    };
  },
  methods: {
    selecionarEquacao(select) {
      switch (select) {
        case "schwarzschild":
          this.controle = 1;
          break;
        case "Gravitação Universal":
          this.controle = 2;
          break;
        default:
          this.controle = 0;
          break;
      }
    },
  },
};
</script>
<style scoped>
.main{
  padding: 0px 16px;
}
.select{
  max-width: 390px;
}
</style>
