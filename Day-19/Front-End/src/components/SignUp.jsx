import React, { useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserService from '../api/Axios'
import { alertClasses } from "@mui/material";


function SignUp() {

    let [email,setEmail]       = useState("")
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const user = {};

        user['name'] = username;
        user['email'] = email;
        user['password'] = password;
        user['role'] = "USER";

        try{
            const res = UserService.createUser(user);
            
            res.then(data=>{
                console.log(res);
                if(data==="User registered successfully"){
                    navigate('/userlogin');
                }
                else{
                    alert("User Already Existed")
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <main className="login-container">
            <div className="login">
                <h1>Sign-Up form</h1>
                    <div className="login-inputs ">
                        <input className="name-input" type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                        <input className="mail-input" type="email" placeholder="e-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input className="pass-input" type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="login-button">
                        <button className="but-log" onClick={handleSignUp}>Sign-In</button>
                    </div>
                    <div className="sign-in" >
                        <h5 className="log-h5">Already Have an Account ?</h5><Link to='/userlogin'>Login</Link>
                    </div>
            </div>
        </main>



    )
}

export default SignUp;