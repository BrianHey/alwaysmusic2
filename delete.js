const eliminarEstudiante = async (rut) => {
    const consulta = {
        text: "DELETE FROM estudiantes where rut = '$1'",
        values: rut,
        rowMode: "array",
        name: "eliminar-estudiante"
    }
    try {
        const res = await pool.query(consulta)
        return res.rowsCount
        // res.rowCount > 1 ? console.log("Estudiante eliminado") : console.log("El rut ingresado no existe, vuelve a intentar")
    } catch (error) {
        console.log(error.code)
    }
}

module.exports = {
    eliminarEstudiante
}