const { Pool } = require("pg");
const ingresarEstudiante = require("./nuevoUsuario");
const { consultar, consultarRut } = require("./consulta");
const actualizar = require("./actualizarRegistro");
const { eliminarEstudiante } = require("./delete");
const config = {};

const pool = new Pool(config);
