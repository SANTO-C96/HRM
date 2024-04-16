import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <div className="container-flex">
    <Routes>
     <Route exact path="/" element={<Login/>}/> 
     <Route exact path="/signup" element={<Signup/>}/> 
     <Route exact path="/empList" element={<EmployeeList/>}/>
     <Route exact path="/addEmployee" element={<AddEmployee/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
