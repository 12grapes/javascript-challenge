const Assessment = require('../src/assessment')
const Question = require('../src/question')
const Option = require('../src/option')

describe('The Assessment', () => {
  it('create new assessment', () => {
    const result = {
        Adaptive: 0,
        Integrity: 0,
        Collaborative: 0,
        Result: 0,
        Customer: 0,
        Detail: 0
    }

    const assessment = new Assessment()

    expect(assessment.questions).toEqual([])
    expect(assessment.result).toEqual(result)
  })
  
  it('Should add a question to the questions array', () => {
    const assessment = new Assessment()
    const question = new Question('text')
    const option = new Option('dimension', 'answer')

    question.addOption(option)
    assessment.addQuestion(question)

    expect(assessment.questions[0]).toEqual(question)
    expect(question.options[0]).toEqual(option)
    expect(option.answer).toBe('answer')
    expect(option.dimension).toBe('dimension')

  })
}) 