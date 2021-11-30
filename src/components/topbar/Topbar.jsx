import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import Tippy from '@tippyjs/react';
import './topbar.css'
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import {AuthContext} from "../../contexts/AuthContext"
import {ThemeContext} from '../../contexts/ThemeContext'


const logo = "https://www.chinauniversityjobs.com/wp-content/uploads/2021/01/l%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%AD%A6logo-min.png"

// Custom Components
const LanguageMenu = () => {
  const {language, setLanguage} = useContext(ThemeContext)
  return (
    <div className="languageMenu languageOpen">
      <ul className="languageList">
        <li className={'languageItem' + (language === "CHI" ? " activeLanguageItem" : "")} onClick={() => setLanguage('CHI')}>中文</li>
        <li className={'languageItem' + (language === "ENG" ? " activeLanguageItem" : "")} onClick={() => setLanguage('ENG')}>English</li>
      </ul>
    </div>
  )
}

const Topbar = () => {
  // State variables
  const { tempUser, setTempUser} = useContext(AuthContext)
  // const {language, setLanguage, setIsDarkmode} = useContext(ThemeContext)

  return (
    <div className="topbar">
      <div className="topbarLeft">
        <img src={logo} alt="NJU Logo" className="topbarLogo" />
      </div>
      <div className="topbarRight">
        <div className="topbarButtons">
          {tempUser && (
            <Link to='/user/studentInfo' className="link" >
              <button className="topbarSingleButton userButton">
                User:  <b>{tempUser}</b>
              </button>
            </Link>
          )}
          {/* Language Button */}
          <Tippy 
            content={<LanguageMenu />} delay={100} interactive={true} arrow={true}
            hideOnClick={false} interactiveBorder={20} offset={[18, 15]}
          >
            <button className="topbarSingleButton languageToggle"  >
              <Io5Icons.IoLanguage />
            </button>
          </Tippy>
      
          <button className="topbarSingleButton themeToggle">
            <MdIcons.MdModeNight />
          </button>
          {tempUser && (
            <button className="topbarSingleButton logout" onClick={() => setTempUser(null)}>
              <MdIcons.MdLogout />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Topbar
