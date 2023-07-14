import React, { useState } from 'react';
import hiring from "../Assets/images/Hiring.png"
import "../Assets/Styles/ApplyForm.css";
import Navbar from './navbar';
import Footer from './Footer';
const ApplyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // Validate name
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    // Validate email
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Email is invalid';
    }

    // Validate resume file
    if (!resume) {
      errors.resume = 'Resume is required';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form if there are no errors
      console.log('Form submitted successfully');
      // Reset form fields
      setName('');
      setEmail('');
      setResume(null);
      setErrors({});
    } else {
      // Update errors state if there are validation errors
      setErrors(errors);
    }
  };

  return (
    <>
    <Navbar/>
    <div id="mainframe">
    <div id="imageapply">
        <img src={hiring} height="550px" width="550px" id="hire"></img>
    </div>
    <div id="applyForm">
      <form onSubmit={handleSubmit}>
      <h2>Apply For the Job</h2>
        <div>
            <input type="text" 
            value={name}
            className='input'
            placeholder="Full Name"
            onChange={handleNameChange} />
          {errors.name && <p className='errors'>{errors.name}</p>}
        </div>
        <div>
            <input type="email" 
            className='input' 
            value={email} 
            placeholder="Email"
            onChange={handleEmailChange} />
           {errors.email && <p className='errors'>{errors.email}</p>}
        </div>
        <div>
        <label htmlFor="file-upload" className="custom-file-upload">
            <input type="file" onChange={handleResumeChange} name="Upload Resume" className='input'/>
          {errors.resume && <p className='errors'>{errors.resume}</p>}
            </label>
        </div>
        <button type="submit" id="formsub">Submit</button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ApplyForm;
