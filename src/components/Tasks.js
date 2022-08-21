const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {/* .map to create a list */}
      {/* Each task is named task */}
      {/* Set the element (h3) and give the information you want to see */}
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
      ;
    </>
  );
};

export default Tasks;
