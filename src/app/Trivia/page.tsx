
"use client"
import { useState } from "react"
import { dbAnswers } from "./db"
import { arrayBuffer } from "stream/consumers"


export default function Guessing_game(){
    const questions =[""]
    const answers = [[""]]
    const [currentQuestion,setCurrentQuestion]  = useState("whats the tallest building in the world")
    const [selectedAnswer, setSelectedAnswer] = useState(1);
    let indexOfQuestion = 0
    let indexOfAnswer = 0

    let e = 1
    const [answer1,setAnswer1] = useState(dbAnswers[0].answer1.answer)
    const [answer2,setAnswer2] = useState(dbAnswers[0].answer2.answer)
    const [answer3,setAnswer3] = useState(dbAnswers[0].answer3.answer)
    const [answer4,setAnswer4] = useState(dbAnswers[0].answer4.answer)
    const [currentAnswer,setCurrentAnswer]= useState(dbAnswers[0].correctAnswer)
    const handleCorrectAnswerChange = (callBackFn: () => any) => {callBackFn()}
    
    const handleQuestionChange = () =>{
        let ChangeAnswerAndQuestion = ()=>{
            setCurrentAnswer (()=>{
            let newCurrentAnswer= dbAnswers[e].correctAnswer
            e++
            return newCurrentAnswer

            })
            setAnswer1 (()=>{
                let newAnswer1Value = dbAnswers[indexOfAnswer].answer1.answer
                indexOfAnswer++
                return newAnswer1Value
            })
            setAnswer2(()=>{
                let newAnswer2Value = dbAnswers[indexOfAnswer].answer2.answer
                return newAnswer2Value
            })
            setAnswer3(()=>{
                let newAnswer3Value = dbAnswers[indexOfAnswer].answer3.answer
                return newAnswer3Value
            })
            setAnswer4(()=>{
                let newAnswer4Value = dbAnswers[indexOfAnswer].answer4.answer
                return newAnswer4Value
            })
            setCurrentQuestion(()=>{
                let newQuestion = questions[indexOfQuestion]
                indexOfQuestion++
                return newQuestion
            })}
    }

    return(

        <div>
        <header className="flex justify-center items-center">
            <h1 className="text-5xl text-strong">{currentQuestion}</h1>
        </header>
        <hr />
        <div>
            <table>
                <tr>
                    <td><button>{answer1}</button></td>
                    <td><button>{answer2}</button></td>
                </tr>
                <tr>
                    <td><button>{answer3}</button></td>
                    <tr><button>{answer4}</button></tr>
                </tr>
            </table>
        <button onClick={handleQuestionChange}>next question</button>

        <h1>{currentAnswer}</h1>

        {answer1.id === selectedAnswer && (

        <h1>MOSTRAR QUE ACERTOU</h1>
        )}
        <button onClick={() => console.log(dbAnswers[0].answer1)}>teste</button>
        </div>
        </div>
    )
}