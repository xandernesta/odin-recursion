function mergesort(arr){
    /*pseudocode
    /on input of n elements
    /   if n < 2
    /       return
    /   else
    /       sort left half of the array aka elements (assuming n>1)
    /       sort the right half of the array aka elements (assuming n>1)
    /       merge the two halves together
    */
let n = arr.length   

    if (n <2){
        return arr
    }
    else {
        let halfIndex = Math.round(n/2)
        let leftArr = arr.slice(0,halfIndex)
        let rightArr = arr.slice(halfIndex)
        return merge(mergesort(leftArr), mergesort(rightArr))
    }   

    function merge(lArr, rArr){
        let sortedArr = []
        while (lArr.length > 0 && rArr.length > 0){
            lArr[0] > rArr[0] 
            ? sortedArr.push(rArr.shift())
            : sortedArr.push(lArr.shift())
        }
        return [...sortedArr,...lArr,...rArr]
    }
}



const array1 = [30, 1, 4, 21, 100000]
const unsorted2 = [-5, 0, 104, 56, 51251, 850, 102, -69];

console.log(mergesort(unsorted2))