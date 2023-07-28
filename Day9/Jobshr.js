import React from "react";
import NavbarHr from "./Navbarhr";
import location from "../Assets/images/location.png"
import {FcBriefcase} from "react-icons/fc";
import{FaRupeeSign} from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer from './Footer';
import { useEffect } from "react";
import axios from "axios";
import "../Assets/Styles/jobshr.css";

function Jobshr(){
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const[jobs,setJobs]=useState([]);
  const[deletej,setDeleted]=useState(false);
  const navigate=useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
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
  },[deletej]);
    
    const handleLocation = (location,company) => {
      const searchQuery = `${company} ${location}`;
      const encodedQuery = encodeURIComponent(searchQuery);
      const url = `https://www.google.com/maps?q=${encodedQuery}`;
      window.location.href = url;
    };


    
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
  return(
   <div id="Jobshrcontainer">
    <NavbarHr/>
    <div id="first">
      <div id="title-bar">
          <p id="titlej">
              Jobs
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
          <div style={{color:"black"}}className="job-cardj" key={job.id}  o>
            <p id="jobtitle" style={{cursor:"pointer"}} onClick={()=>{
            localStorage.setItem("jobId",job.id);
            window.location.href="/JobsApplied";
          }}>{job.role}</p>
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
            <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.exp}yrs</p>
            <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
            </div>
            {/* <div id="jobstats">
            <div class="jobstats-con">
            <p>Candidates</p>
            <p class="jobstats-num">10</p>
            </div>
            <div class="jobstats-con">
            <p>Hired</p>
            <p class="jobstats-num">4</p>
            </div>
            <div class="jobstats-con">
            <p>Status</p>
            <p class="jobstats-num" style={{color:"#14a800"}}>Active</p>
            </div>
          </div> */}
            <div>
              {job.des}
            </div>
            <button id="closebtn" onClick={async()=>{
              localStorage.setItem("jobId",job.id);
              const jobId=localStorage.getItem("jobId");
              try{
                await axios.delete(`http://localhost:8080/api/v1/jobDetails/${jobId}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                setDeleted(!deletej);
                window.alert("Job deleted Sucessfully");
              }catch(error){
                console.log(error);
              }
            }} >Close</button>
            <button id="editbtn" onClick={()=>{
              localStorage.setItem("jobId",job.id);
              navigate("/editjob");
            }}>Edit</button>
          </div>
        ))}
        <Link to="/addjob">
        <button id="addjob">Add Job</button>
        </Link>
      
      </div>
      </div>
      <Footer/>
   </div>
  )
}
export default Jobshr;