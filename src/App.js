import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // This will actually delete the task 
    // .filter is a higher order array method
    // Says: if the task id is not equal to the id don't show the task with that id 
  };

  return (
    <div className="container">
      <Header />
      {/* Use the Task component within the Tasks component */}
      {/* Use the fsc above to make it a prop */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : ('No tasks!')}
    </div>
  );
};

export default App;
