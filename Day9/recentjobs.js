import React from "react";
import { FaUser } from "react-icons/fa";
import "../Assets/Styles/Recentjobs.css";
import {GrLocation} from "react-icons/gr";
import location from "../Assets/images/location.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function RecentJob() {

  
  const[jobs,setJobs]=useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/jobDetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setJobs(response.data);
      } catch (error) {
        console.log('Error fetching Data ' + error);
      }
    };
    
    fetchData();
  }, []);
  const recent=jobs.slice(-4).reverse();
  const appliedJobsCount = jobs.filter((job) => job.saved).length;
  return (
    <div className="home-page">
      <div className="job-section">
        <h2>Recent Jobs</h2>
        <div className="job-cards">
        {recent.map((job) => (
            
              <div onClick={()=>{
                localStorage.setItem("jobId",job.id);
                window.location.href="/apply";
  
              }}style={{color:"black",cursor:"pointer"}}>
            <div key={job.id} className="job-card">
              <h3>{job.role}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
              <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
            </div>
            
          ))}
          
        </div>
      </div>

      <div className="applied-jobs">
        <h2>Applied Jobs</h2>
        <div className={appliedJobsCount > 2 ?"job-cards":"job-cards-1"}>
        {appliedJobsCount > 0 ? (
          jobs.map((job) => (
            job.saved&&(
              <div onClick={()=>{
                localStorage.setItem("jobId",job.id);
                window.location.href="/apply";
  
              }}style={{color:"black",cursor:"pointer"}}>
            <div key={job.id} className={appliedJobsCount > 2 ?"job-card":"job-card-1"}>
              <h3>{job.role}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
              <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
            </div>
            )
          ))
        ):(
        <div><p style={{fontSize:"18px"}}>No Jobs Applied</p></div>
        )}
        </div>
        {/* <p>You have applied for {appliedJobsCount} jobs.</p> */}
      </div>

      <div className="job-section">
        <h2>Recommended Jobs</h2>
        <div className="job-cards">
          {jobs.map((job) => (
            <div onClick={()=>{
              localStorage.setItem("jobId",job.id);
              window.location.href="/apply";

            }}style={{color:"black",cursor:"pointer"}}>
            <div key={job.id} className="job-card">
              <h3>{job.role}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
              <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentJob;