import './Contador.css'
import { useEffect, useState } from 'react';

const Contador = () => {

  const [contador, setContador] = useState(0)
  const [doble, setDoble ] = useState(0);

  const incrementar = () => {
    setContador( contador + 1 )
  }

  const reset = () => {
    setContador( 0 )
  }

  useEffect( () => {
    setDoble( contador * 2)
  }, [contador] )

  return (
    <main>
      <h1>{contador}</h1>
      <h2>El doble del contador es: {doble}</h2>
      <div className="container-contador">
        <div className='btn' onClick={() => setContador( contador - 1)}>-</div>
        <div className='btn' onClick={reset}>Reset</div>
        <div className='btn' onClick={incrementar}>+</div>
      </div>
    </main>
  );
};

export default Contador;