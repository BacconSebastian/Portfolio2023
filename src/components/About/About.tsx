import "./Abouts.scss"

const About = () => {

  return (
    <div id="about" className="about">
      <h2 className="title">About me</h2>
      <h2>I'm a dedicated <span>Web Developer</span> based in Argentina.</h2>
      <div className="about-description">
        <div className="paragraph">
          <div className="marker"></div>
          <p>I am a junior advanced web developer <span>since August 2022</span></p>
        </div>
        <div className="paragraph">
          <div className="marker"></div>
          <p>
            I started my career in 2020, studying both on my own and formally
            at the <span>National University of General Sarmiento</span> (Arg).
          </p>
        </div>
        <div className="paragraph">
          <div className="marker"></div>
          <p>
            In 2022 I started doing freelance work of not much importance, until in
            August of the same year I had my <span>first formal job</span> opportunity.
          </p>
        </div>
        <div className="paragraph">
          <div className="marker"></div>
          <p>
            At that moment, my professional career began, where to this day <span>I do not stop
            learning</span> more than I expected.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About