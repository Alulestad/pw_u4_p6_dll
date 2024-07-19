<template>
  <div>
    <FormularioEstudianteActualizar />
    <FormularioEstudianteEliminar />
    <FormularioEstudianteGuardar />
  </div>
</template>

<script>
import FormularioEstudianteActualizar from "../components/FormularioEstudianteActualizar.vue";
import FormularioEstudianteEliminar from "../components/FormularioEstudianteEliminar.vue";
import FormularioEstudianteGuardar from "../components/FormularioEstudianteGuardar.vue";
export default {
  components: {
    FormularioEstudianteActualizar,
    FormularioEstudianteEliminar,
    FormularioEstudianteGuardar,
  },
};
</script>

<style></style>
