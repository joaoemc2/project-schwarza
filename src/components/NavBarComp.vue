<template>
  <div>
    <v-toolbar class="main" dense color="#5a3e98">

      <v-toolbar-title class="title" >Project Schwarzschild</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="grey" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
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
.main{
  margin-bottom: 0px;
}
.title{
  color: #fff;
}
</style>