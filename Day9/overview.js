import React, { useState } from "react";
import "../Assets/Styles/overview.css";
import profile from "../Assets/images/profile.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Overview(){
  const[name,setName]=useState("");
  const[jobsApllied,setJobsApplied]=useState("");
  const[joboffers,setJoboffers]=useState("");
  const[Interviews,setInterviews]=useState("");

  const token=localStorage.getItem("token");
  const email=localStorage.getItem("email");
 
  useEffect(()=>{
    const fetchData=async()=>{
      console.log(token);
      try{
        const response=await axios.get(
          `http://localhost:8080/api/v1/users/email/${email}`,
          {
            headers:{
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Credentials': 'true',
              "Authorization":`Bearer ${token}`,
              "cache-control":"no-cache",
            },
          }
        )
        localStorage.setItem("userId",response.data.id);
        setName(response.data.firstName+" "+response.data.lastName);
        setJobsApplied(response.data.jobsApplied);
        setJoboffers(response.data.jobsOffered);
        setInterviews(response.data.interview);
        console.log(response.data);
      }
      catch(error){
        console.log("Error fetching Data"+error);
      }
    };
    fetchData();
   },[]);

  return(
    <div className="overview">
        <div id="inner-con">
        <div id="main">
        <div id="image-con">
          <div id="image">
          <img src={profile} height="90px" width="90px"></img>
          </div>
          <div id="name">
            <p>{name}</p>
            </div> 
          <div>
            <Link to="/profile">
            <button id="viewprof">
                View Profile
            </button>
            </Link>
            
          </div>
        </div>
          <div id="details">
            <div className="detcon">
              <div className="dettitle">
                Applied Jobs
              </div>
              <div className="detcount">
                {jobsApllied}
              </div>
            </div>
            <div className="detcon">
            <div className="dettitle">
                Interviews Attended
              </div>
              <div className="detcount">
                {Interviews}
              </div>
              
            </div>
            <div className="detcon" id="nth">
            <div className="dettitle">
                Job Offers
              </div>
              <div className="detcount">
                {joboffers}
              </div>
            </div>
          </div>
        </div>
        
        </div>
       
    </div>
  )
}
export default Overview;