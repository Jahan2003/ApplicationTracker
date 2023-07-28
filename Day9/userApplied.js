import React, { useEffect, useState } from 'react';
import "../Assets/Styles/Profile.css";
import Navbar from './navbar';
import profilrpic from "../Assets/images/profile.png";
import {BiSolidPencil} from "react-icons/bi";
import {AiFillSave} from "react-icons/ai";
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Assets/Styles/JobsApplied.css";
function UserApplied() {

  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNumber: '',
    college: '',
    degree: '',
    specialization: '',
    cgpa: 0,
    image:"",
    experience:0,
    passingYear:0
  });
  
  const jobsApplied = 0;
  const interviewsAttended = 0;
  const jobsOffered = 0;
  
  const [editMode, setEditMode] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleEditClick = () => {
    setEditMode(true);
  };

  
  const token=localStorage.getItem('token');
  const userId=localStorage.getItem("userId");

  const handleSaveClick = async() => {
   
    try{
      const response=await axios.put(
        `http://localhost:8080/api/v1/users/${userId}`,
        profileData,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":"no-cache",
          }
        }
       
      );
      console.log(response.data);
    }catch(error){
      console.log(error);
      console.log(profileData.firstName)
    }
    setEditMode(false);
  }
   useEffect(()=>{
    const fetchData=async()=>{
      console.log(token);
      try{
        const response=await axios.get(
          `http://localhost:8080/api/v1/users/id/${userId}`,
          {
            headers:{
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Credentials': 'true',
              "Authorization":`Bearer ${token}`,
              "cache-control":"no-cache",
            },
          }
        )
        setProfileData({
          firstName:response.data.firstName,
          lastName:response.data.lastName,
          address:response.data.address,
          email:response.data.email,
          contactNumber:response.data.contactNumber,
          college:response.data.collegeName,
          degree:response.data.degree,
          specialization:response.data.specializtion,
          cgpa:response.data.cgpa,
          passingYear:response.data.passingYear,
          experience:response.data.exp

          
          // email:response.data.email,
        })
        console.log(response.data);
      }
      catch(error){
        console.log("Error fetching Data"+error);
      }
    };
    fetchData();
   },[]);
  return (
    <>
    <Navbar/>
    <div className="profile-container-1">
      <div className="profile">
      <h1 id="userprof">Candidate Details</h1>
        <div className="profile-section">
          <label>First Name:</label>
          {editMode ? (
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.firstName}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Last Name:</label>
          {editMode ? (
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.lastName}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Address:</label>
          {editMode ? (
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.address}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.email}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Contact Number:</label>
          {editMode ? (
            <input
              type="text"
              name="contactNumber"
              value={profileData.contactNumber}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.contactNumber}</span>
          )}
        </div>
        <div className="profile-section">
          <label>College:</label>
          {editMode ? (
            <input
              type="text"
              name="college"
              value={profileData.college}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.college}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Degree:</label>
          {editMode ? (
            <input
              type="text"
              name="degree"
              value={profileData.degree}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.degree}</span>
          )}
        </div>
        {/* <div className="profile-section">
          <label>experience:</label>
          {editMode ? (
            <input
              type="text"
              name="specialization"
              value={profileData.specialization}
              onChange={handleInputChange}
              width={10}
            />
          ) : (
            <span>{profileData.specialization}</span>
          )}
        </div> */}
        <div className="profile-section">
          <label>CGPA:</label>
          {editMode ? (
            <input
              type="number"
              name="cgpa"
              step="0.01"
              min="0"
              max="10"
              value={profileData.cgpa}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.cgpa}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Experience:</label>
          {editMode ? (
            <input
              type="number"
              min="0"
              max="10"
              name="experience"
              value={profileData.experience}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.experience}</span>
          )}
        </div>
        <div className="profile-section">
          <label>Passing Year:</label>
          {editMode ? (
            <input
              type="string"
              name="passingYear"
              value={profileData.passingYear}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.passingYear}</span>
          )}
        </div>
       
        <button id="Scheduleint" onClick={()=>{
            window.location.href="/schedule"
        }}>
         Schedule Interview
        </button>
      </div>
      <div>
      {editMode ? (
           <img src={profilrpic} height="0px" width="0px" id="profilepic"></img>
          ) : (
            <img src={profilrpic} height="150px" width="150px" id="profilepic"></img>
          )}
      
      </div>
    </div>
      
    </>
  );
}

export default UserApplied;
