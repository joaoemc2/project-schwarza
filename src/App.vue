<template>
  <v-app>
    <nav-bar-comp />
    <router-view class="router"/>
    <!-- <aviso-comp :texto="textoAviso"/> -->
    <footer-comp />
  </v-app>
</template>

<script>
import NavBarComp from "./components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";
// import AvisoComp from "./components/AvisoComp.vue";

export default {
  name: "App",
  components: {
    NavBarComp,
    FooterComp,
    // AvisoComp,
  },
  data() {
    return {
      textoAviso: "Aplicação em desenvolvimento... Fique a vontade para dar seu feedback ou sugerir melhorias.",
    };
  },
};
</script>
<style scoped>
.router{
  margin-bottom: 0px;
  min-height: 90vh;
}
@media(min-width: 900px){
  .router{
    min-height: 80vh;
}
}

</style>
