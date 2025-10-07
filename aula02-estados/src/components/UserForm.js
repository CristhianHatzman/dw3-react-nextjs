import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (evento) => {
    // Aqui é onde sera mandando os dados para a Api, mas como atualmente estamos só no front vamos só printar no console
    event.preventDefault;
    console.log(name, email);
  };

  return (
    <>
      <h1>Formulário de Cadastro:</h1>
      <br />
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          // Quando o valor do input mudar, pegue o valor valor (e.target.value) e mande atualizar o estado name (setName())
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {name}
      <br />
      {email}
    </>
  );
};

export default UserForm;
