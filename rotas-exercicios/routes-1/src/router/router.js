import Vue from "vue"
import Router from "vue-router"

import Inicio from "../components/Inicio"
import Usuario from "../components/usuario/Usuario"
import UsuarioPropParam from "../components/usuario/UsuarioPropParam"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
    },
    {
      path: "/usuario-sinprops/:id",
      component: Usuario,
    },
    {
      path: "/usuario/:id",
      component: UsuarioPropParam,
      props: true,
    },
  ],
})
