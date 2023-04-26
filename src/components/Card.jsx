import { useState } from 'react';
import './Card.css';

const Card = ({ usuario }) => {

  const { first_name, last_name, avatar, email, size } = usuario;

  const [status, setStatus] = useState(true)

  // EVENTOS: Click
  const handdleClick = (e) => {
    e.target.classList.toggle('imagen-modificada');
    setStatus( !status )
  };

  return (
    <div className="card">
      <h2 className='card-name'> {first_name} {last_name}  </h2>
      <img
        className={ 'card-photo' }
        src={avatar}
        alt={first_name}
        onClick={handdleClick}
      />
      <p className='card-email'>{ status ? 'Activo' : 'Suspendido' }</p>
    </div>
  );
};

export default Card;