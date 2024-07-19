<template>
  <div class="container">
    <h1>Consultar y actualizar</h1>
    <div>
      <ul>
        <li>
          <h3>Cedula:</h3>
          <input id="inp_cedula" type="text" />
        </li>
        <li>
          <h3>Nombre:</h3>
          <input id="inp_nombre" type="text" />
        </li>
        <li>
          <h3>Apellido:</h3>
          <input id="inp_apellido" type="text" />
        </li>
        <li>
          <h3>Fecha nacimiento:</h3>
          <input id="inp_fecha_nacimiento" type="datetime-local" />
        </li>
        <li>
          <h3>Genero:</h3>
          <input id="inp_genero" type="text" />
        </li>
      </ul>
    </div>
    <button>Buscar</button>
    <button>Actualizar</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style-type: none;
}
button {
  margin: 7px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
