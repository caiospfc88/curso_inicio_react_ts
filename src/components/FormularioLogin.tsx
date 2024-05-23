import React, { useState } from "react";

const FormularioLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Usuario: ${usuario} e senha: ${senha} enviados!`);
    setUsuario("");
    setSenha("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Exercício 1</p>
      <div>
        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default FormularioLogin;
