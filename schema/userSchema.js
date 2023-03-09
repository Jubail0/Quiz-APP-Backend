const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const userSchema = new Schema({
username:{
    type:String,
    required:true
}
},{
    timestamps:true
})

const Users = new model('Users',userSchema);

module.exports = Users