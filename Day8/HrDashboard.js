import React from "react";
import Navbar from "./navbar";
import "../Assets/Styles/Dashboard.css"
import hi from "../Assets/images/hi.png"
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Overview from "./overview";
import Recentjob from "./recentjobs";
import Footer from "./Footer";
import JobPostedHr from "./jobPostedhr";
import NavbarHr from "./Navbarhr";

function HrDashBoard(){
const user=useSelector((state)=>state.user);
const mail=user.email;
const name=mail.substr(0,mail.indexOf('@'));
return(
    <div class="dash">
    <NavbarHr />
    <div id="greeting">
        <p id="msg">
        Welcome Back <span id="name">{name}</span>
        <img src={hi} width="35px" height="35px"  id="hi"></img>
        </p>
    </div>
    <JobPostedHr/>
    <Footer/>
    </div>
)
}
export default HrDashBoard;