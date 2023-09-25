
interface IAnswer {
    id: string
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
    answer1: {id : "0" ,answer: "Burj khalifa",isCorrect : true},
    answer2: {id : "1" ,answer: "Empire State Building", isCorrect: false},
    answer3: {id : "2", answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {id : "3", answer : "Shanghai Tower", isCorrect: false}}
]

