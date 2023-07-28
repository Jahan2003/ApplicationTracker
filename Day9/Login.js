import React, { useEffect, useState } from "react";
import '../Assets/Styles/Login.css'
import job from "../Assets/images/job.png"
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../Features/userSlice";
import Button from '@mui/material/Button';  
import { SnackbarProvider, useSnackbar } from 'notistack';
import Navbar1 from "./navbar1";
import axios from "axios";

function Login() {

  const navigate=useNavigate();
  const user=useSelector((state)=>state.user);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'password') {
      setPassword(value);
      clearError("password");
    }
  };
  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;

  // }
  const dispatch=useDispatch();
  const handleSubmit= async (e)=>{
   
    e.preventDefault();
    const validationErrors = {};
    

    if (!email) {
      validationErrors.email = 'Username is required';
    }
  
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }else{
      const user={
        email,
        password
      }
      try{
        const response=await axios.post(
          "http://localhost:8080/api/v1/auth/authenticate",
          {
            email:email,
            password:password
          }
          ).then((response)=>{
            console.log(response.data);
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('email',email)
          // localStorage.setItem('userId',3);
          console.log(localStorage.getItem('token'));
        
          window.alert("Sucessfully Logged In");
          })
          
          
          
          
          dispatch({type:"LOGIN",payload:user});
          navigate("/dashboard");
        }catch(error){
          console.log(error);
         
        
      }

    }
   
  
  }
  useEffect(()=>{
    if(user!=null){
    }
  })
  

  return (
    <>
    <Navbar1/>
    <div class="login">
    <form onSubmit={handleSubmit}>
      <div id="form">
       <div id="log">
        <p id="login">Login</p></div> 
      <div id="Email">
      
        <input id="ei" 
          type="email" 
          value={email}
          name="email"
          onChange={handleInputChange}
        placeholder="Enter Email"/>
        
        {errors.email && <div><p class="error">{errors.email}</p></div>}
      </div>
 
      <div id="password">
        <input id="pi"
          type="password" 
          name="password"
          value={password}
          onChange={handleInputChange}
        placeholder="Password"/>
        {errors.password && <div><p class="error">{errors.password}</p></div>}
      </div>
      <div>
      <button type="submit">Sign In</button>
      <div id="signup">
        <p id="stag">Don't have an account? <Link to="/registration" id="sa">Sign up</Link></p>
        </div>
      </div>
      </div>
     </form>
    <div id="image">
      <img id="img" src={job} alt="image"></img>
    </div>
    </div>
    </>
  );

}
export default Login;