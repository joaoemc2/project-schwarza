<template>
  <div class="main">
      <v-img max-height="110" max-width="110" src="@/assets/atomo.png"></v-img>
      <h2 class="titulo">Selecione uma equação para começar...</h2>
  </div>
</template>

<script>
export default {
  name: "SelecioneEq",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titulo{
    text-align: center;
    margin-top: 8px;
}
</style>