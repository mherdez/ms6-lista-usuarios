import './App.css';

const App = () => {

  const usuarios = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ];

  const { first_name, last_name, avatar, email } = usuarios[2];//desestructuracion

  return (
      <>
        <h1 className='title'>Lista de Usuarios</h1>
          <div className='container'>
            <div className="card">
              <h2 className='card-name'> {first_name} {last_name}  </h2>
              <img className='card-photo' src={avatar} alt={first_name} title={first_name + " " + last_name} />
              <p className='card-email'>{email}</p>
            </div>
            <div className="card">
              <h2 className='card-name'> {first_name} {last_name}  </h2>
              <img className='card-photo' src={avatar} alt={first_name} title={first_name + " " + last_name} />
              <p className='card-email'>{email}</p>
            </div>
            <div className="card">
              <h2 className='card-name'> {first_name} {last_name}  </h2>
              <img className='card-photo' src={avatar} alt={first_name} title={first_name + " " + last_name} />
              <p className='card-email'>{email}</p>
            </div>
            <div className="card">
              <h2 className='card-name'> {first_name} {last_name}  </h2>
              <img className='card-photo' src={avatar} alt={first_name} title={first_name + " " + last_name} />
              <p className='card-email'>{email}</p>
            </div>
          </div>
      </>
  );
};

export default App;