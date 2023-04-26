import './Card.css';

const Card = ({ usuario }) => {

  const activado = true;

  const { first_name, last_name, avatar, email, size } = usuario;

  // EVENTOS: Click
  const handdleClick = (e) => {
    e.target.classList.toggle('imagen-modificada');
  };

  return (
    <div className="card">
      <h2 className='card-name'> {first_name} {last_name}  </h2>
      <img
        className={ activado ? `card-photo ${size}` : 'card-photo' }
        src={avatar}
        alt={first_name}
        onClick={handdleClick}
      />
      <p className='card-email'>{email}</p>
    </div>
  );
};

export default Card;