const { Pool } = require("pg");
const ingresarEstudiante = require("./nuevoUsuario");
const { consultar, consultarRut } = require("./consulta");

const config = {};

const pool = new Pool(config);
