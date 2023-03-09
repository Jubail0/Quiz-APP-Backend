const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const questionsSchema = new Schema({
question:{
    type:String,
    required:true
},
options:Array,

correctAnswer:{
    type:String,
    required:true
}

},{
    timestamps:true
})


const Questions =  model('Questions',questionsSchema);



module.exports = Questions