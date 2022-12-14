import Task from './Task'

// The words passed in the ({}) are props 
const Tasks = ({ tasks, onDelete, onToggle }) => {    
  return (
    <>
      {/* .map to loop through the array */}
          {tasks.map((task) => (
        //   Task component and passing task in as a prop
              <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
