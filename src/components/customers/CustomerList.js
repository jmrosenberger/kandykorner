import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])
    // const [employeeLocations, setLocation] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:3749/customers")
                .then(res => res.json())
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
