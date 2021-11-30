import React, {useState, useEffect} from 'react'
import { prominent } from 'color.js'
import './courseCard.css'
import rgbToHex from '../../helpers/rgbToHex'
import LightenDarkenColor from '../../helpers/lightenDarkenColor'


const CourseCard = ({course}) => {
  // State variables
  const {name, image,  credit, taughtBy} = course
  const [style, setStyle] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Functions
  const getBackgroundColor = async (url) => {
    const color = await prominent(url, {amount: 1})
    const [red, green, blue] = color
    const colorHex = rgbToHex(red, green, blue)
    const newColor = LightenDarkenColor(colorHex, -30)
    return `${newColor}`
  }

  // Effects
  useEffect(() => {
    async function setBackgroundColor() {
      const hexCode = await getBackgroundColor(image)
      const headerStyle = {
        backgroundColor: hexCode
      }
      setStyle(headerStyle)
      setIsLoading(false)
    }
    setBackgroundColor()
  }, [image])


  if (isLoading) {
    return <div className="courseCard courseCardLoading">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  } else {
    return (
      <div className="courseCard" >
        <div className="courseCardHeader" style={style}>
          <div className="courseThumbnail" style={{ backgroundImage: `url(${image})`}} ></div>
        </div>
        <div className="courseCardBody">
          <h4 className="courseTitle">{name}</h4>
          <div className="courseDetails">
            <p className="teacher">Professor: {taughtBy}</p>
            <p className="credits">Credits: {credit}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default CourseCard
