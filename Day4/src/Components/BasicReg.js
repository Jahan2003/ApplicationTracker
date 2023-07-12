import React from "react";
import '../Assets/Styles/Registration.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar1 from "./navbar1";
function BasicReg(){
        const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          address: '',
          email: '',
          password: '',
          contactNumber: '',
        });
      
        const [errors, setErrors] = useState({});
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
          clearError(e.target.name)
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (validateForm()) {
            // Submit the form or perform further actions
            console.log('Form submitted:', formData);
            // Reset the form
            setFormData({
              firstName: '',
              lastName: '',
              address: '',
              email: '',
              password: '',
              contactNumber: '',
            });
            setErrors({});
            window.location.href="/";
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
      
          if (!formData.firstName) {
            newErrors.firstName = 'First Name is required.';
            isValid = false;
          }
      
          if (!formData.lastName) {
            newErrors.lastName = 'Last Name is required.';
            isValid = false;
          }
      
          if (!formData.address) {
            newErrors.address = 'Address is required.';
            isValid = false;
          }
      
          if (!formData.email) {
            newErrors.email = 'Email is required.';
            isValid = false;
          } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
          }
      
          if (!formData.password) {
            newErrors.password = 'Password is required.';
            isValid = false;
          } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
            isValid = false;
          }
      
          if (!formData.contactNumber) {
            newErrors.contactNumber = 'Contact Number is required.';
            isValid = false;
          } else if (!validateContactNumber(formData.contactNumber)) {
            newErrors.contactNumber = 'Invalid contact number format.';
            isValid = false;
          }
      
          setErrors(newErrors);
          return isValid;
        };
      
        const validateEmail = (email) => {
          // Regular expression for email validation
          const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return emailPattern.test(email);
        };
      
        const validateContactNumber = (contactNumber) => {
          // Regular expression for contact number validation
          const contactNumberPattern = /^\d{10}$/;
          return contactNumberPattern.test(contactNumber);
        };
 return(
    <>
    <Navbar1/>
    <div className="registration">
    <form onSubmit={handleSubmit}>
        <div id="form">
        <div id="reg">
        <p id="regis">Registration</p></div>
          <div id="name">
          <div id="fname">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div id="lname">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
          </div>
        <div id="emailid">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            size={20}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div id="add">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
            size={20}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>
        
        <div id="pass">
          <input
            type="password"
            maxLength="100"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            size={20}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div id="no">
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            size={20}
          />
          {errors.contactNumber && (
            <div className="error">{errors.contactNumber}</div>
          )}
        </div>

        <button type="submit" id="Register">Register</button>
        <div id="sigin">
        <p id="sitag">Already have an account? <Link to="/" id="si">Sign In</Link></p>
        </div>
        </div>
      </form>
    </div>
    </>
 )
}
export default BasicReg;