import React from "react"
// import { CustomerList } from "./customers/CustomerList.js"
// import { EmployeeList } from "./employees/EmployeeList.js"
// import { TicketList } from "./serviceTickets/TicketList.js"

 // ------  || THIS MODULE IS FOR DETERMINING WHAT ORDER EVERYTHING RENDERS ||  ----- //
// ------   ||    IN HTML. ALL FUNCTIONALITY SHOULD GO IN OTHER MODULES.    || ----- //


export const KandyKorner = () => {
    
    return (
        <>
        <h1>Kandy Korner</h1>
        <h2>Customer List</h2>
        {/* <CustomerList /> */}
        <h2>Employee List</h2>
        {/* <EmployeeList /> */}
        <h2>Service Tickets</h2>
        {/* <TicketList /> */}
        </>
    )
}
