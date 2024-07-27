<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link
      :to="{
        name: 'prueba',
        params: { cedula: '1' },
        query: { edad: '25', ciudad: 'quito' },
      }"
      >Estudiante Actualizar</router-link
    >
    <router-link to="/estudianteGuardar">Estudiante Crear</router-link>
    <router-link to="/estudianteEliminar/1">Estudiante Eliminar</router-link>
    <router-link to="/bloqueado">bloqueado</router-link>
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
