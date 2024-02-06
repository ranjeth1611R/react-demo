import React,{Component, useState} from "react";
import Birthday from "./Component/birthday"
import Apicall from "./Component/FunComp/Apicall";
import MountComp from "./Component/FunComp/MountComp";
import NavbarComp from "./Component/Common/NavbarComp";
import Sameapi from "./Component/FunComp/Sameapi";
import FormReact from "./Component/FunComp/FormReact";

function App(){
    return(
        <div>
        {/* <NavbarComp/>
        <Birthday/
        <Apicall/>  */}
        <FormReact />
        </div>
    )
}
export default App;