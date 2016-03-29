import checker from '../../src/utils/primeChecker'

describe('(Util) primeChecker', function () {
  it('should return 1 as not a prime', () => {
    expect(checker(1)).to.equal(false)
  })
  
  it('should return 2 as a prime', () => {
    expect(checker(2)).to.equal(true)
  })
  
    it('should return 400 as not a prime', () => {
    expect(checker(400)).to.equal(false)
  })
  
  it('should return 973 as not a prime', () => {
    expect(checker(973)).to.equal(false)
  })
  
  it('should return 977 as a prime', () => {
    expect(checker(977)).to.equal(true)
  })
  
  it('should return -3 as not a prime', () => {
    expect(checker(-3)).to.equal(false)
  })
  
  
})