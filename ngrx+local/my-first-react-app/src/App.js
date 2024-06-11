// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const addTask = (text) => {
    const newTask = { id: Math.random(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditId(id);
    // Set the task text to the form for editing
  };

  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditId(null);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;