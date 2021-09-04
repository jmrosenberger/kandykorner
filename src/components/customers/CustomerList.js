import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )

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
