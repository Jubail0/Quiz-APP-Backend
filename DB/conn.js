const mongoose = require('mongoose');
const DB = process.env.DB;


 mongoose.connect(DB).then(()=>{
    console.log("Connection Successfull")
}).catch((error)=>{
    console.log(error);
})