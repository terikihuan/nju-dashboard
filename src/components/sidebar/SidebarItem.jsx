import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import './sidebar.css'

// Components
import DropdownItem from './DropdownItem'
import * as FiIcons from "react-icons/fi"

const SidebarItem = ({item}) => {
  const {title, icon, subNav} = item
  // State variables
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  // Functions
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="sidebarItem" >
      <div className="sidebarItemLabel" onClick={subNav ? toggleDropdown : () => navigate('/')}>
        <div className="itemIcon">
          {icon}
        </div>
        <span className="itemTitle">
          {title}
        </span>
        <div className="dropdownIcon">
          {subNav
            ? isDropdownOpen
              ? <FiIcons.FiChevronRight />
              : <FiIcons.FiChevronDown />
            : <></>
          }
        </div>
      </div>
      <div className="dropdownContainer">
        {subNav && (
          <CSSTransition
            in={isDropdownOpen} unmountOnExit timeout={{ enter: 1000, exit: 700}}
            classNames='dropdownMenu'
          >
            <div className="dropdownMenu">
              {subNav.map((item, index) => {
                return <DropdownItem key={index} item={item} />
              })}
            </div>
          </CSSTransition>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
