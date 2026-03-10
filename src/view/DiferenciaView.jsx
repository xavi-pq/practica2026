import { useState } from "react";
import Formulario from "../components/Formulario";

function DiferenciaView() {
  const [resultado, setResultado] = useState("");

  return (
    <div>
      <h2>Diferencia entre números</h2>

      <Formulario onResultado={setResultado} />

      <p>{resultado}</p>
    </div>
  );
}

export default DiferenciaView;