import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
