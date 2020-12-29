// consultar estudiantes por rut

/* 
CREATE DATABASE alwaysmusic;
\c alwaysmusic;
CREATE TABLE alumnos (id SERIAL PRIMARY KEY, nombre VARCHAR(50) NOT NULL, rut VARCHAR(50), curso VARCHAR(50), nivel VARCHAR(60));
*/

const [seleccion, nombreRut, rut, curso, nivel] = process.argv.slice(2);

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

  const { Pool } = require("pg");