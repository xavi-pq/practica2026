import { useState } from "react";

function Formulario({ onResultado }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const calcular = () => {
    const diferencia = Math.abs(num1 - num2);

    if (diferencia > num3) {
      onResultado("La diferencia es mayor que el tercer número");
    } else {
      onResultado("La diferencia NO es mayor que el tercer número");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número 3"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      />

      <button onClick={calcular}>Verificar</button>
    </div>
  );
}

export default Formulario;