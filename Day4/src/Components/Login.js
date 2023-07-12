import React, { useEffect, useState } from "react";
import '../Assets/Styles/Login.css'
import job from "../Assets/images/job.png"
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../Features/userSlice";
import Navbar1 from "./navbar1";

function Login() {
  const navigate=useNavigate();
  const user=useSelector(selectUser);
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
  const handleSubmit=(e)=> {
   
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
      dispatch(
        login({
          email:email,
          password:password,
          isLoggedIn:true,
        })
      );
      
    }
   
  
  }
  useEffect(()=>{
    if(user!=null){
      navigate("/dashboard");
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
      <button type="submit" >Sign In</button>
      <div id="signup">
        <p id="stag">Don't have an account? <Link to="/reg" id="sa">Sign up</Link></p>
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