import React, { useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {login} from '../features/user'
import Footer from "./Footer"
import UserService from "../api/Axios"


function UserLogin() {
    
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {};
        user['email'] = email;
        user['password'] = password;

        try{
            const res = UserService.loginUser(user);
            
            res.then(data=>{
                if(!data){
                    alert("Invalid Credntials")
                }
                else{
                    const info = {
                        
                    };
                    dispatch(login({email}));
                    navigate( '/dashboard');
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    

    return (
        <>
        <main className="login-container">
            <div className="login">
                <h1>Login form</h1>
                    <div className="login-inputs ">
                        <input className="name-input" value={email} type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)} }/>
                        <input className="pass-input" value={password} type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)} }/>
                    </div>
                    <div className="login-button">
                        <button type="submit" className="but-log"
                        onClick={handleLogin}>Login</button>
                    </div>
                    <div className="sign-in">
                    <h5 className="log-h5" >New to the Platform ?</h5><Link to='/signup'> Register</Link>
                    </div>
                    <div className="admin-log">
                    <h5 className="admin-log-h5" ></h5><Link to='/adminlogin'>Admin Login</Link>
                    </div>
            </div>            
        </main>
        <Footer/>
        </>

    )
}

export default UserLogin;