/* eslint-disable no-unused-vars */
import Vue from "vue"
import Router from "vue-router"

import Inicio from "../components/Inicio"
import Menu from "../components/Templates/Menu"
import MenuAlternativo from "../components/Templates/MenuAlternativo"
import Usuario from "../components/usuario/Usuario"
import UsuarioLista from "../components/usuario/UsuarioLista"
// import UsuarioDetalhe from "../components/usuario/UsuarioDetalhe"
// import UsuarioEditar from "../components/usuario/UsuarioEditar"

Vue.use(Router)

// importe dinamico (lazy)
const UsuarioDetalhe = () => import("../components/usuario/UsuarioDetalhe")
const UsuarioEditar = () => import("../components/usuario/UsuarioEditar")

const router = new Router({
  mode: "history",

  // Navegar to # ó punto  { x: 0, y: 1000 }
  // scrollBehavior(to, from, savePosition) {
  //   if (savePosition) return savePosition
  //   else if (to.hash) return { selector: to.hash }
  //   else return { x: 0, y: 0 }
  // },

  routes: [
    {
      path: "/",
      name: "inicio",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: "/usuario",
      components: {
        default: Usuario,
        menu: MenuAlternativo,
        menuInferior: MenuAlternativo,
      },
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("Antes da rot -> usuário detalhe")
            next()
          },
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "/redirecionar",
      redirect: "usuario",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log("antes das rotas -> globals")

  next()
})

export default router
