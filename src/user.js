module.exports = class User {
    constructor(name) {
        this.name = name
    }
    takeAssessment(assessment) {
        assessment.questions.map((question, index) => {
            console.log(`Question number ${index +1}: `, question)
            answer = question.options[Math.floor(Math.random()*question.options.length)]
            dimension = answer.dimension
            assessment.result[dimension] = assessment.result[dimension] + 1
        })
    }
}