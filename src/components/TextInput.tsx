import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Formulario enviado.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default TextInput;
