import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import "../Assets/Styles/Notifications.css";
import Footer from "./Footer";
function Notifications(){
   const [notifications, setNotifications] = useState([]);
   const Notification=[
      {
         id:1,
         Header: "New Job Listing",
         Description: "A new job matching your preferences has been posted. Apply now!",
         Time: "10 minutes ago"
      },{
         Header: "Upcoming Event",
         Description: "Reminder: There is an event tomorrow. Don't forget to attend!",
         Time: "1 hour ago"
      },{
         Header: "Account Update",
Description: "Your account information has been successfully updated.",
Time: "2 days ago"
      },{
         Header: "Job Offer",
Description: "Congratulations! You have received a job offer. Please review the details and respond within the given timeframe.",
Time:"1 week ago"
      }
   ]
   return(
   <>
    <Navbar/>
    <div id="notification">
      <div id="title-notification">
         <p>Notification</p>
      </div>
    {Notification.map((Notification) => (
      <div id="noti">
      <div id="head">
      <div className="dot"></div>
      <p id="notificationhead">
       {Notification.Header}
      </p>
      </div>
      <div id="description">
         <p id="notificationtext">
         {Notification.Description}
         </p>
      </div>
      <div id="time">
         <p id="notificationtime">
            {Notification.Time}
         </p>
      </div>
      </div>
    ))}
    </div>
    <Footer/>
    </>
   )
}
export default Notifications;