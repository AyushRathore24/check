import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default TaskList;
