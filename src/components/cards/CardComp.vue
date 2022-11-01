<template>
  <div class="main">
    <v-card class="mx-auto" max-width="390px" color="#F5F5F5">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">{{tag}}</div>
          <v-list-item-title class=" titulo text-h5 mb-1">
            {{titulo}}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{desc}}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="70">
          <img :src="img" alt="">
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <router-link class="router" :to="link">
          <v-btn class="btn" elevation="0" color="#6C63FF">
            ver equações
          </v-btn>
        </router-link>
        <v-spacer/>
        <p class="numero-equacoes mb-0 mr-2">{{numeroEquacoes}} </p>
        <p class="texto-numero-equacoes mb-0 mr-2">equações</p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "CardModernaComp",
  components: {
    
  },
  props: {
    titulo: String,
    tag: String,
    desc: String,
    img: String,
    link: String,
    numeroEquacoes: Number,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.main {
  padding: 0px !important;
}
.text-overline{
  color: #6C63FF;
}
.titulo{
  margin-bottom: 8px !important;
}
.router {
  text-decoration: none;
}
.btn {
  color: #fff;
}
.numero-equacoes{
  font-size: 14px !important;
  color: #6C63FF;
}
.texto-numero-equacoes{
  font-size: 14px !important;
}
</style>