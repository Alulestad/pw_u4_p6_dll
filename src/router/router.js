import { createRouter, createWebHashHistory } from "vue-router";
//declaración de rutas, debo poner toas las paginas existentes
import EstudiantesPage from "../page/EstudiantesPage.vue"; //@ se pone y manda al inicio osea al src
import EstudiantesEliminarPage from "../page/EstudiantesEliminarPage.vue";
import EstudianteGuardarPage from "../page/EstudianteGuardarPage.vue";
import BienvenidaPage from "../page/BienvenidaPage.vue";
import NotFoundPage from "@/page/NotFoundPage.vue";
import BloqueadoPage from "@/page/BloqueadoPage.vue";

const routes = [
  {
    path: "/estudiante/:cedula", //aca ba la ruta que quiero que tenga la pagina
    name: "prueba",
    component: EstudiantesPage,
  },
  {
    path: "/estudianteEliminar/:cedula", //aca ba la ruta que quiero que tenga la pagina
    component: EstudiantesEliminarPage,
  },
  {
    path: "/estudianteGuardar", //aca ba la ruta que quiero que tenga la pagina
    component: EstudianteGuardarPage,
  },
  {
    path: "/", //INDEX
    component: BienvenidaPage,
  },
  {
    path: "/:pathMatch(.*)*", //Todas las que no hagan Match ejecuta el wildcard

    component: NotFoundPage,
  },
  {
    path: "/bloqueado", //Todas las que no hagan Match ejecuta el wildcard
    name: "bloqueado",
    component: BloqueadoPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //aca se envia un objeto mediante el  {}

//Programar los guardianes:
router.beforeEach((to, from, next) => {
  //aca va el control: ejemplo si esta en la base el usuario lo dejo o no pasar
  //import achiboCliente from "achiboCliente";

  console.log("##Guardianes##");
  console.log(to);
  console.log(from);
  console.log(next);

  let usuario = "daniel";
  let resultado = false;

  const random = Math.random() * 100;

  if (random > 50) {
    console.log("Si tiene acceso a esa pagina");
    next(); //da el acceso
  } else {
    console.log("Acceso bloqueado");
    next({ name: "bloqueado" });
  }
});

export default router;
