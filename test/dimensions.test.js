const Dimensions = require('../src/dimensions')

describe('Dimensions', () => {
  it('should have 6 items', () => {
    expect(Dimensions).toHaveLength(6)
  })
  describe('each item', () => {
    it('should have a name', () => {
      Dimensions.forEach((dimension) => {
        expect(dimension.name).toBeDefined()
      })
    })
    it('should have 10 answers', () => {
      Dimensions.forEach((dimension) => {
        expect(dimension.answers).toHaveLength(10)
      })
    })
  })
})