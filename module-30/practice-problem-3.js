// Squared Average
const squaredAveraged = (numbers) => {
    let sum = 0;

    for (number of numbers) {
        sum += Math.pow(number, 2);
    }


    return sum/numbers.length;
}

const numbers = [2, 3, 4, 5];
const result = squaredAveraged(numbers);
console.log(result);