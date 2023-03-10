// From: https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
/*Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6. */
function sumRange(num){
   return (num===1 ? 1: (num + sumRange(num-1)) )
}


//Q2: Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exp){
    if(exp ===0){
        return 1
    }
    return base * power(base, exp-1)
}

//Q3: Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(x){
    return (x===1? 1 : x * factorial(x-1))
}

/* Question 4: Check all values in an array

Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function */
let allAreLessThanTen = all([1,2,9], function(num){
    return num < 10;})
// console.log(allAreLessThanTen)

function all(array, callback){
    var copy = copy || array.slice()
    
       if (copy.length === 0) return true
       if(callback(copy[0])){
        copy.shift();
        return all(copy,callback)
       }
       else return false
}

/* Question 5: Product of an array

Write a function called productOfArray which takes in an array of numbers and returns the product of them all  */

function productOfArray(array){
    let lastElement = array.pop()
    let newArray = array
    let product = 1;
    if(array.length === 0){
        return product * 1
    }
    else {
        
        return product = lastElement * productOfArray(newArray)}
}
var six = productOfArray([1,2,3,10]) 
//console.log(six);

/*  Question 6: Search JS object

Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value. */

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(obj, value){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
           return contains(obj[key] ,value)
        }
        if(obj[key] === value){
            return true
        }
    }
    return false
}
let hasIt = contains(nestedObject, 48);
//console.log(hasIt)

/* Question 7: Parse a multi-dimensional array

Given a multi-dimensional integer array, return the total number of integers stored inside this array */
var eight = totalIntegers([[[5], 3], 0, 2, ['foo'], ['bar',2], [4, [5, 6]]]); // 8

function totalIntegers(array){
    if(array.length===0) return 0;
    let ints = 0
    let first = array.shift()
        if(Array.isArray(first)){
            ints += totalIntegers(first)
        }
        else if(Number.isInteger(first)){
            ints += 1
        }
    
    return ints + totalIntegers(array)
}
//console.log(eight)

/* Question 8:

Write a function that sums squares of numbers in list that may contain more lists */

function SumSquares(array){
    if(array.length===0) return 0;
    let sum = 0
    let first = array.shift()
    if(Array.isArray(first)){
        sum += SumSquares(first)
    }
    else if(Number.isInteger(first)){
        sum += first * first
    }
    return sum + SumSquares(array)
}
var l = [10,[[10],10],[10]] ; 
// console.log(SumSquares(l))

/* Question 9:

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array. */

function replicate(reps, num){
    let array = []
    for(let i = 0; i<reps; i++){
        array.push(num)
    }
    return array
}
//console.log(replicate(2, 69))

/* 

   1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. /
   Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
    
   2. Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines /
   (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

 */
//fibsRec(num-2) + fibsRec(num-1)
function fibs(num){
    let array = [0,1]
    if(num === 0) {
        return 0
    }
    if (num === 1) 
    {
        return 1
    }
    let numMinus2 = 0;
    let numMinus1 = 1;
    let fibN = num
    for (let i = 2; i<num; i++){
       fibN = numMinus2 + numMinus1
       numMinus2 = numMinus1
       numMinus1 = fibN
       array.push(fibN)
    }
    return array
}  

function fibsRec(num){
    if(num === 0) return [0]
    if (num === 1) return [0,1]
    let arr = fibsRec(num-1)
    arr.push(arr[num-2]+ arr[num-1])
    return arr
}
console.log(fibsRec(8))
//let array = [0, 1, 1, 2, 3, 5, 8, 13]
/*array.push(1);
console.log(array)
array.push(2)
console.log(array)
 */
//console.log(array.length)