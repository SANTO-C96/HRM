const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./models/Database');
database.connect();
const Signup = require('./models/Signup');
const Employee = require('./models/Employee')
app.use(
    cors(
    {
      origin:["https://vercel.com/santosh-kumar-singhs-projects-fccce6cb/hrm-i7z9"],
      methods: ["POST","GET","PUT","DELETE"],
      credentials: true
   }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.json("Hello From the Server Side Ready for the facilitate HRM facilaties");
});

app.post('/createHrProfile',async(req,res)=>{
    try{
        const{firstName, lastName,email,password} = req.body;

        const user =new Signup({
            firstName,
            lastName,
            email,
            password
        })
       const result = await user.save();

       if(result){
        console.log(result);
        res.status(200).json("hr prfile Created successfully");
       }
    }
    catch(error){
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.post('/login',async(req,res)=>{
  try{
     const {email,password} = req.body;
     const existingUser = await Signup.findOne({email});

     if(!existingUser){
       return  res.status(400).json("please login with correct credentials");
     }
    if(existingUser.password!=password){
       return  res.status(400).json("please login with correct credentials");
    }
    else{
        console.log(existingUser);
       return res.status(200).json("Logged in successfully");
    }

  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
})

app.post('/addEmployee',async(req,res)=>{
    try{
        const{empName,empId,empSalary} = req.body;

        const user =new Employee ({
            empName,
            empId,
            empSalary
        })
       const result = await user.save();

       if(result){
        console.log(result);
        res.status(200).json("Employee added successfully");
       }
    }
    catch(error){
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.get('/getEmployee',async(req,res)=>{
    try{
        const result = await Employee.find(req.query);
        if(result){
          console.log(result);
          res.status(200).json(result);
        }
        else{
          console.log("The Database is empty");
          res.status(400).json(result);
        }
      }
      catch{
          console.log("Internal Server Error");
          res.status(500).json("Internal Server Error");
      }
})

app.put('/update/:id',async(req,res)=>{
    try{
      const response = await Employee.findById({_id:req.params.id});
      if(response){
        const id = req.params.id;
        const newData = req.body;
          const result = await Employee.updateOne({ _id: id }, { $set: newData });
          if(result){
            console.log(result);
            res.status(200).json(result);
          }
          else{
             console.log("Data Not be updated");
             res.status(400).json("Data Not be updated");
          }
      }
      else{
          console.log("data has not present inn the database");
          res.status(400).json("data has not present inn the database");
      }
    }
    catch{
           console.log("Internal Server Error");
          res.status(500).json("Internal Server Error");
    }
  });

  app.delete('/delete/:id',async(req,res)=>{
    try{
      const result = await Employee.deleteOne({_id:req.params.id});
      if(result){
        console.log(result);
        res.status(200).json(result);
      }
      else{
          console.log("data has not present inn the database");
          res.status(400).json("data has not present inn the database");
      }
    }
    catch{
           console.log("Internal Server Error");
          res.status(500).json("Internal Server Error");
    }
});

app.listen(5000,()=>{
    console.log("Server is Running on port Number 5000");
})

