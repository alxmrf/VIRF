"use client"
import { use, useState } from "react"

export default function Guessing_game(){
    //variables declaration
    const [userInput,setUserInput] = useState(0)
    const [gameStarted,setGameStarted] = useState(false)
    const [gameStartButton,setGameStartButton] = useState(true)
    const [correctNumber,setCorrectNumber] = useState(0)
    const [numberIsLower, setNumberIsLower] = useState(false)
    const [numberIsHigher, setNumberIsHigher] = useState(false)
    const [numberIsRight, setNumberIsRight] = useState(false)
    const handleAnswer = (callBackFn:()=> any)=> {
        callBackFn()
    }
    //functions
    //handles variables that change what is shown on screen, also sets a random variable to be the correct answer of the guessing game
    const handleStart = () => (
        setGameStarted(()=>{
            return true;
        }),
        setGameStartButton (()=>{
            return false;
        }),
        setCorrectNumber(()=>{
            let newNumber = Math.floor(Math.random()*100)
            return newNumber
        })
        )

    //handles restarting the game after its has been played
    const handleRestart = ()=>{
        setNumberIsRight(()=>{
            return false
        })
        setCorrectNumber(()=>{
            let newNumber = Math.floor(Math.random()*100)
            return newNumber
        })

    }
    //handles the checking if the answer given was correct or not , and also checking if it was higher or lower than the correct answer to give hints
    const handleAnswerCallFn =() => {
        handleAnswer(()=>{
            if (userInput < correctNumber) {
                setNumberIsLower(()=>{
                    return true;
                })
                setNumberIsHigher (()=>{
                    return false
                })
            }
            if (userInput>correctNumber) {
                setNumberIsHigher(()=>{
                    return true
                })
                setNumberIsLower(()=>{
                    return false;
                })}
            if(correctNumber == userInput){
                setNumberIsRight(() =>{
                    return true
                })
                setNumberIsHigher(()=>{
                    return false
                })
                setNumberIsLower(()=>{
                    return false
                })
            }
            })}





    //html display
    return(
        <>

        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-extrabold ">Guessing game</h1>
            </div>
            <div className=" w-full h-1 bg-textColor"></div>
        </div>
        
        {gameStartButton && (
        <div className="justify-center flex mt-60 ">
            <div className="rounded bg-items focus:bg-itemsHover hover:bg-itemsHover p-6 h-4 justify-center flexbox">
                <button className="h-full w-full" onClick={handleStart}>Start game</button>
            </div>

        </div>)}
        
        <div>
        {gameStarted && (        
        <div className="flex">
        <input type="text" value={userInput} onChange={(e)=>setUserInput(event.target.value)} />
        <button className="border rounded bg-slate-300 focus:bg-slate-100 hover:bg-slate-100 " onClick={handleAnswerCallFn} >make your guess </button>
        {numberIsLower && (
            <h1>Your number is too low</h1>
        )}        
        {numberIsHigher && (
            <h1>Your number is too high</h1>
        )}
        {numberIsRight && (
            <div>
            <h1>You are correct</h1>
            <button onClick={handleRestart}>play again?</button>
            </div>
        )}
        </div>
        )}
        </div>
        </>
    )
}