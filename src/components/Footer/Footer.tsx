import "./Footer.scss"
import Linkedin from "../../assets/linkedin.svg"
import Github from "../../assets/github.svg"

const Footer = () => {
  return (
    <footer>
      <p className="mobile">Copyright © 2023.<br/>All rights are reserved</p>
      <p className="web">Copyright © 2023. All rights are reserved</p>
      <div className="social">
        <a href="https://www.linkedin.com/in/bacconsebastian/" target="_blank">
          <img className="icon" src={Linkedin} alt="" />
        </a>
        <a href="https://github.com/BacconSebastian" target="_blank">
          <img className="icon" src={Github} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer