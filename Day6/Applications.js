import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcBriefcase } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import location from "../Assets/images/location.png";
import Footer from "./Footer";
function Applications(){
   const jobs=[
   {
      "id": 1,
      "title": "Frontend Developer",
      "company": "Google",
      "workexp":"0-5Yrs",
      "salary":"Not disclosed",
      "location": "Mountain View, CA",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna non urna tincidunt, in tristique mauris gravida. Sed rhoncus felis quis metus tempus rutrum."
    },
    {
      "id": 2,
      "title": "Data Analyst",
      "company": "Microsoft",
      "workexp":"0-5Yrs",
      "salary":"Not disclosed",
      "location": "Redmond, WA",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna non urna tincidunt, in tristique mauris gravida. Sed rhoncus felis quis metus tempus rutrum."
    },
    {
      "id": 3,
      "title": "UX Designer",
      "company": "Apple",
      "workexp":"0-5Yrs",
      "salary":"Not disclosed",
      "location": "Cupertino, CA",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna non urna tincidunt, in tristique mauris gravida. Sed rhoncus felis quis metus tempus rutrum."
    }
   ]
   const [searchQuery, setSearchQuery] = useState('');
   const [filteredJobs, setFilteredJobs] = useState(jobs);
 
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
          <p id="jobtitle">{job.title}</p>
          <p className="company">{job.company}</p>
          <div id="detls">
          <p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p>
          <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.workexp}</p>
          <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
          </div>
          <p className="description">{job.description}</p>
          <Link to="/applied"><button id="viewbtn">View</button></Link>
        </div>
      ))}
    </div>
    <Footer/></>
   )
}export default Applications;