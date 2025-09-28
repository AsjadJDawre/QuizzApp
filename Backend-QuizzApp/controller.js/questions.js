import { Questions } from "../models/questions.js";

export const getQuestions = async (req,res)=>{
    try {
        const questions = await Questions.find({},{text:1,options:1})
        res.status(200).json({questions:questions,
            message:"Question fetched Suceess!!"
        })
        console.log("Questions :: ",  questions?.[2])
    } catch (error) {
        console.error("Error Getting Questions in question.js ::: ",error.message)
    }
}

export const checkResult = async (req,res)=>{
    try {
        const answers = req.body.answers || []
        const allQuestions = await Questions.find({},{correctIndex:1})
        const result = answers.map((a)=>{
            const q= allQuestions.find(q=>q._id.equals(a.id))
            const correctIndex = q?.correctIndex;
            const isCorrect = correctIndex === a.selectedIndex
            return {id:a._id,selectedIndex:a.selectedIndex,correctIndex,isCorrect}
        })
        
        const score= result.filter(r=>r.isCorrect).length
        res.status(200).json({score:score,total:allQuestions.length,result})
    } catch (error) {
        console.error("Error in calculating result in checkresult controller :: ",error.message)
    }
    


}