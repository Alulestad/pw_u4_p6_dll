<template>
  <div class="container">
    <h3>Guardar</h3>
    <div>
      <ul>
        <li>
          <h3>Cedula:</h3>
          <input v-model="cedula" id="inp_cedula" type="text" />
        </li>
        <li>
          <h3>Nombre:</h3>
          <input v-model="nombre" id="inp_nombre" type="text" />
        </li>
        <li>
          <h3>Apellido:</h3>
          <input v-model="apellido" id="inp_apellido" type="text" />
        </li>
        <li>
          <h3>Fecha nacimiento:</h3>
          <input
            v-model="fechaNacimiento"
            id="inp_fecha_nacimiento"
            type="datetime-local"
          />
        </li>
        <li>
          <h3>Genero:</h3>
          <input v-model="genero" id="inp_genero" type="text" />
        </li>
      </ul>
    </div>
    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/assets/clients/clienteEstudiante";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      genero: null,
    };
  },
  methods: {
    async guardar() {
      const bodyEstudiante = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
      };
      const data = await guardarFachada(bodyEstudiante);
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
