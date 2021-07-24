import Button from "./Button";
import React from "react";
import { useParams } from "react-router-dom";


function ItemCount({stock, num, setNum}){
    const { itemsId } = useParams()
    function onAdd(){
        num < stock ? setNum(num + 1) : setNum(num);
    }
    
    function onSub(){
        num > 0 ? setNum(num - 1) : setNum(num);
    }
    function handleChange() {
        setNum(num)
      }
      
    return (
    <div style={{width: "auto", display:itemsId !== undefined ? "inline" : "none"}}>
        <Button text={"Agregar"} width={"6vw"} height={"2.8vw"} border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} onClick={onAdd} display={num === 0  && stock !== 0 ? "inline" : "none" }/>
        <div style={{display: num === 0  ? "none" : "inline-flex", justifyContent: "center"}}>
            <Button text={"-"} width={"2.8vw"} height={"2.8vw"} backgroundColor={"gray"} onClick={onSub}  />
            <input style={{display: num === 0  ? "none" : "block", width: num > 9  ? "2.2vw" : "2vw", fontSize: "1vw"}} type="text" value={num} onChange={handleChange} />
            <Button text={"+"} width={"2.8vw"} height={"2.8vw"} backgroundColor={"gray"} onClick={onAdd} />
        </div>
        <p style={{fontSize: "1.3vw", display: stock === 0  ? "inline-flex" : "none", }}>No hay stock</p>
    </div>
    )
}

export default ItemCount