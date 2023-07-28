import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcBriefcase } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import location from "../Assets/images/location.png";
import Footer from "./Footer";
import { BsBookmark,BsBookmarkFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from 'axios';

function Applications(){
  const[jobs,SetJobs]=useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const id=localStorage.getItem("userId");
  const[isSaved,setIssaved]=useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/apply', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        console.log(id);
        const applied=response.data.filter(user=>user.userId === parseInt(id));
        const job_id=applied.map(user=>user.jobId);
        console.log(job_id);

        const response2 = await axios.get('http://localhost:8080/api/v1/jobDetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response2.data);
        const jobs=response2.data.filter(job=>job_id.includes(job.id));
        console.log(jobs);
        SetJobs(jobs);
        setFilteredJobs(jobs);

      } catch (error) {
        console.log('Error fetching Data ' + error);
      }
    };

    fetchData();
  }, [isSaved]);
  
 
   const handleSearchChange = (e) => {
     const query = e.target.value.toLowerCase();
     setSearchQuery(query);
 
     const filtered = jobs.filter((job) => {
       const title = job.role.toLowerCase();
       const company = job.company.toLowerCase();
       const location = job.location.toLowerCase();
 
       return title.includes(query) || company.includes(query) || location.includes(query);
     });
 
     setFilteredJobs(filtered);
   };
   const handleBookmarkToggle = async (jobId) => {
 
    const jobToUpdate = jobs.find(job => job.id === jobId);
    
    const updatedJob = { ...jobToUpdate, saved: !jobToUpdate.saved };
    
    setIssaved(!isSaved);
    try {
        
  await axios.put(`http://localhost:8080/api/v1/jobDetails/${jobId}`, updatedJob, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

   // Update the jobs array with the updated job
   const updatedJobs = jobs.map(job => job.id === jobId ? updatedJob : job);
   SetJobs(updatedJobs);
 } catch (error) {
   console.log("Error updating job: ", error);
 }
};
   return(
      <>
      <Navbar />
     <div id="title-bar">
        <p id="titlej">
            Applied Jobs
        </p>
      </div>
    <div className="job-list-container">
      
      <input
          type="text"
          id="search"
          value={searchQuery}
          className='search'
          onChange={handleSearchChange}
          placeholder="Search Jobs..."
        />
        
     
      
      {filteredJobs.map((job) => (
        <div className="job-cardj" key={job.id}>
          <p id="jobtitle">{job.role}
          {job.saved ? (
                <span id="book2">
                  <BsBookmarkFill
                    onClick={() => handleBookmarkToggle(job.id)}
                    className="bookmark"
                    color="red"
                  />
                </span>
              ) : (
                <span id="book1">
                  <BsBookmark
                    onClick={() => handleBookmarkToggle(job.id)}
                    className="bookmark"
                  />
                </span>
              )}</p>
          <p className="company">{job.company}</p>
          <div id="detls">
          <div className="container">
      <div className="hoverable-element">
      <a style={{color:"black",cursor:"pointer"}}><p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p></a>
        <div className="popup">
        <div class="mapouter"><div class="gmap_canvas">
          <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=328&height=308&hl=en&q=${encodeURIComponent(job.address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe><a href="https://connectionsgame.org/">Connections Game</a></div></div>
        </div>
      </div>
    </div> 
          <p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p>
          <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.workexp}</p>
          <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
          </div>
          <p className="description">{job.des}</p>
          <button id="viewbtn" onClick={()=>{
            localStorage.setItem("jobId",job.id);
            window.location.href="/applied";
          }}>View</button>
          
        </div>
      ))}
    </div>
    <Footer/></>
   )
}export default Applications;