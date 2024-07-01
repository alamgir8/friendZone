import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "../../Login/Login";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../Header/Header/Header";
import Feed from "../Feed/Feed/Feed";
import { login, logout, selectUser } from "../../../features/userSlice";
import { auth } from "../../Firebase/Firebase";

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <div className="app-body container">
        {!user ? (
          <Login />
        ) : (
          <div className="row">
            <div className="col-md-4">
              <Sidebar/>
            </div>
            <div className="col-md-6">
              <Feed/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
