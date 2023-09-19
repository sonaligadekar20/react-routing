import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";


export default function About() {
  return (
    <>
      <Navbar />

        <div className="Container">
          <h2>I'am Sonali Gadekar</h2>
          <p className="info"> I have completed my graduation in computer science engineering. I am very passionate about improving my coding
            skills & developing applications & websites. I build websites using HTML, CSS, Bootstrap & JS. Working for
            myself to improve my skills.</p>
            <br/><br/>
            <Button text={"About Me"} /> 

        </div>
       

    
      
    </>
  )

}