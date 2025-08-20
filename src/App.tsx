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
        .from('demousers')
        .select()


      if (error) {
        console.error("Error fetching todos:", error);
        return;
      }
      console.log(todos)
      if (todos && todos.length > 1) {
        setTodos(todos);
      }
    };

    getTodos();
  }, []);

  // useEffect(() => {
  //   async function apiCall() {
  //     await fetch('https://ihnhqxrxmkbidjraqrjm.supabase.co/rest/v1/todos?select=*', {
  //       headers: {
  //         'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobmhxeHJ4bWtiaWRqcmFxcmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTU4NjEsImV4cCI6MjA3MTE5MTg2MX0.1GtkxDmz5hUOOY9RNgNCEp6BQ4sTHMTQ79hb7zWBreE'
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         setTodos(data);
  //       })  
  //       .catch(error => {
  //         // Handle error
  //       });
  //   }
  //   apiCall();
  // }, [])


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
