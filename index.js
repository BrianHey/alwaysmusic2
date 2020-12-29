// consultar  y consulta por rut

/* 
CREATE DATABASE alwaysmusic;
\c alwaysmusic;
CREATE TABLE alumnos (id SERIAL PRIMARY KEY, nombre VARCHAR(50) NOT NULL, rut VARCHAR(50), curso VARCHAR(50), nivel VARCHAR(60));
*/
const { Pool } = require("pg");
const [seleccion, nombreRut, rut, curso, nivel] = process.argv.slice(2);

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

// consulta para ALL
const consulta = {
  text: "SELECT * FROM alumnos",
  rowMode: "array",
  name: "consultaAll",
};

// consulta para RUT
const consultaRut = {
  text: "SELECT * FROM alumnos WHERE rut = $1;",
  values: [nombreRut],
  name: "consulta Rut",
};

pool.connect(async (error_conexion, client, release) => {
  if (error_conexion) return console.error(error_conexion.code);
  try {
    if (seleccion == "consulta") {
      const res = await client.query(consulta);
      console.log("Registro Actual: ", res.rows);
    }
    if (seleccion == "rut") {
      const res = await client.query(consultaRut);
      res.rowCount == 0
        ? console.log("estudiante no existe")
        : console.log("Registro Actual: ", res.rows);
    }
  } catch (error_consulta) {
    console.log(error_consulta.code);
  }
  release();
  pool.end();
});