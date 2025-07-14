function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleTask(task.id)}
        />
        <span style={{ marginLeft: "8px" }}>
          {task.isCompleted ? "Completed" : "Incomplete"}
        </span>
      </td>
      <td>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TaskItem;
