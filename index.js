const { Pool } = require("pg");
const ingresarEstudiante = require("./nuevoUsuario");
const { consultar, consultarRut } = require("./consulta");
const actualizar = require("./actualizarRegistro");
const { eliminarEstudiante } = require("./delete");

const config = {
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "alwaysmusic",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
};
const pool = new Pool(config);

pool.connect((err, client, release) => {
  try {

    

  } catch (e) {
  } finally {
    release();
    pool.end();
  }
});
