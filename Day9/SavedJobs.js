import React from "react";
import Navbar from "./navbar";
import location from "../Assets/images/location.png";
import {FcBriefcase} from "react-icons/fc";
import{FaRupeeSign} from "react-icons/fa";
import {FcSearch} from "react-icons/fc";
import Footer from './Footer';
import { Link } from "react-router-dom";
import { useState } from "react";
import {BsBookmark,BsBookmarkFill} from"react-icons/bs";
import "../Assets/Styles/SavedJobs.css";
import axios from "axios";
import { useEffect } from "react";

function SavedJobs(){
       
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredJobs, setFilteredJobs] = useState([]);
        const [isSaved,setisSaved]=useState(false);
        const [jobs, setJobs] = useState([]);

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
              setFilteredJobs(response.data);
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
            const title = job.title.toLowerCase();
            const company = job.company.toLowerCase();
            const location = job.location.toLowerCase();
      
            return title.includes(query) || company.includes(query) || location.includes(query);
          });
      
          setFilteredJobs(filtered);
        };

        // const handleRemoveJob = (job) => {
        //   const updatedJobs = filteredJobs.filter((j) => j.id !== job.id);
        //   setFilteredJobs(updatedJobs);
        // };

        const token = localStorage.getItem('token');

  const handleBookmarkToggle = async (jobId) => {
    const jobToUpdate = jobs.find(job => job.id === jobId);
    const updatedJob = { ...jobToUpdate, saved: !jobToUpdate.saved };
    setisSaved(!isSaved);
    try {
      
  await axios.put(`http://localhost:8080/api/v1/jobDetails/${jobId}`, updatedJob, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

   // Update the jobs array with the updated job
   const updatedJobs = jobs.map(job => job.id === jobId ? updatedJob : job);
   setJobs(updatedJobs);
 } catch (error) {
   console.log("Error updating job: ", error);
 }
};
    return(
    <>
    <Navbar/>
    <div id="title-bar">
        <p id="titlej">
            Saved Jobs
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
        job.saved&&(
        <div className="job-cardj" key={job.id}>
          <p id="jobtitle">{job.role} 
          {" "}

                <span id="book2">
                  <BsBookmarkFill
                    onClick={() => handleBookmarkToggle(job.id)}
                    className="bookmark"
                    color="red"
                  />
                </span>
              
          </p>
          <p className="company">{job.company}</p>
          <div id="detls">
          <div className="container">
      <div className="hoverable-element">
      <a style={{color:"black",cursor:"pointer"}}><p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p></a>
        <div className="popup">
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=328&height=308&hl=en&q=${encodeURIComponent(job.address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe><a href="https://connectionsgame.org/">Connections Game</a></div></div>
        </div>
      </div>
    </div>
          <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{jobs.exp}</p>
          <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
          </div>
          <p className="description">{job.des}</p>
          <Link to="/apply" className="apply-link"><button id="viewbtn">Apply Now</button></Link>
        </div>
        )
      ))}
    </div>
    <Footer/>
    </>
    )
}
export default SavedJobs;