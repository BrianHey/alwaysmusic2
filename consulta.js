// consultar  y consulta por rut

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

const consultar = async () => {
  try {
    const consulta = {
      text: "SELECT * FROM alumnos",
      rowMode: "array",
      name: "consultaAll",
    };
    const result = await pool.query(consulta);
    return result.rows;
  } catch (error) {
    console.log(error.code);
    return error;
  }
};

const consultarRut = async (nombreRut) => {
  try {
    const consultaRut = {
      text: "SELECT * FROM alumnos WHERE rut = $1;",
      values: [nombreRut],
      name: "consulta Rut",
    };
    const result = await pool.query(consultaRut);
    return result.rows;
  } catch (error) {
    console.log(error.code);
    return error;
  }
};

module.exports = { consultar, consultarRut };
