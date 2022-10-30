<template>
  <div class="main">
    <div class="card-container">
      <card-eq />
    </div>
    <div class="card-container">
      <card-eq />
    </div>
  </div>
</template>
  
  <script>
import CardEq from "@/components/CardEq.vue";
export default {
  name: "CategoriasView",
  components: {
    CardEq,
  },
  data() {
    return {};
  },
};
</script>
  <style scoped>
.main {
  padding: 0px 16px;
}
.card-container{
  margin:36px auto;
}
</style>
  