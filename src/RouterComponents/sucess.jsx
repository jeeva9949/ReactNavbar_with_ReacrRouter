import React from "react";
import {useNavigate} from "react-router-dom"


const Sucess = () =>{
    const navigate_to_homepage = useNavigate();

    const Path_to_home = () =>{
        navigate_to_homepage("/")
    }
    return(
        <div>
            <h2>sucessfully completed</h2>
            <button onClick={Path_to_home}>Home</button>
        </div>
    )
}
export default Sucess;