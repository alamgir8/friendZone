import './App.css';
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed/Feed';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-body">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
