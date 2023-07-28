import React from "react";
import { slide as Menu } from "react-burger-menu";
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineForm} from "react-icons/ai";
import {FaSuitcase} from"react-icons/fa";
import {FiMonitor} from "react-icons/fi";
import { Link } from "react-router-dom";
export default props => {
  return (
    <Menu {...props}>

      <Link to="/profile">
        <span className="icn"><BsFillPersonFill fontSize={20}/></span>Profile
      </Link>

      <Link to="/jobs">
        <span className="icn"><AiOutlineForm fontSize={20}/> </span>Apply For Jobs
      </Link>

      <Link to="/savedJobs">
        <span className="icn"><FaSuitcase fontSize={20}/></span>Saved Jobs
      </Link>
      <Link to="/Interviews">
        <span className="icn"><FiMonitor fontSize={20}/></span>Interview
      </Link>
      {/* <Link to="/Interviews">
        <span className="icn"><FaSuitcase fontSize={20}/></span>Interviews
      </Link> */}
      <Link to="/feedback">
        <span className="icn"><AiOutlineForm fontSize={20}/>FeedBack</span>
      </Link>
    </Menu>
  );
};