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

function verifySex(ssn) {
    let sex;
    if(ssn % 2 === 0) {
        sex = 'male'
    } else {
        sex = 'female'
    }
    return sex
}

let ssn = "9710286098";

let result = verifySsn(ssn);
let sex = verifySex(ssn);
console.log("Valid: " + result);
console.log("Valid: " + sex);
