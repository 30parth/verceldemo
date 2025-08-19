import './App.css';
import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

type Todo = {
  id: number;
  user_name: string;
  // Add other fields as required
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {

      let { data: todos, error } = await supabase
        .from('todos')
        .select('*')


      if (error) {
        console.error("Error fetching todos:", error);
        return;
      }
      if (todos && todos.length > 1) {
        setTodos(todos);
      }
    };

    getTodos();
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.user_name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
