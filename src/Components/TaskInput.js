import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;