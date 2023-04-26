import './App.css';
import Card from './components/Card';
import { usuarios } from './helpers/usuarios';

const App = () => {

  const firstUser = usuarios[2]
  return (
    <>
      <h1 className='title'>Lista de Usuarios</h1>
      <div className='container'>
        {usuarios.map(usuario => <Card key={usuario.id} usuario={usuario} />)}
        {/* <Card usuario={firstUser} /> */}
        {/* <Card usuario={usuarios[0]} size={'grande'} />
        <Card usuario={usuarios[2]} />
        <Card usuario={usuarios[4]} size={'chica'}/> */}
      </div>
    </>
  );
};

export default App;