// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
var in1 = 6
var out1 = [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
var in2 = 10
var out2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("Fibonacci function", () => {
    it("Returns an array containing the Fibonacci numbers up to the given length", () => {
        expect(fib(in1)).toEqual(out1)
        expect(fib(in2)).toEqual(out2)
    })
})

// b) Create the function that makes the test pass.

// function fib
// param length of array, greater than 2
// start with base sequence [1, 1]
// iterate up to the given length and add the previous 2 numbers together
// then push the sum onto the array.
// start iteration at 2 so we can use i-1 and i-2 to access the previous 2 nums
// return the array

// Returns the Fibonacci sequence up to the given length (greater than 2)
const fib = (length) => {
    let fib = [1, 1] // fib starts with 1, 1 as the base sequence

    // Iterate starting from 2 to calculate next fib num
    for (let i = fib.length; i < length; i++) {
        let sum = fib[i-1] + fib[i-2]   // add previous 2 nums in array
        fib.push(sum)
    }
    
    return fib
}

// Trying out reduce... get back to this later!
const fibReduce = (length) => {
    let fib = [1, 1]
    console.log(fib.reduce((acc, val) => acc + val))
}
fibReduce(6)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var outOdd1 = [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
var outOdd2 = [-823, 7, 23]

describe("Odd Sorted", () => {
    it("Returns an array of only the odd numbers sorted from the given array", () => {
        expect(sortOdd(fullArr1)).toEqual(outOdd1)
        expect(sortOdd(fullArr2)).toEqual(outOdd2)
    })
})

// b) Create the function that makes the test pass.

// function sortOdd
// param array - array containing different data types
// filter the array for numbers using typeof and get odd numbers,
// then sort in ascending order using the compare function (a, b) => a - b
// recall that sort() without an argument will sort by strings
// return array of only odd numbers from given array

// Returns an array of odd numbers sorted in ascending order
// using the given array containing different data types
const sortOdd = (arr) => {
    // Filter the given array for odd numbers
    let onlyOdds = arr.filter(val => (typeof(val) === "number") && (val % 2 !== 0))
    
    // Returns odds sorted in ascending order
    return onlyOdds.sort((a, b) => a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var outAdd1 = [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var outAdd2 = [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []
var outAdd3 = []

describe("Accumulating Sum Array", () => {
    it("Returns an array of the accumulating sum from the given array", () => {
        expect(accumulatingSumArr(numbersToAdd1)).toEqual(outAdd1)
        expect(accumulatingSumArr(numbersToAdd2)).toEqual(outAdd2)
        expect(accumulatingSumArr(numbersToAdd3)).toEqual(outAdd3)
    })
})

// b) Create the function that makes the test pass.

// Function accumulatingSumArry
// param array - array to use accumulator on
// For arr length > 0, push the first num onto a new array
// Look at given arr for the current num. Start at i=1 and add to prev num of the
// new array, push the sum onto the array.
// Iterate to the length of the arr
// If arr length < 1, then return []
// Return the array

const accumulatingSumArr = (arr) => {
    let accSum = []
    
    // Array length must be > 0 to start accumulating sum
    if (arr.length > 0) {
        accSum.push(arr[0]) // start with first num
        
        // Add current num of the given arr to previous num of accumulating arr
        for (let i = 1; i < arr.length; i++) {
            let sum = arr[i] + accSum[i-1] 
            accSum.push(sum)
        }
    }
    return accSum
}