import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:3749/locations")
            .then(response => response.json())
            .then((data) => {
                setLocations(data)
            })
        },
        []
    )

    return (
        <>
        
        {
            locations.map(
                (location) => {
                    return <h4 key={`location--${location.id}`}>{location.name} - {location.address}</h4>
                }
            )
        }
        </>
    )
}