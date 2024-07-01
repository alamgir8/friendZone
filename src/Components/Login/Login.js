import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../Firebase/Firebase";
import logo from "./../../img/support.png";
import "./Login.css";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
        history.replace(from);
        swal({
          title: "Successfully Login!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: "Login Error!",
          icon: "error",
        });
        setError(error.message);
      });
  };

  return (
    <div className="login">
      <div className="my-5 card w-50 p-4 mx-auto">
        <div className="d-flex align-items-center justify-content-center pb-4">
          <img className="img-fluid" src={logo} alt="logo" />
          <span className="display-4">FriendZone</span>
        </div>
        {error && <Alert variant="danger">{JSON.stringify(error)}</Alert>}
        <div className="mx-auto">
          <form>
            <input
              className="form-control my-2 mx-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="form-control my-2 mx-auto"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button
              onClick={signIn}
              type="submit"
              className="btn btn-success form-control"
            >
              Sign In
            </button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="register"> Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
