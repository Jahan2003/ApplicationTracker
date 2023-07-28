import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import location from "../Assets/images/location.png"
import "../Assets/Styles/JobsApplied.css";
import { useNavigate } from 'react-router-dom'; 
import NavbarHr from "./Navbarhr";
const JobApplied=()=>{
    const[jobs,setJobs]=useState([]);
    const[jobsdet,setJobsdet]=useState([]);
    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const jobId=localStorage.getItem('jobId');
        const fetchData = async () => {
          try {
            // Fetch all users
            const usersResponse = await axios.get("http://localhost:8080/api/v1/users", {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
    
            // Fetch all jobs
            const jobsResponse = await axios.get("http://localhost:8080/api/v1/jobDetails", {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
            
            const jobs = await axios.get(`http://localhost:8080/api/v1/jobDetails/${jobId}`, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
            // Fetch all resumes
            const resumesResponse = await axios.get("http://localhost:8080/api/v1/apply", {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
   
            // Extract emails from the resumes data
            const resumeEmails = resumesResponse.data.map(resume => resume.userId);
            const resumeJob = resumesResponse.data.map(resume => resume.jobId);
   
            // Filter users with matching emails from the resumes
            const matchedUsers = usersResponse.data.filter(user => resumeEmails.includes(user.id));
            
            // Filter applied jobs based on the resumes data
            // const appliedJobs = jobsResponse.data.filter(job => resumeJob.includes(job.id));
    
            // Update state with fetched data
            setUsers(matchedUsers);
            console.log(resumeEmails);
            setJobsdet(jobs.data);
          } catch (error) {
            console.log("Error fetching data: ", error);
          }
        };
    
        fetchData();
      }, []);
      
    return(
        <div class="apply">
        <NavbarHr/>
     <div id="container">
     <div id="container1">
     <div className="job-cardj" >
          <p id="jobtitle" style={{fontSize:"25px"}}>{jobsdet.role}</p>
          <p className="company">{jobsdet.company}</p>
          <div id="detls">
    </div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div className="container">
      <div className="hoverable-element">
      <a style={{color:"black",cursor:"pointer"}}><p className="location"><img src={location} height="15px" width="15px"/> {jobsdet.location}</p></a>
        <div className="popup">
        <div class="mapouter"><div class="gmap_canvas">
          <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=328&height=308&hl=en&q=${encodeURIComponent(jobsdet.address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe><a href="https://connectionsgame.org/">Connections Game</a></div></div>
        </div>
      </div>
    </div>
    <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{jobsdet.exp}yrs</p>
    <p className="salary"><FaRupeeSign className='icons'/>{jobsdet.salary}</p>
    </div>
      <h2>Applied Candidates</h2>
    <div>
        {users.map(user => (
          <div key={user.id} id="usercon">
            <div id="username"> {user.firstName} {user.lastName} </div>
            <button id="view-btn"  onClick={()=>{
              localStorage.setItem("userId",user.id);
              navigate("/userApplied");}}>View</button>
            {/* Add other user details you want to display */}
          </div>
        ))}
    </div>
        
    </div>
     </div>
     </div>
     <Footer/>
    </div>
    )
}
export default JobApplied;