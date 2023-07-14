import React from "react";
import { FaUser } from "react-icons/fa";
import "../Assets/Styles/Recentjobs.css";
import {GrLocation} from "react-icons/gr";
import location from "../Assets/images/location.png";
function RecentJob() {
  const recentJobs = [
    {
      id: 1,
      title: "Front-end Developer",
      company: "ABC Company",
      location: "New York, USA",
    },
    {
      id: 5,
      title: "Front-end Developer",
      company: "ABC Company",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Full-stack Developer",
      company: "XYZ Inc.",
      location: "San Francisco, USA",
    },
    // Add more recent job objects as needed
  ];

  const appliedJobsCount = 5; // Number of jobs applied

  const recommendedJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Design Co.",
      location: "Los Angeles, USA",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Data Corp.",
      location: "Chicago, USA",
    },
    {
        id: 3,
        title: "Data Analyst",
        company: "Data Corp.",
        location: "Chicago, USA",
      },
    // Add more recommended job objects as needed
  ];

  const appliedJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "New York, USA",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "San Francisco, USA",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Data Analytics Co.",
      location: "Seattle, USA",
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Creative Studio",
      location: "Los Angeles, USA",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "Digital Marketing Agency",
      location: "Chicago, USA",
    },
  ];

  return (
    <div className="home-page">
      <div className="job-section">
        <h2>Recent Jobs</h2>
        <div className="job-cards">
          {recentJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
                <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="applied-jobs">
        <h2>Applied Jobs</h2>
        <div className="job-cards">
          {appliedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
              <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
          ))}
        </div>
        <p>You have applied for {appliedJobsCount} jobs.</p>
      </div>

      <div className="job-section">
        <h2>Recommended Jobs</h2>
        <div className="job-cards">
          {recommendedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p style={{color:"#14a800"}}>{job.company}</p>
              <p>
              <img src={location} height="15px" width="15px"></img>
                {job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentJob;