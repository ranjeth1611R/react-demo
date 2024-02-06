import React, { useEffect, useState } from "react";

function MountComp(){

    const[fact, setfact]= useState(1)
    const[count, setcount]= useState(0)

    useEffect(()=>{
    setfact("function")
    console.log(123)
    localStorage.setItem("arun","value")
    return()=>{
        console.log("clear")
    }
},[fact])

const handleadd= ()=>{
    setcount(count+1)
}


    return(
        <div>
            <h1>{fact}</h1>  
            {count}
            <button onClick={handleadd}>add</button>
        </div>

    )
}
export default MountComp;