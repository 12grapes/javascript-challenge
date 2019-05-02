module.exports = class Question {
    constructor(text) {
        this.text = text
        this.options = []
    }
    addOption(option) {
        this.options.push(option)
    }
}