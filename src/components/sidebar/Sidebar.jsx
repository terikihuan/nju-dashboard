import React from 'react'
import './sidebar.css'
import navData from './navData'
import {NavLink} from 'react-router-dom'
import * as AiIcons from "react-icons/ai"

// Components
import SidebarItem from './SidebarItem'

const logo = "https://www.chinauniversityjobs.com/wp-content/uploads/2021/01/l%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6logo-min.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarHeader">
          <img src={logo} alt="NJU Logo" className="sidebarLogo" />
        </div>
        <div className="sidebarBody">
          <NavLink exact="true" to='/'  className={({isActive}) => "link" + (isActive ? " activeItem" : "")} >
            <SidebarItem item={{
              title: "Overview",
              icon: <AiIcons.AiOutlineHome />,
            }}/>
          </NavLink>
          {navData.map((item, index) => {
            return <SidebarItem item={item} key={index}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
