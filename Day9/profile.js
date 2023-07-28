import React, { useEffect, useState } from 'react';
import "../Assets/Styles/Profile.css";
import Navbar from './navbar';
import profilrpic from "../Assets/images/profile.png";
import {BiSolidPencil} from "react-icons/bi";
import {AiFillSave} from "react-icons/ai";
import Footer from './Footer';
import axios from 'axios';
function Profile() {

  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNumber: '',
    collegeName: '',
    degree: '',
    specialization: '',
    cgpa: 0,
    image:"",
    exp:0,
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
  const email=localStorage.getItem("email");
console.log(userId);
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
          `http://localhost:8080/api/v1/users/email/${email}`,
          {
            headers:{
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Credentials': 'true',
              "Authorization":`Bearer ${token}`,
              "cache-control":"no-cache",
            },
          },
          )
          localStorage.setItem("userId",response.data.id);
        setProfileData({
          firstName:response.data.firstName,
          lastName:response.data.lastName,
          address:response.data.address,
          email:response.data.email,
          contactNumber:response.data.contactNumber,
          collegeName:response.data.collegeName,
          degree:response.data.degree,
          specialization:response.data.specializtion,
          cgpa:response.data.cgpa,
          passingYear:response.data.passingYear,
          exp:response.data.exp

          
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
    <div className="profile-container">
      <div className="profile">
      <h1 id="userprof">User Profile</h1>
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
              name="collegeName"
              value={profileData.collegeName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.collegeName}</span>
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
              name="exp"
              value={profileData.exp}
              onChange={handleInputChange}
            />
          ) : (
            <span>{profileData.exp}</span>
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
        {editMode &&
        <div className="profile-section">
          <label id="profileimg">Profile Image:</label>
          <input 
          type="file"
          value={profileData.image}
          />
        </div>
        }
        <div className="profile-buttons">
          {editMode ? (
            <AiFillSave id="save" onClick={handleSaveClick}/>
          ) : (
            <BiSolidPencil id="edit" onClick={handleEditClick}/>
          )}
        </div>
        

      </div>
      <div>
      {editMode ? (
           <img src={profilrpic} height="0px" width="0px" id="profilepic"></img>
          ) : (
            <img src={profilrpic} height="150px" width="150px" id="profilepic"></img>
          )}
      
      </div>
      {/* <div className="stats-container">
        <h1 id="act-title">Activities</h1>
      <div className="stat">
        <h3>Jobs Applied</h3>
        <p style={{color:"#4caf50"}}>{jobsApplied}</p>
      </div>
      <div className="stat">
        <h3>Interviews Attended</h3>
        <p style={{color:"#4caf50"}}>{interviewsAttended}</p>
      </div>
      <div className="stat">
        <h3>Jobs Offered</h3>
        <p style={{color:"#4caf50"}}>{jobsOffered}</p>
      </div>
    </div>   */}
    </div>
      
    </>
  );
}

export default Profile;
