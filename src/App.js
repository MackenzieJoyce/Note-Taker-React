import Header from './components/Header';
import Tasks from './components/Tasks'

// Component using JSX
const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
