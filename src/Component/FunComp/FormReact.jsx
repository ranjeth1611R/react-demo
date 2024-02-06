import React, { useState } from "react";

function FormReact(){
    const[name,setname]= useState("")
    const[age,setage]= useState("")
    const[email,setemail]= useState("")
    
    const[ishow,setishow]= useState(true)
    const callishow=(e)=>{
        e.preventDefault()
        setishow(false)
    }

    return(
        <div>
        {ishow?
        <form>
            <h1>Register Form</h1>

            <label>Name</label>
            <input placeholder="Enter your name" onChange={(e)=>setname(e.target.value)}/><br/><br/>

            
            <label>Age</label>
            <input placeholder="Enter your age" onChange={(e)=>setage(e.target.value)}/><br/><br/>

            
            <label>Email</label>
            <input placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)}/><br/><br/>

            <button onClick={callishow}>Submit</button>
        </form>: <h3>Your response is saved</h3>
        }

            {!ishow && <div>
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <h3>Email:{email}</h3>
            </div>}
        </div>
    )
}
export default FormReact