import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




export const Employee = () => {

    const [employee, updateEmployeeDetails] = useState([])

    const { employeeId } = useParams()


    useEffect(
        () => {
            return fetch(`http://localhost:3749/employees/${employeeId}?_expand=location`)
            .then(response => response.json())
            .then((data) => {
                updateEmployeeDetails(data)
            })
        },
        [employeeId]
    )


    return (
        <>
            <div className="employee__details">
                <h3 className="employee__heading">Employee Details</h3>
                        <div className="employee__name details"><b>Name</b>: {employee.name}</div>
                        <div className="employee__address details"><b>Address</b>: {employee.address}</div>
                        <div className="employee__email details"><b>Email</b>: {employee.email}</div>
                        <div className="employee__cellNumber details"><b>Contact#</b>: {employee.cellNumber}</div>
                        <div className="employee__locationName details"><b>Location</b>: {employee.locationId}</div>
                        <div className="employee__manager details"><b>Manager?</b>: {employee.manager}</div>
                        <div className="employee__fullTime details"><b>Full-Time?</b>: {employee.fullTime}</div>
                        <div className="employee__hourlyRate details"><b>Hourly Rate</b>: {employee.hourlyRate}</div>
                        <div className="employee__dateHired details"><b>Date Hired</b>: {employee.dateHired}</div>
                
            </div>
        </>
    )
}

