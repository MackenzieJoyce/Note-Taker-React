import { useState } from 'react';
import { browserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

// Component using JSX
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // Setting this to false means that when you load the page the form will not show

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

  // Add Task - Adds to the state
  const addTask = (task) => {
    // Creates an id because I'm not using any backend right now
    const id = Math.floor(Math.random() * 10000) + 1;
    // The new task is going to be an object. It's going to use the id from the random number above and then copy the other keys from the task array
    const newTask = { id, ...task };
    // Copy the current tasks and add the new task onto that array
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // This will actually delete the task
    // .filter is a higher order array method
    // Says: if the task id is not equal to the id don't show the task with that id
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // .map = go through each task
    // If they did double click, copy this fxn to every task and change the Boolean on the task
    // Else, leave the task as is because the user did not click on the task
  };

  return (
    <Router>
      <div className="container">
        {/* Giving a prop for the Header component to use */}
        {/* Says when the Add button is clicked give the opposite of the current value */}
        {/* So on load the value is false, when clicked show it as true, which is to make it the setShowAddTask */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* Shorter way of doing the turnary. If showAddTask is true then do the AddTask component */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {/* Use the Task component within the Tasks component */}
              {/* Use the fsc above to make it a prop */}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No tasks!'
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
