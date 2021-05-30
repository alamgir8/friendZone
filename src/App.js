import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed/Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './Components/Firebase/Firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {

        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL
        }))
      }
      else{
          dispatch(logout())
      }
    })
  }, [])
  return (
    <div>
      <Header/>
    
        <div className="app-body container">
          {!user ? 
          <Login/> :
          <div className="row">
          <div className="col-md-4">
            <Sidebar/>
          </div>
          <div className="col-md-6">
            <Feed/>
          </div>
        </div>
        }
          
        </div>
      
    </div>
  );
}

export default App;
