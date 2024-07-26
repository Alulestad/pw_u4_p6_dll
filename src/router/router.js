import { createRouter, createWebHashHistory } from "vue-router";
//declaración de rutas, debo poner toas las paginas existentes
import EstudiantesPage from "../page/EstudiantesPage.vue"; //@ se pone y manda al inicio osea al src
import EstudiantesEliminarPage from "../page/EstudiantesEliminarPage.vue";
import EstudianteGuardarPage from "../page/EstudianteGuardarPage.vue";
import BienvenidaPage from "../page/BienvenidaPage.vue";
import NotFoundPage from "@/page/NotFoundPage.vue";

const routes = [
  {
    path: "/estudiante/:cedula", //aca ba la ruta que quiero que tenga la pagina
    component: EstudiantesPage,
  },
  {
    path: "/estudianteEliminar", //aca ba la ruta que quiero que tenga la pagina
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //aca se envia un objeto mediante el  {}

export default router;
