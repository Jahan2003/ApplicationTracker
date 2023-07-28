import React, { useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "../Assets/Styles/JobList.css"
import "../Assets/Styles/Interview.css";
import axios from "axios";
import { useEffect } from "react";
import Footer from "./Footer";

function Interview(){
  const [interview,setInterview]=useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/interviews', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setInterview(response.data);
      } catch (error) {
        console.log('Error fetching Data ' + error);
      }
    };
    
    fetchData();
  }, []);
  const convert_Date=(date)=>{
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString();
  return formattedDate;
  }

  return(
    <>
    <Navbar/>
    <div id="interview">
        <div id="interview-head">
            <p>Interviews Scheduled</p>
        </div>
        <div id="Interview details">
        {interview.map((interview) => (
        <div className="job-cardj" key={interview.id}>
          <p id="jobtitle">{interview.role}</p>
          <p className="company">{interview.company}</p>
          <div id="detls">
          <label> Date:
          <p className="date">{convert_Date(interview.date)}</p>
          </label>
          </div>
          <label> Time:
          <p className="time">{interview.time}</p>
          </label>
          <label> Link:
          <p className="link"><Link to={interview.link} target="_blank" style={{color:"#14a800",textDecoration:"underline"}}>{interview.link}</Link></p>
          </label>
          <label>Interviewer:
          <p className="mode"> {interview.interviewer}</p>
          </label>
          

        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Interview;