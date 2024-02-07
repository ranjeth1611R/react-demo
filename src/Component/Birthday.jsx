import React, { useState } from "react";
import "./birthday.css"

const birthday= ()=>{
    let[data, setdata]= useState([

        {
      
          id: 1,
      
          name: "ranjith",
      
          age: 29,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      
        },
      
        {
      
          id: 2,
      
          name: 'Hester Hogan',
      
          age: 32,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      
        },
      
        {
      
          id: 3,
      
          name: 'Larry Little',
      
          age: 36,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      
        },
      
        {
      
          id: 4,
      
          name: 'Sean Walsh',
      
          age: 34,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      
        },
      
        {
      
          id: 5,
      
          name: 'Lola Gardner',
      
          age: 29,
      
          image:
      
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      
        },
       
      
      ])
      const handleremove=()=>{
        setdata([])
      }
    return(
        <div className="full">
            <main className="whitepg">
            <h1>{data.length} Birthdays Today</h1>
            {data.map((zoro,i)=>(
                <div key={i}>

                    <img src={zoro.image} width="80px" height="80px" className="photo"/>
                    <div className="rio">
                    <h2>{zoro.name}</h2>
                    <p>{zoro.age} years ago</p>
                    </div>
                    
                </div>
                ))}
             <button onClick={handleremove} className="btn">clear all</button>
            </main>
           
        </div>
    )
}
export default birthday