function check(value) {
    const FIZZ_NUMBER = 3;
    const BUZZ_NUMBER = 5;
    var result = value.toString();

    if (value % FIZZ_NUMBER == 0 &&
        value % BUZZ_NUMBER == 0) {
        result = 'FizzBuzz';
    } else if (value % FIZZ_NUMBER == 0) {
        result = 'Fizz';
    } else if (value % BUZZ_NUMBER == 0) {
        result = 'Buzz';
    }

    return result;
}

exports.check = check;