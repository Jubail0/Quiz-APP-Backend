const Questions = require('../schema/questionsSchema');



const getQuestionsApi = async(req,res)=>{
    try {
        const questions = await Questions.find()
        if(questions) {
            return res.status(200).json({questions,success:true})

        }
        
    } catch (error) {
        console.log(error)
    }


}



module.exports = getQuestionsApi