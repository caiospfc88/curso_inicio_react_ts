import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);

  if (!contextoTema) {
    return null;
  }

  return (
    <div
      style={{
        background: contextoTema.tema === "claro" ? "#fff" : "#000",
        color: contextoTema.tema === "claro" ? "#000" : "#fff",
      }}
    >
      <button onClick={contextoTema.alternarTema}>Alterar Tema</button>
      <p>Testando Alteração em Tema</p>
    </div>
  );
};
export default BarraFerramentas;
