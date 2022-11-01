<template>
  <div class="main-container">
    <img class="imagem" src="@/assets/getstarting.png" alt="" />
    <h2 class="titulo">Project Schwarza</h2>
    <h3 class="frase">Resolva Equações de Física com Poucos Cliques!</h3>
    <router-link class="router-link" to="/categorias">
      <v-btn class="btn">vamos lá!</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "getStartingView",
};
</script>

<style scoped>
.main-container {
  height: 60vh;
  width: 100vw;
  background-color: #6c63ff;
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 600px) {
  .main-container {
    height: 80vh;
  }
}
.titulo {
  text-align: center;
  color: #fff;
  margin-top: 42px;
  padding: 0 28px;
}
.imagem {
  margin-top: 64px;
  align-self: center;
}
.frase {
  color: #fff;
  padding: 0 16px;
  margin-top: 32px;
  text-align: center;
  font-weight: 300;
}
.router-link {
  margin-top: 42px;
  text-decoration: none;
}
.btn {
  color: #6c63ff;
  width: 260px;
  height: 42px !important;
}
</style>