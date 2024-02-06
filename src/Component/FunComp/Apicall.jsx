import React, { useEffect, useState } from "react";
import CardComp from "../Common/CardComp";

const Apicall = ()=>{
    const[func, setfunc]= useState([])
    
    useEffect(()=>{
        handleadd()
    },[])


    const handleadd= async()=>{
        const response= await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setfunc(data)
    }

    return(
        <div className="container">
            <div className="row">
            {console.log(func.find((da)=>da.price>98),"jhdshcbdge")}
            {func.filter((da)=>da.price>60).map((da,i)=>(
                <div key={i} className="col-4 mt-3">
                    
                    <CardComp comp1={da.title} comp2={da.price} comp3={da.image}/>
                </div>
            ))}


            </div>

        </div>
    )
}
export default Apicall