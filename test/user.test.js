const User = require('../src/user')

describe('The User', () => {
    it('Should create a new user', () => {
        const user = new User('userName')
        expect(user.name).toBe('userName')
    })
})