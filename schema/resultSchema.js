const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const resultSchema = new Schema({
userId:{
    type:String,
    required:true,
    ref:"Users"
},
username:{
    type:String
},
pointsEarned:{
    type:Number
},
attempts:{
    type:Number
},
isPassed:{
    type:Boolean,
    
},
correctAnswers:{
    type:Number
},
wrongAnswers:{
    type:Number
},


},{
    timestamps:true
})

const Results =  model('Results',resultSchema);

module.exports = Results