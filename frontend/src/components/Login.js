import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
     const handleEmail = (e)=>{
        setEmail(e.target.value);
     }

     const handlePassword = (e)=>{
        setPassword(e.target.value);
     }

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post('https://hrm-api-zeta.vercel.app/login', {
          email,
          password
        });
    
        if (response.status === 200) {
          alert("You are logged in");
          navigate('/empList');
        } else {
          alert("Invalid credentials. Please log in with correct credentials.");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Invalid credentials. Please log in with correct credentials.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      }
    }
    
  return (
    <div className='container'>
        <h1 className='text-center'>Login Page for HR Profile</h1>
        <form>
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
  <h5 className='text-center'><a href="/signup">Please  Signup Before Logged in</a></h5>
</form>
</div>
  )
}

export default Login
