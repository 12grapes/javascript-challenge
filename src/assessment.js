module.exports = class Assessment {
    constructor() {
        this.questions = []
        this.result = {
            Adaptive: 0,
            Integrity: 0,
            Collaborative: 0,
            Result: 0,
            Customer: 0,
            Detail: 0
        }
    }
    addQuestion(question) {
        this.questions.push(question)
    }
}