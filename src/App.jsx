import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { usuarios, randomUsers } from './helpers/usuarios';

const URL = 'https://randomuser.me/api/?results=';




const App = () => {
  // const firstUser = usuarios[2]

  const initUsersPromise = () => {
    const usuarios = new Promise( (resolve, reject) => {
      const peticion = fetch(URL);
      peticion.then( res => {
        res.json().then( data => {
          console.log(data.results)
          setUsersApi(data.results)
          return data.results
        })
      })
    })
  }

  const initUsersAsyncAwait = async ( limite ) => {
    const peticion = await fetch(`${URL}${limite}`);
    const { results } = await peticion.json();
    setUsersApi( results )
  }

  const [usersApi, setUsersApi] = useState([])

  useEffect( () => {
    // initUsersPromise()
    initUsersAsyncAwait(16)
  }, [] )


  return (
    <>
      <h1 className='title'>Lista de Usuarios</h1>
      <div className='container'>
        {usersApi.map(usuario => <Card key={usuario.login.uuid} usuario={usuario} />)}
        {/* {usuarios.map(usuario => <Card key={usuario.id} usuario={usuario} />)} */}
        {/* <Card usuario={firstUser} /> */}
        {/* <Card usuario={usuarios[0]} size={'grande'} />
        <Card usuario={usuarios[2]} />
        <Card usuario={usuarios[4]} size={'chica'}/> */}
      </div>
    </>
  );
};

export default App;