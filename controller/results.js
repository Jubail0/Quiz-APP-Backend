const Questions = require('../schema/questionsSchema');
const Results = require('../schema/resultSchema');
const Users = require('../schema/userSchema');

const calculateResult = async (req, res) => {

    try {
        const userId = req.params.id;
        const questionsSolvedByUser = req.body.questionsSolvedByUser;
        let attempts = 0; 

        let pointsPerQuestion = 10;
        let pointsEarned = 0;
        let correctAnswers = 0;
        let wrongAnswers = 0 ;
        let isPassed;

        const allQuestions = await Questions.find({});

        if (allQuestions) {

            allQuestions.forEach((obj1) => {
                questionsSolvedByUser?.forEach((obj2) => {
                    if (obj1.question === obj2.question) {
                        if (obj1.correctAnswer === obj2.selectedAnswer) {
                            correctAnswers++
                        }else{
                            wrongAnswers ++
                        }
                    }
                })
            })

           

            pointsEarned = (pointsPerQuestion * correctAnswers)
            attempts = correctAnswers + wrongAnswers;

            

            if (pointsEarned >= 20) {
                isPassed = true
            } else {
                isPassed = false
            }

            const username = await Users.findById({_id:userId})
            const newResult = new Results({userId,username: username && username.username, attempts, pointsEarned, isPassed,wrongAnswers,correctAnswers})

            const resultAdded = await newResult.save();

            if (resultAdded) {
                return res.status(200).json({resultAdded, success: true})
            }

        }

    } catch (error) {
        console.log(error)
    }

}

const showAllResult = async (req, res) => {
    try {
        const allResults = await Results.find({})
        .populate("userId")
        .limit(5)
        .sort({createdAt:-1})
        ;

        if (allResults) {
            return res.status(200).json({allResults})
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    calculateResult,
    showAllResult
}
