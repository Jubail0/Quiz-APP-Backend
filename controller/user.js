const Users = require('../schema/userSchema');


const addUserName = (req, res) => {

    const userName = req.body.name; 
    const newUser = new Users({username: userName});

    newUser.save((err) => {
        if (err) {
            console.log(err)
        } else {
            return res.status(200).json({success: true, newUser})
        }

    })


}

module.exports = addUserName
