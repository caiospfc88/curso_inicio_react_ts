import useLocalStorage from "../hooks/useLocalStorage";

const UseCustomHook = () => {
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>O nome armazenado é: {nome}</p>
    </div>
  );
};
export default UseCustomHook;
