import React from "react";
import NavbarHr from "./Navbarhr";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skillselect from "./skillselect";
import axios from "axios";
import "../Assets/Styles/addjob.css";
function Addjob(){
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        location: '',
        address: '',
        salary: '',
        exp: '',
        des:'',
        responsibilities:'',
        requirements:'',
      });
    
      const [errors, setErrors] = useState({});

      const handleChange =(e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        clearError(e.target.name)
      };
    
      const token=localStorage.getItem("token");
      const handleSubmit =  async(e) => {
        e.preventDefault();
        if (validateForm()) {
          // Submit the form or perform further actions
          console.log('Form submitted:', formData);
          // Reset the form

          
          try{
            const response= await axios.post(
              "http://localhost:8080/api/v1/jobDetails",formData,{
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              }
            )
            console.log(response.data);
            window.alert("Job Added Sucessfully");
          }catch(error){
            console.log(error);
          }


          setFormData({
            role: '',
            company: '',
            location: '',
            address: '',
            salary: '',
            exp: '',
            des:'',
            responsibilities:'',
            requirements:'',
          });
          setErrors({});
          window.location.href="/joblist";
        }
      };
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
    
        if (!formData.address) {
          newErrors.address = 'Address is required.';
          isValid = false;
        }
    
        if (!formData.location) {
          newErrors.location= 'Location is required.';
          isValid = false;
        } 
        if (!formData.des) {
          newErrors.des= 'Description is required.';
          isValid = false;
        } 
        if (!formData.salary) {
          newErrors.salary = 'Salary is required.';
          isValid = false;
        } else if (formData.salary < 0) {
          newErrors.salary = 'Invalid Salary.';
          isValid = false;
        }
    
        if (!formData.exp) {
          newErrors.exp = 'Experience is required.';
          isValid = false;
        } else if (formData.exp<0) {
          newErrors.exp = 'Invalid Experience.';
          isValid = false;
        }
        
        if (!formData.responsibilities) {
          newErrors.responsibilities = 'Responsibilities are required.';
          isValid = false;
        }

        if (!formData.requirements) {
          newErrors.requirements= 'Requirements are required.';
          isValid = false;
        }        
        setErrors(newErrors);
        return isValid;
      };
    
      
    
 return(
    <div id="addjob-cont">
        <NavbarHr/>
        <div className="registration" id="add-job">
    <form onSubmit={handleSubmit}>
      <div id="frame">
        
        <div id="form">
        <div id="reg">
        <p id="regis">Add a new Job</p></div>
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
          {errors.role && <div className="error">{errors.role}</div>}
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
          {errors.company && <div className="error">{errors.company}</div>}
        </div>
          </div>
        <div id="emailid">
          <input
            type="text"
            id="email"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="location"
            size={20}
          />
          {errors.location && <div className="error">{errors.location}</div>}
        </div>

        <div id="add">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            size={20}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>
        
        <div id="pass">
          <input
            type="number"
            id="password"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
            size={20}
          />
          {errors.salary && <div className="error">{errors.salary}</div>}
        </div>
        <div id="no">
          <input
            type="number"
            id="contactNumber"
            name="exp"
            value={formData.exp}
            onChange={handleChange}
            placeholder="Years of Experience"
            size={20}
          />
          {errors.exp && <div className="error">{errors.exp}</div>}
        </div>
        <div id="collg">
        <textarea
          type="text"
          id="college"
          name="des"
          value={formData.des}
          onChange={handleChange}
          placeholder="Enter the Description"

        />
        {errors.des && <div className="error">{errors.des}</div>}
        </div>
        <div id="spec">
        <textarea
          type="textarea"
          id="specialization"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Enter the Requirements"
          
        />
        {errors.requirements && <div className="error">{errors.requirements}</div>}
        </div>
        <div id="collg">
        <textarea
          type="text"
          id="college"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          placeholder="Enter the Responsibilities"

        />
        {errors.responsibilities && <div className="error">{errors.responsibilities}</div>}
        </div>
        
        
        <button type="submit" id="add">Add Job</button>
        </div>
        </div>
      </form>
    </div>
    </div>
 )
}
export default Addjob;