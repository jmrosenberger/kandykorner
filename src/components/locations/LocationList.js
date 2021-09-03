import React, { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    

    useEffect(
        () => {
            getAllLocations()
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