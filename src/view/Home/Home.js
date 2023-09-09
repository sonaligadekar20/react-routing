import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";


export default function Home() {
    return (
        <>
            <Navbar />
            <br/>
            <div className="Container">
                <h1>Home</h1>
            </div>
            <br/>
            <Button text={"Click here for more information"}/>
        </>
    )

}