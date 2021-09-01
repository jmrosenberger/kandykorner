import React from "react"
// import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

 // ------  || THIS MODULE IS FOR DETERMINING WHAT ORDER EVERYTHING RENDERS ||  ----- //
// ------   ||    IN HTML. ALL FUNCTIONALITY SHOULD GO IN OTHER MODULES.    || ----- //


export const KandyKorner = () => {
    
    return (
        <>
        <NavBar />
        
        <ApplicationViews />
        </>
    )
}
