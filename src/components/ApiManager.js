
export const getAllOrders = () => {
    return fetch ("http://localhost:3749/orders/?_expand=product&_expand=customer")
    .then(response => response.json())
}