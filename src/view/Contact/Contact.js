import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

export default function Contact() {
    return(
        <>
        <Navbar/>
        
        <div className="Container1">
            <h2>Name: Sonali Gadekar</h2>
            <br/>
            <h3>Email Id: sonaliygadekar@gmail.com</h3>
            <br/>
            <h3>Mobile No: 9767973193</h3>
           
        </div>
        <br/>
        <Button text={"Contact Me"}/>

        </>
    
    )
  
}