import "./Home.scss"
import WavingHande from "../../assets/waving-hand.svg"
import Profile from "../../assets/profile.png"

const Home = () => {
  return (
    <div id="home" className="home">
      <img className="profile" src={Profile} alt="" />
      <div className="head-info">
        <h1>Fullstack Developer</h1>
        <h2>Frontend expert</h2>
      </div>
      <div className="description">
        <img className="icon" src={WavingHande} alt=""/>
        <p>Hi, I'm Sebastian a <span>passionate Web Developer</span> based in Buenos Aires, Argentina</p>
      </div>
    </div>
  )
}

export default Home