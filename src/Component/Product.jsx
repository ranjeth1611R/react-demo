import React, { useState } from "react"

function Product(){
    const[count, setcount]= useState(0)
    const handleadd=()=>{
        setcount(count+1)
    }
    const handle=()=>{
        setcount(count-1)
    }
    return(
        <>
        <h1>Javascript</h1>
        <h2>React+{count}</h2>
        <button onClick={handleadd}>add</button>
        </>
    )

}
export default Product