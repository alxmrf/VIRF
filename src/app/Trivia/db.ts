
interface IAnswer {
    id: string
    answer : string
}
interface IBundleofAnswer {
    correctAnswer :string
    answer1:IAnswer
    answer2:IAnswer
    answer3:IAnswer
    answer4:IAnswer
}
export const dbAnswers = [{
    correctAnswer : "0",
    answer1: {id : "0" ,answer: "Burj khalifa"},
    answer2: {id : "1" ,answer: "Empire State Building"},
    answer3: {id : "2" ,answer: "Makkah Royal Clock Tower"},
    answer4: {id : "3" ,answer : "Shanghai Tower"}},{
    correctAnswer :"3",
    answer1: {id : "0" ,answer: "Giraffe"},
    answer2: {id : "1" ,answer: "Elephant"},
    answer3: {id : "2", answer: "Ant"},
    answer4: {id : "3", answer : "Blue whale"}}

]

interface IQuestions {
    question :string
}

export const dbQuestions =[
    "Whats the tallest building in the world",
    "who's the largest animal in the world"
]