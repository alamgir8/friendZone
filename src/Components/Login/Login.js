import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../Firebase/Firebase';
import logo from './../../img/support.png'
import './Login.css'







const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch =  useDispatch()
  
    const signIn = (e) => {
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : userAuth.user.displayName,
                photoURL : userAuth.user.photoURL
            }))
            
        })
        .catch((error) => alert(error))
    }
    const register = () => {
        if (!name) {
            alert('Inter your full name')
        }
       
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic
            })
            .then(() => {
                console.log(profilePic, name);
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : name,
                    photoURL : profilePic
                }))
            })
        })
        .catch((error) => alert(error))
    }
   
    return (
        <div className='login'>
            <div className="my-5 card w-50 p-4 mx-auto">
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <img className='img-fluid' src={logo} alt="logo" />
                    <span className='display-4'>FriendZone</span>
                </div>
                <div className="mx-auto">
                    <form>
                        <input className='form-control my-2 mx-auto' value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" placeholder="Name (required if registering)" required/>
                        <input className='form-control my-2 mx-auto' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='PhotoURL (optional'/>
                        <input className='form-control my-2 mx-auto' value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="text" placeholder="Email"  required/>
                        <input className='form-control my-2 mx-auto' value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" placeholder="Password" required/>
                        <button onClick={signIn} type='submit' className='btn btn-success form-control'>Sign In</button>
                    </form>
                    <p className='mt-3 text-center'>Not have Account?<span onClick={register} className='register'> Register Now</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;