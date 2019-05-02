const Question = require('./question')
const Option = require('./option')
const dimensions = require('./dimensions')
const Assessment = require('./assessment')
const User = require('./user')

const amountOfQuestions = 30
const amountOfOptions = 2
const text = 'Pick the answer that describes you best: '
let combinations = []
let dimensionKeyCombination = ''


const user = new User('andrea')
const assessment = new Assessment()

while(assessment.questions.length < amountOfQuestions) {

    const question = new Question(text)
    
    for(dimension of dimensions) {
        
        if(question.options.length >= amountOfOptions) {
            break
        }
  
        if(dimension.answers.length > 0) {
            index = 0;
            answer = dimension.answers[index]
            dimension.answers.splice(index, 1)
        } 

        const option = new Option(dimension.name, answer)
        question.addOption(option) 
    }

    question.options.map(option => {
        dimensionKeyCombination = dimensionKeyCombination.concat(option.dimension)
    })
    
    combinations.push(dimensionKeyCombination)
    dimensionKeyCombination = ''
    assessment.addQuestion(question)
}

user.takeAssessment(assessment)
console.log(assessment.result)
