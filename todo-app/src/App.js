import { useEffect, useState } from "react";
import { InputTodo } from "./Components/InputTodo/InputTodo.jsx";
import { List } from "./Components/List/List.jsx";
import { Title } from "./Components/Title/Title.jsx";
import { Todo } from "./Components/Todo/Todo.jsx"

function App() {
  const [todos, setTodos]= useState([
    {
      id: 1,
      title: 'Estudiar',
      completed: false
    },
    {
      id: 2,
      title: 'Hacer ejercicio',
      completed: false
    },
    {
      id: 3,
      title: 'Lavar ropa',
      completed: false
    },
    {
      id: 4,
      title: 'Cocinar Verduras',
      completed: false
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if( todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })

    setTodos(updateList);
  };

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  };

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed);
    setActiveFilter(updateList);
  };

  const showAllTodos = () => {
    setActiveFilter('all')
  };

  const showActiveTodos = () => {
    setActiveFilter('active')
  };

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos)
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true )
      setFilteredTodos(completedTodos)
    } 
  }, [activeFilter, todos])

  return (
    <div className="bg-violet-500 font-quicksand min-h-screen h-full text-slate-400 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <InputTodo addTodo={addTodo}/>
        <br></br>
        <List todos={filteredTodos}
              activeFilter={activeFilter}
              handleSetComplete={handleSetComplete}
              handleDelete={handleDelete}
              showAllTodos={showAllTodos}
              showActiveTodos={showActiveTodos}
              showCompletedTodos={showCompletedTodos}
              handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
