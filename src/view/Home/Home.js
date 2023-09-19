import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {

    return (
        <>
            <Navbar />
            <br />
            <div className="Container">
                <h1>Home</h1>
            </div>
            <br />

            <div className="productcard">
                <ProductCard image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690354493/Croma%20Assets/Entertainment/Television/Images/241271_u74sd4.png?tr=w-640"} title={"LG LM562 81.28 cm"} />
                <ProductCard image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664412560/Croma%20Assets/Entertainment/Television/Images/251190_0_pwbddi.png?tr=w-640"} title={"SAMSUNG Series 4 80 cm"} />
                <ProductCard image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680244471/Croma%20Assets/Entertainment/Television/Images/259207_ej0hbk.png?tr=w-400"} title={"Mi 5A 80 cm (32 inch) "} />
            </div>

            <br /><br /><br /><br /><br />
            <Button text={"Click here for more information"} />
        </>
    )

}