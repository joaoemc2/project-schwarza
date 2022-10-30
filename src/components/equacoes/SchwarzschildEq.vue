<template>
  <div class="main d-flex">
    <p>Raio de Schwarzschild</p>
    <!-- <div class="mr-2">
      <img class="eq-img" src="../../assets/equação_linhas.png" alt="" />
    </div> -->
    <div class="equacao d-flex">
      <div class="text-fields">
        <v-text-field
          label="const. gravitacional"
          outlined
          dense
          v-model="value0"
          type="number"
        ></v-text-field>
        <v-text-field
          label="massa do objeto"
          outlined
          dense
          v-model="value1"
          type="number"
        ></v-text-field>
        <v-text-field
          label="vel. da luz ao quadrado"
          outlined
          dense
          v-model="value2"
          type="number"
        ></v-text-field>
        <v-text-field
          label="raio de Schwarzschild"
          outlined
          dense
          disabled
          v-model="value3"
        ></v-text-field>
        <v-btn @click="calcular()" class="botao-calcular" color="#6200B8"
          >Calcular</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchwarzschildEq",
  data() {
    return {
      value0: 6.67 * Math.pow(10, -11),
      value1: 1.98892 * Math.pow(10, 30),
      value2: Math.pow(299792458, 2).toExponential(7),
      value3: null,
    };
  },
  methods: {
    calcular() {
      this.value3 = (2 * this.value0 * this.value1) / this.value2;
    },
  },
};
</script>
<style scoped>
.main{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
}
.equacao{
  display: flex;
  align-items: center;
}
.text-fields {
  display: flex;
  flex-direction: column;
}
.botao-calcular {
  color: #fff !important;
}
</style>
