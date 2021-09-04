
export const getAllOrders = () => {
    return fetch ("http://localhost:3749/orders/?_expand=product&_expand=customer")
    .then(response => response.json())
}

export const getAllProducts = () => {
    return fetch ("http://localhost:3749/products?_expand=productTypes&_sort=productTypesId")
    .then(response => response.json())
}

export const getAllEmployees = () => {
    return fetch ("http://localhost:3749/employees?_expand=location")
    .then(response => response.json())
}

export const getAllCustomers = () => {
    return fetch ("http://localhost:3749/customers")
    .then(response => response.json())
}

export const getAllLocations = () => {
    return fetch ("http://localhost:3749/locations")
    .then(response => response.json())
}

export const getAllPurchases = () => {
    return fetch ("http://localhost:3749/purchases?_expand=customer&_expand=order")
    .then(response => response.json())
}