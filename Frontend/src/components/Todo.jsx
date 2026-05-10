const Todo = ({ todo, removeTodo, updateTodo }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-column align-items-start">

        <h5 className="mb-2">{todo.titulo}</h5>

        <img
          src={todo.img}
          alt={todo.titulo}
          style={{
            width: "250px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />

        <p>{todo.descripcion}</p>

        <div className="d-flex align-items-center mt-2">

          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => updateTodo(todo.id)}
          >
            ❤️ {todo.likes}
          </button>

          <button
            className="btn btn-sm btn-dark"
            onClick={() => removeTodo(todo.id)}
          >
            ❌
          </button>

        </div>
      </div>
    </li>
  );
};

export default Todo;