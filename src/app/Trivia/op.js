const dbAnswers = [{
    answer1: {id : "0" ,answer: "Burj khalifa",isCorrect : true},
    answer2: {id : "1" ,answer: "Empire State Building", isCorrect: false},
    answer3: {id : "2", answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {id : "3", answer : "Shanghai Tower", isCorrect: false}}
    ,{
    answer1: {id : "0" ,answer: "Burj khalifa",isCorrect : true},
    answer2: {id : "1" ,answer: "Empire State Building", isCorrect: false},
    answer3: {id : "2", answer: "Makkah Royal Clock Tower",isCorrect : false},
    answer4: {id : "3", answer : "Shanghai Tower", isCorrect: false}}
]
const teste = dbAnswers.map((obj) => Object.keys(obj).map(key => obj[key]))
const teste_2 = teste[0]
let currentAnswer = 9
let i = 0
let condition = false

for (let j; j<= teste_2.length;j++){
    console.log("hello")
}

console.log("hello")


console.log(teste_2[i].isCorrect)
if (teste_2[i].isCorrect == true){
condition = true
return currentAnswer = teste_2[i].id
}
i++