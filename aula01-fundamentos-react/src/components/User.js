// Expressões JS dentro do HTML

const User = () => {
  // Criando váriaveis para o componente
  const name = "Cristhian Hatzman Trigo";
  return (
    <>
      {/* Esse é o comentário em JSX */}
      <div>
        Usuário logado: <b>{name}</b>
      </div>
    </>
  );
};

export default User;
