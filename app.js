const express = require('express');
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set("strictQuery",true);

dotenv.config({path:'./config.env'})
app.use(cors())
app.use(express.json())
require('./DB/conn');

app.use(require('./routes/users'))
app.use(require('./routes/questions'))
app.use(require('./routes/result'))

const PORT = process.env.PORT || 5000;




app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})