import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// Component using JSX
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Start Traversy video on React',
      day: 'Aug 21st at 2:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Finalize Task Tracker project',
      day: 'Aug 21st at 4:00pm',
      reminder: true
    }
  ]);

  // Add Task 
  const addTask = (task) => { 

  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // This will actually delete the task
    // .filter is a higher order array method
    // Says: if the task id is not equal to the id don't show the task with that id
  };

  // Toggle Reminder
  const toggleReminder = (id) => { 
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
    // .map = go through each task 
    // If they did double click, copy this fxn to every task and change the Boolean on the task 
    // Else, leave the task as is because the user did not click on the task 
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {/* Use the Task component within the Tasks component */}
      {/* Use the fsc above to make it a prop */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks!'
      )}
    </div>
  );
};

export default App;
