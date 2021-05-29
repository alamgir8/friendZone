import './App.css';
import {useSelector} from 'react-redux'
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed/Feed';
import { selectUser } from './app/features/userSlice';
import Login from './Components/Login/Login';


function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Header/>
      {
        !user ? 
        <Login/> : 
        <div className="app-body">
          <Sidebar/>
          <Feed/>
        </div>
      }
    </div>
  );
}

export default App;
