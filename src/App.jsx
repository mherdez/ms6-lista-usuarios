import './App.css';
import Card from './components/Card';
import { usuarios } from './helpers/usuarios';

const App = () => {

  return (
    <>
      <h1 className='title'>Lista de Usuarios</h1>
      <div className='container'>
        {usuarios.map(usuario => <Card key={usuario.id} usuario={usuario} />)}
      </div>
    </>
  );
};

export default App;