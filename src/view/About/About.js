import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";


export default function About() {
  return (
    <>
      <Navbar />
      <br />
      <div className="Container">
        <h1>About Me</h1>

      </div>
      <br />

      <br />
      <div className="Container1">
        <h2>I'am Sonali Gadekar</h2>
        <p className="info"> I have completed my graduation in computer science engineering. I am very passionate about improving my coding
          skills & developing applications & websites. I build websites using HTML, CSS, Bootstrap & JS. Working for
          myself to improve my skills.</p>

      </div>
      <Button text={"About Me"} />
    </>
  )

}