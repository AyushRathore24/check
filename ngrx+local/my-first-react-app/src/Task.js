import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <li>
      {task.text}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onEdit(task.id)}>Edit</button>
    </li>
  );
};

export default Task;
