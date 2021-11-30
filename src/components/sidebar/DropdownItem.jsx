import React, {useContext} from 'react'
import {ThemeContext} from '../../contexts/ThemeContext'
import {NavLink} from 'react-router-dom'
import * as AiIcons from "react-icons/ai";

const DropdownItem = ({item}) => {
  // State variables
  const {favoriteNavs, setFavoriteNavs} = useContext(ThemeContext)

  // Functions
  const addToFavorite = () => {
    setFavoriteNavs([...favoriteNavs, item.title])
  }
  const removeFavorite = () => {
    const newFavoriteNavs = favoriteNavs.filter(nav => nav !== item.title)
    setFavoriteNavs(newFavoriteNavs)
  }

  const isThisNavFav = favoriteNavs.includes(item.title)

  // Render
  return (
    <div className="dropdownItem" >
      {isThisNavFav ? (
        <AiIcons.AiFillStar className="addFavBtn" onClick={removeFavorite} />
      ) : (
        <AiIcons.AiOutlineStar className="removeFavBtn" onClick={addToFavorite} />
      )}
      <NavLink to={item.path} className={({isActive}) => "link dropdownItemWrapper" + (isActive ? " activeItem" : "")}>
        <span className="itemTitle">
          {item.title}
        </span>
      </NavLink>
    </div>
  )
}

export default DropdownItem
