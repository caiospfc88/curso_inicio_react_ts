import { useState } from "react";

const ListaDeCompras = () => {
  type Item = {
    id: number;
    nome: string;
  };

  const [itens, setItens] = useState<Item[]>([]);
  const [novoItem, setNovoItem] = useState<string>("");

  const adicionarItem = () => {
    const item: Item = {
      id: itens.length + 1,
      nome: novoItem,
    };

    setItens([...itens, item]);
    setNovoItem("");
  };

  return (
    <div>
      <p>Exercicio 2</p>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar a lista</button>
      <div>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ListaDeCompras;
