<template>
  <div class="main-container">
    <router-link class="router" to="/">
      <p>
        <v-icon class="icon" small color="#5a3e98"
          >mdi-arrow-u-left-bottom</v-icon
        >Voltar
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "VoltarComp",
};
</script>

<style scoped>
.main-container {
  padding: 0;
  margin-top: 10px;
}
.router{
    text-decoration: none;
}
.icon {
  margin-right: 5px;
}
p {
  font-size: 14px;
  color: rgb(48, 48, 48);
}
</style>