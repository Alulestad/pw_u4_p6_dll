<template>
  <div class="container">
    <h1>Consultar y actualizar</h1>
    <div>
      <ul>
        <li>
          <label for="inp_cedula">Cédula:</label>
          <input id="inp_cedulavm" v-model="cedula" type="text" name="cedula" />
        </li>
        <li>
          <label for="inp_nombre">Nombre:</label>
          <input v-model="nombre" id="inp_nombre" type="text" />
        </li>
        <li>
          <label for="inp_apellido">Apellido:</label>
          <input v-model="apellido" id="inp_apellido" type="text" />
        </li>
        <li>
          <label for="inp_fecha_nacimiento">Fecha nacimiento:</label>
          <input
            v-model="fechaNacimiento"
            id="inp_fecha_nacimiento"
            type="datetime-local"
          />
        </li>
        <li>
          <label for="slct_genero">Género del estudiante</label>
          <input
            id="inputGenero"
            v-model="genero"
            list="opcionesGenero"
            placeholder="Seleccione un género"
          />
          <datalist id="opcionesGenero">
            <option value="M"></option>
            <option value="F"></option>
            <option value="Otro"></option>
          </datalist>
        </li>
      </ul>
    </div>
    <div class="container-buscar">
      <button @click="consultar()">Buscar2</button>
    </div>
    <div class="container-actualizar">
      <button @click="actualizar">Actualizar2</button>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../assets/clients/clienteEstudiante.js";
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
    async consultar() {
      console.log(this.cedula);
      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
      console.log(data.cedula);
      console.log(data.nombre);
      console.log(data.apellido);

      this.cedula = data.cedula;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;
      this.genero = data.genero;
    },

    async actualizar() {
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
      };

      const data = await actualizarFachada(this.cedula, bodyEstudiante);
      console.log(data);
    },
  },
  created() {
    console.log("ROUTER>>>> ");
    console.log(this.$route);
    console.log("CEDULA>>>> ");
    console.log(this.$route.params.cedula);
    if (this.$route.params.cedula !== "vacio") {
      this.cedula = this.$route.params.cedula;
      this.consultar();
    }
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
