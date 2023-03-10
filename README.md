# recursion
- [Link to Odin Project Assignment](https://www.theodinproject.com/lessons/javascript-recursion)

## About
<hr>
The core of this assignment is to have a better understanding of recursion.

### Fibonacci Sequence
The Fibonacci sequence is where each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors omit the initial terms and start the sequence from 1 and 1 or from 1 and 2. Starting from 0 and 1, the next few values in the sequence are:

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
    

### mergeSort
The second part of the assignment is to create a mergeSort Script. MergeSort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide-and-conquer algorithm.

The algorithm continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing hit the base case and stop the recursion. If the array has multiple elements, split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.