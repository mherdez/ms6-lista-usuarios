const Card = ( {usuario} ) => {

  const { first_name, last_name, avatar, email } = usuario;

  return (
    <div className="card">
      <h2 className='card-name'> {first_name} {last_name}  </h2>
      <img className='card-photo' src={avatar} alt={first_name} />
      <p className='card-email'>{email}</p>
    </div>
  );
};

export default Card;