import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const Signup = () => {
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const handleFirstName = (e)=>{
       setFirstName(e.target.value);
    }

    const handleLastName = (e)=>{
        setLastName(e.target.value);
     }

     const handleEmail = (e)=>{
        setEmail(e.target.value);
     }

     const handlePassword = (e)=>{
        setPassword(e.target.value);
     }

     const handleSubmit = async(e)=>{
      e.preventDefault();
        const response = await axios.post('https://hrm-api-zeta.vercel.app/createHrProfile',{
            firstName,
            lastName,
            email,
            password
        })
        if(response.status===200){
            alert("Your HR PROFILE Created successfully");
            navigate('/empList');
          }
          else{
           alert("Your HR PROFILE not  Created successfully");
          }
     }
  return (
    <div className='container'>
        <h1 className='text-center'>Signup Page for HR Profile</h1>
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter  Your  FirstName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='firstName'  onChange={handleFirstName} value={firstName} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your lastName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='lastName'  onChange={handleLastName} value={lastName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  onChange={handleEmail} value={email} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password'  onChange={handlePassword} value={password}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  <br />
  <br />
  <h5 className='text-center'><a href="/">If Alreday Registered Go To Logged in page</a></h5>
</form>
</div>
  )
}

export default Signup
