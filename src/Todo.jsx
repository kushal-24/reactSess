import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const value = newTodo.trim();
    if (!value) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: value }
    ]);

    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>My Tasks</h1>
          <p>Keep track of your daily goals</p>
        </header>

        <div className="content">
          <form onSubmit={addTodo} className="form">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
            />
            <button type="submit">Add</button>
          </form>

          <div className="list">
            {todos.length === 0 ? (
              <div className="empty">No tasks yet. Add one!</div>
            ) : (
              todos.map((todo) => (
                <div className="item" key={todo.id}>
                  <span>{todo.title}</span>
                  <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          {todos.length > 0 && (
            <div className="footer">
              {todos.length} task{todos.length > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
