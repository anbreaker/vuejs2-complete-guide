<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o Email"
        />
        <hr />
        <b-col class="text-center">
          <b-button @click="salvar" size="lg" variant="primary">
            Salvar Usuario
          </b-button>
          <b-button
            class="ml-2"
            @click="obterUsuarios"
            size="lg"
            variant="success"
          >
            Obter Usuarios
          </b-button>
        </b-col>
      </b-form-group>
    </b-card>
    <hr />

    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: {{ usuario.nome }}</strong>
        <br />
        <strong>Email: {{ usuario.email }}</strong>
        <br />
        <strong>Id: {{ id }}</strong>
        <br />
        <div class="mt-3">
          <b-button @click="carregar(id)" size="lg" variant="warning">
            Carregar
          </b-button>
          <b-button
            @click="excluir(id)"
            size="lg"
            variant="danger"
            class="ml-2"
          >
            Excluir
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      id: null,
      usuario: {
        nome: "",
        email: ""
      }
    };
  },

  methods: {
    async salvar() {
      //min 6
      await this.$http.post("usuarios.json", this.usuario);
      this.limpar();
    },

    async obterUsuarios() {
      const response = await this.$http.get("usuarios.json");
      this.usuarios = response.data;
    },

    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },

    async excluir(id) {
      await this.$http.delete(`/usuarios/${id}.json`);
      this.limpar();
    },

    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
    }
  }
  // Prueba firebase
  // created() {
  //   this.$http
  //     .post("usuarios.json", {
  //       nome: "Magalí",
  //       email: "magali@gmail.com"
  //     })
  //     .then(response => console.log(response));
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
