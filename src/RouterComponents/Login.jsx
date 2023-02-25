import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import "./login.css"

const Login = () =>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")
    
    const Navigate = useNavigate()

    const sucesspage = () =>{
        Navigate("/sucess")
    }
    return(
        <div className="Header">
            <form>
                <div><label>name:</label><input type="text" id="name" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/></div>
                <div><label>email:</label><input type="email" name="email" id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} /></div>
                <div><label>password:</label><input type="password" name="password" id="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} /></div>
                <div><button onClick={sucesspage}>submit</button></div>
            </form>
        </div>
    )
}
export default Login