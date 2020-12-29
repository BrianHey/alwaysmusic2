const actualizar = async (id, nombre, curso, nivel, rut) => {
	let SQLquery = {
		text:
			"UPDATE cursos SET nombre=$2, curso=$3, nivel=$4, rut = $5 WHERE id =$1",
		values: [id, nombre, curso, nivel, rut],
		name: "update-estudiante",
	};
	pool.connect(async (error_conexion, client, release) => {
		try {
			if (error_conexion) {
				console.log(error_conexion.code);
				console.log(error_conexion);
			} else {
				const result = await client.query(SQLquery);
				console.log("Cantidad de registros afectados ", result.rowCount);
				console.log(result.rows);
			}
		} catch (error) {
			console.log(error.code);
			console.log(error);
			console.log("no se pudo actualizar el registro");
		} finally {
			release();
			pool.end();
		}
	});
};

module.exports = actualizar;
