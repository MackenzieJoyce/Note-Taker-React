import Task from './Task'

const Tasks = ({ tasks }) => {    
  return (
    <>
      {/* .map to loop through the array */}
      {/*  */}
          {tasks.map((task) => (
        //   Task component and passing task in as a prop
          <Task key={task.id} task={task} />
      ))}
      ;
    </>
  );
};

export default Tasks;
