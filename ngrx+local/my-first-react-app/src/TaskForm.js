import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onSubmit(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
