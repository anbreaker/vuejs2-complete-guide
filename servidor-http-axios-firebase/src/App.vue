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
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: ""
      }
    };
  },

  methods: {
    async salvar() {
      await this.$http.post("usuarios.json", this.usuario);
      this.limpiar();
    },

    async obterUsuarios() {
      const response = await this.$http.get("usuarios.json");
      this.usuarios = response.data;
    },

    limpiar() {
      this.usuario.nome = "";
      this.usuario.email = "";
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
