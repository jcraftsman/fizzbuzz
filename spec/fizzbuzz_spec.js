var fizzbuzz = require('../app/fizzbuzz');

describe('fizzbuzz', function () {

    describe('check', function () {

        describe('values only dividable by 3 return Fizz', function () {
            it('should return Fizz when the given number is 3', function () {
                var checkFizz = fizzbuzz.check(3);
                expect(checkFizz).toBe('Fizz');
            });
            it('should return Fizz when the given number is 6', function () {
                var checkFizz = fizzbuzz.check(6);
                expect(checkFizz).toBe('Fizz');
            });
        });

        describe('values only dividable by 5 return Buzz', function () {
            it('should return Buzz when the given number is 5', function () {
                var checkFizz = fizzbuzz.check(5);
                expect(checkFizz).toBe('Buzz');
            });
            it('should return Buzz when the given number is 10', function () {
                var checkFizz = fizzbuzz.check(10);
                expect(checkFizz).toBe('Buzz');
            });
        });

        describe('values dividable by 5 and by 3 return FizzBuzz', function () {
            it('should return FizzBuzz when the given number is 15', function () {
                var checkFizz = fizzbuzz.check(15);
                expect(checkFizz).toBe('FizzBuzz');
            });
            it('should return FizzBuzz when the given number is 30', function () {
                var checkFizz = fizzbuzz.check(30);
                expect(checkFizz).toBe('FizzBuzz');
            });
        });

        describe('values not dividable by 5 nor by 3 return the string of value', function () {
            it('should return string value of 2 when the given number is 2', function () {
                var checkFizz = fizzbuzz.check(2);
                expect(checkFizz).toBe('2');
            });
        });

    })

});