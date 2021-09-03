import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllOrders } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])
    // const [employeeLocations, setLocation] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            getAllOrders()
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )

    // useEffect(() => {
    //     const employeeLocations = employees.map(employee => employee.location.name)
    //          setLocation(employeeLocations.join(", "))
            
    //     }, [employees])


    return (
        <>
            
            <div><u><b>
                Customers:</b></u> 
                
            </div>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>
                    }
                )
            }
        </>
    )
}
