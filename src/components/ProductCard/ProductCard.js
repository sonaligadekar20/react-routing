import "./ProductCard.css";
import { useState,useEffect } from "react";

export default function ProductCard({ image, title }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  
  useEffect(()=>{
    console.log(`Count is ${count} now!`)
  }, [count]) 

  return (
    <>
      <div className='productcard-container'>

        <div>
          <img className="productimage" src={image} alt="productimages" />
        </div>

        <p className='producttitle'> {title}</p>
        <br />

        <div className="btn-product1">
          <button className="onclick-btn" onClick={increaseCount}>+</button>
          <span style={{ padding: '20px', fontWeight: 'bold' }}>{count}</span>
          <button className="onclick-btn" onClick={decreaseCount}>-</button>
          <button></button>
        </div>
        </div>
    </>
  )
}










        {/* <div className="btn-product1" >
         < ProductButton productbtn= "+" onClick={increaseCount}/>
         <span style={{padding:'20px', fontWeight:'bold'}}>{count}</span>
          <ProductButton productbtn= "-" onClick={decreaseCount}/>
          <br/><br/>
          </div> */}

     