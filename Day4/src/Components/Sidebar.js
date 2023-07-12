import React from "react";
import { slide as Menu } from "react-burger-menu";
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineForm} from "react-icons/ai";
import {FaSuitcase} from"react-icons/fa";
export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        <span className="icn"><AiFillHome fontSize={20}/></span>Home
      </a>

      <a className="menu-item" href="/burgers">
        <span className="icn"><BsFillPersonFill fontSize={20}/></span>Profile
      </a>

      <a className="menu-item" href="/pizzas">
        <span className="icn"><AiOutlineForm fontSize={20}/> </span>Apply For Jobs
      </a>

      <a className="menu-item" href="/desserts">
        <span className="icn"><FaSuitcase fontSize={20}/></span>Saved Jobs
      </a>
    </Menu>
  );
};