import { createRouter, createWebHashHistory } from "vue-router";
//declaración de rutas, debo poner toas las paginas existentes
import { EstudiantesPage } from "../pages/EstudiantesPage.vue"; //@ se pone y manda al inicio osea al src
import { EstudiantesEliminarPage } from "../pages/EstudiantesEliminarPage.vue";
import { EstudianteGuardarPage } from "../pages/EstudianteGuardarPage.vue";
import { BienvenidaPage } from "../pages/BienvenidaPage.vue";

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
    path: "/", //Pagina INDEX
    component: BienvenidaPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
}); //aca se envia un objeto mediante el  {}

export default router;
