import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { getAllLocations } from "../ApiManager";
import "./Employee.css"


export const EmployeeForm = () => {

    const [locations, selectLocation] = useState([])

    useEffect(
        () => {
            getAllLocations()
                .then((data) => {
                    selectLocation(data)
                })
        },
        []
    )

    const [employee, updateEmployee] = useState({
        name: "",
        locationId: "",
        address: "",
        email: "",
        cellNumber: "",
        manager: Boolean,
        fullTime: Boolean,
        hourlyRate: null
    });

    const history = useHistory()


    const hireEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            address: employee.address,
            email: employee.email,
            cellNumber: employee.cellNumber,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
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

    return (
        <form className="hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
                <div className="form__group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form__control"
                        placeholder="Full name"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="address">Address:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.address = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form__control"
                        placeholder="Home Address"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.email = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form__control"
                        placeholder="Email Address"
                        
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="phone">Contact Phone#:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.cellNumber = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        max="10"
                        required autoFocus
                        type="number"
                        className="form__control"
                        placeholder="--- --- ----"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="location">Location:</label>
                    <select
                        onChange={
                            (event) => {
                                const copy = { ...employee }
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
                <div className="form__group manager__boolean">
                    <label htmlFor="managerBoolean">Manager:  </label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.manager = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        
                        value="hi"
                        type="checkbox"
                        className="form__control"
                    />

                </div>
                <div className="form__group">
                    <label htmlFor="fullTimeSelection">Full-Time:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.fullTime = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        
                        value="hello"
                        type="checkbox"
                        className="form__control"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="payRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.hourlyRate = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form__control"
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