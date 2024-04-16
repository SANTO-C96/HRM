const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb://localhost:27017/HRM').then(
        ()=>{
            console.log("Mongodb Connected");
        }
    )
    .catch(()=>{
        console.log("Mongo db Eroor");
    })
}

module.exports ={
    connect
}