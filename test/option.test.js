const Option = require('../src/option')

it('Should create a new option', () => {
    const option = new Option('dimension', 'answer')
    expect(option.dimension).toBe('dimension')
    expect(option.answer).toBe('answer')
})