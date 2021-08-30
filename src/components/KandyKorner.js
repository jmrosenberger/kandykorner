import React from "react"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

 // ------  || THIS MODULE IS FOR DETERMINING WHAT ORDER EVERYTHING RENDERS ||  ----- //
// ------   ||    IN HTML. ALL FUNCTIONALITY SHOULD GO IN OTHER MODULES.    || ----- //


export const KandyKorner = () => {
    
    return (
        <>
        <h1>Kandy Korner</h1>
        <h2>Location's</h2>
        <LocationList />
        <h2>Product List</h2>
        <ProductList />
        <h2>Service Tickets</h2>
        {/* <TicketList /> */}
        </>
    )
}
