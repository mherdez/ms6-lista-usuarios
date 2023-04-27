import { useState } from 'react';
import './Card.css';

const Card = ({ usuario }) => {

  console.log( usuario )
  // const { first_name, last_name, avatar, email, size } = usuario;
  const { name, email, picture } = usuario;
  const { first, last } = name;
  const { large } = picture;

  const [status, setStatus] = useState(true)

  // EVENTOS: Click
  const handdleClick = (e) => {
    e.target.classList.toggle('imagen-modificada');
    setStatus( !status )
  };

  return (
    <div className="card">
      <h2 className='card-name'> {first} {last}  </h2>
      <img
        className={ 'card-photo' }
        src={large}
        alt={first}
        onClick={handdleClick}
      />
      <p className='card-email'>{ status ? 'Activo' : 'Suspendido' }</p>
    </div>
  );
};

export default Card;