<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/estudiante">Estudiante Actualizar</router-link>
    <router-link to="/estudianteGuardar">Estudiante Crear</router-link>
    <router-link to="/estudianteEliminar">Estudiante Eliminar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0px 30px;
}

div a {
  color: blueviolet;
  margin: 0px 10px;
}
</style>
