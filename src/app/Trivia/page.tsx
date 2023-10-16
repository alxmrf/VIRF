
"use client"
import { use, useState } from "react"
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
    const [nextQuestionButtonValue, setNextQuestionButtonValue] =useState(false)
    const [button1Clicked, setButton1Clicked] = useState(false)
    const [button2Clicked, setButton2Clicked] = useState(false)
    const [button3Clicked, setButton3Clicked] = useState(false)
    const [button4Clicked, setButton4Clicked] = useState(false)
    const handleDisplayOfResult = (callbackFn: () => any) => {
        callbackFn();
        };
    


        const handleNextQuestionButton = (callbackFn: ()=> any ) => {
            callbackFn
        }
        const handleResult = ()  =>{
            handleDisplayOfResult (()=>{
                if (currentAnswer === selectedAnswer) {
                    console.log(currentAnswer+selectedAnswer)
                    console.log(isAnswerCorrect)
                    setIsAnswerCorrect(()=>{
                    return true
                    })
                    console.log(isAnswerCorrect)
                }
                if (currentAnswer != selectedAnswer) {
                    console.log(currentAnswer+selectedAnswer)
                    console.log(isAnswerWrong)
                    setIsAnswerWrong(()=>{
                        return true
                    })
                    console.log(isAnswerWrong)
                }
            })
            setNextQuestionButtonValue (()=>{
                return true
            })
        }
        const defineCurrentAnswerAsId0 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "0"
            return newCurrentAnswer
        })
            setButton1Clicked(()=>{
                return true
            })
            setButton2Clicked(()=>{
                return false
            })
            setButton3Clicked(()=>{
                return false
            })
            setButton4Clicked(()=>{
                return false
            }) }
        const defineCurrentAnswerAsId1 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "1"
            return newCurrentAnswer
            })
            setButton1Clicked(()=>{
                return false
            })
            setButton2Clicked(()=>{
                return true
            })
            setButton3Clicked(()=>{
                return false
            })
            setButton4Clicked(()=>{
                return false
            }) }
    
        const defineCurrentAnswerAsId2 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "2"
            return newCurrentAnswer
            })
            setButton1Clicked(()=>{
                return false
            })
            setButton2Clicked(()=>{
                return false
            })
            setButton3Clicked(()=>{
                return true
            })
            setButton4Clicked(()=>{
                return false
            }) }
    
        const defineCurrentAnswerAsId3 = ()=>{
            setSelectedAnswer (()=> {
            let newCurrentAnswer = "3"
            return newCurrentAnswer
            })
            setButton1Clicked(()=>{
                return false
            })
            setButton2Clicked(()=>{
                return false
            })
            setButton3Clicked(()=>{
                return false
            })
            setButton4Clicked(()=>{
                return true
            })}

    const handleQuestionChange = () =>{
            setNextQuestionButtonValue(()=>{
                return false
            })
            setCurrentAnswer (() => {
            let newCurrentAnswer= dbAnswers[e].correctAnswer
            setIsAnswerCorrect(()=>{
                return false
            })
            setIsAnswerWrong(()=>{
                return false
            })
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
        <header className="flex justify-center items-center mb-2">
            <h1 className="text-5xl font-extrabold ">Trivia Game</h1>
        </header>
        <div className="w-full h-1 mb-10 bg-textColor"></div>

        <main>
        <h1 className="text-3xl  mb-5 flex justify-center text-strong">{currentQuestion}</h1>

        <div>
            <div className="justify-center flex space-x-6">
                {button1Clicked && (<div className="w-40 h-15 bg-itemsHover flex  justify-center rounded-md border"><button className="h-full w-full" onClick={defineCurrentAnswerAsId0}>{answer1}</button></div> )}
                {button1Clicked || (<div className="w-40 h-15 bg-items hover:bg-itemsHover flex  justify-center rounded-md border"><button className="h-full w-full" onClick={defineCurrentAnswerAsId0}>{answer1}</button></div>)}
                {button2Clicked && (<div className="w-40 h-15 bg-itemsHover flex justify-center rounded-md border"><button className="h-full w-full" onClick={defineCurrentAnswerAsId1}>{answer2}</button></div>)}
                {button2Clicked || (<div className="w-40 h-15 bg-items hover:bg-itemsHover flex justify-center rounded-md border"><button className="h-full w-full" onClick={defineCurrentAnswerAsId1}>{answer2}</button></div>)}
            </div>
        </div>
        <div>
            <div className="justify-center flex space-x-6 mt-4">
                {button3Clicked ||(<div className="w-40 h-15 bg-items hover:bg-itemsHover flex justify-center rounded-md border"> <button className="h-full w-full" onClick={defineCurrentAnswerAsId2}>{answer3}</button></div>)}
                {button3Clicked &&(<div className="w-40 h-15 bg-itemsHover flex justify-center rounded-md border"> <button className="h-full w-full" onClick={defineCurrentAnswerAsId2}>{answer3}</button></div>)}
                {button4Clicked ||(<div className="w-40 h-15 bg-items hover:bg-itemsHover flex justify-center rounded-md border"> <button className="h-full w-full" onClick={defineCurrentAnswerAsId3}>{answer4}</button></div>)}
                {button4Clicked &&(<div className="w-40 h-15 bg-itemsHover flex justify-center rounded-md border"> <button className="h-full w-full" onClick={defineCurrentAnswerAsId3}>{answer4}</button></div>)}
            </div>
        </div>
            <div className="flex justify-center mt-7">
                <div className="w-55 h-15 hover:bg-itemsHover bg-items flex justify-center rounded-md border "><button onClick={handleResult}>commit your answer</button></div>
            <div/>
        </div>
        {nextQuestionButtonValue    && (
        <div className="mt-5 mb-20">
            <div className=" flex justify-center">
                <div className="w-55 h-15 hover:bg-itemsHover bg-items flex justify-center rounded-md border "><button className="" onClick={handleQuestionChange}>next question</button></div>
            </div>
        </div>)}
        {isAnswerCorrect && (
            <div className="flex justify-center">
                <h1 className="text-2xl">You got it</h1>
            </div>
        ) }
        {isAnswerWrong &&(
        <div className="flex justify-center">
            <h1 className="text-2xl">You missed</h1>
        </div>
        )}
        </main>
        </div>
    )
}