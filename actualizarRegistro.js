const actualizar = async (nombre, curso, nivel, rut, client) => {
  let SQLquery = {
    text:
      "UPDATE estudiantes SET nombre=$1, curso=$2, nivel=$3, rut = $4 WHERE rut =$4 RETURNING *",
    values: [nombre, curso, nivel, rut],
    name: "update-estudiante",
  };

  try {
    const result = await client.query(SQLquery);
    console.log("Cantidad de registros afectados ", result.rowCount);
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error.code);
    console.log(error);
    console.log("no se pudo actualizar el registro");
  }
};

module.exports = actualizar;
