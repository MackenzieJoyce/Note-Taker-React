
const Tasks = ({ tasks }) => {    
  return (
    <>
      {/* .map to create a list */}
      {/* Each task is named task */}
      {/* Set the element (h3) and give the information you want to see */}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
      ;
    </>
  );
};

export default Tasks;
