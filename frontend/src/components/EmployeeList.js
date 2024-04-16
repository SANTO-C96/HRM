import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch('https://hrm-api-zeta.vercel.app/getEmployee')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e)=>{
      e.preventDefault();
      navigate('/addEmployee');
   }
  
    return (
      <div className="table-responsive">
        <h2 className='text-center'>Employee Table List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Emp Name</th>
              <th>Emp Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.empid}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.empSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add New Employee</button>
        <br />
        <br />
        <h5 className='text-center'><a href="/">Go to Logged in</a></h5>
      </div>
    );
}

export default EmployeeList
