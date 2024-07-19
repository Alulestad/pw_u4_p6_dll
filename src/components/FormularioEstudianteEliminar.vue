<template>
  <div class="container">
    <h1>Eliminar</h1>
    <div>
      <ul>
        <li>
          <h3>Cedula:</h3>
          <input id="inp_cedula" type="text" />
        </li>
      </ul>
    </div>
    <button>Eliminar</button>
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
