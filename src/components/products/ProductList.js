import React, { useEffect, useState } from "react"




export const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:3749/products?_expand=productTypes")
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
            })
        },
        []
    )

    return (
        <>
        
        {
            products.map(
                (product) => {
                    return <h4 key={`product--${product.id}`}>
                        <b><u>{product.productTypes.category}</u></b><br></br> Item # 
                        {product.id}   
                        - {product.name}<br></br>
                       price - ${product.price}</h4>
                }
            )
        }
        </>
    )
}