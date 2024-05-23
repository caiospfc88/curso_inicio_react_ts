import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`O Contador esta com o valor de: ${count}`);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(0)}>Zerar</button>
    </div>
  );
};
export default Counter;
