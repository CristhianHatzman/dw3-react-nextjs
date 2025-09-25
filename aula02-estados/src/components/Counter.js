import { useState } from "react";

const Counter = () => {
  // Variáveis não re-renderizão o componente.
  //   let x = 0;
  //   console.log(x);
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <p>Contador: {x}</p>
        <button
          onClick={() => {
            x = x + 1;
          }}
        >
          Aumentar
        </button>
      </div> */}
      <div>
        <p>O contador está na {count}º vez.</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </>
  );
};
export default Counter;
