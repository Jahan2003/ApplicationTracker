import React, { useEffect } from "react";
import user from "../Assets/images/cv.png";
import hr from "../Assets/images/recruitment.png";
import Navbar1 from "./navbar1";
import "../Assets/Styles/select.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Select(){
 const[selectedDiv,setSelectedDiv]=useState("");
 const[errormsg,setErrormsg]=useState("");
 const handleSubmit=()=>{
    if(selectedDiv ==='div1'){
       window.location.href="/registration";
       
    }else if(selectedDiv ==='div2'){
        window.location.href="/HRregistration";
    }else{
       setErrormsg("Select any of the options");
    }
 }
 
  const handleError=()=>{
    setErrormsg("");
  }
 return(
    <div id="selectmain">
    <Navbar1/>
    <div id="selectinnercon">
        <div id="titleselect">
            <p>Join as a Candidate or Recruiter</p>
        </div>
        <div id="selectuser">
        <div  class="user" style={{border:selectedDiv ==="div1" ?"2px solid #14a800":"1px solid #ccc"}} id="can" onClick={()=>{setSelectedDiv("div1");
    handleError()}}>
        <img src={user} height="70px" width="70px"></img>
        <p>I'm a Candidate, looking for a job</p>
    </div>
    <div class="user" id="hr" style={{border:selectedDiv ==="div2" ?"2px solid #14a800":"1px solid #ccc"}} onClick={()=>{setSelectedDiv("div2");
handleError()}}>
    <img src={hr} height="70px" width="70px"></img>
    <p>I'm a Recruiter, hiring for a job</p>  
    </div>
    </div>
    <div id="apply">
        <button onClick={handleSubmit}>Apply</button>
        {errormsg && <div className="error">{errormsg}</div>}
    </div>
    <div id="to-login">
        <p>Already have an account?<Link to="/login"><span id="highlighted" style={{color:"#14a800"}}> Sign In</span></Link></p>
    </div>
    </div>
    </div>
 )
}

export default Select;