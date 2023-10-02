
"use client"
import { useState } from "react"
import { dbAnswers, dbQuestions } from "./db"
import { arrayBuffer } from "stream/consumers"


export default function Guessing_game(){
    let e = 1
    const [currentQuestion,setCurrentQuestion]  = useState(dbQuestions[0])
    const [selectedAnswer, setSelectedAnswer] = useState("9");
    const [answer1,setAnswer1] = useState(dbAnswers[0].answer1.answer)
    const [answer2,setAnswer2] = useState(dbAnswers[0].answer2.answer)
    const [answer3,setAnswer3] = useState(dbAnswers[0].answer3.answer)
    const [answer4,setAnswer4] = useState(dbAnswers[0].answer4.answer)
    const [currentAnswer,setCurrentAnswer]= useState("0")
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
    const [isAnswerWrong, setIsAnswerWrong] = useState(false)
    const handleDisplayOfResult = (callbackFn: () => any) => {
        callbackFn();
        };
    


        const defineCurrentAnswerAsId0 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "0"
            return newCurrentAnswer
        })
        handleDisplayOfResult (()=>{
            if (currentAnswer === selectedAnswer) {
                console.log(isAnswerCorrect)
                setIsAnswerCorrect(()=>{
                return true
                })
                console.log(isAnswerCorrect)
            }
            if (currentAnswer != selectedAnswer) {
                console.log(isAnswerWrong)
                setIsAnswerWrong(()=>{
                    return true
                })
                console.log(isAnswerWrong)
            }
        })}
        const defineCurrentAnswerAsId1 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "1"
            return newCurrentAnswer
        })
        handleDisplayOfResult (()=>{
            if (currentAnswer === selectedAnswer) {
                console.log(isAnswerCorrect)
                setIsAnswerCorrect(()=>{
                return true
                })
                console.log(isAnswerCorrect)
            }
            if (currentAnswer != selectedAnswer) {
                console.log(isAnswerWrong)
                setIsAnswerWrong(()=>{
                    return true
                })
                console.log(isAnswerWrong)
            }
        })}
    
        const defineCurrentAnswerAsId2 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "2"
            return newCurrentAnswer
        })
        handleDisplayOfResult (()=>{
            if (currentAnswer === selectedAnswer) {
                console.log(isAnswerCorrect)
                setIsAnswerCorrect(()=>{
                return true
                })
                console.log(isAnswerCorrect)
            }
            if (currentAnswer != selectedAnswer) {
                console.log(isAnswerWrong)
                setIsAnswerWrong(()=>{
                    return true
                })
                console.log(isAnswerWrong)
            }
        })}
    
        const defineCurrentAnswerAsId3 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "3"
            return newCurrentAnswer
        })
        handleDisplayOfResult (()=>{
            if (currentAnswer === selectedAnswer) {
                console.log(isAnswerCorrect)
                setIsAnswerCorrect(()=>{
                return true
                })
                console.log(isAnswerCorrect)
            }
            if (currentAnswer != selectedAnswer) {
                console.log(isAnswerWrong)
                setIsAnswerWrong(()=>{
                    return true
                })
                console.log(isAnswerWrong)
            }
        })}

    const handleQuestionChange = () =>{
            setCurrentAnswer (() => {
            let newCurrentAnswer= dbAnswers[e].correctAnswer
            c
            return newCurrentAnswer
            })
            setAnswer1 (()=>{
                let newAnswer1Value = dbAnswers[e].answer1.answer
                return newAnswer1Value
            })
            setAnswer2(()=>{
                let newAnswer2Value = dbAnswers[e].answer2.answer
                return newAnswer2Value
            })
            setAnswer3(()=>{
                let newAnswer3Value = dbAnswers[e].answer3.answer
                return newAnswer3Value
            })
            setAnswer4(()=>{
                let newAnswer4Value = dbAnswers[e].answer4.answer
                return newAnswer4Value
            })
            setCurrentQuestion(() => {
                let newQuestion = dbQuestions[e]
                return newQuestion
            })
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
                    <td><button onClick={defineCurrentAnswerAsId0}>{answer1}</button></td>
                    <td><button onClick={defineCurrentAnswerAsId1}>{answer2}</button></td>
                </tr>
                <tr>
                    <td><button onClick={defineCurrentAnswerAsId2}>{answer3}</button></td>
                    <tr><button onClick={defineCurrentAnswerAsId3}>{answer4}</button></tr>
                </tr>
            </table>
        <button onClick={handleQuestionChange}>next question</button>

        {isAnswerCorrect && (
            <h1>You're Correct</h1>
        ) }

        {isAnswerWrong &&(
            <h1>you're wrong</h1>
        )}

        <h1>{currentAnswer}</h1>

        <button onClick={() => console.log(dbAnswers[0].answer1)}>teste</button>
        </div>
        </div>
    )
}