import React, { useEffect, useState } from "react"
import { getAllPurchases } from "../ApiManager"



export const Purchases = () => {

    const [purchases, addPurchase] = useState({})



    useEffect(
        () => {
            getAllPurchases()
            .then((data) => {
                addPurchase(data)
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
                purchases.map(
                    (purchase) => {
                        if (purchase.customerId === parseInt(localStorage.getItem("kandy_customer")))
                        return <p key={`purchase--${purchase.id}`}>{purchase.datePurchased}</p>
                    }
                )
            }
        </>
    )
}