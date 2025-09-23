// Props = Propriedades do componente - Serve para transferir informações entre componentes.
// Props é um objeto {} que possui chaves e valores
const Description = (props) => {
  return (
    <>
      <div>
        <br />
        <h3>Informações do usuário</h3>
        <p>Cidade: {props.city}</p>
        <p>Idade: {props.age} anos</p>
        <p>Email: {props.email}</p>
      </div>
    </>
  );
};

export default Description;
