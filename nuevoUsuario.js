const ingresarEstudiante = async (nombre, rut, curso, nivel) => {
  const validacion = {
    text: "SELECT * FROM estudiantes WHERE rut = $1 RETURNING *",
    values: [rut],
    name: "Ingresar Estudiante",
  };
  await client.query(validacion);
  console.log(rowCount);
  if (rowCount == 1) {
    console.log(
      `Estudiante con RUT ${rut} ya existe en nuestra base de datos, por favor verifique RUT e intente nuevamente`
    );
  } else {
    const consulta = {
      text:
        "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [nombre, rut, curso, nivel],
      name: "Ingresar Estudiante",
    };
    try {
      const res = await client.query(consulta);
      console.log(
        `Cantidad de estudiantes registrados, ${res.rowCount}, siendo el último estudiante ${res.row[0].nombre}`
      );
    } catch (e) {
      console.log(
        `No se ha podido agregar estudiante debido al siguiente error, ${e.code}`
      );
    }
  }
};
module.exports = ingresarEstudiante;
