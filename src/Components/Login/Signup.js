import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../Firebase/Firebase";
import logo from "./../../img/support.png";
import "./Login.css";
import swal from "sweetalert";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return setError("Name is Required");
    }
    if (password !== confirmPassword) {
      return setError("Password Not Matched!");
    }
    if (password.length < 8) {
      return setError("Password should be at least 8 character!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            console.log(profilePic, name);
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
            swal({
              title: "your account created successfully!",
              icon: "success",
            });
            setError("")
          });
          
      })
      .catch((error) => {
        swal({
          title: "Sign Up Error!",
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Name (required if registering)"
              required
            />
            <input
              className="form-control my-2 mx-auto"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              type="text"
              placeholder="PhotoURL (optional"
            />
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
            <input
              className="form-control my-2 mx-auto"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Confirm-Password"
              required
            />
            <button
              onClick={register}
              type="submit"
              className="btn btn-success form-control"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-center">
            Have a Account?{" "}
            <Link to="/login">
              <span className="register"> Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
