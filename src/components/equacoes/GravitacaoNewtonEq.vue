<template>
  <div class="main d-flex">
    <v-row class="row-container">
      <v-col class="col-container">
        <h2 class="titulo">Gravitação de Newton</h2>
        <p class="sobre">
          "A Lei da Gravitação Universal estabelece que, se dois corpos possuem
          massa, eles sofrem a ação de uma força atrativa proporcional ao
          produto de suas massas e inversamente proporcional a sua distância."
        </p>
        <div>
          <img
            class="equacao-img"
            src="@/assets/img_equacao_comp/GravitacaoNewton.png"
            alt=""
          />
        </div>
      </v-col>
      <v-col class="col-container">
        <div class="equacao d-flex">
          <div class="text-fields">
            <!-- const. gravitacional -->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                label="Const. gravitacional"
                outlined
                dense
                v-model="gBase"
                type="number"
                color="#5a3e98"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potência"
                outlined
                dense
                v-model="gPow"
                type="number"
                color="#5a3e98"
              ></v-text-field>
            </div>
            <!-- massa 1 -->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                label="Massa 1° corpo (kg)"
                outlined
                dense
                v-model="m1Base"
                type="number"
                color="#5a3e98"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potência"
                outlined
                dense
                v-model="m1Pow"
                type="number"
                color="#5a3e98"
              ></v-text-field>
            </div>
            <!-- massa 2 -->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                label="Massa 2° corpo (kg)"
                outlined
                dense
                v-model="m2Base"
                type="number"
                color="#5a3e98"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potencia"
                outlined
                dense
                v-model="m2Pow"
                type="number"
                color="#5a3e98"
              ></v-text-field>
            </div>
            <!-- distancia -->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                label="Distancia (m)"
                outlined
                dense
                v-model="dBase"
                type="number"
                color="#5a3e98"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potencia"
                outlined
                dense
                v-model="dPow"
                type="number"
                color="#5a3e98"
              ></v-text-field>
            </div>
            <!-- btn calcular -->
            <v-btn
              class="botao-calcular mb-4"
              @click="calcular()"
              color="#5a3e98"
              >Calcular</v-btn
            >
            <!-- btn limpar -->
            <v-btn
              v-if="m1Base || m2Base || dBase"
              outlined
              class="botao-limpar mb-7"
              @click="limpar()"
              color="#5a3e98"
              >Limpar</v-btn
            >
            <!-- resultado -->
            <div class="d-flex">
              <v-text-field
                label="Força de atração"
                readonly
                outlined
                dense
                v-model="f"
                type="string"
                color="#5a3e98"
              ></v-text-field>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GravitacaoNewtonEq",
  data() {
    return {
      // resultado
      f: 0,
      // const. gravitacional
      gBase: 6.67,
      gPow: -11,
      gTotal: 0,
      // massa 1
      m1Base: null,
      m1Pow: 0,
      m1Total: 0,
      // massa 2
      m2Base: null,
      m2Pow: 0,
      m2Total: 0,
      // distancia
      dBase: null,
      dPow: 0,
      dTotal: 0,
    };
  },
  methods: {
    calcular() {
      this.gTotal = this.gBase * Math.pow(10, this.gPow);
      this.m1Total = this.m1Base * Math.pow(10, this.m1Pow);
      this.m2Total = this.m2Base * Math.pow(10, this.m2Pow);
      this.dTotal = this.dBase * Math.pow(10, this.dPow);
      this.f = (this.gTotal * ((this.m1Total * this.m2Total) / Math.pow(this.dTotal, 2)));
      this.f = this.f.toExponential(2) + " N";
    },
    limpar() {
      this.f = 0;
      this.gBase = 6.67;
      this.gPow = -11;
      this.gTotal = 0;
      this.m1Base = null;
      this.m1Pow = 0;
      this.m1Total = 0;
      this.m2Base = null;
      this.m2Pow = 0;
      this.m2Total = 0;
      this.dBase = null;
      this.dPow = 0;
      this.dTotal = 0;
    },
  },
};
</script>
<style scoped>
.main {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (min-width: 803px) {
  .row-container {
    margin-top: 66px;
  }
  .col-container {
    margin: auto 36px;
  }
}
.titulo {
  text-align: center;
  margin-top: 12px;
  margin-bottom: 26px;
}
.sobre {
  text-align: center;
  max-width: 390px;
}
.equacao-img {
  width: 360px;
  margin-bottom: 26px;
}
.equacao {
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
.valor-pow-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.valor {
  width: 200px;
}
.x10 {
  position: relative;
  top: -5px;
  padding-left: 12px;
}
.potencia {
  margin-left: 10px;
  width: 100px;
}
</style>
