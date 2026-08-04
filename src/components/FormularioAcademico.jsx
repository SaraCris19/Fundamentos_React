function FormularioAcademico({ onVolver, onSiguiente }) {

  const continuar = (e) => {
    e.preventDefault();
    onSiguiente();
  };

  return (

    <form className="formulario" onSubmit={continuar}>

        <h2>Información Académica</h2>

        <div className="campo">
          <label>Nivel de formación</label>
          <select>
            <option>Seleccione...</option>
            <option>Bachiller</option>
            <option>Técnico</option>
            <option>Tecnólogo</option>
          </select>
        </div>

        <div className="campo">
          <label>Institución educativa</label>
          <input
            type="text"
            placeholder="Nombre de la institución"
          />
        </div>

        <div className="campo">
          <label>Título obtenido</label>
          <input
            type="text"
            placeholder="Ejemplo: Tecnólogo en ADSO"
          />
        </div>

        <div className="campo">
          <label>Fecha de inicio</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Fecha de finalización</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Cursos Realizados</label>
          <input
            type="text"
            placeholder="Escriba los cursos realizados"
          />
        </div>

        <div className="botones">
  <button type="button" onClick={onVolver}>
    Volver
  </button>

  <button type="submit">
    Continuar
  </button>
</div>

    </form>

  );
}

export default FormularioAcademico;