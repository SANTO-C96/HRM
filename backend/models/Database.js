const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb+srv://santosh:Qp925uuMPRUFM7fV@cluster0.9mvwh8s.mongodb.net/HRM?retryWrites=true&w=majority&appName=Cluster0').then(
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
