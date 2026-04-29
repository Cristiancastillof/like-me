const Todo = ({ todo }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-column align-items-start">
        
        <h5 className="mb-2">{todo.titulo}</h5>

        <img
          src={todo.img}
          alt={todo.titulo}
          style={{ width: "200px", borderRadius: "8px" }}
          className="mb-2"
        />

        <p className="mb-2">{todo.descripcion}</p>

        <span>❤️ {todo.likes}</span>

      </div>
    </li>
  );
};

export default Todo;