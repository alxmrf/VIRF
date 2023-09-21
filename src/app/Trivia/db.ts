
interface IAnswer {
    answer : string
    isCorrect: boolean
}
interface IBundleofAnswer {
    answer1:IAnswer
    answer2:IAnswer
    answer3:IAnswer
    answer4:IAnswer
}



export const dbAnswers = [{
    answer1: {answer: "Burj khalifa",isCorrect : true},
    answer2: {answer: "Empire State Building", isCorrect: false},
    answer3: {answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {answer : "Shanghai Tower", isCorrect: false}}
]

