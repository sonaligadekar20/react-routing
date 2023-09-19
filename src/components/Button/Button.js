import "./Button.css";

export default function Button({text}){
    return <button className="btn">{text}</button>
}

export function ProductButton({productbtn}){
  return <button className="btn-product">{productbtn}</button>                                                                                                          
    
}

