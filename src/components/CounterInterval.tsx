import { useState } from "react";
import useInterval from "../hooks/useInterval";

const CounterInterval = () => {
  const [contador, setContador] = useState(0);

  useInterval(() => {
    setContador(contador + 1);
    console.log(`Contados: ${contador}`);
  }, 5000);

  return <h1>{contador}</h1>;
};
export default CounterInterval;
