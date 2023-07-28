import React from "react";
import NavbarHr from "./Navbarhr";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skillselect from "./skillselect";
import "../Assets/Styles/schedule.css";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useEffect  } from "react";
function ScheduleInterview(){
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        Candidate:'',
        link:'',
        date: '',
        time: '',
        interviewer:'',
      });
      const [user,setUser]=useState([]);
      const [job,setJob]=useState([]);
      const [errors, setErrors] = useState({});
      const[mail,setMail]=useState({
        to_email:"jahansai2003@gmail.com"
      })
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        clearError(e.target.name)
      };
    
      const token=localStorage.getItem("token");
      const userId=localStorage.getItem("userId");
      const jobId=localStorage.getItem("jobId");


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
              setUser(response.data);
              console.log(response.data);
          }
          catch(error){
            console.log("Error fetching Data"+error);
          }

          try {
            const response = await axios.get(`http://localhost:8080/api/v1/jobDetails/${jobId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log(response.data);
            setJob(response.data);
          } catch (error) {
            console.log('Error fetching Data ' + error);
          }
        };
        fetchData();
       },[]);
      const handleSubmit = async(e) => {
        e.preventDefault();
        if (validateForm()) {
          // Submit the form or perform further actions
          console.log('Form submitted:', formData);
          
          try{
            const response= await axios.post(
              "http://localhost:8080/api/v1/interviews",formData,{
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              }
            )
            emailjs.sendForm('service_rwvyxls','template_fc06ido',e.target,'3ezDy6JlhPegXQT71');
            window.alert("Interview Scheduled")
          }catch(error){
            console.log(error);
          }
          //Reset the form
          setFormData({
            role:'',
            company: '',
            Candidate:'',
            link:'',
            date: '',
            time: '',
            interviewer:'',
          });
          setErrors({});
         
        }
      };
      const name=user.firstName+" "+user.lastName;
      const clearError = (fieldName) => {
        const updatedErrors = { ...errors };
        delete updatedErrors[fieldName];
        setErrors(updatedErrors);
      };
    
      const validateForm = () => {
        let isValid = true;
        let newErrors = {};
      
        if (!formData.role) {
          newErrors.role = 'Job Title is required.';
          isValid = false;
        }
      
        if (!formData.company) {
          newErrors.company = 'Company Name is required.';
          isValid = false;
        }
      
        if (!formData.Candidate) {
          newErrors.Candidate = 'Candidate is required.';
          isValid = false;
        }
      
        if (!formData.date) {
          newErrors.date = 'Date is required.';
          isValid = false;
        }
        if (!formData.link) {
          newErrors.link = 'Link is required.';
          isValid = false;
        }
        if (!formData.time) {
          newErrors.time = 'Time is required.';
          isValid = false;
        }
      
        if (!formData.interviewer) {
          newErrors.interviewer = 'Interviewer is required.';
          isValid = false;
        }
      
        setErrors(newErrors); // Update the state with the new errors object
      
        return isValid; // Return the validation result
      };
    
 return(
    <div id="addjob-cont">
        <NavbarHr/>
        <div className="registration" id="schedule">
    <form onSubmit={handleSubmit}>
      <div id="frame">
        
        <div id="form">
        <div id="reg">
        <p id="regis">Schedule Interview</p></div>
          <div id="name">
          <div id="fname">
          <input
            type="text"
            id="firstName"
            name="role"
            value={formData.role}
            
            onChange={handleChange}
            placeholder="Job Title"
          />
          
        </div>

        <div id="lname">
          <input
            type="text"
            id="lastName"
            name="company"
            value={formData.company}
            
            onChange={handleChange}
            placeholder="Company name"
          />
          
        </div>
          </div>
        <div id="emailid">
          <input
            type="text"
            id="email"
            name="Candidate"
            value={formData.Candidate}
            
            onChange={handleChange}
            placeholder="Candidate"
            size={20}
          />
          
        </div>
        <div id="emailid" style={{display:"none"}}>
          <input
            type="text"
            id="to_email"
            name="to_email"
            value={mail.to_email}
            onChange={handleChange}
            placeholder="Candidate"
            size={20}
          />
        </div>

        <div id="add">
          <input
            type="text"
            id="address"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Meeting Link"
            size={20}
          />
          {errors.link && <div className="error">{errors.link}</div>}
        </div>
        
        <div id="pass">
          <input
            type="text"
            id="password"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            size={20}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          {errors.date && <div className="error">{errors.date}</div>}
        </div>
        <div id="no">
          <input
            type="text"
            id="contactNumber"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Time"
            size={20}
            onFocus={(e) => (e.target.type = "time")}
            onBlur={(e) => (e.target.type = "text")}
          />
          {errors.time && <div className="error">{errors.time}</div>}
        </div>
        
        <div id="spec">
        <input
          type="text"
          id="specialization"
          name="interviewer"
          value={formData.interviewer}
          onChange={handleChange}
          placeholder="Interviewer Name"
          
        />
        {errors.interviewer && <div className="error">{errors.interviewer}</div>}
        </div>
        <button type="submit" id="add">Schedule</button>
        </div>
        </div>
      </form>
    </div>
    </div>
 )

}
export default ScheduleInterview;