<template>
  <div class="main-container">
    <div class="text-center ma-2">
      <v-snackbar  v-model="snackbar" :timeout="timeout">
        {{ texto }}
        <template v-slot:action="{ attrs }">
          <v-btn color="#6C63FF" v-bind="attrs" @click="snackbar = false">
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvisoComp",
  props: {
    texto: String
  },
  data() {
    return {
        snackbar: true,
        timeout: 20000,
    };
  },
};
</script>

<style scoped>
</style>