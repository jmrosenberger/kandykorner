import React, { useState, useEffect } from "react";
import { getAllOrders } from "../ApiManager";
import "./Orders.css"




export const Orders = () => {
    const [orders, updateOrders] = useState([])

    useEffect(
        () => {
            getAllOrders()
            .then((orders) => {
                updateOrders(orders)
            })
        },
        []
    )

    const deleteItem = (id) => {
        fetch(`http://localhost:3749/orders/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getAllOrders()
                    .then((orders) => {
                        updateOrders(orders)
                    })
            })
    }


    return (
        <>
            <div>
                <h4><u>My Current Order</u></h4>
                {
                    orders.map(
                        (order) => {
                            if (order.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
                                return <div key={order.id}>
                                <p key={order.id}>
                                <button key={order.id} className="item item__delete"
                                    onClick={() => {
                                        deleteItem(order.id)
                                    }}>Remove Item
                                </button>
                                    {order.product.name} - ${order.product.price}
                                </p>
                            </div>
                            }
                            
                                
                        }
                    )
                }
            </div>
        </>
    )


}