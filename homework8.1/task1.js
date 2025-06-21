let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 110]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        positiveCount++;
    }
    else if(numbers[i] < 0){
        negativeCount++;
    }
    else if(numbers[i] === 0){
        zeroCount ++;
    }
}

console.log('Count of positive numders = ', positiveCount)
console.log('Count of negative numders = ', negativeCount)
console.log('Count of zero numders = ', zeroCount)