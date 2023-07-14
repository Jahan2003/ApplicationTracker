import React, { useState } from "react";
import Navbar from "./navbar";
import location from "../Assets/images/location.png";
import { FcBriefcase } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import ApplyForm from "./ApplyForm";
import "../Assets/Styles/ApplyJobs.css";
import { Link, useParams } from "react-router-dom";
import {TiTick} from "react-icons/ti";
import Footer from "./Footer";
function ApplyJobs(props){
    const[apply,setApply]=useState(false);
    const job=
        {
          "id": 1,
          "title": "Frontend Developer",
          "company": "Google",
          "workexp":"0-5Yrs",
          "salary":"Not disclosed",
          "location": "Mountain View, CA",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna non urna tincidunt, in tristique mauris gravida. Sed rhoncus felis quis metus tempus rutrum."
        }
    return(
        <div class="apply">
        <Navbar/>
     <div id="container">
     <div id="container1">
     <div className="job-cardj" key={job.id}>
          <p id="jobtitle" style={{fontSize:"25px"}}>{job.title}</p>
         <Link to="/applyForm"><button id="viewbtn">Apply Now</button></Link>
          <p className="company">{job.company}</p>
          <div id="detls">
          <p className="location"><img src={location} height="15px" width="15px"/> {job.location}</p>
          <p className="workExp"><FcBriefcase fontSize={18} className='icons'/>{job.workexp}</p>
          <p className="salary"><FaRupeeSign className='icons'/>{job.salary}</p>
          </div>
     <div id="des">
        <div className="header">
            Job description
        </div>
        <div id="job-des">
            <p class="text-data">
            We are seeking a skilled Front-End Developer to join our team. As a Front-End Developer, you will be responsible for implementing visual elements and user interactions on our web applications. You will work closely with the design team and back-end developers to bridge the gap between graphical design and technical implementation, ensuring a seamless and engaging user experience.
            </p>
        </div>
        <div className="header">
            Responsibilities
        </div>
        <div id="job-res">
            <p class="text-data">
                <ul>
                <li>Develop user-friendly web interfaces using HTML, CSS, and JavaScript.</li>
                <li>Collaborate with designers to translate design concepts into functional user interfaces.</li>
                <li>Implement responsive design principles to ensure optimal performance across various devices and screen sizes.</li>
                <li>Optimize web applications for maximum speed and scalability.Conduct thorough testing and debugging to ensure cross-browser compatibility and smooth functionality.</li>
                <li>Stay up-to-date with the latest front-end development trends and technologies.</li>
                <li>Collaborate with back-end developers to integrate front-end components with server-side logic.</li>
                </ul>
           
            </p>
        </div>
        <div className="header">
           Requirements
        </div>
        <div id="job-res">
            <p class="text-data">
            <ul>
                <li>Solid experience in front-end web development using HTML, CSS, and JavaScript.</li>
                <li>Proficient understanding of web markup, including HTML5 and CSS3.</li>
                <li>Strong knowledge of JavaScript frameworks/libraries (e.g., React, Angular, Vue.js)..</li>
                <li>Familiarity with responsive design and mobile-first development principles.
Experience with version control systems (e.g., Git).</li>
                <li>Stay up-to-date with the latest front-end development trends and technologies.</li>
                <li>Knowledge of front-end build tools (e.g., Webpack, Gulp) and package managers (e.g., npm, Yarn).</li>
                <li>Ability to work collaboratively in a team environment.Strong problem-solving and debugging skills.</li>
                </ul>
            </p>
        </div>
        
     </div>
    </div>
     </div>
     </div>
     <Footer/>
    </div>
    );
}
export default ApplyJobs;


