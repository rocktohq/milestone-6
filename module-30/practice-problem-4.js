//Combine two array and return the maximum number of the new array
const combinedMax = (numbers1, numbers2) => {
    const numbersNew = [...numbers1, ...numbers2];
    const maxNumber = Math.max(...numbersNew);
    return maxNumber;
}

const numbers1 = [54, 34, 12, 90, 76, 22];
const numbers2 = [67, 88, 12, 46, 98, 79];

const result = combinedMax(numbers1, numbers2);
console.log(result);