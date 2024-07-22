<template>
  <div class="container">
    <h1>Eliminar</h1>
    <div>
      <ul>
        <li>
          <h3>Cedula:</h3>
          <input v-model="cedula" id="inp_cedula" type="text" />
        </li>
      </ul>
    </div>
    <button @click="eliminar">Eliminar</button>
  </div>
</template>

<script>
import { eliminarFachada } from "@/assets/clients/clienteEstudiante";
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async eliminar() {
      const data = await eliminarFachada(this.cedula);
      console.log(data);
    },
  },
};
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
