<template>
  <div>
    <v-toolbar class="main" dense color="#6C63FF">
      <router-link to="/" class="router-link">
        <v-toolbar-title class="title">Project Schwarza</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <router-link class="router-link" to=""
        ><v-btn icon>
          <v-icon color="#ffffff">mdi-information</v-icon>
        </v-btn>
      </router-link>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="#ffffff">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Click Me 1</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Click Me 2</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Click Me 3</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Click Me 4</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBarComp",

  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  margin-bottom: 0px;
}
.title {
  color: #fff;
}
.router-link {
  text-decoration: none;
}
</style>