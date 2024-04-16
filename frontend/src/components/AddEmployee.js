import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddEmployee = () => {
  const navigate = useNavigate();
    const[empName,setEmpName] = useState("");
    const[empId,setEmpId] = useState("");
    const[empSalary,setEmpSalary] = useState("");
    const handleEmpName = (e)=>{
       setEmpName(e.target.value);
    }


     const handleEmpId = (e)=>{
        setEmpId(e.target.value);
     }

     const handleEmpSalary = (e)=>{
        setEmpSalary(e.target.value);
     }

     const handleSubmit = async(e)=>{
      e.preventDefault();
        const response = await axios.post('https://hrm-omega.vercel.app/addEmployee',{
            empName,
            empId,
            empSalary
        })
        if(response.status===200){
          
            alert("new Employee added successfully");
            navigate('/empList');
          }
          else{
           alert("please enter unique id of the employees");
          }
     }
  return (
    <div className='container'>
        <h1 className='text-center'>Add New Employee in The Organization</h1>
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter  Employee  Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='empName'  onChange={handleEmpName} value={empName} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Employee Id</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='empId'  onChange={handleEmpId} value={empId}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Employee salary</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='empSalary'  onChange={handleEmpSalary} value={empSalary} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
</div>
  )
}

export default AddEmployee
