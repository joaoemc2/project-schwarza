<template>
  <v-footer dark padless>
    <v-card flat tile class="footer white--text text-center" color="#6C63FF">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Project Schwarzschild</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-github", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style scoped>
.footer{
    width: 100%;
}
</style>