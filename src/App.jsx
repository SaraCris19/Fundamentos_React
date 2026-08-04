import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormularioPersonal from "./components/FormularioPersonal";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";

function App() {
  const [paso, setPaso] = useState(1);

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    direccion: "",
    perfil: "",

    nivel: "",
    institucion: "",
    titulo: "",

    empresa: "",
    cargo: "",
    funciones: "",
  });

  return (
    <>
      <Header />

      {paso === 1 && (
        <FormularioPersonal
          datos={datos}
          setDatos={setDatos}
          onSiguiente={() => setPaso(2)}
        />
      )}

      {paso === 2 && (
        <FormularioAcademico
          datos={datos}
          setDatos={setDatos}
          onVolver={() => setPaso(1)}
          onSiguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <FormularioExperiencia
          datos={datos}
          setDatos={setDatos}
          onVolver={() => setPaso(2)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;