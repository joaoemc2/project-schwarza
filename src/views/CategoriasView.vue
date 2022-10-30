<template>
  <div class="main">
    <div
      v-for="content in cardContent"
      :key="content.id"
      class="card-container"
    >
      <card-comp
        :titulo="content.titulo"
        :tag="content.tag"
        :desc="content.desc"
        :img="content.src"
        :link="content.link"
      />
    </div>
  </div>
</template>
  
  <script>
import CardComp from "@/components/cards/CardComp.vue";

export default {
  name: "CategoriasView",
  components: {
    CardComp,
  },
  data() {
    return {
      cardContent: [
        {
          id: 0,
          titulo: "Fisica Moderna",
          tag: "Equações",
          desc: "Equações relacionadas a Teoria da Relatividade e Física Quântica.",
          src: require("@/assets/img_cards/moderna.png"),
          link: "/moderna",
        },
        {
          id: 1,
          titulo: "Fisica Mecânica",
          tag: "Equações",
          desc: "Fenômenos que são decorrentes dos movimentos dos corpos.",
          src: require("@/assets/img_cards/mecanica.png"),
          link: "",
        },
        {
          id: 2,
          titulo: "Movimento Ondulatorio",
          tag: "Equações",
          desc: "Propriedades, formas e meios de propagação de ondas.",
          src: require("@/assets/img_cards/ondulatoria.png"),
          link: "",
        },
        {
          id: 3,
          titulo: "Eletricidade",
          tag: "Equações",
          desc: "Responsavel por investigar a interação das cargas elétricas com outros corpos.",
          src: require("@/assets/img_cards/eletricidade.png"),
          link: "",
        },
        {
          id: 4,
          titulo: "Eletromagnetismo",
          tag: "Equações",
          desc: "Responsavel por investigar as interações de imãs com outros corpos.",
          src: require("@/assets/img_cards/eletromagnetismo.png"),
          link: "",
        },
        {
          id: 5,
          titulo: "Termodinâmica",
          tag: "Equações",
          desc: "Calor, Temperatura e Equilíbrio Térmico.",
          src: require("@/assets/img_cards/termodinamica.png"),
          link: "",
        },
        {
          id: 6,
          titulo: "Óptica",
          tag: "Equações",
          desc: "Fenômenos luminosos em geral: luz visível, ultravioleta, infravermelho, etc...",
          src: require("@/assets/img_cards/optica.png"),
          link: "",
        },
      ],
    };
  },
};
</script>
  <style scoped>
.main {
  padding: 0px 16px;
}
.card-container {
  margin: 36px auto;
}
</style>
  