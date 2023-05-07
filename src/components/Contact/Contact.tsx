import "./Contact.scss"
import Gmail from "../../assets/gmail.svg"
import Linkedin from "../../assets/linkedin.svg"
import Confeti from "../../assets/confeti.svg"
import Confeti2 from "../../assets/confeti2.svg"

const Contact = () => {
  return (
    <div className="contact">
      <h1><img className="icon second" src={Confeti2} alt="" />Contact me!<img className="icon first" src={Confeti} alt="" /></h1>
      <a className="contact-data clickeable" href="mailto:bacconsebastian@gmail.com?subject=We%20are%20hiring&amp;body=" target="_blank">
        <img className="icon" src={Gmail} alt="" />
        <p>bacconsebastian@gmail.com</p>
      </a>
      <a className="contact-data clickeable" href="https://www.linkedin.com/in/bacconsebastian/" target="_blank">
        <img className="icon" src={Linkedin} alt="" />
        <p>BacconSebastian</p>
      </a>
    </div>
  )
}

export default Contact