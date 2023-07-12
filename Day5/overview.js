import React from "react";
import "../Assets/Styles/overview.css";
import profile from "../Assets/images/profile.png";

function Overview(){
  return(
    <div className="overview">
        <div id="inner-con">
        <div id="main">
        <div id="image-con">
          <div id="image">
          <img src={profile} height="90px" width="90px"></img>
          </div>
          <div id="name">
            <p>Jahan Sai J</p>
            </div> 
          <div>
            <button id="viewprof">
                View Profile
            </button>
          </div>
        </div>
          <div id="details">
            <div className="detcon">
              <div className="dettitle">
                Applied Jobs
              </div>
              <div className="detcount">
                NA
              </div>
            </div>
            <div className="detcon">
            <div className="dettitle">
                Interviews Attended
              </div>
              <div className="detcount">
                NA
              </div>
              
            </div>
            <div className="detcon" id="nth">
            <div className="dettitle">
                Applied Jobs
              </div>
              <div className="detcount">
                NA
              </div>
            </div>
          </div>
        </div>
        
        </div>
       
    </div>
  )
}
export default Overview;