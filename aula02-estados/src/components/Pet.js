const Pet = ({ name, breed, age }) => {
  // Desestruturação de props:
  // Destructuring => props.name agora é name
  return (
    <>
      <div>
        <br />
        <h3>Informaçãoes do pet </h3>
        <ul>
          <li>Nome: {name}</li>
          <li>Raça: {breed}</li>
          <li>Idade: {age} anos</li>
        </ul>
      </div>
    </>
  );
};

export default Pet;
