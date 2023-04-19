import './Contador.css'
import { useState } from 'react';

const Contador = () => {

  let [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador( contador + 1 )
    console.log(contador)
  }

  const reset = () => {
    setContador( 0 )
  }

  return (
    <main>
      <h1>{contador}</h1>
      <div className='btn' onClick={incrementar}>Sumar</div>
      <div className='btn' onClick={reset}>Reset</div>
      <div className='btn' onClick={() => setContador( contador - 1)}>Resta</div>
    </main>
  );
};

export default Contador;