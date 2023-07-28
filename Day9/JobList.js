  // import React from 'react';
  // import '../Assets/Styles/JobList.css';
  // import { Link } from 'react-router-dom';
  // import Navbar from '../Components/navbar';
  // import location from "../Assets/images/location.png"
  // import {FcBriefcase} from "react-icons/fc";
  // import{FaRupeeSign} from "react-icons/fa";
  // import { useState } from 'react';
  // import {FcSearch} from "react-icons/fc";
  // import { useNavigate } from 'react-router-dom';
  // import { BsBookmarkFill,BsBookmark } from 'react-icons/bs';
  // import { useEffect } from 'react';
  // import axios from 'axios';
  // import Footer from './Footer';
  // const JobList = () => {
        
  //   const [jobs, setJobs] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState('');
  //   const [filteredJobs, setFilteredJobs] = useState(jobs);
  //   const navigate=useNavigate();
    
  //   const handleLocation = (location,company) => {
  //     const searchQuery = `${company} ${location}`;
  //     const encodedQuery = encodeURIComponent(searchQuery);
  //     const url = `https://www.google.com/maps?q=${encodedQuery}`;
  //     window.location.href = url;
  //   };

  //   useEffect(() => {
  //     const token=localStorage.getItem('token');
  //       const fetchData = async () => {
  //         try {
  //           const response = await axios.get("http://localhost:8080/api/v1/jobDetails", {
  //             headers: {
  //               "Authorization": `Bearer ${token}`
  //             }
  //           });
        
  //           setJobs(response.data); // Set the jobs state with the array of JobDetails objects
  //           setFilteredJobs(response.data); // Set the filteredJobs state with the initial data
  //         } catch (error) {
  //           console.log("Error fetching Data " + error);
  //         }
  //       };
  
  //     fetchData();
  //   }, []);
    
  //   const handleSearchChange = (e) => {
  //     const query = e.target.value.toLowerCase();
  //     setSearchQuery(query);

  //     const filtered = jobs.filter((job) => {
  //       const title = job.role.toLowerCase();
  //       const company = job.company.toLowerCase();
  //       const location = job.location.toLowerCase();

  //       return title.includes(query) || company.includes(query) || location.includes(query);
  //     });

  //     setFilteredJobs(filtered);
  //   };
  //   const token=localStorage.getItem("token");  
  //   const handleBookmarkToggle = async (job) => {
  //     const updatedJob = { ...job, isSaved: !job.isSaved };
    
  //     try {
  //       await axios.put(
  //         `http://localhost:8080/api/v1/jobDetails/${job.id}`,
  //         updatedJob, // Send only the specific JobDetails object that needs to be updated
  //         {
  //           headers: {
  //             "Authorization": `Bearer ${token}`
  //           }
  //         }
  //       );
  //       // If the PUT request is successful, update the state with the updated job
  //       setJobs(prevJobs => prevJobs.map(j => j.id === job.id ? updatedJob : j));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
    
    

    
  //   return (
  //     <>
  //     <Navbar />
  //     <div id="first">
  //     <div id="title-bar">
  //         <p id="titlej">
  //             Available Jobs
  //         </p>
  //       </div>
  //     <div className="job-list-container">
        
  //       <input
  //           type="text"
  //           id="search"
  //           value={searchQuery}
  //           className='search'
  //           onChange={handleSearchChange}
  //           placeholder="Search Jobs..."
  //         />
          
      
        
  //       {filteredJobs.map((job) => (
  //         <div className="job-cardj" key={job.id}>
  //           <p id="jobtitle">{job.role}</p>
  //           <p className="company">{job.company}
  //           {job.isSaved ? (
  //                 <span id="book2">
  //                   <BsBookmarkFill
  //                     onClick={() => handleBookmarkToggle(job)}
  //                     className="bookmark1"
  //                     color="red" 
  //                     id="save"
  //                   />
  //                 </span>
  //               ) : (
  //                 <span id="book1">
  //                   <BsBookmark
  //                     onClick={() => handleBookmarkToggle(job)}
  //                     className="bookmark1"
  //                   />
  //                 </span>
  //               )}</p>
  //           <div id="detls">
  //           <div className="container">
  //     <div className="hoverable-element">
  //     <a style={{color:"black",cursor:"pointer"}}><p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p></a>
  //       <div className="popup">
  //       <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=328&height=308&hl=en&q=${encodeURIComponent(job.address)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe><a href="https://connectionsgame.org/">Connections Game</a></div></div>
  //       </div>
  //     </div>
  //   </div>
  //           <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.exp}yrs</p>
  //           <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
  //           </div>
  //           <p className="description">{job.des}</p>
  //           <Link to="/apply" className="apply-link"><button id="viewbtn">View</button></Link>
  //         </div>
  //       ))}
  //     </div>
  //     </div>
  //     <Footer/>
  //     </>
  //   );
  // };

  // export default JobList;


  import React, { useState, useEffect } from 'react';
import '../Assets/Styles/JobList.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navbar';
import location from '../Assets/images/location.png';
import { FcBriefcase } from 'react-icons/fc';
import { FaRupeeSign } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import axios from 'axios';
import Footer from './Footer';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const[isSaved,setIssaved]=useState(false);
  const navigate = useNavigate();

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
      const title = job.role.toLowerCase();
      const company = job.company.toLowerCase();
      const location = job.location.toLowerCase();

      return title.includes(query) || company.includes(query) || location.includes(query);
    });

    setFilteredJobs(filtered);
  };

  
  const token = localStorage.getItem('token');

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
   setJobs(updatedJobs);
 } catch (error) {
   console.log("Error updating job: ", error);
 }
};

  // const handleView=(job)=>{
  //   localStorage.setItem("jobId",job.id);
  //   navigate("/apply")
  // }
  return (
    <>
      <Navbar />
      <div id="first">
        <div id="title-bar">
          <p id="titlej">Available Jobs</p>
        </div>
        <div className="job-list-container">
          <input
            type="text"
            id="search"
            value={searchQuery}
            className="search"
            onChange={handleSearchChange}
            placeholder="Search Jobs..."
          />
          {filteredJobs.map((job) => (
            <div className="job-cardj" key={job.id}>
              <p id="jobtitle">{job.role}</p>
              <p className="company">
                {job.company}
                {job.saved?(
                  <span id="book2">
                    <BsBookmarkFill
                      onClick={() => handleBookmarkToggle(job.id)}
                      className="bookmark1"
                      color="red"
                      id="save"
                    />
                  </span>
                ) : (
                  <span id="book1">
                    <BsBookmark onClick={() => handleBookmarkToggle(job.id)} className="bookmark1" />
                  </span>
                )}
              </p>
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
            <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.exp}yrs</p>
            <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
            </div>
            <p className="description">{job.des}</p>
            <button id="viewbtn" className="apply-link" onClick={()=>{
              localStorage.setItem("jobId",job.id);    
              window.location.href="/apply";
            }}>View</button>
          </div>
          
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;
