import { useState } from "react"
import { NavBarProps } from "../../interfaces/components/navbar";

import "./Navbar.scss"
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ setNavValue }: NavBarProps) => {

  const [expanded, setExpanded] = useState<boolean>(false)

  const handleExpand = (expand: boolean) => {
    setExpanded(expand)
  }

  const handleNavValue = (e: any) => {
    setNavValue(e.target.name)
    setExpanded(false)
  }

  return (
    <nav>
      <p className="name">Sebastian Baccon</p>
      
      <div className={expanded ? "hamburguer-icon expanded" : "hamburguer-icon"} onClick={() => handleExpand(true)}></div>
      <button className={expanded ? "close-expanded expanded" : "close-expanded"} onClick={() => handleExpand(false)}><CloseIcon /></button>
      
      <div className={expanded ? "nav-buttons expanded" : "nav-buttons"}>
        <button onClick={(e) => handleNavValue(e)} name="home" className="nav-button">
          Home
        </button>
        <button onClick={(e) => handleNavValue(e)} name="about" className="nav-button">
          About
        </button>
        <button onClick={(e) => handleNavValue(e)} name="experience" className="nav-button">
          Experience
        </button>
        <button onClick={(e) => handleNavValue(e)} name="contact" className="nav-button">
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar;