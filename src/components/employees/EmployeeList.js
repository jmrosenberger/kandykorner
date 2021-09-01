import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeLocations, setLocation] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:3749/employees?_expand=location")
                .then(res => res.json())
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


    return (
        <>
            <div>
        <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

        </div>
            <div><u><b>
                Employees:</b></u> { employees.location }
                
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} - {employee.location.name}</p>
                    }
                )
            }
        </>
    )
}
