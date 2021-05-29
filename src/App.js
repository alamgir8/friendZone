import './App.css';
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
