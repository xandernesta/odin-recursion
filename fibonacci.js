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