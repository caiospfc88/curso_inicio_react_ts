import { useReducer } from "react";
import { contadorReducer } from "../reducers/contadorReducer";

const Contador = () => {
  const [count, dispatch] = useReducer(contadorReducer, 0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
};
export default Contador;
