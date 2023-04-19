import './Card.css';

const Card = ({ usuario }) => {

  const { first_name, last_name, avatar, email } = usuario;

  // EVENTOS: Click
  const handdleClick = (e) => {
    e.target.classList.toggle('imagen-modificada');
    e.target.classList.toggle('opacidad');
    e.target.classList.toggle('borde');
  };

  return (
    <div className="card">
      <h2 className='card-name'> {first_name} {last_name}  </h2>
      <img
        className='card-photo'
        src={avatar}
        alt={first_name}
        onClick={handdleClick}
      />
      <p className='card-email'>{email}</p>
    </div>
  );
};

export default Card;