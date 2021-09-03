import React, { useEffect, useState } from "react"
import { getAllProducts } from "../ApiManager"
import { useHistory } from "react-router-dom"




export const ProductList = () => {
    const [products, setProducts] = useState([])

    const history = useHistory()

    useEffect(
        () => {
                getAllProducts()
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    const addProduct = (event) => {
        event.preventDefault()
        const newOrder = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productId: parseInt(event.target.value)
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        }
        return fetch("http://localhost:3749/orders", fetchOption)
        .then(() => {
            history.push("/products")
        })
    }

    return (
        <>

            {
                products.map(
                    (product) => {
                        return <div key={product.id}>
                            <h4 key={`product--${product.id}`} value={product.id}>
                                <b><u>{product.productTypes.category}</u></b><br /> Item #
                                {product.id}
                                - {product.name}<br></br>
                                price - ${product.price}</h4>
                            <button className="btn btn-primary" value={product.id} onClick={ addProduct }>
                                Add To Cart
                            </button>
                        </div>
                    }
                )
            }
        </>
    )
}