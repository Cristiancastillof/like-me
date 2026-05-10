import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { Todos } from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();
    setTodos(posts);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (title) => {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: title,
        img: "https://via.placeholder.com/300",
        descripcion: "Sin descripción",
      }),
    });

    const post = await response.json();
    setTodos([post, ...todos]);
  };

  const removeTodo = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      return alert("Error al eliminar");
    }

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/like/${id}`, {
      method: "PUT",
    });

    if (response.status !== 200) {
      return alert("Error al dar like");
    }

    const updatedPost = await response.json();

    setTodos(
      todos.map((todo) => (todo.id === id ? updatedPost : todo))
    );
  };

  return (
    <div className="container">
      <h1>Like Me</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default App;