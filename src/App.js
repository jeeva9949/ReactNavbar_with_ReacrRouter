import Home from "./RouterComponents/Home";
import About from "./RouterComponents/About";
import Contact from "./RouterComponents/Contact";
import Navbar from "./Navbar";
import "./navbar.css"
import {Routes,Route} from "react-router-dom"
import Sucess from "./RouterComponents/sucess";
import Login from "./RouterComponents/Login";

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Routes >
          <Route path="/" element= {<Home/>} />
          <Route path ="/about" element= {<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/sucess" element={<Sucess/>}/>
          
        </Routes>
      </div>

    </div>
  );
}

export default App;
