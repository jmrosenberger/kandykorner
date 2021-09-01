import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";




export const EmployeeForm = () => {

    const [locations, selectLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:3749/locations")
            .then(res => res.json())
            .then((data) => {
                selectLocation(data)
            })
        },
        []
    )

    const [employee, updateEmployee] = useState({
        name: "",
        locationId: "",
        manager: false,
        fullTime: false,
        hourlyRate: null
    });
    
    const history = useHistory()
    

    // const updateOrderState = (propToModify, newValue) => {
    //     const newObject = {...chosenOptions}
    //     newObject[propToModify] = newValue
    //     updateOptions(newObject)
    // }
    

    const hireEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: false,
            fullTime: false,
            hourlyRate: employee.hourlyRate,
            dateHired: Date()
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:3749/employees?_expand=location", fetchOption)
        .then(() => {
            history.push("/employees")
        })
        
    }

    // debugger  
    return (
        <form className="hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select 
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.locationId = parseInt(event.target.value)
                            updateEmployee(copy) 
                        }
                    }
                    required autoFocus
                    >
                    <option value="">Choose Location</option>
                
                    {
                        locations.map(
                            (location) => {
                                return <option key={location.id} value={location.id}>{location.name}</option>
                            }
                        )
                    }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="managerBoolean">Manager:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.manager = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Is this employee a manager?"
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="fullTimeSelection">Full-Time:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.fullTime = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="payRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.hourlyRate = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={hireEmployee}>
                Finish Hiring
            </button>
        </form>
        
    )
}