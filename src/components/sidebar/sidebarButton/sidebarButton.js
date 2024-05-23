import React from 'react'
import './sidebarButton.css'
import { Link, useLocation } from "react-router-dom";
import { IconContext } from 'react-icons';

export default function SidebarButton(props) {

  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btn_container = isActive ? "btn-container active" : "btn-container";
  
  return (
    <Link to={props.to}>
      <div className={btn_container}>
        <IconContext.Provider value={{ size: "25px"}}>
          {props.icon}
        </IconContext.Provider>
        {props.title}
      </div>
    </Link>
  )
}
