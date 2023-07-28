import React from "react";
import Navbar1 from "./navbar1";
import lan from "../Assets/images/landing1.png";
import "../Assets/Styles/landing.css"
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Landing(){
    return(
     <div id="main-container">
     <Navbar1/>
     <div id="inner-container">
      <div id="first-con">
        <div id="main-text">
            <p id="maintextp">Shaping your future with best recruitment.</p>
            <p id="taglinep">Growth and success go hand-in-hand. We'll help
you with it. Focus to get your dream job.</p>
<Link to="/select">
<button id="get-started">Get Started</button>
</Link>
        <Link to="/login">
        <button id="loginlanding">Login as User</button>
        </Link>
        <Link to="/hrlogin">
        <button id="loginlanding" style={{marginLeft:"100px"}}>Login as HR</button>
        </Link>
        </div>
      <div id="img-sec"><img src={lan} height="600px" width="600px"/></div>
      </div>
        <div id="howitworks">
            <div id="howitworkshead">
            <p>How It Works</p>
            </div>
            <div id="grid">
                <div className="box">
                    <div className="boxtitle">
                       Job Posting  
                    </div>
                    <p>
                    Qui laborum id proident consectetur id pariatur duis in qui incididunt quis eiusmod nulla. Reprehenderit eu qui aute do labore quis non Lorem minim mollit fugiat aute. Quis exercitation labore irure velit.
                    </p>
                </div>
                <div className="box">
                <div className="boxtitle">
                        Candidate Communication
                    </div>
                    <p>
                    Qui laborum id proident consectetur id pariatur duis in qui incididunt quis eiusmod nulla. Reprehenderit eu qui aute do labore quis non Lorem minim mollit fugiat aute. Quis exercitation labore irure velit.
                    </p>
                </div>
                <div className="box">
                <div className="boxtitle">
                        Application Tracking
                    </div>
                    <p>
                    Qui laborum id proident consectetur id pariatur duis in qui incididunt quis eiusmod nulla. Reprehenderit eu qui aute do labore quis non Lorem minim mollit fugiat aute. Quis exercitation labore irure velit.
                    </p>
                </div>
                <div className="box" id="nthbox">
                <div className="boxtitle" >
                        Interview Scheduling
                    </div>
                    <p>
                    Qui laborum id proident consectetur id pariatur duis in qui incididunt quis eiusmod nulla. Reprehenderit eu qui aute do labore quis non Lorem minim mollit fugiat aute. Quis exercitation labore irure velit.
                    </p>
                </div>
            </div>
        </div>
     </div>
     <Footer/>
     </div>
    )
}
export default Landing;