<template>
  <div>
    <Estudiante />
    <EstudianteEliminar />
    <EstudianteGuardar />
  </div>
</template>

<script>
import Estudiante from "../components/Estudiante.vue";
import EstudianteEliminar from "../components/EstudianteEliminar.vue";
import EstudianteGuardar from "../components/EstudianteGuardar.vue";
export default {
  components: {
    Estudiante,
    EstudianteEliminar,
    EstudianteGuardar,
  },
};
</script>

<style></style>
