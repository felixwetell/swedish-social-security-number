function verifySsn(ssn) {
    let numbers = ssn.split("");
    let sum = 0;
    sum += parseInt(numbers[numbers.length - 1]);
    numbers.pop();

    for (let i = 0; i < numbers.length; i++) {

        let number = parseInt(numbers[i]);

        if (i % 2 === 0) {
            number = number * 2;
        }
        if (number >= 10) {
            number -= 9
        }

        sum += number;
    }

    return sum % 10 === 0;
}

let ssn = "9710286098";

let result = verifySsn(ssn);
