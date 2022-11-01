<template>
  <div class="main">
    <voltar-comp />
    <h3 class="mb-0">Física Moderna</h3>
    <div class="underline mb-6"></div>
    <v-select
      class="select"
      @change="selecionarEquacao(select)"
      v-model="select"
      :items="items"
      label="Selecione..."
      dense
      color="#6C63FF"
    ></v-select>
    <div v-if="controle == 0">
      <selecione-eq-comp class="selecione" />
    </div>
    <div v-if="controle == 1">
      <gravitacao-newton-eq />
    </div>
  </div>
</template>

<script>
import VoltarComp from "@/components/VoltarComp.vue";
import SelecioneEqComp from "@/components/SelecioneEqComp.vue";
import GravitacaoNewtonEq from "@/components/equacoes/fisica_moderna/GravitacaoNewtonEq.vue";

export default {
  name: "ModernaView",
  components: {
    VoltarComp,
    GravitacaoNewtonEq,
    SelecioneEqComp,
  },
  data() {
    return {
      select: null,
      items: ["Gravitação Universal"],
      controle: 0,
    };
  },
  methods: {
    selecionarEquacao(select) {
      switch (select) {
        case "Gravitação Universal":
          this.controle = 1;
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
.main {
  padding: 0px 16px;
}
.select {
  max-width: 390px;
}
.selecione {
  margin-top: 80px;
}
.underline {
  background-color: #6C63FF;
  height: 2px;
  width: 40px;
}
</style>
