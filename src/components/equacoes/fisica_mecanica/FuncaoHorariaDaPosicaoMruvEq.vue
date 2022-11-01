<template>
  <div class="main d-flex">
    <v-row class="row-container">
      <v-col class="col-container">
        <h2 class="titulo">Função horária da posição para o MRUV</h2>
        <p class="sobre">
          "A função horária da posição é uma equação matemática que fornece a
          localização do corpo em qualquer instante do movimento"
        </p>
        <div>
          <img
            class="equacao-img"
            src="@/assets/img_equacao_comp/FuncaoHorariaDaPosicaoMruv.png"
            alt=""
          />
        </div>
      </v-col>
      <v-col class="col-container">
        <div class="equacao d-flex">
          <div class="text-fields">
            <!-- posição inicial -->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                :label="label1"
                outlined
                dense
                v-model="sBase"
                type="number"
                color="#6C63FF"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potência"
                outlined
                dense
                v-model="sPow"
                type="number"
                color="#6C63FF"
              ></v-text-field>
            </div>
            <!-- velocidade inicial-->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                :label="label2"
                outlined
                dense
                v-model="vBase"
                type="number"
                color="#6C63FF"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potência"
                outlined
                dense
                v-model="vPow"
                type="number"
                color="#6C63FF"
              ></v-text-field>
            </div>
            <!-- instante "t"-->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                :label="label3"
                outlined
                dense
                v-model="tBase"
                type="number"
                color="#6C63FF"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potencia"
                outlined
                dense
                v-model="tPow"
                type="number"
                color="#6C63FF"
              ></v-text-field>
            </div>
            <!-- aceleração-->
            <div class="valor-pow-container">
              <v-text-field
                class="valor"
                :label="label4"
                outlined
                dense
                v-model="aBase"
                type="number"
                color="#6C63FF"
              ></v-text-field>
              <p class="x10">x10^</p>
              <v-text-field
                class="potencia"
                label="Potencia"
                outlined
                dense
                v-model="aPow"
                type="number"
                color="#6C63FF"
              ></v-text-field>
            </div>
            <!-- btn calcular -->
            <v-btn
              class="botao-calcular mb-4"
              @click="calcular()"
              color="#6C63FF"
              >Calcular</v-btn
            >
            <!-- btn limpar -->
            <v-btn
              v-if="sBase || vBase || tBase || aBase"
              outlined
              class="botao-limpar mb-7"
              @click="limpar()"
              color="#6C63FF"
              >Limpar</v-btn
            >
            <!-- resultado -->
            <div class="d-flex">
              <v-text-field
              :label="labelResultado"
                readonly
                outlined
                dense
                v-model="total"
                type="string"
                color="#6C63FF"
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
      labelResultado: "Resultado",
      total: 0,
      // posição inicial
      label1: "Posição Inicial",
      sBase: null,
      sPow: 0,
      sTotal: 0,
      // velocidade inicial
      label2: "Velocidade Inicial",
      vBase: null,
      vPow: 0,
      vTotal: 0,
      // instante"t"
      label3: 'Instante "t"',
      tBase: null,
      tPow: 0,
      tTotal: 0,
      // aceleração
      label4: "Aceleração",
      aBase: null,
      aPow: 0,
      aTotal: 0,
    };
  },
  methods: {
    calcular() {
      // junção potencia
      this.sTotal = this.sBase * Math.pow(10, this.sPow);
      this.vTotal = this.vBase * Math.pow(10, this.vPow);
      this.tTotal = this.tBase * Math.pow(10, this.tPow);
      this.aTotal = this.aBase * Math.pow(10, this.aPow);
      //resultado
      this.total =
        this.sTotal +
        this.vTotal * this.tTotal +
        (this.aTotal * Math.pow(this.tTotal, 2)) / 2;
    },
    limpar() {
      this.total = 0;
      this.sBase = null;
      this.sPow = 0;
      this.sTotal = 0;
      this.vBase = null;
      this.vPow = 0;
      this.vTotal = 0;
      this.tBase = null;
      this.tPow = 0;
      this.tTotal = 0;
      this.aBase = null;
      this.aPow = 0;
      this.aTotal = 0;
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
  padding: 0 16px;
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
  