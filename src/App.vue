<template>
  <div>
    <!-- <BienvenidaPage /> -->
    <router-view />
    <EstudianteGuardarPage />
    <!-- <EstudiantesPage /> -->
    <!--     <EstudiantesPage />
    <EstudiantesEliminarPage />
    <EstudianteGuardarPage /> -->
  </div>
</template>

<script>
/* import { routerview } from "vue-router"; */

import BienvenidaPage from "./pages/BienvenidaPage.vue";
import EstudiantesPage from "./pages/EstudiantesPage.vue";
import EstudiantesEliminarPage from "./pages/EstudiantesEliminarPage.vue";
import EstudianteGuardarPage from "./pages/EstudianteGuardarPage.vue";

export default {
  name: "App",
  components: {
    BienvenidaPage,
    EstudiantesPage,
    EstudiantesEliminarPage,
    EstudianteGuardarPage,
  },
};
methods: {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
