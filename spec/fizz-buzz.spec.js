const { FizzBuzz } =  require('./spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz;

    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

})