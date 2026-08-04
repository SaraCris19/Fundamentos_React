function FormularioExperiencia({ onVolver }) {

  const finalizar = (e) => {
    e.preventDefault();

    alert("Hoja de vida registrada correctamente.");
  };

  return (

    <form className="formulario" onSubmit={finalizar}>

      <h2>Experiencia</h2>
        <div className="campo">
          <label>Empresa</label>
          <input
            type="text"
            placeholder="Nombre de la empresa"
          />
        </div>

        <div className="campo">
          <label>Cargo desempeñado</label>
          <input
            type="text"
            placeholder="Cargo"
          />
        </div>

        <div className="campo">
          <label>Área</label>
          <input
            type="text"
            placeholder="Área de trabajo"
          />
        </div>

        <div className="campo">
          <label>Fecha de ingreso</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Fecha de retiro</label>
          <input type="date" />
        </div>

        <div className="campo">
          <label>Funciones realizadas</label>
          <textarea
            rows="5"
            placeholder="Describa las funciones desempeñadas"
          ></textarea>
        </div>

        <div className="campo">
          <label>Referencia laboral</label>
          <input
            type="text"
            placeholder="Nombre y teléfono"
          />
        </div>

        <div className="campo">
          <label>Adjuntar certificado laboral</label>
          <input type="file" />
        </div>

        <div className="botones">
        <button type="button" onClick={onVolver}>
          Volver
        </button>

        <button type="submit">
          Finalizar
        </button>
      </div>

    </form>

  );
}

export default FormularioExperiencia;