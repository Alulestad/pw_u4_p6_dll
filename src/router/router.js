import { createRouter, createWebHashHistory } from "vue-router";
//declaración de rutas, debo poner toas las paginas existentes
import EstudiantesPage from "../page/EstudiantesPage.vue"; //@ se pone y manda al inicio osea al src
import EstudiantesEliminarPage from "../page/EstudiantesEliminarPage.vue";
import EstudianteGuardarPage from "../page/EstudianteGuardarPage.vue";
import BienvenidaPage from "../page/BienvenidaPage.vue";

const routes = [
  {
    path: "/estudiante", //aca ba la ruta que quiero que tenga la pagina
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
    path: "/",
    component: BienvenidaPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //aca se envia un objeto mediante el  {}

export default router;
