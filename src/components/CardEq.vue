<template>
  <div class="main">
    <v-card class="mx-auto" max-width="390px" color="#F5F5F5">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Equações</div>
          <v-list-item-title class="text-h5 mb-1">
            Astronomia
          </v-list-item-title>
          <v-list-item-subtitle
            >Equações da astronomia e cosmologia</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="100">
          <img src="@/assets/img_cards/EquacaoSchwarzschild.png" alt=""
        /></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <router-link class="router" to="/astronomia">
          <v-btn class="btn" elevation="0" color="deep-purple accent-4">
            ver equações
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardEq",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.main{
  padding: 0px !important;
}
.router{
  text-decoration: none;
}
.btn {
  color: #fff;
}
</style>