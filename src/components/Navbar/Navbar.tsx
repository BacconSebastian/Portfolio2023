import { useState } from "react"

import "./Navbar.scss"
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const handleExpand = (expand: boolean) => {
    setExpanded(expand)
  }

  return (
    <nav>
      <p className="name">Sebastian Baccon</p>
      
      <div className={expanded ? "hamburguer-icon expanded" : "hamburguer-icon"} onClick={() => handleExpand(true)}></div>
      <button className={expanded ? "close-expanded expanded" : "close-expanded"} onClick={() => handleExpand(false)}><CloseIcon /></button>
      
      <div className={expanded ? "nav-buttons expanded" : "nav-buttons"}>
        <a href="#home" onClick={() => {handleExpand(false)}} className="nav-button">Home</a>
        <a href="#about" onClick={() => {handleExpand(false)}} className="nav-button">About</a>
        <a href="#experiences" onClick={() => {handleExpand(false)}} className="nav-button">Experience</a>
        <a href="#contact" onClick={() => {handleExpand(false)}} className="nav-button">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;