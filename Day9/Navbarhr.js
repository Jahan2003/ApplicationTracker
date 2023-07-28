import React, { useState } from "react";
import '../Assets/Styles/Navbar.css'
import Swipe from "./Swipe";
import profile from"../Assets/images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import{CgProfile} from "react-icons/cg";
import {IoMdNotificationsOutline} from "react-icons/io";
import lgout from "../Assets/images/logout.png";
function NavbarHr(){
  const user=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const mail=user.email;
  const name=mail.substr(0,mail.indexOf('@'));
  const dispatch=useDispatch();
  const handleLogout=(e)=>{
    dispatch({type:"LOGOUT"});
    localStorage.clear();
    navigate("/");
  }
  return(
    // <div id="nav">
    //     <div id="title">
    //     <a id="logo">ATS</a>
        
    // </div>
    // </div>
  
   
      <>
    
    {/* <Swipe/> */}
    <nav className="navbar">
    <ul className="navbar__list">
    <div id="nav">
      <Link to="/hrdashboard">
       <div id="title">
        <a id="logo">ATS</a>
    </div>
    </Link>
     </div>
     <div id="item">
      <Link to="/hrdashboard">
      <li className="navbar__item">
      Dashboard
      </li>
      </Link>
      <Link to="/joblist">
      <li className="navbar__item">
      Jobs
      </li>
      </Link>
      <Link to="/schedule">
      <li className="navbar__item">
      Interviews
      </li>
      </Link>
      </div>
      <div id="last">
      <Link to="/notifications">
      <li className="navbar__item">
      <IoMdNotificationsOutline fontSize={27}/>
      </li>
      </Link>
      <li className="navbar__item" id="profile">
        <img src={profile} height="25px" width="25px"></img>
      </li>
      {/* <Link to="/profile"> */}
      <li className="navbar__item">
        {name}
      </li>
      {/* </Link> */}
      
      <li className="navbar__item" onClick={handleLogout}>
      <img src={lgout} height="22px" width="22px" id="logout"></img>
      </li>
      </div>
    </ul>
  </nav>
  </>
    
  )
}
export default NavbarHr;