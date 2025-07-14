import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <table border="1" width="100%" cellPadding="8" style={{ marginTop: "10px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
