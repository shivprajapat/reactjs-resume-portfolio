import React, { useState, useEffect } from 'react'
import { ImCog } from "react-icons/im";
import setTheme from '../../helpers/theme';

import './style.scss'
const Theme = () => {
  const [theme, setCurrentTheme] = useState("yellow");
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }
  const handleTheme = (id) => {
    setCurrentTheme(id)
  }
  useEffect(() => {
    setTheme(theme)
  }, [theme])

  const colorsArray = [
    {
      id: "yellow",
      bgColor: "ffdd40",
    },
    {
      id: "red",
      bgColor: "d70d25",
    },
    {
      id: "green",
      bgColor: "6ac045",
    },
    {
      id: "aqua",
      bgColor: "05b3b6",
    },
  ]
  return (
    <div className={click ? "style-switcher open" : "style-switcher"}>

      <div className="toggle-style-switcher" onClick={handleClick}>

        <ImCog />
      </div>

      <h5>Style Switcher</h5>

      <ul className="list-unstyled">
        {
          colorsArray.map((item, index) => {
            const { id, bgColor } = item
            return <li onClick={() => handleTheme(id)} key={index} style={{ backgroundColor: `#${bgColor}` }} />
          })
        }

      </ul>

    </div>
  )
}

export default Theme