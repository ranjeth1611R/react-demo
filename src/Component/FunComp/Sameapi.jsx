import React, { useEffect, useState } from "react";

function Sameapi(){
    const[suma, setsuma]= useState([])

    useEffect(()=>{
        handleadd()
    },[])

    const handleadd=async()=>{
        const func= await fetch('https://jsonplaceholder.typicode.com/todos')
        // const docum= await fetch('https://fakestoreapi.com/products')
        const data= await func.json()
        setsuma(data)
    }
    return(
        <div>
            {suma.map((todo,i)=>(
                <div key={i}>
                    <Sameapi/>
                    <h1>{todo.title}</h1>
                    {/* <img src={todo.image}/> */}

                </div>
            ))}

        </div>

    )
}
export default Sameapi