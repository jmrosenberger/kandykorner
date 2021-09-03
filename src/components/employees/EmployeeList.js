import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"
import "./Employee.css"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeLocations, setLocation] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const employeeLocations = employees.map(employee => employee.location.name)
        setLocation(employeeLocations.join(", "))

    }, [employees])


    const terminateEmployee = (id) => {
        fetch(`http://localhost:3749/employees/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getAllEmployees()
                    .then((employees) => {
                        changeEmployee(employees)
                    })
            })
    }


    return (
        <>
            <div>
                <button className="hireButton" onClick={() => history.push("/employees/create")}>Hire Employee</button>

            </div>
            <div className="heading"><u><b>
                Employees:</b></u>

            </div>
            {
                employees.map(
                    (employee) => {
                        return <div key={employee.id} className="employee employee__list">
                            <p key={`employee--${employee.id}`}>
                               <Link to={`/employees/${employee.id}`}> {employee.name} - {employee.location.name}</Link>
                                <button key={employee.id} className="employee employee__terminate"
                                    onClick={() => {
                                        terminateEmployee(employee.id)
                                    }}> 🔫 Terminate Employee
                                </button>
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}
