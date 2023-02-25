import "./navbar.css"

import {NavLink} from "react-router-dom";

const Navbar = () =>{

    return(
        <div className="hello">
           <nav>
            <NavLink  to = "/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to= "/contact">Contact</NavLink>
            <NavLink to ="/login">Login</NavLink>
           </nav>
        </div>

    )
}
export default Navbar