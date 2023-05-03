import { useState } from 'react';

/*
este ejercicio ToDo List contempla las operaciones basicas de
cualquier lenguaje:

    C = create
    R = read
    U = update
    D = delete

*/

// TODO: Implementar el localStorage para no perder la informacion al recargar la pagina

const Todo = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState({})

  // leyendo la entrada del input
  const getInput = (e) => {
    setInput(e.target.value)
  }

  // añade tarea cuando pulsamos Enter en el input
  const enter = (e) => {
    if( e.keyCode === 13 ) handleClick()
  }

  // añadir nueva tarea a la lista de tareas
  const handleClick = () => {
    if( input.trim().length == 0) return // valida si hay informacion en el input
    setTodos([{id: Date.now(), task: input, completed: false}, ...todos])
    setInput('')
  }

  // cambiando el status completed de la tarea
  const cambiarTarea = (id) => {
    const arr = [...todos]
    const elemento =arr.find( item => item.id === id);
    elemento.completed = !elemento.completed
    setTodo([...arr])
  }

  // borrando las tareas completadas
  const handleDelete = () => {
    const arr = [...todos]
    const completados = arr.filter( item => !item.completed )
    setTodos([...completados])
  }

  return (
    <main className='text-center container-sm w-50 mt-5 '>
      <h1>ToDo List</h1>
      <input
        type="text"
        className='form-control my-4 fs-3 shadow'
        onChange={getInput}
        value={input}
        onKeyDown={enter}
      />

      <button
        className='btn btn-primary me-3 shadow'
        onClick={handleClick}
      >
        Añadir tarea
      </button>

      <button
        className='btn
        btn-danger
        shadow'
        onClick={handleDelete}
      >
        Borrar completadas
      </button>

      {/* Escondemos la tabla cuando la lista esta vacia */}
      { todos.length > 0
      ? <>
        <table className="table table-striped my-5">
        <thead>
          <tr>
            <th scope="col" className='fs-4'>Lista de Tareas</th>
          </tr>
        </thead>
        <tbody className='shadow'>
          {
            todos.map( (todo, index) =>
              <tr key={index}>
                <td
                  className={ todo.completed
                              ? 'fs-4 text-start p-3 table-secondary text-decoration-line-through text-secondary'
                              : 'fs-4 text-start p-3'}
                  onClick={() => cambiarTarea(todo.id)}
                >
                  {todo.task}
                </td>
              </tr>
              )
          }
        </tbody>
      </table>
      <table className='table'>
        <tdbody>
          <tr className='table-secondary'>
            <td className='text-primary col-2'>Total de tareas: <span className='fw-bold'>{todos.length}</span></td>
            <td className='text-success col-2'>Tareas completadas: <span className='fw-bold '>{todos.filter( item => item.completed).length}</span></td>
            <td className='text-danger col-2'>Tareas pendientes: <span className='fw-bold '>{todos.filter( item => !item.completed).length}</span></td>
          </tr>
        </tdbody>
      </table>
      </>
      : ''
    }
    </main>
  );
};

export default Todo;