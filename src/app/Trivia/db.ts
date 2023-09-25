
interface IAnswer {
    id: string

    answer : string
    isCorrect: boolean
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
    answer1: {id : "0" ,answer: "Burj khalifa",isCorrect : true},
    answer2: {id : "1" ,answer: "Empire State Building", isCorrect: false},
    answer3: {id : "2" ,answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {id : "3" ,answer : "Shanghai Tower", isCorrect: false}},{
    correctAnswer :"3",
    answer1: {id : "0" ,answer: "Burj khalifa",isCorrect : false},
    answer2: {id : "1" ,answer: "Empire State Building", isCorrect: false},
    answer3: {id : "2", answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {id : "3", answer : "Shanghai Tower", isCorrect: true}}

]

