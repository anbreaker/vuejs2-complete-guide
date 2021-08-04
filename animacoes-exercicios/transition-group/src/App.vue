<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />

    <b-button variant="primary" class="mb-4" @click="adicionarStringRandom">
      Adicionar String Random
    </b-button>

    <transition-group name='slide' tag="div">
      <b-list-group v-for="(string, idx) in stringsRandom" :key="idx">
        <b-list-group-item @click="removerStringRandom(idx)">
          {{ string }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stringsRandom: ["adsf5e", "ndf54", "iyeer52", "pouj78"],
    };
  },

  /* eslint-disable */
  methods: {
    adicionarStringRandom() {
      const randomString = Math.random()
        .toString(36)
        .substring(2);
      this.stringsRandom.push(randomString);
    },

    removerStringRandom(index) {
      this.stringsRandom.splice(index, 1);
    },

    beforeEnter(el) {
      console.log("beforeEnter");
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    // eslint-disable-next-line no-use-before-define
    enter(el, done) {
      this.animar(el, done, false);
    },

    beforeLeave(el) {
      console.log("beforeLeave");
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    // eslint-disable-next-line no-use-before-define
    leave(el, done) {
      this.animar(el, done, true);
    },

    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 25px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move{
  transition: transform 1s;
}
</style>
