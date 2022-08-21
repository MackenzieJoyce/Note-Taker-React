import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default App;
