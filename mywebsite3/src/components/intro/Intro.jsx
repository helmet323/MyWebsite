import "./intro.scss";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Benny Su</h1>
          <h3>
            Freelance{'\u00A0'}
            <Typewriter
              options={{
                strings: ["Developer", "Designer", "Content Creator"],
                autoStart: true,
                loop: true,
                deleteSpeed: 60,
                delay: 75,
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
