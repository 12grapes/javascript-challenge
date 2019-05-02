const Question = require('../src/question')
const Option = require('../src/option')

describe('The Question', () => {
    it('Should create a new option', () => {
        const question = new Question('text')

        expect(question.text).toBe('text')
        expect(question.options).toEqual([])
    })

    it('Should add an option to the options array', () => {
        const question = new Question('text')
        const option = new Option('dimension', 'answer')

        question.addOption(option)

        expect(option.dimension).toBe('dimension')
        expect(option.answer).toBe('answer')
        expect(question.options).toEqual([option])
    })
})