import {LOGO_URL} from "../utils/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Header = () =>{
    const [btnNameReact, setbtnNameReact] = useState("Login");

    console.log("Header Called");
    useEffect(() => {
      console.log("UseEffect Called");
    });

    return (
      <div className="header">
        <div className="logo-container">
          <img 
            className="logo" 
            src={ LOGO_URL }
          />
        </div>
        <div className="nav-itmes">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About Us</Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us</Link>
            </li>
            <li>
              <Link to="/cart"> Cart</Link>
            </li>
            <button 
            className="login"
            onClick={()=>{
              btnNameReact === "Login" ? setbtnNameReact("LogOut") : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}    
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;