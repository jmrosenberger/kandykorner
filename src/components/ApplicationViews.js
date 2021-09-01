import React from "react"
import { Route } from "react-router-dom"
// import { CustomerList } from "./customers/CustomerList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"



export const ApplicationViews = () => {
    return (
        <>
            <h1>Kandy Korner</h1>
            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
            
        </>
    )
}

