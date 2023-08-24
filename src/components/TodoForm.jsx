import { useState } from "react";

function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <div className="bg">
      <form onSubmit={handleSubmit} className="container">
        <h1 className="form-heading">todo list</h1>
        <input
          className="form-input"
          placeholder="Create a new todo..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
