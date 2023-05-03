import { useState } from 'react';

/*
este ejercicio ToDo List contempla las operaciones basicas de
cualquier lenguaje:

    C = create
    R = read
    U = update
    D = delete

*/


const Todo = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState({})

  // leyendo la entrada del input
  const getInput = (e) => {
    setInput(e.target.value)
  }

  // añadir nueva tarea a la lista de tareas
  const handleClick = () => {
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
    <main className='text-center'>
      <h1>ToDo divst</h1>
      <input
        type="text"
        className='form-control'
        onChange={getInput}
        value={input}
      />

      <button className='btn btn-primary' onClick={handleClick}>Añadir tarea</button>

      <button className='btn btn-danger' onClick={handleDelete}>Borrar completadas</button>
      <div>
        {todos.map( (todo, index) =>
        <p
          key={index}
          onClick={() => cambiarTarea(todo.id)}
          className={todo.completed ? 'text-danger text-decoration-line-through' : 'text-success'}
        >
          {todo.task}
        </p
        >)}
      </div>
    </main>
  );
};

export default Todo;