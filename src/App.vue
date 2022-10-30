<template>
  <v-app>
    <nav-bar-comp />
    <router-view class="router"/>
    <footer-comp />
  </v-app>
</template>

<script>
import NavBarComp from "./components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    NavBarComp,
    FooterComp,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.router{
  margin-bottom: 36px;
  min-height: 600px;
}
@media(min-width: 900px){
  .router{
  min-height: 900px;
}
}

</style>
